const { v4: uuid } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const express = require("express");
const serverless = require("serverless-http");

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const STATS_TABLE = process.env.STATS_TABLE;

const client = new DynamoDBClient();
const db = DynamoDBDocumentClient.from(client);

app.use(express.json());

// 사용자의 MBTI와 학과를 저장하고 통계 업데이트
app.post("/stats", async (req, res) => {
    const { department, mbti } = req.body;

    if (typeof department !== "string")
        return res.status(400).json({ status: 400, message: "department 는 string 값이어야 합니다" });
    if (typeof mbti !== "string")
        return res.status(400).json({ status: 400, message: "mbti 는 string 값이어야 합니다" });

    const userId = uuid();

    try {
        await db.send(
            new PutCommand({
                TableName: USERS_TABLE,
                Item: { userId, department, mbti },
            }),
        );

        const stats = await db.send(
            new GetCommand({
                TableName: STATS_TABLE,
                Key: { id: "total" },
            }),
        );
        const total = stats.Item.total || 0;
        await db.send(
            new UpdateCommand({
                TableName: STATS_TABLE,
                Key: { id: "total" },
                UpdateExpression: "set total = :total",
                ExpressionAttributeValues: {
                    ":total": total + 1,
                },
            }),
        );

        return res.status(201).json({ status: 201, data: { id: userId, total: total + 1 } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: "서버 내부 오류 발생" });
    }
});

// 총 사용자 수 조회
app.get("/stats/total", async (req, res) => {
    const params = {
        TableName: STATS_TABLE,
        Key: { id: "total" },
    };
    try {
        const data = await db.send(new GetCommand(params));
        return res.status(200).json({ status: 200, total: data.Item.total });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: "서버 내부 오류 발생" });
    }
});

// 전체 사용자 중 MBTI 유형 상위 10개 조회
app.get("/stats/top/mbti", async (req, res) => {
    const params = {
        TableName: USERS_TABLE,
        ProjectionExpression: "mbti",
    };

    try {
        const data = await db.send(new ScanCommand(params));
        const mbtiCount = {};

        data.Items.forEach((item) => {
            if (item.mbti) {
                mbtiCount[item.mbti] = (mbtiCount[item.mbti] || 0) + 1;
            }
        });

        const topMbti = Object.entries(mbtiCount)
            .sort((e1, e2) => e2[1] - e1[1])
            .slice(0, 10);

        return res.status(200).json({ status: 200, top: topMbti });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: "서버 내부 오류 발생" });
    }
});

// 특정 학과에서 MBTI 유형 상위 10개 조회
app.get("/stats/top/department", async (req, res) => {
    const { key } = req.query;

    if (!key) {
        return res.status(400).json({ status: 400, message: "학과에 대한 key 를 제공해야 합니다" });
    }

    const params = {
        TableName: USERS_TABLE,
        FilterExpression: "department = :department",
        ExpressionAttributeValues: { ":department": key },
        ProjectionExpression: "mbti", // MBTI만 가져오기
    };

    try {
        const data = await db.send(new ScanCommand(params));
        const mbtiCount = {};

        data.Items.forEach((item) => {
            if (item.mbti) {
                mbtiCount[item.mbti] = (mbtiCount[item.mbti] || 0) + 1;
            }
        });

        const topMbti = Object.entries(mbtiCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        return res.status(200).json({ status: 200, top: topMbti });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: "서버 내부 오류 발생" });
    }
});

app.use((req, res, next) => {
    return res.status(404).json({
        error: "Not Found",
    });
});

exports.handler = serverless(app);

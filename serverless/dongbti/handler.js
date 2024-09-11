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

const departmentTypes = [
    "humanities",
    "social-sciences",
    "natural-sciences",
    "economics",
    "engineering",
    "it",
    "agriculture",
    "arts",
    "teachers",
    "medicine",
    "dentisty",
    "vet",
    "human-sciences",
    "nursing",
    "pharmacy",
    "advanced-technology",
    "environment",
    "science-technology",
    "administration",
    "undeclared",
];

const resultTypes = [
    "intenseSportsman",
    "coatSportsman",
    "compatitionSportsman",
    "fontSportsman",
    "natureSportsman",
    "matSportsman",
    "fightSportsman",
    "uniqueSportsman",
    "tencm",
    "tchaikovsky",
    "stageMusician",
    "mozart",
    "parkHyoShin",
    "newJeans",
    "macGyver",
    "cutieArtist",
    "leedongjin",
    "multiArtist",
    "heatDebater",
    "siliconValley",
    "creator",
    "winner",
    "scholar",
    "god",
    "budda",
    "hyunwoojin",
    "philanthropist",
    "teresa",
    "american",
];

// 사용자의 MBTI와 학과를 저장하고 통계 업데이트
app.post("/stats", async (req, res) => {
    const { department, mbti } = req.body;

    if (!departmentTypes.includes(department))
        return res.status(400).json({ status: 400, message: "department 의 값이 유효하지 않습니다" });
    if (!resultTypes.includes(mbti))
        return res.status(400).json({ status: 400, message: "mbti 의 값이 유효하지 않습니다" });

    const userId = uuid();

    try {
        await db.send(
            new PutCommand({
                TableName: USERS_TABLE,
                Item: { userId, department, mbti },
            }),
        );

        const totalStats = await db.send(
            new GetCommand({
                TableName: STATS_TABLE,
                Key: { id: "total_count" },
            }),
        );
        const total_count = totalStats.Item.total_count || 0;

        const mbtiStats = await db.send(
            new GetCommand({
                TableName: STATS_TABLE,
                Key: { id: "mbti" },
            }),
        );
        const mbtiCount = mbtiStats.Item[mbti];

        await db.send(
            new UpdateCommand({
                TableName: STATS_TABLE,
                Key: { id: "mbti" },
                UpdateExpression: `set ${mbti} = :updated_count`,
                ExpressionAttributeValues: {
                    ":updated_count": mbtiCount + 1,
                },
            }),
        );

        await db.send(
            new UpdateCommand({
                TableName: STATS_TABLE,
                Key: { id: "total_count" },
                UpdateExpression: "set total_count = :total_count",
                ExpressionAttributeValues: {
                    ":total_count": total_count + 1,
                },
            }),
        );

        return res.status(201).json({ status: 201, data: { id: userId, total_count: total_count + 1 } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: "서버 내부 오류 발생" });
    }
});

app.get("/stats", async (req, res) => {
    const { type } = req.query;

    if (!resultTypes.includes(type))
        return res.status(400).json({ status: 400, message: "type 값은 string 이어야 합니다" });

    const params = {
        TableName: STATS_TABLE,
        Key: { id: "mbti" },
    };
    try {
        const data = await db.send(new GetCommand(params));
        const totalCount = await db.send(
            new GetCommand({
                TableName: STATS_TABLE,
                Key: { id: "total_count" },
            }),
        );
        return res.status(200).json({ status: 200, count: data.Item[type], total_count: totalCount.Item.total_count });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: "서버 내부 오류 발생" });
    }
});

// 총 사용자 수 조회
app.get("/stats/total", async (req, res) => {
    const params = {
        TableName: STATS_TABLE,
        Key: { id: "total_count" },
    };
    try {
        const data = await db.send(new GetCommand(params));
        return res.status(200).json({ status: 200, total_count: data.Item.total_count });
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

    if (!key) return res.status(400).json({ status: 400, message: "학과에 대한 key 를 제공해야 합니다" });
    if (!departmentTypes.includes(key))
        return res.status(400).json({ status: 400, message: "학과에 대한 key 를 제공해야 합니다" });

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

app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(200);
});

app.use((req, res, next) => {
    if (req.method === "OPTIONS") return res.status(200);

    return res.status(404).json({
        error: "Not Found",
    });
});

exports.handler = serverless(app);

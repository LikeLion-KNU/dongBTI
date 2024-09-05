import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    return res.status(200).json({ data: "test" });
});

export const handler = serverless(app);

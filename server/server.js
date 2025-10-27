import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import OpenAI from "openai";

const app = express();

// Load environment variables from .env file
configDotenv();

// Middleware setup
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

app.use(express.json({ limit: "10mb" }));

const API_KEY = process.env.NEBIUS_API_KEY;

const client = new OpenAI({
    baseURL: 'https://api.studio.nebius.com/v1/',
    apiKey: API_KEY,
});

app.post("/api/explain-code", async (req, res) => {

    try {
        const { code, language } = req.body;

        if (!code || !language) {
            return res.status(400).json({ error: "Code and language are required." });
        }

        const messages = [
            {
                role: "user",
                content: `Please explain this ${language || ""
                    } code in simple terms:\n\n\`\`\`${language || ""}\n${code}\n\`\`\``,
            }
        ];

        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: messages,
            max_tokens: 750,
            temperature: 0.7,
        });

        const explanation = response.choices[0].message.content;

        if (!explanation) {
            return res.status(500).json({ error: "Failed to generate explanation." });
        }
        res.json({ explanation });

    } catch (error) {
        console.error("Error explaining code:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }

});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
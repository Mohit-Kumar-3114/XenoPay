// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import chatbotRoutes from './routes/index';
import cors from "cors"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/chatbot', chatbotRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

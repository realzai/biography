import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
// import { Redis } from "@upstash/redis";

dotenv.config();

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// const redis = new Redis({
//   url: process.env.REDIS_URL,
//   token: process.env.REDIS_TOKEN,
// });

export const contactController = {
  store: async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body;

      // await redis.lpush(
      //   "contact_messages",
      //   JSON.stringify({ name, email, message, date: new Date() }),
      // );

      await axios.post(DISCORD_WEBHOOK_URL!, {
        content: `**New Contact Message**\n**Name**: ${name}\n**Email**: ${email}\n**Message**: ${message}`,
      });

      res.status(200).send({
        message:
          "Thank you for reaching out! Your message will pop up in my discord and I'll reply you back!",
      });
    } catch (error) {
      console.error("[ERROR]", error);

      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      } else {
        res
          .status(500)
          .send({ message: "Something went wrong. Please try again." });
      }
    }
  },
};

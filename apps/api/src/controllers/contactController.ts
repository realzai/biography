import { Request, Response } from "express";

export const contactController = {
  store: async (req: Request, res: Response) => {
    res.send({
      message: "Thank you for reaching out! I'll reply you back when I'm free.",
    });
  },
};

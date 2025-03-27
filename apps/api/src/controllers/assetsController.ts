import { Request, Response } from "express";

export const assetsController = {
  // TODO: Implement getProfilePicture
  getProfilePicture: async (req: Request, res: Response) => {
    res.send({
      url: "https://5dtle1ixev.ufs.sh/f/NVoH0HnelgtLFSA1ZSnozrHKMLJ42PFAc6tv0IOwpglBkWq1",
    });
  },
};

import { BadRequestError } from "@devion/common";
import express, { Request, Response } from "express";

import { User } from "../../models/User";
import { currentUser } from "../../middlewares/currentuser";

const router = express.Router();

router.get(
  "/api/reward/check",
  currentUser,
  async (req: Request, res: Response) => {
    try {
      const { hasClaimed } = req.body;
      const existingUser = await User.findOne({
        username: req.foxxiUser?.username,
      });
      if (!existingUser) {
        throw new BadRequestError("User not found!");
      }
      res.status(200).send({ hasClaimed: existingUser.hasClaimed });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err });
    }
  }
);

export { router as checkClaimRouter };

import type { NextApiRequest, NextApiResponse } from "next";

import connectDatabase from "../../utils/database";

import Palette from "../../utils/models/palette";

import { PaletteInfo } from "../../types";

import { SERVER_ERROR_MESSAGE } from "../../constants/apiMessages";

type resData = string;

const handler = async (req: NextApiRequest, res: NextApiResponse<resData>) => {
  if (req.method === "POST") {
    try {
      const newPalette: PaletteInfo = req.body;

      await connectDatabase();

      await Palette.create(newPalette);

      res.status(200).send("New palette was successfully created");
    } catch (error) {
      res.status(500).send(SERVER_ERROR_MESSAGE);
    }
  }
};

export default handler;

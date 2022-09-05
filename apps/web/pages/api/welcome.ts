/* eslint-disable react-hooks/rules-of-hooks */
import type { NextApiRequest, NextApiResponse } from "next";
import { apiURL } from "../../lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(apiURL + "/hello");

    const jsonresp = await response.json();
    console.log(jsonresp);
    return res.status(200).json(jsonresp);
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({
      error: e.toString(),
    });
  }
}

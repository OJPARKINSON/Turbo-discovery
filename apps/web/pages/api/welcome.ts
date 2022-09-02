/* eslint-disable react-hooks/rules-of-hooks */
import type { NextApiRequest, NextApiResponse } from "next";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://h83klbg0wh.execute-api.eu-west-2.amazonaws.com/production/hello"
    );

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

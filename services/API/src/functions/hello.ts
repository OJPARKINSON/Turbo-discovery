import type { APIGatewayProxyResult } from "aws-lambda";

export const handler = async (): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({ welcome: "hello" }),
  headers: {
    "content-type": "application/json",
  },
});

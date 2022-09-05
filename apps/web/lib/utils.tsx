const Prod =
  "https://h83klbg0wh.execute-api.eu-west-2.amazonaws.com/production";
const local = "http://localhost:4000/dev";

export const apiURL = process.env.NODE_ENV === "production" ? Prod : local;

import type { AWS } from "@serverless/typescript";
import { functions } from "./src/functions/index";

const serverlessConfiguration: AWS = {
  service: "api1",
  frameworkVersion: "3.22",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    stage: "dev",
    region: "eu-west-2",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: { ...functions },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node16",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    offline: {
      watch: "src/**/*.ts",
    },
  },
};

module.exports = serverlessConfiguration;

import { StackContext, Bucket } from "@serverless-stack/resources";

export default function StackA({ stack }: StackContext) {
  const bucket = new Bucket(stack, "MyBucket");
  return { bucket };
}

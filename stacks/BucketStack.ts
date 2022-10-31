import { Bucket, StackContext } from "@serverless-stack/resources";

export default function BucketStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "bucket");
  return bucket;
}
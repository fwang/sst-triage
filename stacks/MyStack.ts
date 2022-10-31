import { use, Function, StackContext } from "@serverless-stack/resources";
import BucketStack from "./BucketStack";

export default function MyStack({ stack }: StackContext) {
  const bucket = use(BucketStack);

  const fn = new Function(stack, "fn", {
    handler: "functions/lambda.handler",
    url: true,
  });

  bucket.addNotifications(stack, {
    objectPut: {
      function: fn,
      events: ["object_created_put"]
    }
  });
}
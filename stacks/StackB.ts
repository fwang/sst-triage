import { use, StackContext, Function } from "@serverless-stack/resources";
import StackA from "./StackA";

export default function StackB({ stack }: StackContext) {
  const { bucket } = use(StackA);

  new Function(stack, "MyFunction", {
    handler: "functions/lambda.handler",
    permissions: [bucket],
  })
}

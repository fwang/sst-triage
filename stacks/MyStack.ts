import { Function, StackContext } from "@serverless-stack/resources";

export default function MyStack({ stack }: StackContext) {

  const fn = new Function(stack, "fn", {
    handler: "functions/lambda.handler",
    url: true,
  });

  stack.addOutputs({
    URL: fn.url!,
  });
}
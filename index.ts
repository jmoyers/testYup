import { boolean, InferType, object } from "yup";

const testSchema = object({
  a: boolean().required(),
  b: boolean().optional(),
  c: boolean().required(),
});

type Test = InferType<typeof testSchema>;

const test: Test = {
  a: false,
  b: false,
  c: false,
};

const test2: Test = {
  a: true,
  c: true,
};

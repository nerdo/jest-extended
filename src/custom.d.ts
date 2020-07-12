// types patterned after https://github.com/jest-community/jest-extended/blob/master/types/index.d.ts
declare namespace jest {
  interface Expect {
    arrayExclusivelyContaining(expected: Array<unknown>): CustomMatcherResult
    objectExclusivelyContaining(expected: unknown): CustomMatcherResult
  }
}

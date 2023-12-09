/// <reference types="styled-jsx" />

declare module "webext-redux/lib/strategies/deepDiff/diff" {
  // This should be : DiffStrategy, but importing webext-redux to reuse
  // DiffStrategy results in an error augmenting the diff module.
  export default function (): (oldObj: unknown, newObj: unknown) => unknown
}

declare module "webext-redux/lib/strategies/deepDiff/patch" {
  // This should be : DiffStrategy, but importing webext-redux to reuse
  // DiffStrategy results in an error augmenting the patch module.
  export default function (): (oldObj: unknown, newObj: unknown) => unknown
}

// Although you would expect this file to be unnecessary, removing it will
// result in a handful of type errors. See PR #196.

declare module "styled-jsx/style"

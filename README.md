# @nerdo/jest-extended
> nerdo's custom jest matchers

## Install it

```bash
npm install --save-dev @nerdo/jest-extended
```

## Set it up

```
// jest.config.js
module.exports = {
  setupFilesAfterEnv: [
    '@nerdo/jest-extended'
  ]
}
```

If you are using TypeScript and your editor does not recognize the new matchers, create a `global.d.ts` file in your project.

```
// global.d.ts
import '@nerdo/jest-extended'
```

If it _still_ is not working, you may also need to create a `tsconfig.json` with an empty object `{}` defined as the contents.

## Asymmetric Matchers

### expect.arrayExclusivelyContaining(array)
expect.arrayExclusivelyContaining(array) matches a received array which contains all of the elements in the expected array AND contains the same number of elements.

It usage is exactly the same as [jest's built-in expect.arrayContaining(array)](https://jestjs.io/docs/en/expect#expectarraycontainingarray).

### expect.objectExclusivelyContaining(object)
expect.objectExclusivelyContaining(object) matches a received object which contains all of the keys and values in the expected object AND contains the same number of properties.

It usage is exactly the same as [jest's built-in expect.objectContaining(object)](https://jestjs.io/docs/en/expect#expectobjectcontainingobject)

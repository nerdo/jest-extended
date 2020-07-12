export { arrayExclusivelyContaining } from './arrayExclusivelyContaining'
export { objectExclusivelyContaining } from './objectExclusivelyContaining'
import { extendArrayExclusivelyContaining } from './extendArrayExclusivelyContaining'
import { extendObjectExclusivelyContaining } from './extendObjectExclusivelyContaining'

// based on https://github.com/jest-community/jest-extended/blob/master/src/index.js
// @ts-ignore
const jestExpect = global.expect

if (typeof jestExpect !== 'undefined') {
    extendArrayExclusivelyContaining(jestExpect)
    extendObjectExclusivelyContaining(jestExpect)
} else {
    console.error(
        'Unable to find jest\'s global expect.' +
        '\nPlease check you have added @nerdo/jest-extended correctly to your jest configuration.' +
        '\nSee https://github.com/nerdo/jest-extended for help.'
    )
}

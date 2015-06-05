# abbrev-range

Utility method for abbreviating an array of integers into a more human-readable
form.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install abbrev-range

## Usage

Note: This function assumes the array of values contains integers, and those
integers are sorted and contain no duplicates.

```
var abbrevRange = require('abbrev-range');

abbrevRange([]);                  // ''
abbrevRange([1]);                 // '1'
abbrevRange([1, 2, 3]);           // '1-3'
abbrevRange([1, 2, 3, 5]);        // '1-3, 5'
abbrevRange([1, 3, 5]);           // '1, 3, 5'
abbrevRange([1, 2, 3, 5, 6, 7]);  // '1-3, 5-7'
abbrevRange([1, 2]);              // '1, 2'
abbrevRange([1, 3, 4, 8]);        // '1, 3, 4, 8'
```

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/abbrev-range/master.svg
[build-status]: https://travis-ci.org/jimf/abbrev-range
[npm-badge]: https://img.shields.io/npm/v/abbrev-range.svg
[npm]: https://www.npmjs.org/package/abbrev-range
[coverage-badge]: https://img.shields.io/coveralls/jimf/abbrev-range.svg
[coverage-result]: https://coveralls.io/r/jimf/abbrev-range
[dep-badge]: https://img.shields.io/david/jimf/abbrev-range.svg
[dep-status]: https://david-dm.org/jimf/abbrev-range

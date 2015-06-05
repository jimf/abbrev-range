'use strict';

var test = require('tape'),
    abbrevRange = require('..');

test('abbrevRange', function(assert) {
    var cases = [
        { input: [], expected: '' },
        { input: [1], expected: '1' },
        { input: [1, 2, 3], expected: '1-3' },
        { input: [1, 2, 3, 5], expected: '1-3, 5' },
        { input: [1, 3, 5], expected: '1, 3, 5' },
        { input: [1, 2, 3, 5, 6, 7], expected: '1-3, 5-7' },
        { input: [1, 2], expected: '1, 2' },
        { input: [1, 3, 4, 8], expected: '1, 3, 4, 8' }
    ];

    cases.forEach(function(testcase) {
        assert.equal(abbrevRange(testcase.input), testcase.expected);
    });

    assert.end();
});

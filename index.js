'use strict';

module.exports = function(values) {
    if (values.length === 0) { return ''; }

    var output = '',
        start = 0,
        end = 0;

    function valueAfter(index) {
        if (index + 1 < values.length) {
            return values[index + 1];
        }
    }

    while (start < values.length) {
        // Increment end until the next value isn't consecutive.
        while (valueAfter(end) === values[end] + 1) {
            end += 1;
        }

        if (start === end) {
            // No consecutive range. Append start.
            output += values[start];
        } else if (end === start + 1) {
            // Consecutive range of 2 values. Delimit with comma.
            output += values[start] + ', ' + values[end];
        } else {
            // Consecutive range of 3 or more. Delimit with hyphen.
            output += values[start] + '-' + values[end];
        }

        output += ', ';

        start = end = Math.max(start + 1, end + 1);
    }

    return output.slice(0, -2);
};

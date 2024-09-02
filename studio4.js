// Type your program in here!
function pascal(row, position) {
    return position === row || position === 0
    ? 1
    : pascal(row - 1, position -1) + pascal(row -1, position);
}

pascal(4,2);


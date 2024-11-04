function triangle(x, y) {
    return y > x
         ? 0
         : y === x || y === 1
         ? 1
         : triangle(x - 1, y - 1) + triangle(x - 1, y);
}

triangle(3, 3);
triangle(3, 2);
triangle(5, 3);

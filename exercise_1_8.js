function abs(x) {
    return x >= 0 ? x : -x;
}

function improve(guess, x) {
    return (x / (guess * guess) + 2 * guess) / 3;
}

function is_good_enough(guess, x) {
    return abs(guess - improve(guess, x)) / guess < 0.001;
}

function cube_root_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : cube_root_iter(improve(guess, x), x);
}

function cube_root(x) {
    return cube_root_iter(1, x);
}

cube_root(0.001);
cube_root(1000000000000000000);

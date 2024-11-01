function abs(x) {
    return x >= 0 ? x : -x;
}

function square(x) {
    return x * x;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function is_good_enough(guess, x) {
    return abs(guess - improve(guess, x)) / guess < 0.001;
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

sqrt(0.0001); // not accurate
sqrt(1000000000000000); // not terminate

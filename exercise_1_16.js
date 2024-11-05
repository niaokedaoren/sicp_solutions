function square(x) {
    return x * x;
}

function is_even(x) {
    return x % 2 === 0;
}

function fast_exp(a, n) {
    return n === 0
         ? 1
         : is_even(n)
         ? square(fast_exp(a, n / 2))
         : a * fast_exp(a, n - 1);
}

function iterative_fast_exp(a, n) {
    function inner_iter(prod, a, n) {
        return n === 0
             ? prod
             : is_even(n)
             ? inner_iter(prod, square(a), n / 2)
             : inner_iter(prod * a, a, n - 1);
    }
    
    return inner_iter(1, a, n);
}

fast_exp(3, 3);
fast_exp(2, 3);
fast_exp(3, 0);
fast_exp(2, 2);


iterative_fast_exp(3, 4);

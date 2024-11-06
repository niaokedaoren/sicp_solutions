function times(a, b) {
    return b === 0
         ? 0
         : b === 1
         ? a
         : a + times(a, b - 1);
}


function fast_times(a, b) {
    function is_even(x) {
        return x % 2 === 0;
    }
    
    function halve(x) {
        return x / 2;
    }
    
    function double(x) {
        return x + x;
    }
    
    function inner_iter(result, a, b) {
        return b === 0
             ? result
             : is_even(b)
             ? inner_iter(result, double(a), halve(b))
             : inner_iter(result + a, a, b - 1);
    }
    
    return inner_iter(0, a, b);
}

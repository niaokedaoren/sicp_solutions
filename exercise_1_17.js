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
    
    return b === 0
         ? 0
         : is_even(b)
         ? fast_times(double(a), halve(b))
         : a + fast_times(a, b - 1);
}

times(3, 4) === fast_times(3, 4);
times(9, 9) === fast_times(9, 9);
times(9, 0) === fast_times(1, 0);

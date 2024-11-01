function two_larger_squared_sum(x, y, z) {
    function square(a) {
        return a * a;
    }
    
    const smallest = math_min(x, math_min(y, z));
    return square(x) + square(y) + square(z) - square(smallest);
}

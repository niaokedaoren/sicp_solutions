function recu_f(n) {
    return n < 3 ? n
         : recu_f(n - 1) + 2 * recu_f(n - 2) + 3 * recu_f(n - 3);
}

function iter_f(n) {
    function inner_f(count, x, y, z) {
        return count === n 
             ? z
             : inner_f(count + 1, y, z, z + 2 * y + 3 * x);
    }
    
    return n < 3 ? n
         : inner_f(2, 0, 1, 2);
}

iter_f(5) === recu_f(5);

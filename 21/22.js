// Type your program in here!
//1
function repeat(v,k){
    return k === 0
    ? null
    : pair(v, repeat(v, k-1));
}

//2
function expand_list(L, k){
    return accumulate((x,y) => append(repeat(x, k), y), null, L);
}

//3
function expand_matrix(M, k){
    return expand_list(
        map(x => expand_list(x, k), M),
        k);
}

//1. use expandlist to expand individual lists - use map to iterate through the lists?
//2. repeat the list 3 times with repeat
//

function unique(xs) {
if (is_null(xs) || is_null(tail(xs))) {
    return xs;
    } 
    else {
        return head(xs) !== head(tail(xs))
        ? pair(head(xs), unique(tail(xs)))
        : unique(tail(xs));
    }
}

is_list(list(1,2));

//11

// function remove_elem(A, pos) {
//     return x => x >= active_length(A)
//                 ? null 
//                 : x < pos
//                 ? A(x)
//                 : A(x+1);
// }

// function accumulate_tree(f1, f2, initial, tree) {
// return is_null(tree)
// ? initial
// : f2( is_list(head(tree))
// ? accumulate_tree(f1, f2, initial, head(tree))
// : f1(head(tree)),
// accumulate_tree(f1, f2, initial, tail(tree)));
// }
// const T = list(1,
// list(2, 3, list(4, 5)),
// 6,
// list(list(7, 8), 9),
// list(10)
// );

// accumulate_tree( x => x, (x, y) => x > y ? x : y, 7.5, T );

function find(ston, x) {

    if (is_null(ston)) {
        return false;
    } else if (is_null(tail(ston))) {
        return is_pair(head(ston)) ? find(head(ston), x) : x === head(ston);
    } else {
        
}
}


find(my_ston, 12);
find(my_ston, 3.5);










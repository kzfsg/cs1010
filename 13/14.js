// Q2

function plus(x,y) {
    if(is_number(x) && is_number(y)){
        return add_ieee_754(x,y);
    }
    else if(is_string(x) || is_string(y)){
        return concatenate(to_string(x), to_string(y));
    }
    else {
        return "error: wrong types";
    }
}

// Q3

function tetrate(b,n) {
    return n === 1
    ? b
    : power(b, tetrate(b, n-1));
}

// Q5

function make_pairs(xs, ys){
    return is_null(xs)
    ? null
    : pair(pair(head(xs),head(ys)), make_pairs(tail(xs), tail(ys)));
}

// O(n)

// Recursive

// Q5B

function zip(f, xs, ys) {
    return is_null(xs)
    ? null
    : pair(f(head(xs),head(ys)), zip(f, tail(xs), tail(ys)));
}


// Q6

function filter1(pred, xs){
    return accumulate( (ls) => pred(head(ls)) 
    ? pair(head(ls), tail(ls)) 
    : tail(ls)
    , null, xs);
}


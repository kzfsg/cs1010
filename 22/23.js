//B

const recruit_info = list(list(150, true, 19), list(101, false, 21), list(122, false, 20));

function average_age(lst) {
    return (accumulate((x,y)=> head(tail(tail(x))) + y, 0, lst)
    /length(lst));
}


function split_type(lst) {
    // cadet lst
    const cadets = filter(x => head(tail(x)), lst);
    const avengers =  filter(x => !head(tail(x)), lst);
    return pair(cadets, avengers);
}


function alt(){
    function odd(n){
        return !(n % 2 === 0);
    }
    const ninexs = enum_list(1, 999);
    return map(x => odd(x)
    ? list(x)
    : x, ninexs);
}

const v1 = list(1, 2, 3);
const v2 = list(1, 2, 3,4);

function equal_vec(v1,v2) {
    function helper_len(xs){
        return is_null(xs)
        ? 0
        : 1 + helper_len(tail(xs));
    }
    if(is_null(v1)){
        return true;
    }
    else if(helper_len(v1) === helper_len(v2)){
        if(head(v1) === head(v2)){
            return equal_vec(tail(v1), tail(v2));
        }
        else{ return false; }
    }
    else{
        return false;
    }
    
}

function dot_product(x, y) {
    return is_null(x)
    ? 0
    : head(x) * head(y) + dot_product(tail(x), tail(y));
}

const v3 = list(1, 2, -3);
const v4 = list(2, 0, 3);

function euclidean_distance(x, y){
    function helper(x,y){
        return is_null(x)
        ? 0
        : ((head(y) - head(x)) * (head(y) - head(x))) + helper(tail(x), tail(y));
    }
    return math_sqrt(helper(x,y));
}

const v5 = list(1, 5, 3);
const v6 = list(4, 1, 3);
euclidean_distance(v5, v6);

//F

function insert(x, xs, cmp) {
    return is_null(xs)
    ? list(x)
    : cmp(x, head(xs))
    ? pair(x, xs)
    : pair(head(xs), insert(x, tail(xs), cmp));
}

function insert_sort(xs, cmp) {
    return accumulate((y, ys) => insert(y, ys, cmp), null, xs)
}

function sort_pairs_by_sum(plist) {
    const cmp = (x, y) => head(x) + tail(x) <= head(y) + tail(y);
    return insert_sort(plist, cmp);
}



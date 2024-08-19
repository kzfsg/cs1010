// q1
function biggie_size(x) {
    return x + 4;
}

// q2
function unbiggie_size(x) {
    return x - 4;
}

//q3
function is_biggie_size(x) {
    return x > 4 ? true : false;
}

//q4
function combo_price(x) {
    return (x > 4 ? (x - 4) * 1.17 + 0.5 : x * 1.17);
}

//q5
function empty_order() {
    return 0;
}

//q6
function add_to_order(x, y) {
    return x * math_pow(10, (math_floor(math_log10(x)))) + y;
}

//q7
function last_combo (x) {
    return x % 10;
}

//q8
function other_combos(x) {
   return math_floor(x/10);  
 }
 
//q9
function combo_price_abstraction(x) {
    return is_biggie_size ? x * 1.17 + 0.5 : x * 1.17;
}

//q10
function add_to_order_corrections(x) {
    return x + y * 10
}

//problem1
//conjunction - p ? q : false;
//disjunction - p ? true : q;
 
biggie_size(1);
unbiggie_size(5);
is_biggie_size(5);
combo_price(8);
add_to_order(12, 34);

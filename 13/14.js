function plus(x,y) {
    if(is_number(x) && is_number(y)){
        return add_ieee_754(x,y);
    }
    else if(is_string(x)){
        return concatenate(x,to_string(y));
    }
    else if(is_string(y)){
        return concatenate(to_string(x), y);
    }
    else {
        return "error: wrong types"
    }
}
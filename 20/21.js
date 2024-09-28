//20/21

function lister(xs){
    return is_null(xs)
    ? null 
    : pair(list(head(xs)), lister(tail(xs)));
}

lister(enum_list(1,1000));






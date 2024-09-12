"Session code: 75e8fe";
"Attendance: 46075123";

// Join the session and "reserve" your number at Q0
//
// After the session, save this to a text file for
// your future reference, or alternatively you can
// ask me to send you the template!

// Me Telegram: @gracefuuu
// Me Email: gracetan@nus.edu.sg
// Send me stufffff

// ====================================================
{
// ====================================================
"Q0: 'Reserve' your favourite number by typing       ";
"    your favourite colour (or anything unique)      ";
"    after it:                                       ";

// 0: #ffb6c1
// 1: yeehaw yellow
// 2: blackest black
// 3: yelo
// 4: dark blue
// 5:
// 6:
// 7: lemon
// 8: white
// 9: one of them
// 10:
// 11: turquoise 
// 12: black
// 13: 
// 14:
// 15: Dark Black
// 16: yellow pink
// 17: sus
// 18: f
// 19: oreange
// 20: wingstop
// 21:
// 22:bloo
// 23:
// 24: white
// 25:
// 26: black
// 27: brown
// 28: reservve
// 29: #000000

// ====================================================
}
{
// ====================================================
"QA: Who watched the lecture                         ";

// 0: I read the slides
// 1:
// 2:
// 3:
// 4: wo
// 5:
// 6:
// 7:
// 8: kkk
// 9:
// 10:
// 11:
// 12: yes
// 13:
// 14:
// 15: ye
// 16: probably? maybe
// 17: 
// 18:
// 19: yes
// 20:
// 21:
// 22:
// 23:
// 24: yes
// 25:
// 26: me
// 27:
// 28:
// 29: Yes

// ====================================================
}
{
// ====================================================
"RECAP TIME!";

"What does map do?";
// map(f, list(1, 2, 3))
// list(f(1), f(2), f(3))
"What does filter do?";
// filter(pred, list(1, 2, 3))
// the sublist of list(1, 2, 3)
// containing only elements such that pred(x) is true
// filter(is_odd, list(1, 2, 3))
// list(1, 3)
"What does accumulate do?";
// accumulate(op, initial, list(1, 2, 3))
// pair(1, pair(2, pair(3, null)))
// op(1, op(2, op(3, initial)))

// accumulate(op, initial, list()) =
//     initial
// accumulate(op, initial, list(x, y...)) =
//     op(x, accumulate(op, initial, list(y...))

// ====================================================
}
{
// ====================================================
"QB0: Warmup: Express these transformations";
"with map/filter/accumulate:  ";

"list(1, 2, 3, 4, 5) --> list(2, 4, 6, 8, 10)";
"list(1, 2, 3, 4, 5) --> list(1, 3, 5)";
"list(1, 2, 3, 4, 5) --> 1+(2+(3+(4+(5+0))))";
// 4: CORRECT
// map(x => x * 2, list),
// filter(x => x % 2 === 1, list),
// accumulate((x, y) => x + y, 0, list)

// 0: idk, idk, idk, idk, idk, idk
// 1: map(x => x * 2), filter(x => x % 2 === 1, list), accumulate ((x,y) => x + y, 0, list)
// 2: map(x => 2 * x, xs), filter(x => x % 2 ===1, list), accumulate(,0, xs)
// 3: map(x => 2 * x, list), filter(x => x % 2 === 1, list), accumulate((x, y) => x + y, 0, list)
// 4: map(x => x * 2, list), filter(x => x % 2 === 1, list), accumulate((x, y) => x + y, 0, list)
// 5:
// 6:
// 7: map(x=>x*2, xs); filter(x=> x%2 === 1,xs); accumulate((x,y)=>x+y,0,xs)
// 8: map(x=>x*2, xs); filter(x => x % 2 !== 0 ,xs); accumulate((x,y) => x + y, 0, xs)
// 9: map(x => x * 2, xs); filter(x => x % 2 === 1, xs); accumulate((x,y) => x + y, 0, xs)
// 10:
// 11: a) map((x => x * 2), xs) // b) filter(x => x % 2 !== 0), xs) // c) accumulate(((x, y) => (x + y)), 0, xs)
// 12: map(x => x * 2, xs);       filter(x => x % 2 === 1, xs);    accumulate((x, y) => x + y, 0, xs); 
// 13:
// 14:
// 15: map(x => 2 * x, xs), filter(x => x % 2 === 1, xs), accumulate((x, y) => x + y, 0, xs)
// 16: map(x => 2 * x, ls), filter(x => x % 2 === 1, ls), accumulate((x, y) => x + y, 0, ls)
// 17: map(x => 2 * x, xs), filter(x => x % 2 === 1, xs), 
// 18: map(x => 2*x, xs), filter(x => x%2 === 1, xs), accumulate((x,y) => x + y, null, xs)
// 19: map(x => 2 * x, lst); filter(x => x % 2 === 1, xs); accumulate((x, y) => x + y, 0, xs)
// 20: map((x => 2 * x), xs), filter(x => x % 2 === 1, xs), 
// 21:
// 22: map(x => 2 * x, list), filter(x => x % 2 == 1, list), accumulate((x, y) => x + y, 0, list)
// 23: map(x=> x*2, xs);  filterx => x%2 === 1, xs), accumulate((x), 0, xs)
// 24: map(x=> x*2, xs); filter(x=>x%2===1, xs); accumulate((x,y)=> (x+y, 0, xs));
// 25:
// 26: map(x => 2 * x, lst), filter(x => x % 2 === 1, lst), accumulate((x, y) => x + y, 0, lst)
// 27: map(x => 2 * x, lst) // filter(x => x %2 === 1, lst) // accumulate( (x, y) => x + y, 0, lst)
// 28: map(x => x * 2, list), filter(x => x % 2 ===1, list), accumulate()
// 29: map(x => x * 2, list), filter(x => x % 2 === 1, list), accumulate((a, b) => a + b, 0, list)

// ====================================================
}
{
// ====================================================
"QB: Warmup: What are the 'types' of the following:  ";

const a = 32;                        // a
// number
const b = list(1, 2, 3);             // b
// list of number
const c = list(true, true, false);   // c
// list of boolean
const d = list(list(12), null);      // d
// tree of number
// list of list of number

const e = map(list, b);              // e (uses b ans!)
// list of number
// list of the output of f when given number
// list of list of number
const f = accumulate(pair, null, b); // f (uses b ans!)
// list of number
// the output of op when given an element of the list and initial
// initial's type
// op(number, op(number, ... op(number, initial)))
// pair(number, pair(number, ...  pair(number, initial)))
// initial

// 0: idk, idk, idk, idk, idk, idk lol
// 1: CORRECT SO FAR numbers, list of numbers, list of booleans, list of lists of number, lists of lists of numbers, lists of number
// 2: numbers, list of numbers, list of booleans, tree of number, 
// 3: a: number b: list of numbers c: list of booleans d: list of lists of numbers e: list of list of numbers f:list of numbers
// 4: CORRECT number, list of numbers, list of booleans, list of lists of numbers, list of lists of numbers, list of numbers
// 5: CORRECT SO FAR Number, List[Number], List[Boolean], List[List[Number]], List[List[Number]], List[Number]
// 6:
// 7: MAKE MORE PRECISE :( Number,List[Number], List[Boolean], List[List[Numbers]], List[Lists[Number]], List[Number]
// 8: number, list of num, list of bool, list of list, list of list, list of number
// 9: number, list of numbers, list of booleans, list of lists of numbers, list of lists of numbers, list of numbers
// 10:
// 11: Number, List (of numbers), List (of booleans), List(of lists (of numbers)), List(of lists of numbers), list of Number
// 12: a.Number   b.list of numbers   c.list of booleans d.list of lists of number   e.list of lists of numbers   f.list of numbers
// 13:
// 14:
// 15: Number; List of Number, List of Boolean, List of List, List of Number, List of Number
// 16: Number, List<Num>, List<Bool>, List<List>, List<List>, List<Num>
// 17:
// 18: number, list(num), list(boolean), list(list(number)), list(num), list(num)
// 19: number, list of numbers, list of booleans, list of list of numbers, list of numbers, list of numbers
// 19: number, list of number, list of boolean, list of list, list of list, list of list
// 20:
// 21: number, list(number), list(boolean), list(list), list(list), list(list), 
// 22: number, list(number), list(boolean), list(list), list(list), list(num)
// 23: map(x=> x*2, xs);  
// 24: number, list of numbers, list of booleans, list of list, list of list, list of numbers
// 25:number, list(number), list(boolean), list(lists(number)), 
// 26: CORRECT list of number, list of numbers, list of booleans, list of lists of numbers, list of lists of numbers, list of numbers
// 27: CORRECT number, lsit of numbers, list of boolean, list of list of numbers, list of lit of numbers, list of numbers
// 28: no number, list(number), list(boolean), list(list), function(function(),list)
// 29: NO number; list of number; list of boolean; list of list of number; list of list of numbers; number

// ====================================================
}
{
// ====================================================
"QC: Warmup: Usisng `accumulate`, `filter`, and      ";
"    `enum_list`, implement a function that returns  ";
"    1 * 3 * ... * n for every odd number n >= 1     ";
"    What does your solution 'expand' to?            ";

// enum_list example:
equal(enum_list(1, 5), list(1, 2, 3, 4, 5));

// 0:
function factorial(n) {
    return accumulate((x, y) => x * y, 1, enum_list(1, n));
}
function odd_factorial(n) {
    return accumulate((x, y) => x * y, 1,
        filter(x => x % 2 !== 0, enum_list(1, n)));
}
display(odd_factorial(1), "odd_factorial(1) =");
display(odd_factorial(3), "odd_factorial(3) =");
display(odd_factorial(5), "odd_factorial(5) =");
// 1: accumulate((x, y) => x * y, 1, filter(x => x % 2 === 1, enum_list(1,m)))
// 2: accumulate( (x, y) => 
// 3: accumulate((x, y) => x * y, 1, filter(x => x % 2 === 1, enum_list(n, m)))
// 4: CORRECT accumulate((x, y) => x * y, 1, filter(x => x % 2 === 1, enum_list(n, m)))
// 5: accumulate((x, y) => x * y, 1, filter(x => x % 2 === 1, enum_list(1, n)))
// 6:
// 7:CORRECT accumulate((x,y)=>x*y,1,filter(x=>x%2===1,enum_list(1,n)))
// 8: accumulate( (x,y) => x * y, 1, filter( x => x % 2 ! === 0, enum_list(1,n)));
// 9: accumulate((x,y) => x * y, 1, filter(x => x % 2 === 1, enum_list(1, n)))
// 10:
// 11: CORRECT accumulate(((x,y) => (x * y)), 1, filter((x => x % 2 !== 0), enum_list(1, n)))
// 12: CORRECT y, n => accumulate((x, y) => x * y, 1, filter(x => x % 2 === 1, enum_list(1, n)))
// 13:
// 14:
// 15: 
// 16: CORRECT n => accumulate((x, y) => x*y, 1, filter(x => x % 2 === 1, enum_list(1, n)))
// 17:
// 18: accumulate((x, y) => x*y, 1, filter(x => x%2 === 1, enum_list(1,n)))
// 19: accumulate((x,y) => x* y, 1, filter(x=>x%2===1, enum_list(1,n)))
// 20:
// 21:
// 22: accumulate((x, y) => x * y, 1, filter(x => x & 2 === 1, enum_list(1, n)))
// 23:
// 24:accumulate((x,y)=>x*y, 1, filter(x=>x%2===1, enum_list(1,n)));
// 25:
// 26: const odd_factorial = n => accumulate((x, y) => x * y, 1, filter(x => x % 2 === 1, enum_list(1, n)))
// 27:
// 28:
// 29:  CORRECT    function odd_factorial(n){
//              const list1 = enum_list(1, n);
//              return accumulate((x, y) => x * y, 1, filter(x => x % 1, list1));
//          }

// ====================================================
}
{
// ====================================================
"Q1: Usisng `accumulate`, write a function that      ";
"    'flattens' lists of numbers.                    ";

const LoL = list(list(1, 2),
                 list(3, 4, 5, 6),
                 null,
                 list(7, 8, 9));
// ANSWER: accumulate(append, null, xs)

// pair(list(1, 2),
//      pair(list(3, 4, 5, 6),
//           pair(null,
//               pair(list(7, 8, 9),
//               null))));
// accumulate(op, initial, list(1, 2, 3))
// pair(1, pair(2, pair(3, null)))
// op(1, op(2, op(3, initial)))

// flatten_list(list()) = list()
// flatten_list(list(list(1, 2),
//                   listslistslsists...)) =
//     append(list(1, 2), flattened of listslistslsists...)
// accumulate(op, initial, list()) =
//     initial
// accumulate(op, initial, list(x, y...)) =
//     op(x, accumulate(op, initial, list(y...))
// flatten_list(LoL);
// should equal list(1, 2, 3, 4, 5, 6, 7, 8, 9)

// 0:
function flatten_list(LoL) { return list(42); }
display_list(flatten_list(LoL), "flatten_list(LoL) =");
// 1: function flatten_list1(lst) { return accumulate(append, null, lst); }
// 2: 
// 3: 
// 4: RESPECT FOR DOING AT HOME
//    CAN WE DO IT AGAIN WITH ACCUMULATE etc
//    accumulate(append, null, xs)
//    idk TT

// 5: LoL => accumulate((x, y) => x + y, 0, map(LoL, (l) => accumulate((x, y) => x + y, l)))
// 6:
// 7:CORRECT accumulate((x,y)=>append(x,y),null,lst)
// 8: accumulate((x,y) => append(x,y), null, xs)
// 9: CORRECT accumulate((x, y) => append(x, y), null, xs)
// 10:
// 11: CORRECT accumulate((x , y) => append(x, y), null, xs)
// 12: CORRECT xs => accumulate((x, y) => append(x, y), null, xs)
// 13:
// 14: accumulate((x, y) => append(x, y), null, lst)
// 15:CORRECT function flatten_list(LoL) {
//     return accumulate(
//         (x, y) => append(x, y),
//         null,
//         LoL
//     );
//  }
//
// 16: THIS IS FOR TREES, but also correct(i think)
//     mb i didnt realize it was assumed all elements were list
//     ls => accumulate((x, y) => 
//                           append(is_list(x)
//                                  ? flatten_list(x)
//                                  : list(x),
//                                  y),
//                      null,
//                      ls);
// 17:
// 18:CLOSE, 1 typo function flatten_list(xs) {
//    return accumulate(append, null, xs);
//}
// 19: accumulate(append(), null, xs
// 20:
// 21:
// 22: CORRECT accumulate(append, null, list);
// 23:
// 24: CORRECT accumulate((x,y) => append(x, y), null, xs);
// 25:
// 26:  CORRECT
    // function flatten_list(lst) {
    //     return accumulate(append, null, lst);
    // }
// 27: probaby wrong flatten_list = lst => accumulate(append(x, y), null, xs)
// 28: 
// 29:  function flatten_list(list1){
//          return accumulate((x, y) => append(x, y), null, list1);    
//    
//}

// ====================================================
}
{
// ====================================================
"QD: Warmup: Usisng `accumulate`, `map`, write a function";
"    that sums the numbers in a LoL of numbers.      ";
"Approach 1: Write a helper function for lists of numbers. (needs map) ";
"Approach 2: Use the previous qn (no need map)";

function sum_list(xs) {
    return accumulate((x, y) => x + y, 0, xs);
}

const LoL = list(list(1, 2), // 3
                 list(3, 4, 5, 6), // 3+4+5+6
                 null, // 0
                 list(7, 8, 9));
// APPROACH 1
// const LoS = map(sum_list, LoL)
// sum_list(LoS);
// APPROACH 2
// sum_list(flatten_list(LoL))

// sum_lol(LoL) == 45

// 0:
function sum_lol(LoL) { return 42; }
display(sum_lol(LoL), "sum_lol(LoL) =");
// 1: accumulate(((x,y) => x + y), null , flatten_list(lst))
//    map ((accumulate(x,y) => x + y), lst)
// 2:
// 3:
// 4: accumulate((x, y) => x + y, 0, lst)
// 5:
// 6:
// 7: accumulate((x,y)=>x+y,0,
//              accumulate((x,y)=>append(x,y),null,lst))
// 8: accumulate((x,y) => x + y, 0, flatten_list(xs))
// 9: accumulate((x, y) => x + y, 0, accumulate(append, null, xs)) / ???
// 10:
// 
/* 11:

approach 2: CORRECT

    accumulate((x, y) => (x + y), 0, accumulate((x , y) => append(x, y), null, xs))

approach 1:

    function helper(xs) {
        return accumulate((x, y) => (x + y), 0, xs);
    }
    
    map(helper, xs);

*/
// 12: function sum_lol(xs) {
    //     function sum_list(l) {
    //         return accumulate((x, y) => x + y, 0, l);
    //     }
    //     return accumulate((x, y) => sum_list(x) + y, 0, xs);
    // }
// 13:
// 14:
// 15: 
// 16: function sum_lol(ls) {
//	       return ls === null ? 0 :
//	                     accumulate((x, y) => (is_list(x)
//			                                   ? sum_lol(x)
//			                                   : x) + y,
//		                            0, ls); }
//     alternatively, create function sum_list that returns a 
//     sum of list<numbers> and 0 if null, then map sum_list to LoL
// 17: accumulate(append, null, xs)
// map(accumulate((x,y) => x + y , 0, xs),   
// 18:
// }
// 19: function sum_list{
            //return accumulate((x,y) => x+y, 0, xs) 
// }
//  
// 20: accumulate((x,y)=>x+y, 0, flatten_list(xs))
// 21:
// 22: function list_sum(list) {
//          accumulate((x,y) = x + y, 0, list)
    // }
        // accumulate((x,y) => x+y, 0. map(list_sum, list))
//     accumulate((x,y) => x + y, 0, flatten_list(list)))
// 23:
// 24: accumulate((x, y) => x + y, 0, flatten_list(lst))
// 25:
// 26: const sum_lol = lst => 
//                       accumulate((x, y) => 
//                                    accumulate((a, b) => a + b, 0, x) + y,
//                       0, lst)
m// 28:
// 29: list1 => accumulate((x, y) => x + y, 0, (list1 => (accumulate((x, y) => append(x, y), null, list1))(list1)))

// ====================================================
}
{
// ====================================================
"Q2: Write a function `tree_sum` that takes          ";
"    a tree of numbers as argument and returns       ";
"    the sum of all the numbers in the tree.         ";
"Hint: WISHFULLY THINK that we already have a        ";
"    function `tree_sum` that works on subtrees.     ";
"    Now solve `tree_sum`!                           ";

// pair(x1, pair(x2, ... null)) // list of xs
// list(x1, x,x,list(x,list(x,x,x)),x,x,x) // tree of xs

// op(x1, op(x2, ... initial)) // list of xs
// op(list(x1, x,x,op(list(x,op(list(x,x,x)))),x,x,x)) // tree of xs
// (x1, x,x,list(x,list(x,x,x)),x,x,x) // tree of xs

// accumulate(pair, null, list_of_numbers)
function tree_sum(tree);
    const LoS = map(
        subtree_or_elem =>
            is_list(subtree_or_elem)
            ? tree_sum(subtree_or_elem)
            ? subtree_or_elem
        tree);
    return list_sum(LoS);
}

// You can use the following helper function:
function list_sum(xs) {
    return accumulate((x, y) => x + y, 0, xs);
}

const my_tree = list(1,
                     list(2, list(3, 4), 5),
                     list(6, 7));

// 0:
function tree_sum(tree) { return 42; }
display_list(tree_sum(my_tree), "tree_sum(my_tree) =");
// 1:
// 2:  function tree_sum(xs) {
//     return accumulate( (headxs,accumt) => 
//                             !is_list(headxs)
//                             ?headxs + accumt
//                             :tree_sum(headxs) + accumt
//                         , 0, xs);
//      }
// 3:
// 4:
// 5:
// 6:
// 7:function tree_sum(tree){
//      return is_null(tree)
//      ? null
//      :list_sum(map(x=>is_list(x)?tree_sum(x):x))
//   }
// 8:
// 9: 
// 10:
/* 11:

    accumulate( map 

*/
// 12:
/*
function tree_sum(tree) {
    return is_null(tree)
           ? 0
           : accumulate((x, y) => (is_list(x) ? tree_sum(x) : x) + y, 0, tree);
}
*/
// 13:
// 14:
// 15:function tree_sum(my_tree) {
//     if (is_null(my_tree)) {
//         return 0;
//     } else {
//         if (is_list(head(my_tree))) {
//             return tree_sum(head(my_tree)) + tree_sum(tail(my_tree));
//         } else {
//             return head(my_tree) + tree_sum(tail(my_tree));
//         }
//     }
// }
// 16: (i did not test this function)
//    function tree_sum(tree) {
//         return is_null(tree) ? 0 
//                : is_list(head(tree))
//                  ? tree_sum(head(tree)) + tree_sum(tail(tree))
//                  : head(tree) + tree_sum(tail(tree));
//    }
// 17: 
// 18: CORRECT this is using alternative definition of trees
// function tree_sum(xs) {
//     if (is_null(xs)) {
//         return 0;
//     }
//     else if (is_list(head(xs))){
//         return tree_sum(head(xs)) + tree_sum(tail(xs));
//     }
//     else {
//         return head(xs) + tree_sum(tail(xs));
//     }
// }
// 19:
// 20:
function tree_sum(tree) {
    return is_null(tree)
         ? 0
         : !is_pair(tree)
         ? tree
         : is_pair(head(tree))
         ? tree_sum(head(tree)) + tree_sum(tail(tree))
         : head(tree) + tree_sum(tail(tree));
}


// 21:
// 22:
// function tree_sum(tree) {
//     return is_null(tree)
//           ? 0
//           : is_list(head(tree))
//           ? head(head(tree)) + tree_sum(tail(head(tree))) + tree_sum(tail(tree))
//           : head(tree) + tree_sum(tail(tree));
// }
// 23:
// 24:
// 25:
// 26:
    // function tree_sum(tree) {
    //     return is_null(tree)
    //            ? 0
    //            : is_list(head(tree))
    //            ? tree_sum(head(tree)) + tree_sum(tail(tree))
    //            : head(tree) + tree_sum(tail(tree));
    // }
// 27:
// 28:
// 29:  function tree_sum(tree){
//          return is_null(tree)
//              ? 0
//              : is_number(tree)
//              ? tree
//              : tree_sum(head(tree)) + tree_sum(tail(tree))
//}

// ====================================================
}
{
// ====================================================
"QE: Generalizing `tree_sum` (Part 1)                ";
"                                                    ";
"Earlier, we combined the results of the subtrees    ";
"with `list_sum`.                                    ";
"                                                    ";
"What if I want to combine results using             ";
"something else, like append?                        ";
"                                                    ";
"Idea #1 (your task)                                 ";
"Write a function                                    ";
"    function tree_combine(combiner, tree) { ... }   ";
"that combines the results of subtrees recursively.  ";
"`combiner` will be called with a single argument,   ";
"a list containing the results of the subtrees.      ";
"Expected output:                                    ";
"    tree_combine(list_sum, my_tree)                 ";
"should be same as                                   ";
"    tree_sum(my_tree)                               ";
"i.e. 28                                             ";

function list_sum(xs) {
    return accumulate((x, y) => x + y, 0, xs);
}

const my_tree = list(1,
                     list(2, list(3, 4), 5),
                     list(6, 7));

// 0:
function tree_combine(combiner, tree) {
    const LoR = map(
        subtree_or_elem =>
            is_list(subtree_or_elem)
            ? tree_combine(combiner, subtree_or_elem)
            : subtree_or_elem
        tree);
    return combiner(LoR);
}
display_list(tree_combine(list_sum, my_tree),
             "tree_combine(list_sum, my_tree) =");
display_list(tree_combine(flatten_list, list(1, list(2))),
             "tree_combine(flatten_list, my_tree) =");
flatten_list(list(1, list(2)))
// 1:
// 2:
// 3:
// 4:
// 5:
// 6:
// 7:
// 8:
// 9:
// 10:
// 11:
// 12:
// 13:
// 14:
// 15:
// 16:
// 17:
// 18:
// 19:
// 20:
// 21:
// 22:
// 23:
// 24:
// 25:
// 26:
// 27:
// 28:
// 29:

// ====================================================
}
{
// ====================================================
"QF: Generalizing `tree_sum` (Part 2)                ";
"                                                    ";
"Shoot, append didn't work! I wonder why...          ";
"(wow such unexpected development)                   ";
"                                                    ";
"Reason append didn't work is because                ";
"the *data elements* are type 'number'               ";
"But we want to return a *list of numbers*!          ";
"                                                    ";
"Idea #2 (your task)                                 ";
"                                                    ";
"Write a function                                    ";
"    function tree_combine2(f_data, f_tree, tree) {  ";
"        ...                                         ";
"    }                                               ";
"that combines the results of subtrees recursively.  ";
"When given a data element, f_data is used to get    ";
"'the result of the data element itself'             ";
"                                                    ";
"Expected output:                                    ";
"    tree_combine2(x => x, list_sum, my_tree)        ";
"should be same as                                   ";
"    tree_sum(my_tree)                               ";
"i.e. 28                                             ";
"                                                    ";
"    tree_combine2(x => list(x),                     ";
"                  flatten_list,                     ";
"                  my_tree)                          ";
"should be same as                                   ";
"    flatten(my_tree)                                ";
"i.e. list(1, 2, 3, 4, 5, 6, 7)                      ";

function list_sum(xs) {
    return accumulate((x, y) => x + y, 0, xs);
}

function flatten_list(xs_s) {
    return accumulate(append, null, xs_s);
}

const my_tree = list(1,
                     list(2, list(3, 4), 5),
                     list(6, 7));

// 0:
function tree_combine2(f_data, f_tree, tree) {
    const LoR = map(
        subtree_or_elem =>
            is_list(subtree_or_elem)
            ? tree_combine2(f_data, f_tree, subtree_or_elem)
            : f_data(subtree_or_elem)
        tree);
    return f_tree(LoR);
}
display_list(tree_combine2(x => x,
                           list_sum,
                           my_tree),
             "tree_combine2(id, lsum, my_tree) =");
display_list(tree_combine2(x => list(x),
                           flatten_list,
                           my_tree),
             "tree_combine2(list, fl_l, my_tree) =");
// FIGURE THIS OUT AT HOME
// - Similarity between accumulate and tree_combine2
// - Try implementing some functions in tree_combine2
//   - `height` returns the height of the tree
//   - `count_data_elem` counts the # of data elements
//   - `tree_sum`
// 1:
// 2:
// 3:
// 4:
// 5:
// 6:
// 7:
// 8:
// 9:
// 10:
// 11:
// 12:
// 13:
// 14:
// 15:
// 16:
// 17:
// 18:
// 19:
// 20:
// 21:
// 22:
// 23:
// 24:
// 25:
// 26:
// 27:
// 28:
// 29:

// ====================================================
}
{
// ====================================================
"Q3 DEMO Alternative viewpoint                       ";
"    Generalizing `tree_sum` to `accumulate_tree`    ";
"                                                    ";
"If you came here to just know how to solve Q3,      ";
"you already have the tools for it, you can leaf :D  ";
"                                                    ";
"(Legit tho, I covered all the teaching points alr.) ";
"(So below this, if you don't get the philosophy,    ";
" don't worry too much.)                             ";
"                                                    ";
"We've been working with the 'Definition of trees'   ";
"from the lecture so far.                            ";
"                                                    ";
"But there's also 'Alternative definition of trees'! ";
"Let's take a look:                                  ";
"                                                    ";
"Definition of trees:                                ";
"    A tree of a certain data type is a *list*       ";
"    whose elements are of                           ";
"     - that data type, or                           ";
"     - trees of that data type                      ";
"                                                    ";
"Alternative definition of trees:                    ";
"    A tree of a certain data type is either         ";
"     - null                                         ";
"     - pair                                         ";
"        - head == data type OR                      ";
"                  tree of that data type            ";
"        - tail == tree of that data type            ";
"                                                    ";
"The two definitions are actually the same!          ";
"    lists == null OR pairs whose head/tail is ...   ";
"But as a *mental model* they are different.         ";
"                                                    ";
"In the earlier examples, we used 'simple' combiners ";
"which were all of the form accumulate(f, init, xs)  ";
"                                                    ";
"We can become more aware of this structure by       ";
"writing a function with the following signature:    ";
"    function accumulate_tree(f, op, initial, tree) {";
"        ...                                         ";
"    }                                               ";
"that combines the results of subtrees recursively.  ";
"When given a data element, f is used to get         ";
"'the result of the data element itself'             ";
"Then results are combined in 'list order'           ";
"(i.e. right to left), to obtain the result of       ";
"the subtree.                                        ";
"                                                    ";
"Observe that this structure matches the             ";
"'alternative definition of lists'                   ";
"(Don't worry if you don't see it, it's not tested.) ";
"                                                    ";
"Feel free to type in your answers below!            ";
"But I will show how I derive the solution for this. ";

function list_sum(xs) {
    return accumulate((x, y) => x + y, 0, xs);
}

function flatten_list(xs_s) {
    return accumulate(append, null, xs_s);
}

const my_tree = list(1,
                     list(2, list(3, 4), 5),
                     list(6, 7));

// 0:
function accumulate_tree(f, op, initial, tree) {
    return 42;
}
display_list(accumulate_tree(x => x,
                             // this was list_sum
                             (x, y) => x + y,
                             0,
                             my_tree),
             "accumulate_tree(id, add, 0, mytree) =");
display_list(accumulate_tree(x => list(x),
                             // this was flatten_list
                             append,
                             null,
                             my_tree),
             "accumulate_tree(list, ap, n, mytree) =");
// 1:
// 2:
// 3:
// 4:
// 5:
// 6:
// 7:
// 8:
// 9:
// 10:
// 11:
// 12:
// 13:
// 14:
// 15:
// 16:
// 17:
// 18:
// 19:
// 20:
// 21:
// 22:
// 23:
// 24:
// 25:
// 26:
// 27:
// 28:
// 29:

// ====================================================
}










































undefined;

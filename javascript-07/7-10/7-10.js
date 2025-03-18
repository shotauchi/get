//ユーザー定義関数
function add(triangle1,triangle2) {
    let triangle = triangle1 * triangle2 / 2;
    return triangle;
}

//ユーザー定義呼出関数
console.log(add(60,40,2));


//名前のない関数
var add = function(triangle1,triangle2) {
    var triangle = triangle1 * triangle2 / 2;
    return triangle;
}

//関数の実行
console.log(add(60,40,2));

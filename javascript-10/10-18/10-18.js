let a1 = document.getElementById('p1');
let a2 = document.getElementById('p2');
let a3 = document.getElementById('p3');

a1.outerHTML = '<h>inputタグ</h>';
a2.innerText = 'テキスト文字列';
console.log(a1.tagName);
console.log(a2.id);
a2.id = 'p5';


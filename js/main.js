

// let a ;
// if(a > 0){
//   console.log(true);
// }else{
//   console.log(false);
// }


// let a ;
// if(a % 2 == 1){
//   console.log(true);
// }else{
//   console.log(false);
// }

// let a ;
// if(a % 2 == 0){
//   console.log(true);
// }else{
//   console.log(false);
// }


// let a , b ;
// if(a > 0 && b > 0){
//   console.log(true);
// }else{
//   console.log(false);
// }


// let a = 12;
// !(a % 2 == 0) ? console.log(true) : console.log(false);

// let a, b, c;
//  a = 12;
//  b = 13 ;
//  c = 11;

//  (a > b > c ) ? console.log(true) : console.log(false); 



// let a, b, c;
//  a = 12;
//  b = 13 ;
//  c = 11;

//  ((a > b) &&  (b > c) ) ? console.log(true) : console.log(false); 


// let a, b, c;
//  a = 12;
//  b = 13 ;

//  (a % 2 == 1 && b % 2 == 1 ) ? console.log(true) : console.log(false); 


// let a, b, c;
//  a = 12;
//  b = 13 ;
//  c = 11;
//  d = 16

//  ((a > 0) >= (b >= c &&  c >= d) ) ? console.log(true) : console.log(false); 

let fruits = [{
    id: 1,
    name: "olma",
    price: 10000
},
{
    id: 2,
    name: "nok",
    price: 4000
},
{
    id: 3,
    name: "olcha",
    price: 5000
},
{
    id: 4,
    name: "Sabzi",
    price: 3000
}];

let productName = prompt('Qaysi ma\'sulotni chegirmasini o\'zgartirmoqchisiz? ');

function add(tovar ,product){
    let sum = 0;
    let oneProduct = 0
    let nameP = "";
    for (let  i = 0; i < tovar.length; i++) {
        let a = tovar[i].name.toLowerCase();
        if ( a == product.toLowerCase()) {
            let productPrice = +prompt('Qancha miqdorda chegirma qilinsin. ');
            let y = tovar[i].price * productPrice / 100;
            tovar[i].price = tovar[i].price - y;
            oneProduct = tovar[i].price;
            nameP = tovar[i].name;
        }
    }
    for (let j = 0; j < tovar.length; j++) {
        sum += tovar[j].price;
    }
    alert( `${nameP}'mahsulotining chegirmadagi narxi' ${oneProduct}. 'Umumiy mahsulot summasi' ${sum}` );

}

add(fruits, productName);

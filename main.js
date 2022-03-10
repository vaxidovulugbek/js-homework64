// 1 masala
// let a = [7,10,5,3,2]
// let c = 0
// for (let i = a.length-1; i >= 0; i--) {
//   if (a[i] % 2 == 0){
//   console.log(i)
//   c++
//   }
// }
// console.log(c)



// 2 masala ishlamadi yoki ishladi
// let a = [2,3,4,5,6]
// let n = 3
// for (let i = 0; i< a.length; i++) {
//   if (a[i] % n == 0) {
//     console.log(a[i]);
//   }
// }


// 3 masala togri
// let a = [2,3,4,5,6]
// for (let i = 0; i<a.length ; i++) {
  // if (a[i] % 2 == 0 ) {
  //   console.log(a[i]);
  // }
// }


// 4 masala 156 korish kerak
// arr = [2,77,4,5,6,7,9,8]
// for (let l = 0; l<arr.length ; l++) {
//   if (l % 2 != 0 ) {
//     for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let a = arr[j + 1]
//         arr[j + 1] = arr[j] 
//         arr[j]= a
//       }
//     }
//     }
//     console.log(arr)

//   }
// }


// 5 masala 157
// let a = [2,3,4,5,9,7]
// let b = []
// let c = []
// for (let i = 0; i < a.length; i++) {
//   if (i % 2 == 0) {
//     b[i] = a[i]
//   }
//   else if (i % 2 != 0) {
//     c[i] = a[i]
//   }
// }
// console.log(b+c);


// 6 masala 158 togri ustoz ishlab berdi
// let a = [3,5,33,-8,6,8]
// let b = ""

// for (let i = 0; i < a.length / 2; i++) {
//   b += a[i] + " " + a[a.length - 1 - i] + " "
// }
// console.log(b);




// 7 masala 159 togri
// let a = [2,4,12]
// for (let i = a.length; i > 0; i--) {
//   if (a[a.length-1] > a[i]){
//     console.log(a[i])
//     break
//   }
// }




// 8 masala 160 togri
// let a = [4,5,6,4,22, 8]
// for (let i = 0; i < a.length; i++) {
//   if (a[a.length-1] > a[i] && a[0] < a[i]) {
//     console.log(a[i])
//     break
//   }
// }





// 9 masala 161 togri
// let a = [1,10,12,2,5]
// // let k = a[0]
// // let l = a[3]
// sum = 0
// for (let i = 1; i < 4; i++) {
//   sum += a[i]
// }
// console.log(sum);



// 10 masala 162 notogri
// let a = [1,10,12,2,5]
// // let k = a[0]
// // let l = a[3]
// let sum = 0
// let k = 0
// for (let i = 1; i < 3; i++) {
//   sum = 
// //   for (let j = 1; j < 3; j++) {
// //   sum += a[j] / i
// // }
// }
// console.log(sum);



// 11 masala 163 togri
// let a = [1,2,3,4,5,6,7,8,9]
// sum = 0
// sum2 = 0
// for (let i = 0; i < 3; i++) {
//   sum += a[i]
// }
// for (let j = 3; j < a.length;j++) {
//   sum2 += a[j]
// }
// console.log(sum + sum2);





// 12 masala 164 chiqmadi
// let a = [0,5,15,20,25]
// let sum = 0
// let b = 0
// for (let i = 1; i < a.length; i++) {
//   sum = a[i] - a[i - 1]
//   b = a[i + 1] - a[i]
// }
// if (sum == b){
//   console.log("urreee");
// }
// else{
//   console.log("rrrrr");
// }




// 13 masala 165 chiqmadi



// 14 masala 166
// let a = [2, -3, 65, -12, 1, -9,8]
// let b 
// for (let i = 0; i < a.length; i++) {
//   if (i % 2 == 0 && a[i] > 0) { 
//     console.log(true);
//     break
//   }
//   else if (i % 2 != 0 && a[i] < 0) {
//     console.log(true);
//     break
//   }
//   else {
//     console.log(i)
//     break
//   }
// }




// 15 masala 167 togri
// let a = [1,10,3,2]
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     sum += i
//   }
// }
// console.log(sum);



// 16 masala 168 
// let a = [1,6,3,4,53,8]
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > a[i + 1]){
//     console.log(i);
//   }
// }


// 17 masala 169
// let a = [10,62,7,4,53,8]
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > a[i + 1]){
//     console.log(i);
//   }
// }



// 18 masala 170  shu songa yaqin bolgan sonni ekranga chiqarish
// let aarray = [1, 2, -10, 3, 5];
// let r = 4;
// let a = aarray[0];
// let result = Infinity;

// for(let i = 0; i < aarray.length; i++) {
//   let t = Math.abs(aarray[i] - r);
//     if(result > t) {
//       result = t;
//       a = aarray[i];
//     }
//   }
//   console.log(a);


// bu hato shu songa yaqin sonni chiqarish
// let a = [1,2,-10,3,5,8]
// let r = 5
// let b = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] <= r){
//     b[i] = a[i] 
//     break
//   }
// }
// console.log(b)



// 19 masala 171 togri
// let a = [1,3,2,-10,3,5,8,8]
// let b = []
// let c = []
// for (let i = 0; i < a.length; i++){
//   for (let j = 1; j < a.length; j++){
//     if (a[i] == a[j]){
//       c[i] = i
//     }
//     else if (a[i] != a[j]){
//       b[i] = a[i]
//     }
//   }
// }
// console.log(b);


// 20 masala 172 togri
// let a = [1,2]
// let b = [3,4]
// let c = []
// c = a
// a = b
// b = c
// console.log(a)
// console.log(b);



// 21 masala 173 togri
// let a = [5,9,-7,2,11]
// let b = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 5){
//     b[i] = 2*a[i];
//   }
//   else{
//     b[i] = a[i]/2;
//   }
// }
// console.log(b);


// 22 masala 174 togri
// let a = [1,2,6,8,-3]
// let b = [3,4,11,21,-5]
// let c = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > b[i]) {
//     c[i] = a[i]
//   }
//   else {
//     c[i] = b[i]
//   }
// }
// console.log(c);



// 23 masala 175 togri
// let a = [1,2,5,8,7,22,9]
// let b = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     b[b.length] = a[i]
//   }
// }
// console.log(b);


// 23 masala 176 togri
// let a = [1,2,5,10,20]
// let b = []
// let c = []
// for (let i = 0; i < a.length; i++) {
//   b[i] = a[i] + a[i + 1]
// }
// console.log(b);





// 24 masala 177 fi bo qo
// let a = [1,2,5,10,20]
// let b = 0
// c = []
// for (let i = 0; i < a.length; i++) {
//   b += a[i]
//   c[i] = b
// }
// console.log(c);



// 25 masala 178 korish kerak
// let a = [1,2,3,4,5,86,7,8,9]
// let b = []
// let c = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > a[i + 1]){
//     b[i] = a[i]
//   }
// }
// console.log(b);


// 26 masala 179
// let a = [1,1]
// let b = 6
// let c = []
// for (let i = 0; i < b; i++) {
//  c[i] =  a[i] + a[i + 1]
// }
// console.log(c);




// 27 masala 180
// let a = [6,3,99,-2,16,-1]
// let c = 0
// for (let i = 0; i < a.length; i++) {
//   // console.log(Math.min(a[i]));
//   c = Math.max(a[i])
// }
// console.log(c);



// 29 masala 182 togri
// let a = [6,9,99,2,3,16,-1]
// let b = 3
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == b) {
//     console.log(i);
//   }
// }


//  OQ LISTDAGI MASALALAR

// 51 masala
// let a = [1,2,3]
// let b = [4,5,6]
// let c = []
// c = a
// a = b
// b = c
// console.log(a,b);


// 52 masala
// let a = [1,2,3,4,5,6,7]
// let b = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 5) {
//     b[i] = 2 * a[i]
//   }
//   else {
//     b[i] = a[i] / 2
//   }
// }
// console.log(b);



// 53 masala
// let a = [2,4,5,6,7,9]
// let b = [6,7,8,9,54]
// let c = []
// for (let i = 0; i < a.length; i++) {
//   c[i] = max(a[i])
// }
// console.log(c);


// 54 masala
// let a = [2,4,5,6,7,9]
// let b = []
// let c = 0
//  for (let i = 0; i < a.length; i++) {
//    if (a[i] % 2 == 0) {
//     b[b.length] = a[i]
//     c++
//    }
//  }
// console.log(b,c);


// 55 masala
// let a = [2,4,5,6,7,9]
// let b = []
// let c = 0
//  for (let i = 0; i < a.length; i++) {
//    if (i % 2 != 0) {
//     b[b.length] = a[i]
//     c++
//    }
//  }
// console.log(b,c);


// 56 masala
// let a = [2,4,5,6,7,9]
// let b = []
// let c = 0
//  for (let i = 0; i < a.length; i++) {
//    if (i % 3 == 0) {
//     b[b.length] = a[i]
//     c++
//    }
//  }
// console.log(b,c);


// 57 masala
// let a = [2,4,5,6,7,9]
// let b = []
// for (let i = 0; i < a.length; i++)  {
//   if (i % 2 == 0) {
//     b[b.length] = a[i]
//   }
// }
// for (let i = 0; i < a.length; i++)  {
//   if (i % 2 != 0) {
//     b[b.length] = a[i]
//   }
// }
// console.log(b);


// 58 masala
// let a = [1,2,3,4,5,6,7]
// sum = 0
// let b = []
// for (let i = 0; i < a.length; i++) {
//   sum += a[i]
//   b[i] = sum
// }
// console.log(sum);


// 59 masala
// let a = [1,2,3,4,5,6,7]
// sum = 0
// let b = []
// for (let i = 0; i < a.length; i++) {
//   sum += a[i] / 2
//   b[i] = sum
// }
// console.log(sum);
































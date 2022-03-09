// 1 masala
// let a = [2,43,-2,3,8,67]
// let c = 0
// for (let i = a.length-1; i >= 0; i--) {
//   if (i % 2 == 0){
//   console.log(a[i])
//   c++
//   }
// }
// console.log(c)



// 2 masala ishlamadi
// let a = [2,3,4,5,6]
// let n = 2
// for (let i = 0; i< a.length; i++) {
//   // if (a[i] % n ==0) {
//   //   console.log(a[i])
//   // }
//     console.log(a[i] % n == 0)
// }


// 5 masala
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


// 6 masala 158
// let a = [3,5,33,6,8]
// let b = []
// for (let i = 0; i<=a.length; i++)  {
//   b[i] = a[i]
//   b[i] = a[i - 1]
//   console.log(b[i])
// }
// // for (let j = a.length; j>=0; j--)  {
// //   b[j] = a[j]
// //   console.log(b[j])
// // }






// 7 masala 159 togri lekin
// let a = [2,3,5,65,8]
// for (let i = 0; i < a.length; i++) {
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





// 9 masala 161
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
// sum = 0
// for (let i = 1; i < 3; i++) {
//   for (let j = 1; j < 3; j++) {
//   sum += a[j] / i
// }
// }
// console.log(sum);



// 11 masala 163 chiqmadi
// let a = [1,10,12,2,5]
// sum = 0
// for (let i = 1; i < 4; i++) {
//   sum += a[i]
// }
// console.log(sum);





// 12 masala 164 chiqmadi
// let a = [1,5,10,15,20]
// for (let i = 0; i < a.length; i++) {

// }



// 13 masala 165 chiqmadi



// 14 masala 166
// let a = [-2, 3, -65, -12, -1, 9]

// for (let i = 0; i < a.length; i++) {
//   if (i % 2 == 0 && a[i] > 0) { 
//     console.log(a[i]);
//   }
//   // else if (i % 2 != 0 && i > 0) {
//   //   console.log(a[i]);
//   // }
//   // else {
//   //   console.log(a[i])
//   //   break
//   // }
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



// 16 masala 168 korish kerak


// 17 masala 169 korish kerak


// 18 masala 170 korish kerak
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



// 19 masala 171 korish kerak
// let a = [1,2,-10,3,5,8,8]
// for (let i = 0; i < a.length; i++){
//   for (let j = 1; j < a.length; j++){
//     if (a[i] == a[j]){
//       continue
//     }
//   }
// }

// console.log(a);


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



// 23 masala 175 tekshirish kerak
// let a = [1,2,5,8,7,22,9]
// let b = []
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     b[i] = a[i]
//   }
// }
// console.log(b);


// 23 masala 176 korish kerak
// let a = [1,2,5,10,20]
// let b = []
// for (let i = 0; i < a.length; i++) {
//   b[i] = a[i] + a[i + 1]
// }
// console.log(b);









// masala
// let a = [1,2,5,10,20]
// let b = []
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a.length; i++) {
//     b[i] = a[i] + a[j]
//   }
// }
// console.log(b); 









// 24 masala 177 korish kerag fionacci bop qoldi
// let a = [1,2,5,10,20]
// let b = 0
// c = []
// for (let i = 0; i < a.length; i++) {
//   b += a[i]
//   c[i] = b
// }
// console.log(c);



// 25 masala 178



// 26 masala 179




// 27 masala 180
// let a = [6,3,99,2,16,-1]
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























// for (let i = 0; i<a.length; i++) {
//   for (let j = 0; j<a.length; j++) {
//     b[i] = a(i-1)
//     console.log(b[i])
//   }
// }







// if (i % 2 == 0) {
//   console.log(a[i]);
// }



// let arr = [2,1,5,3,23,9]
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++) {
  // if (arr[j] > arr[j + 1]) {
  //   let a = arr[j + 1]
  //   arr[j + 1] = arr[j] 
  //   arr[j] = a
  // }
// }
// }
// console.log(arr)



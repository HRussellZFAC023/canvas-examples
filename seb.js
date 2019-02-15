class People{
  constructor(name, name2){
    this.name = name;
    this.secondName = name2;
  }
}

let a = new People('Seb', 'Will');
console.log(a);


let f = async () => {
  console.log('wow');
};

let x = async () => {
  throw 'BIG ASS ERROR'
};

f()
  .then(() => {
    x()
      .then(() => [
        // ...
      ])
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });







// modole.exports = class Seb {
//
// }

// let bubble = [5, 4, 7, 2];
// let sorted = true
// let len = bubble.length;
// console.log(bubble);
// let sort = (bubble, lent) => {
//   console.log("started the sort");
//   for (let f = 0; f < lent; f++){
//     if (bubble[f] > bubble[f + 1]){
//       let temp = bubble[f];
//       bubble[f] = bubble[f + 1]
//       bubble[f + 1] = temp;
//       sorted = false;
//       console.log(bubble);
//     }
//   }
//   if (sorted == false){
//     sorted = true;
//     lent -= 1;
//     sort(bubble, lent);
//   }
//   console.log("done :)");
// }
// sort(bubble, 2)
// let o = {
//   wow: 'this is cool',
//   cool: {
//     a: [1,2,3]
//   }
// };
//
//
// console.log(o.cool.a);




// let a = (f) => {
//   return f | 0
// };

// console.log(a(0.666));
// for(let f = 0; f < 10; f++){
//   console.log(f );
// }

// if (a(1.666) == 1) {
//   console.log('wow');
// }

// let b = ['1', '2', 3];

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// let p = new Person('Seb');
//
// console.log(p.name);

// const words = "How can mirrors be real if our eyes aren't real";
// // steps 1. divide the words 2. create new word
// const arr = words.split(" ");
// const Newarr = [];

// for (i = 0; i < arr.length; i++) {
//   Newarr.push(arr[i].charAt(0).toLocaleUpperCase() + arr[i].slice(1));
// }

// console.log(Newarr.join(" "));

// const firstWord = function (sentence) {
//   const newArr = [];dsdsd
//   const newSentence = [];
//   newArr.push(...sentence.split(" "));
//   for (i = 0; i < newArr.length; i++) {
//     newSentence.push(
//       newArr[i].charAt(0).toLocaleUpperCase() + newArr[i].slice(1)
//     );
//   }
//   return newSentence.join(" ");
// };

const firstWord = function (sentence) {
  const newSentence = [];
  for (i = 0; i < sentence.split(" ").length; i++) {
    newSentence.push(
      sentence.split(" ")[i].charAt(0).toLocaleUpperCase() +
        sentence.split(" ")[i].slice(1)
    );
  }
  return newSentence.join(" ");
};

console.log(firstWord("hello me ronald"));

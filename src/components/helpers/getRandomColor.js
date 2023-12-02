// export function getRandomColor() {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   return {
//     red,
//     green,
//     blue,
//   };
// }

export function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

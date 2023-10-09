// performing sorting of an array in decending order
const numbers = [1,2,3,4,5,6];

function descendingSort(a, b) {
  return b - a;
}

numbers.sort(descendingSort);

console.log(numbers);

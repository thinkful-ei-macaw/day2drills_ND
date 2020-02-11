// Drill 1 - do the min/max drill in the loops and array checkpoint but using a while loop instead of a foor loop

function max(numbers) {
  let i = 0;
  let largest = numbers[i];
  while (i < numbers.length) {
    if (numbers[i] > largest) 
       largest = numbers[i];
       i++;
  }
  console.log(largest);
}

max([1, 2, 3, 5, 4]);

function min(numbers) {
    let i = 0;
    let smallest = numbers[i];
    while (i < numbers.length) {
      if (numbers[i] < smallest) 
         smallest = numbers[i];
         i++;
    }
    console.log(smallest);
  }
  
  min([1, 2, 3, 5, 4]);
  
// drill 2 
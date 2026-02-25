const form = document.getElementById("form");
let Array = [];
let NewNumber;
let index = 0;
function saveInput(){
    form.addEventListener("change",(e) =>{
    e.preventDefault();
    NewNumber = parseInt(e.target.value);
    index = Array.length;
    if(!isNaN(NewNumber)){
      Array.push(NewNumber);
      Array.sort((a,b) => a-b);
    }
});
}
saveInput();
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    console.log(Array);  
})
let array = [];
// Bubble Sort.
function bubble(array){
 for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - 1; j++){
        if(array[j] > array[j + 1]){
            // let temp = array[j];
            // array[j] = array[j + 1];
            // array[j + 1] = temp;
            [array[j], array[j+1]] = [array[j+1],array[j]]
        }
    }
 }
 console.log(array);
}
bubble([30,1,35,10,20,50,67,32,254,100,5,14,23]);
// Selection Sort.
function selectionSort(array){
    for(let i = 0; i < array.length - 1;i++){
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;   
            }
        }
        [array[i],array[minIndex]] = [array[minIndex],array[i]];     
    }
    console.log(array);
}
selectionSort([20,10,5,2,3,4,1,30])
// Quick Sort
function quickSort(array){
    if(array.length === 1){
        return array;
    }
const pivot = array[array.length - 1];
const rightarray = [];
const leftarray = [];

for(let i = 0; i < array.length - 1; i++){
    array[i] < pivot ? leftarray.push(array[i]) : rightarray.push(array[i]);
}
if(leftarray.length > 0 && rightarray.length > 0){
    return [...quickSort(leftarray), pivot, ...quickSort(rightarray)];
}else if(leftarray.length > 0){
    return [...quickSort(leftarray),pivot]
}else{
    return[pivot, ...quickSort(rightarray)]
 }
}

console.log(quickSort([10,20,1003,120,30,40,45,783,320,36,22,32,235,890,424,51,87,999,2043,100]));












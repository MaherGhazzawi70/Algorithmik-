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












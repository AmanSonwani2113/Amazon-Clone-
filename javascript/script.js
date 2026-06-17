// let hellobutton=document.querySelector('button');
// hellobutton.addEventListener('click',showMsg);
// function showMsg(){
//     alert("Namaste world");
// }
let hellobutton=document.querySelector('button');
hellobutton.addEventListener('click',inputMsg);
function inputMsg(){
   let name=prompt('enter new word');
   hellobutton.textContent='namaste '+name;
}
// 1. make variable DOM for 
// 2. make a variable for generating random number
// 3. make a variable that consist of arrays of colours
// 4. add an event listener
// 5. make the function to execute the event listener


var button = document.getElementById('btn');
var body = document.getElementById('jumbotron');
var random = Math.floor((Math.random() * 10) + 0);
// var colours = ['white', 'blue', 'green', 'yellow', 'black', 'pink', 'navy', 'brown', 'magenta', 'rose'];
var colours = ['#0277BD', '#FF9800','#6A1B9A', '#AED581', '#29B6F6', '#BCAAA4', '#d32f2f', '#607D8B', '#212121', '#0097A7'];

button.addEventListener('click', activate);

function activate(){
    body.style.backgroundColor=colours[random];
    random = Math.floor((Math.random()*10)+0);
}
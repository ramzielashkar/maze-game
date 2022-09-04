document.addEventListener("DOMContentLoaded", () => {

var s = document.getElementById('start');
var walls = document.querySelectorAll('.boundary');
var name = document.getElementsByTagName('h1')[0];
var end = document.getElementById('end');
var status = document.getElementById('status');
var i;
var users;
var person = prompt("Please Enter Your Name");
var score = 0;
var exists = 0;
var clicked = false;
var lose = false;
var result = document.getElementsByTagName('p')[1];




if(!localStorage.getItem("users")){
  localStorage.setItem('users', users);
}
users = localStorage.getItem("users");
users = users.split(",");
console.log(users);
for(i=0; i<users.length; i++){
  if(users[i] == person){
    //score = 1;
    exists = 1;

    console.log("user exists");
  }
}

if(exists == 0){
  users.push(person);
  console.log("new user");
}

localStorage.setItem('users', users);



name.innerHTML = "Hello " + person + " Enjoy!";


s.addEventListener("mouseover", function() {
  lose = false;
  clicked = true;
  s.style.backgroundColor = "red";


if(clicked == true){
  console.log("true");
  for(i=0; i<walls.length; i++){
    walls[i].addEventListener("mouseover", lost);
  }

}
document.addEventListener("mousemove", mouse);

});


s.addEventListener("click", function() {
  s.style.backgroundColor = "#88ff88";
      for(i=0; i<walls.length; i++){
      walls[i].style.backgroundColor = "#eeeeee";
      walls[i].removeEventListener("mouseover", lost);
    }
    clicked = false;
    status.innerHTML = "Begin by moving your mouse over the S.";


});

end.addEventListener("mouseover", function() {
  console.log("end");
  if(clicked == true & lose == false){
status.innerHTML = " Congratulations, you Won!! ";
for(i=0; i<walls.length; i++){
walls[i].removeEventListener("mouseover", lost);
end.style.backgroundColor = "#88ff88";
}
score = score +5;
result.innerHTML = "Score is: "+ score;

}
});




//s.addEventListener("mouseout", resetcolor);



  console.log("Hello World!");

  function lost() {
    for(i=0; i<walls.length; i++){
    walls[i].style.backgroundColor = "red";
  }
  lose = true;
  score = -10;
  result.innerHTML = "Score is: "+ score;
  };


result.innerHTML = "Score is: "+ score;

function mouse() {
  const {
   clientX,
   clientY
 } = event;
 if(clientY >400 || clientY<150){
   lose = true;
 }
 console.log(clientX, clientY)

};



});

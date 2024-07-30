//Task1
document.getElementById("heading").innerText = "Welcome"
//Task2
document.querySelector(".background").style.backgroundColor = "red"
//Task3
let newDiv = document.createElement("div")
newDiv.innerHTML = "Hi i am created by js."
document.body.appendChild(newDiv)
// Task4
let newLi = document.createElement("li")
newLi.innerHTML  = "test"
document.querySelector(".list").appendChild(newLi)
// Task5
setTimeout(()=>{document.querySelector(".remove").remove()},4000)
//Taks6
setTimeout(()=>{document.querySelector(".last").lastElementChild.remove();},2000)
// Task7
document.querySelector(".image").src = "https://th.bing.com/th/id/OIP.vNw_hcxUnxGNxCk00eO6rQHaE8?rs=1&pid=ImgDetMain";
//Task8
document.querySelector(".image").classList.add("size");
//Task9
document.getElementById("btn1").addEventListener("click",() => {
    document.getElementById("para").innerHTML = "I was changed by the button click."
})
//Task10
document.querySelector(".list").addEventListener("mouseover",()=>{
    document.querySelector(".list").style.borderColor = "red";
})


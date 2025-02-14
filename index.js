var header = document.getElementById("header"); {
header.classList.add("header")
var h1 = document.createElement("h1");
var paragraph = document.createElement("p");
h1.textContent = "JavaScript Made This!!";
paragraph.innerHTML = '<span class="name">Avery</span> wrote the JavaScript';
header.append(h1);
header.append(paragraph);
};

const messages = document.querySelectorAll('.message');
        
        messages[0].textContent = "I have something exciting to talk about";
        messages[1].textContent = "What's up?!";
        messages[2].textContent = "I have so much corn for you!";
        messages[3].textContent = "OMG thats amazing, I love farming!"; 

/*let leftMessage = document.querySelector(".message.left");
let rightMessage = document.querySelector(".message.right");
leftMessage.textContent = leftMessage.textContent.replace('serious', 'exciting');
rightMessage.textContent = rightMessage.textContent.replace('don\'t', 'do');*/

var clear = document.getElementById("clearButton")
clear.addEventListener('click', () => {
        document.querySelectorAll('.message').forEach(message => {
            message.textContent = '';
        });
    });

/*const toggleBtn = document.getElementById("theme-drop-down")
document.getElementById("themeDropDown").addEventListener("change", function() {
document.body.classList.toggle("theme-two", this.value === "theme-two")
   
   tglBtn.classList.toggle("theme-two");
for(let i = 0; i < messages.length; i++)
    messages[i].classList.toggle("theme-two");
});*/
/*tglBtn.classList.toggle("theme-two");
for(let i = 0; i < messages.length; i++)
    messages[i].classList.toggle("theme-two", this.value === "theme-two");*/

    const toggleBtn = document.getElementById("themeDropDown");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("theme-two");
    });



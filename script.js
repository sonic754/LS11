const name = document.getElementById("title")
console.log(name);

const familiya = document.getElementById("desc")

const age = document.getElementById("age")

const body = document.getElementById("tana")


const username = prompt("Ismingizni kiriting!")
const userfamiliya = prompt("Familiyagizni kiriting!")
const userage = prompt("Yoshizzi kiriting!")
const background = prompt("orqa fon qanaqa rang bolsin!")
name.innerHTML ="Ism:" + username
body.style.background = background
name.classList.add("text-red-400","text-2xl")

familiya.innerHTML = "Familiya:" + userfamiliya
age.innerHTML ="Yosh:" + userage
familiya.classList.add("text-red-400","text-2xl")
age.classList.add("text-red-400", "text-2xl")




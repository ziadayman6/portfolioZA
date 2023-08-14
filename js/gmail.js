var form = document.getElementById("frm")
var namee = document.getElementById("name")
var email = document.getElementById("email")
var body = document.getElementById("body")
var btn = document.getElementById("btn")
var show = document.getElementById("show")

function sendmsg(){
    Email.send({
        SecureToken : "c09c7938-8700-47d6-ad69-32836297d0f4",
        To : 'zayman655@gmail.com',
        From : 'zayman655@gmail.com',
        Subject : email.value,
        Body : namee.value + ':' + body.value
    }).then(
        function(){
            show.style.display = "block"
            setTimeout(function() {
                show.style.display = "none"
                window.location.href = "home.html"
            }, 2000)    
        }
    )
}

form.addEventListener("submit",function(event){
    event.preventDefault()
    if (namee.value === "") {
        namee.style.outline = "3px solid red"
        namee.style.color = "red"
    }
    if (email.value === "") {
        email.style.outline = "3px solid red"
        email.style.color = "red"
    }
    if (body.value === "") {
        body.style.outline = "3px solid red"
        body.style.color = "red"
    }
    if (namee.value !== "" && email.value !== "" && body.value !== "") {
        sendmsg()
    }
})

function press(event){
    if(this == namee){
        namee.style.outline='none'
        namee.style.color='black'
    }
    if(this == email){
        email.style.outline='none'
        email.style.color='black'
    }
    if (this == body) {
        body.style.outline = 'none'
        body.style.color = 'black'
    }
}

namee.addEventListener('click',press)
body.addEventListener('click',press)
email.addEventListener('click',press)
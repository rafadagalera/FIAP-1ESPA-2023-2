let messages = []

const form = document.querySelector("form")
const message = document.getElementById("message");
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const messageText = message.value
    const newMessageAPI = {"role": "user", "content": `${messageText}`}
    const chatLog = document.getElementById("chat-log")

    messages.push(newMessageAPI)
    message.value = ""
    console.log(messages)

    const messageElementDiv = document.createElement("div")
    messageElementDiv.classList.add("message")
    messageElementDiv.classList.add("message--sent")
    messageElementDiv.innerHTML = `<div class = "message__text">${messageText}</div>`
    chatLog.appendChild(messageElementDiv)

    fetch("http//localhost:3000/sendMessage/",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            messages
        })
    })
});


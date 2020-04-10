let message = document.querySelector( '.chat-widget__messages' );
let nowDate = new Date();
let date = `${nowDate.getHours()} : ${nowDate.getMinutes()}`;
let botTalk = `
  <div class="message">
    <div class="message__time">${date}</div>
    <div class="message__text">${"Добрый день"}</div>
  </div>
`;
let userMessage = document.getElementById("chat-widget__input");


function getMessage() {
    const messageText = [
            'ошбились чатом?',
            'проснулись!',
            'это как вообще?',
            'своя голова на что?',
            'это чего такое?',
            'точно туда пишите?'
        ],
        index = Math.floor(Math.random()*messageText.length);
    message.innerHTML +=  `
    <div class="message">
    <div class="message__time">${date}</div>
    <div class="message__text">${messageText[index]}</div>
    </div>
    `;

};


document.querySelector(".chat-widget__side").addEventListener("click", e=> {
    document.querySelector(".chat-widget").classList.add("chat-widget_active")
    message.innerHTML += botTalk;
});

userMessage.addEventListener("keydown", e=> {
   if (e.keyCode === 13 && userMessage.value.length > 0){
       message.innerHTML +=  `
    <div class="message message_client">
    <div class="message__time">${date}</div>
    <div class="message__text">${userMessage.value}</div>
    </div>
    `;
       getMessage();
    userMessage.value = "";
   }
})



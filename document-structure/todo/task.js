let task = document.getElementById("task__input")
let taskList = document.getElementById("tasks__list")


    document.addEventListener("keydown", (event)=> {
        if (event.keyCode === 13) {
        let taskMessage = `<div class="task">
    <div class="task__title">
      ${task.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
        taskList.insertAdjacentHTML("afterbegin", taskMessage)
        task.value = "";
        let taskRemove = Array.from(document.getElementsByClassName("task__remove"))
        taskRemove.forEach(elem => {
                elem.addEventListener("click",()=>{
                    elem.parentElement.remove()
                })
            })
        event.preventDefault()
    }
})


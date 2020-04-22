let editor = document.getElementById("editor")

window.addEventListener("unload", ()=> {
    localStorage.text = JSON.stringify(editor.value)
})

window.addEventListener("load", (e)=> {
    try {
        return editor.value = JSON.parse(localStorage.text)
    } catch (e) {
        return null;
    }
})

document.getElementById("button").addEventListener("click", ()=> {
    localStorage.clear();
    editor.value = "";
})
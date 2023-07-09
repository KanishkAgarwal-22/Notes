let section2 = document.getElementById("section-2")
let section3 = document.getElementById("section-3")
let inputBox = document.getElementById("inputBox")
let headerBox = document.getElementById("headerBox")
let crossElements;

function Add(){
    if (inputBox.value === "") {
        alert("You must write something!")
    }
    else {
        let div = document.createElement("div")
        div.classList.add("note-box")
    
        let h1 = document.createElement("h1")
        h1.innerHTML = headerBox.value
        if (headerBox.value === "") {h1.innerHTML = "Note"}
    
        let p = document.createElement("p")
        p.innerHTML = inputBox.value
    
        let h5 = document.createElement("h5")
        h5.innerHTML = "&#10060"
        h5.classList.add("cross")
    
        let btn = document.createElement("button")
        btn.innerHTML = "View in Detail"
        btn.onclick = function(){View(this)}
    
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(btn)
        div.appendChild(h5)
    
        section2.appendChild(div)
    }
    Update()                   // re-assigns values in [crossElements] and then adds an onclick event where @Remove function is called.
    inputBox.value = ''
    headerBox.value = ''
    saveData()
}

function Update(){
    crossElements = document.getElementsByClassName("cross")

    for(let i = 0; i < crossElements.length;i++){
        crossElements[i].onclick = function() { Remove(crossElements[i]) }
    }
}

function Remove(e){
    console.log(e)
    Update()
    e.parentElement.remove()
    saveData()
}

function saveData() {
    localStorage.setItem('data', section2.innerHTML)
}

function showTask() {
    section2.innerHTML = localStorage.getItem('data')
}

function Hide(e) {
    e.parentElement.parentElement.remove()
}

function View(e){
    let noteBox = e.parentElement
    let heading = noteBox.children[0].innerHTML
    let text = noteBox.children[1].innerHTML

    let div = document.createElement("div")
    div.classList.add("view-mode")

    let div2 = document.createElement("div")
    div2.classList.add("view-mode-note-box")

    let h1 = document.createElement("h1")
    h1.innerHTML = heading

    let p = document.createElement("p")
    p.innerHTML = text

    let btn = document.createElement("button")
    btn.innerHTML = "&#10060"
    btn.onclick = function() {Hide(this)}

    div2.appendChild(h1)
    div2.appendChild(p)
    div2.appendChild(btn)
    div.appendChild(div2)
    section3.appendChild(div)
}

showTask()
Update()
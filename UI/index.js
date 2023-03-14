let inp = document.querySelector(".from-control")
let btn = document.querySelector(".btn")
btn.onclick = (e) => {
    e.preventDefault()
    postData
}
const posData = (e) => {
    let value = ino.value 
    let obj = {
        name: value 
    }
    if(value === ""){
        inp.style.border = "2px solid red"
        alert("To'ldir")
    } else {
        fetch("http://localhost:3000/data" {
            method: "Post",
            headers : {
                "Content-Type" : "  application/json",
            },
            body: Json.stringify(obj)
        }).then((message)  => {
            message.status === 201 ? alert(message.statusText) : alert(message.statusText)
        })
    }
}
const getData = () => {
    const list_group = document.querySelector(".list_group")

    console.log(list_group)

    fetch("http://localhost:3000/data")
    .then(res => res.json ())
    .then((data) => {
        data.forEach( element => {
            list_group.innerHTML += `
            <li class="list-group-item"><b>Name</b> : ${element.name} </li>
            ` 
        })
    })
}
getData()


let menu = document.querySelector(".menu")
menu.onclick = () => {
  menu.style.display = "block"
  menuL.style.display = "none"
}
let menuL = document.querySelector(".menuL")
// menuL.onclick = () => {
//   }
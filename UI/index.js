// let inp = document.querySelector(".from-control")
// let btn = document.querySelector(".btn")
// btn.onclick = (e) => {
//     e.preventDefault()
//     postData
// }
// const posData = (e) => {
//     let value = ino.value 
//     let obj = {
//         name: value 
//     }
//     if(value === ""){
//         inp.style.border = "2px solid red"
//         alert("To'ldir")
//     } else {
//         fetch("http://localhost:3000/data" {
//             method: "Post",
//             headers : {
//                 "Content-Type" : "  application/json",
//             },
//             body: Json.stringify(obj)
//         }).then((message)  => {
//             message.status === 201 ? alert(message.statusText) : alert(message.statusText)
//         })
//     }
// }
// const getData = () => {
//     const list_group = document.querySelector(".list_group")

//     console.log(list_group)

//     fetch("http://localhost:3000/data")
//     .then(res => res.json ())
//     .then((data) => {
//         data.forEach( element => {
//             list_group.innerHTML += `
//             <li class="list-group-item"><b>Name</b> : ${element.name} </li>
//             ` 
//         })
//     })
// }
// getData()


// let menu = document.querySelector(".menu")
// menu.onclick = () => {
//   menu.style.display = "block"
//   menuL.style.display = "none"
// }
// let menuL = document.querySelector(".menuL")
// menuL.onclick = () => {
//   }


const getData = async () => {
  const url = await fetch("http://localhost:3000/data")
  const json = await url.json()
  const list_group = document.querySelector(".list-group")
  json?.map((res) => {
      list_group.innerHTML += `
          <li class="list-group-item"><b>Name: </b>${res?.name} <br> ${res?.comment}</li>
      `
  })
}
getData()
const btn = document.querySelector(".postData")
btn.onclick = (e) => {
  e.preventDefault()
  postData()
}
const postData = () => {
  const inp = document.querySelector(".form-control")
  const val = document.querySelector(".haa")
  let value = inp.value
  let value2 = val.value
  if (value === "") {
      inp.style.border = "2px solid red"
      alert("To'ldiring")
  } else {
      fetch("http://localhost:3000/data", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: value, comment:value2 })
      }).then((msg) => alert(msg.statusText))
  }
}
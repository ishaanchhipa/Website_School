const form=document.querySelector('#addatt')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name=document.querySelector('#name').value
const reg=document.querySelector('#reg').value
const date=document.querySelector('#date').value
const attandence=document.querySelector('#attandence').value

let body
console.log(body);

    fetch("https://tconectapi.herokuapp.com/api/school/addattendance", {
        method: "post",
		body:{
            name: name,
            reg: reg,
            date: date,
            attandence: attandence
        }
    }).then((result) => {
        result.json().then((res) => {
            console.log(res);
        })
    }).catch((err) => {
        console.log(err.message);
    })
})
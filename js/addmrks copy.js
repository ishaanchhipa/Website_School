const form=document.querySelector('#addmrks')
const name=document.querySelector('#name')
const reg=document.querySelector('#reg')
const course=document.querySelector('#course')
const marks=document.querySelector('#marks')

let body={
    name: name,
    reg: reg,
    course: course,
    marks: marks
}
console.log(body);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://tconectapi.herokuapp.com/api/school/addmarks", {
        method: "post",
		headers: {"Content-Type":"application/json"},
		body:body
    }).then((result) => {
        result.json().then((res) => {
            console.log(res);
        })
    }).catch((err) => {
        console.log(err.message);
    })
})
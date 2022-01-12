const form=document.querySelector('#addmrks')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name=document.querySelector('#name').value
    const reg=document.querySelector('#reg').value
    const course=document.querySelector('#course').value
    const marks=document.querySelector('#marks').value

let body
console.log(body);

    fetch("https://tconectapi.herokuapp.com/api/school/addmarks", {
        method: "post",
		body:{
            name: name,
            reg: reg,
            course: course,
            marks: marks
        }
    }).then((result) => {
        result.json().then((res) => {
            console.log(res);
        })
    }).catch((err) => {
        console.log(err.message);
    })
})
const form=document.querySelector('#addtcr')
const name=document.querySelector('#name')
const TID=document.querySelector('#TID')
const pass=document.querySelector('#pass')
const date=document.querySelector('#date')
const age=document.querySelector('#age')
const gender=document.querySelector('#gender')
const course=document.querySelector('#course')
const contact=document.querySelector('#contact')
const address=document.querySelector('#address')

let body={
	name: name,
	TID: TID,
	pass: pass,
	date: date,
	age: age,
	gender:gender,
	course: course,
	contact: contact,
	address: address
}
console.log(body);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://tconectapi.herokuapp.com/api/school/registertec", {
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
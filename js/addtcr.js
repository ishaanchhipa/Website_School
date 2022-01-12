const form=document.querySelector('#addtcr')

form.addEventListener("submit", (e) => {
    e.preventDefault();
	const name=document.querySelector('#name').value
const TID=document.querySelector('#TID').value
const pass=document.querySelector('#pass').value
const date=document.querySelector('#date').value
const age=document.querySelector('#age').value
const gender=document.querySelector('#gender').value
const course=document.querySelector('#course').value
const contact=document.querySelector('#contact').value
const address=document.querySelector('#address').value

let body
console.log(body);

    fetch("https://tconectapi.herokuapp.com/api/school/registertec", {
        method: "post",
		body:{
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
    }).then((result) => {
        result.json().then((res) => {
            console.log(res);
        })
    }).catch((err) => {
        console.log(err.message);
    })
})
const form=document.querySelector('#addstu')
const name=document.querySelector('#name')
const mname=document.querySelector('#mname')
const fname=document.querySelector('#fname')
const regno=document.querySelector('#regno')
const pass=document.querySelector('#pass')
const dob=document.querySelector('#dob')
const age=document.querySelector('#age')
const gender=document.querySelector('#gender')
const sclass=document.querySelector('#sclass')
const contact=document.querySelector('#contact')
const addr=document.querySelector('#addr')

let body={
	name: name,
	mname: mname,
	fname: fname,
	reg: regno,
	pass: pass,
	date: dob,
	age: age,
	gender:gender,
	cls: sclass,
	contact: contact,
	address: addr
}
console.log(body);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://tconectapi.herokuapp.com/api/school/registerstu", {
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

const form=document.querySelector('#addstu')


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const name=document.querySelector('#name').value
const mname=document.querySelector('#mname').value
const fname=document.querySelector('#fname').value
const regno=document.querySelector('#regno').value
const pass=document.querySelector('#pass').value
const dob=document.querySelector('#dob').value
const age=document.querySelector('#age').value
const gender=document.querySelector('#gender').value
const sclass=document.querySelector('#sclass').value
const contact=document.querySelector('#contact').value
const addr=document.querySelector('#addr').value
	let body
	console.log(body);
    
    fetch("https://tconectapi.herokuapp.com/api/school/registerstu", {
        method: "post",
		body:{
			'name': name,
			'mname': mname,
			'fname': fname,
			'reg': regno,
			'pass': pass,
			'date': dob,
			'age': age,
			'gender':gender,
			'cls': sclass,
			'contact': contact,
			'address': addr
		}
    }).then((result) => {
        result.json().then((res) => {
            console.log(res);
        })
    }).catch((err) => {
        console.log(err.message);
    })
})

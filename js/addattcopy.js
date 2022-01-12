const form=document.querySelector('#att')
form.addEventListener("onload", (e) => {
    fetch("https://tconectapi.herokuapp.com/api/school/addattendance", {
        method: "post",
		headers: {"Content-Type":"application/json"},
		body:body
    }).then((result) => {
        result.json().then((res) => {
            console.log(res);
            const stuatt = document.getElementById('stuinfo');
            const data = [{
                name: 'Yashashvi Kala',
                reg: 'GPPTH123',
                date: '28-11-2021'
                attandence: 'Present'
              },
              {
                name: 'Yasu Yasu',
                reg: 'GPPTH120',
                date: '28-11-2021'
                attandence: 'Absent'
              },
              {
                name: 'Yashi',
                reg: 'GPPTH124',
                date: '28-11-2021'
                attandence: 'Present'
              }
            ]
            console.log(data)
            let view = data.map((product) => {
               return<><tr>
                 <th>Name:</th>
                 <th>Registration No:</th>
                 <th>Date:</th>
                 <th>Attendance:</th>
               </tr><tr>
                   <td>${product.name}</td>
                   <td>${product.reg}</td>
                   <td>${product.date}</td>
                   <td>${product.attandence}</td>
                 </tr></>
            });
            var createList = document.createElement('table');
            createList.append(view)
        })
    }).catch((err) => {
        console.log(err.message);
    })

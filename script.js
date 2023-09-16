const gntBtn = document.querySelector('#generate');
const nameSpn = document.querySelector('#name')
const emailSpn = document.querySelector('#email')
const phoneSpn = document.querySelector('#phone')
const locationSpn = document.querySelector('#location')
const ageSpn = document.querySelector('#age')
const imgSpn = document.querySelector('#img')



function changePerson(){
    const url = 'https://randomuser.me/api/'
    showSpinner()
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        hideSpinner()
        const name = data.results[0].name.first
        const email = data.results[0].email
        const phone = data.results[0].phone
        const location = data.results[0].location.street.name
        const age = data.results[0].dob.age
        const img = data.results[0].picture.medium
            if(data.results[0].gender === 'female') {
                document.body.style.backgroundColor = 'rebeccapurple'
                document.body.style.color = 'white'
            } else {
                document.body.style.backgroundColor = 'steelblue'
                document.body.style.color = 'black'
            }
        nameSpn.innerHTML = `<span class="font-bold">Name: ${name}</span>`
        emailSpn.innerHTML = `<span class="font-bold">Email: ${email} </span>`;
        phoneSpn.innerHTML = `<span class="font-bold">Phone: ${phone}</span>`;
        locationSpn.innerHTML = `<span class="font-bold">Location: ${location}</span>`;
        ageSpn.innerHTML = `<span  class="font-bold">Age: ${age}</span> `
        imgSpn.setAttribute('src', img)
    })
}


function showSpinner(){
    document.querySelector('.spinner').style.display = 'block'
}

function hideSpinner(){
    document.querySelector('.spinner').style.display = 'none'
}





gntBtn.addEventListener('click', changePerson)
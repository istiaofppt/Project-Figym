const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')
const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the field has a value
    if(contactUser.value === ''){
        // Add and remove color

        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // Show message

        contactMessage.textContent = 'You must enter your email 👆'

        // Remove message four seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_du4zedy', 'template_nz1k82p', '#contact-form', 'hrgZEiYoXKPwm0xzg')
            .then(() => {
                // Add and Show message

                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully 🥳'

                        // To clear the input field
        contactUser.value = ''
                // Remove message four seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 4000)
                    }, (error) =>{
                        // Mail sending error
                        alert('OOPS! SOMETHING HAS FAILED...', error)
                    })
            }
}

contactForm.addEventListener('submit', sendEmail)
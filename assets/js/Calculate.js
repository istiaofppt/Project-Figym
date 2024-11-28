const calculateForm= document.getElementById('calculate-form'),
      calculateCm= document.getElementById('calculate-cm'),
      calculateKg= document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')
const calculateBmi = (e) =>{
    e.preventDefault()
    // Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        	// Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight ಠ_ಠ  '

        // Remove message three seconds

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else{
        // BMI Formula
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))

        // Show your health status
        if(bmi < 18.5){
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}  and you are skinny 😥`
        }  else if(bmi < 25){
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}  and you are healthy 😀`
        } else if(bmi < 30) {
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}  and you are overweight 😐`
        }  else if(bmi < 40) {
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi}  and you are obese 😣`
        } else {
             // Add color and display message
             calculateMessage.classList.add('color-green')
             calculateMessage.textContent = `Your BMI is ${bmi}  and you are extremely obese 😣😲`
        }

        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    }

}   

calculateForm.addEventListener('submit', calculateBmi)
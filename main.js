
class AgeCalculator {
    constructor(yearInput, monthInput, dateInput, calculateButton, ageYears, ageMonths, ageDays) {
        this.yearInput = yearInput;
        this.monthInput = monthInput;
        this.dateInput = dateInput;
        this.calculateButton = calculateButton;
        this.ageYears = ageYears;
        this.ageMonths = ageMonths;
        this.ageDays = ageDays;
        this.calculateButton.addEventListener('click', this.calculateAge.bind(this));
    }
         
    calculateAge() {
      const year = parseInt(this.yearInput.value);
       const month = parseInt(this.monthInput.value);
       const date = parseInt(this.dateInput.value);

      if (isNaN(date) || date < 1 || date > 31) {
           notificationOne.classList.remove('hidden1');
           let dDay = document.querySelector('.d');
           dDay.style.color = 'hsl(0, 100%, 67%)';
           dateInput.style.border = '1px solid hsl(0, 100%, 67%)';

           setTimeout(() => {
            notificationOne.classList.add('hidden1');
        },3000);
           } else {
           notificationOne.classList.add('hidden1');
           }
           
           if (isNaN(month) || month < 1 || month > 12) {
           notificationTwo.classList.remove('hidden2');
           const dmonth = document.querySelector('.m');
           dmonth.style.color = 'hsl(0, 100%, 67%)';
           monthInput.style.border = '1px solid hsl(0, 100%, 67%)';
           setTimeout(() => {
            notificationTwo.classList.add('hidden2');
        },3000);
           } else {
           notificationTwo.classList.add('hidden2');
           }
           
           if (isNaN(year) || year > new Date().getFullYear()) {
           notificationThree.classList.remove('hidden3');
           const dyear = document.querySelector('.y');
           dyear.style.color = 'hsl(0, 100%, 67%)';
           yearInput.style.border = '1px solid hsl(0, 100%, 67%)';
            setTimeout(() => {
            notificationThree.classList.add('hidden3');
        },3000);
           } else {
           notificationThree.classList.add('hidden3');
           }
           
          
         if (isNaN(date) || date < 1 || date > 31 || isNaN(month) || month < 1 || month > 12 || isNaN(year) || year > new Date().getFullYear()) {
           
           return;
           }
           
           const dob = new Date(year, month - 1, date);
           const today = new Date();
           const ageInMilliseconds = today - dob;
           
           const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
           const months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
           const days = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.44) / (1000 * 60 * 60 * 24)));
           
           this.ageYears.textContent = years;
           this.ageMonths.textContent = months;
           this.ageDays.textContent = days;
           }  
           }
           
           const yearInput = document.getElementById('year');
           const monthInput = document.getElementById('month');
           const dateInput = document.getElementById('date');
           const calculateButton = document.getElementById('calculate');
           const ageYears = document.getElementById('ageYears');
           const ageMonths = document.getElementById('ageMonths');
           const ageDays = document.getElementById('ageDays');
             const notificationOne= document.getElementById('notification1');
               const notificationTwo= document.getElementById('notification2');
            const notificationThree= document.getElementById('notification3');    
           
           const ageCalculator = new AgeCalculator(yearInput, monthInput, dateInput, calculateButton, ageYears, ageMonths, ageDays);
           
           

const bill_amount = document.querySelector('#bill_amount');
const tip_percentage = document.querySelector('#tip_percentage');
const number_people = document.querySelector('#number_people');
const calculate_tip = document.querySelector('#calculate_tip');
const tip_amount = document.querySelector('.tip_amount');
const total_amount = document.querySelector('.total_amount');
const per_person = document.querySelector('.per_person');
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let amount = Number(bill_amount.value) ;
    let tip_per = Number(tip_percentage.value);
    let people = Number(number_people.value);
    if(amount&&tip_per&&(people||(people=1))){
        let tip = (amount * tip_per)/100;
        let total = amount+tip;
        let perPerson_amount = total/people;
        tip_amount.innerHTML = `&#8377 ${tip.toFixed(2)}`;
        total_amount.innerHTML= `&#8377 ${total.toFixed(2)}`;
        per_person.innerHTML= `&#8377 ${perPerson_amount.toFixed(2)}`;

    }
    else{
        alert('Please enter a Numberic value');
    }
});

const age=Number(prompt(`How old are you ?
:-Please insert only a number.`));

const destination=Number(prompt(`Your destination in km ?
:-Please insert only a number.`));

function trainFareCalculator(age,destination){
    
const priceForKm=destination*0.21;

const discount1=priceForKm*0.20;

const discount2=priceForKm*0.40;

const discountJunior=priceForKm-discount1;

const discountSenior=priceForKm-discount2;

if (age < 18) {
    confirm(`Your price for the ticket is £${discountJunior.toFixed(2)}`)
}else if (age > 65) {
    confirm(`Your price for the ticket is £${discountSenior.toFixed(2)}`)
}else{
    confirm(`Your price for the ticket is £${priceForKm.toFixed(2)}`)
}
}

trainFareCalculator(age,destination);
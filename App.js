const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');
const rateE = document.querySelector('#rateE');

input_currency.addEventListener('change', compute1);
output_currency.addEventListener('change', compute2);
input_amount.addEventListener('input', compute1);
output_amount.addEventListener('input', compute2);
document.onload=(rate1);
document.onload=(rate2);

function rate1(){
    const input_currency1 = 'USD';
    const output_currency1 = output_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
    .then(res => res.json())
    .then(res => {
        const new_rate = res.rates[output_currency1];
        rateE.innerText = ` ${input_currency1} = ${new_rate} ${output_currency1}`
        })
    }
    rate1();

exchange.addEventListener('click', ()=>{
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value= temp;
    compute1();
});

function compute1(){
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
    .then(res => res.json())
    .then(res => {
        const new_rate = res.rates[output_currency1];
        output_amount.value = (input_amount.value * new_rate).toFixed(2);
        })
    }

        function compute2(){
            const input_currency1 = input_currency.value;
            const output_currency1 = output_currency.value;
           
            fetch(`https://api.exchangerate-api.com/v4/latest/${output_currency1}`)
            .then(res => res.json())
            .then(res => {
            const new_rate = res.rates[input_currency1];
            input_amount.value = (output_amount.value * new_rate).toFixed(2);
        })
    }
compute2();

function rate2(){
        const input_currency1 = 'EUR';
        const output_currency1 = output_currency.value;
    
        fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
        .then(res => res.json())
        .then(res => {
            const new_rate = res.rates[output_currency1];
            rate.innerText = ` ${input_currency1} = ${new_rate} ${output_currency1}`
            console.log(rate.innerText);
            })
        }
        rate2();
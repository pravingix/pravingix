let select = document.querySelectorAll('#currency')
let button = document.getElementById('button')

console.log(select);




(fetch('https://api.frankfurter.app/currencies'))
.then(res=>res.json())
.then(res=>displaydropdown(res))


function displaydropdown(res) {

   // console.log(Object.entries(res)[0][0]) // it convert into array format
 
   let currencyArray = Object.entries(res)  // loop 
   for (i=0;i<currencyArray.length;i++){

    let opt = ` <option value="${currencyArray[i][0]}">${currencyArray[i][0]}</option>`

    // console.log(opt);
    // console.log(currencyArray[i][0]); // array of length "0" position

    select[0].innerHTML += opt  // show in select dropdown (+= 'it will concat and show all option')
    select[1].innerHTML += opt
    
   }
}

button.addEventListener('click',()=>{
    let currency1 = select[0].value
    let currency2 = select[1].value
    let inputval = input.value

    if (currency1===currency2) 
    alert('choose different currency')

    else
    convert(currency1,currency2,inputval)      
    
})



// API CONVERSION


function convert(currency1,currency2,inputval) {
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${currency1}&to=${currency2}`)
  .then(resp => resp.json())
  .then((data) => {
console.log(Object.values(data.rates)[0]);

document.getElementById('result').value= Object.values(data.rates)[0]
  });
    
}
// https://www.omnicalculator.com/finance/marginal-revenue

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marginalrevenueRadio = document.getElementById('marginalrevenueRadio');
const changeintotalrevenueRadio = document.getElementById('changeintotalrevenueRadio');
const changeinquantityRadio = document.getElementById('changeinquantityRadio');

let marginalrevenue;
let changeintotalrevenue = v1;
let changeinquantity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marginalrevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Change in total revenue';
  variable2.textContent = 'Change in quantity';
  changeintotalrevenue = v1;
  changeinquantity = v2;
  result.textContent = '';
});

changeintotalrevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Marginal revenue';
  variable2.textContent = 'Change in quantity';
  marginalrevenue = v1;
  changeinquantity = v2;
  result.textContent = '';
});

changeinquantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Marginal revenue';
  variable2.textContent = 'Change in total revenue';
  marginalrevenue = v1;
  changeintotalrevenue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marginalrevenueRadio.checked)
    result.textContent = `Marginal revenue = ${computemarginalrevenue().toFixed(2)}`;

  else if(changeintotalrevenueRadio.checked)
    result.textContent = `Change in total revenue = ${computechangeintotalrevenue().toFixed(2)}`;

  else if(changeinquantityRadio.checked)
    result.textContent = `Change in quantity = ${computechangeinquantity().toFixed(2)}`;
})

// calculation

function computemarginalrevenue() {
  return Number(changeintotalrevenue.value) / Number(changeinquantity.value);
}

function computechangeintotalrevenue() {
  return Number(marginalrevenue.value) * Number(changeinquantity.value);
}

function computechangeinquantity() {
  return Number(changeintotalrevenue.value) / Number(marginalrevenue.value);
}
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);
   const currentWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
   withdrawTotal.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previusbalanceTotalString = balanceTotalElement.innerText;
  const previusbalanceTotal = parseFloat(previusbalanceTotalString);
  const currentBalanceTotal = previusbalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal; 

withdrawField.value = '';

})
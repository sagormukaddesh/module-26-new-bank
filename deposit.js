document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmoundString = depositField.value;
    const  newDepositAmound = parseFloat(newDepositAmoundString)
    // console.log(depositAmound) ;

    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString)
    const currentDepositTotal = previusDepositTotal + newDepositAmound;
    depositTotalElement.innerText =currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previusTotalBalaneString = balanceTotal.innerText;
    const previusTotalBalane = parseFloat(previusTotalBalaneString) 
    const currentTotalBalance = previusTotalBalane + newDepositAmound;
    balanceTotal.innerText = currentTotalBalance; 




     depositField.value ='';
     

    
    })
// deposite and withdraw

document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeField=document.getElementById('user-deposite');
    let newDeposited=depositeField.value;
    const showTotalDeposite=document.getElementById('show-deposite')
    const previousDeposite=showTotalDeposite.innerText;
    const newTotalDeposite=parseFloat(previousDeposite)
    +parseFloat( newDeposited);
    // console.log(newTotalDeposite)

    showTotalDeposite.innerText=newTotalDeposite;
    depositeField.value='';

    
    const balance=document.getElementById("total-balance")
    const previousbalanceText=balance.innerText
    const previousbalance=parseFloat(previousbalanceText);
    const currentBalance=previousbalance+parseFloat( newDeposited);
    balance.innerText=currentBalance;

})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawField=document.getElementById('user-withdraw');
    let newWithdraw=withdrawField.value;
    const showTotalwithdraw=document.getElementById('show-withdraw')
    const previouswithdraw=showTotalwithdraw.innerText;
    const newTotalwithdraw=parseFloat(previouswithdraw)
    +parseFloat( newWithdraw);
    // console.log(newTotalDeposite)
   

    showTotalwithdraw.innerText = newTotalwithdraw;
    withdrawField.value='';


    const balance=document.getElementById("total-balance")
    const previousbalanceText=balance.innerText
    const previousbalance=parseFloat(previousbalanceText);
    const currentBalance=previousbalance-parseFloat( newWithdraw);
    balance.innerText=currentBalance;

})

// document.getElementById("withdraw-button").addEventListener('click',function(){
//    const withdrawField=document.getElementById("user-withdraw");
//    const currentWithdraw=withdrawField.value;
//    const currentWithdrawFloat=parseFloat(currentWithdraw)
//    const showTotalWithdraw=document.getElementById('show-withdraw');
//     const previousWithdrawText=showTotalWithdraw.innerText;
//     const previousWithdraw=parseFloat(previousWithdrawText);
//    const newTotalWithdraw=currentWithdrawFloat+previousWithdraw;
//    console.log(newTotalWithdraw)
//    showTotalWithdraw.innerText=newTotalWithdraw;
//    withdrawField.value="";
// 
// 
// })
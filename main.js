var amount;
var closeAccountFlag = false;
var balance = 1000.00;
console.log("Your balance is $" + balance);

var response = getTransaction();

while(!isQuit(response)) {

  if(isValidResponse(response)) {
    if(response === 'd') {
        balance = doTransaction(balance, 'deposit');
    }
    else {
        balance = doTransaction(balance, 'withdrawal');
        if(balance < -750) {
          closeAccountFlag = true;
        }
    }
  }
  else {
    console.log("Sorry, please press d or w or q");
  }

  console.log("Your account balance is: $" + balance);

  if(!closeAccountFlag) {
    response = getTransaction();
  }
  else {
    response = 'q';
    console.log("Your account is overdrawn and is now closed!")
  }
}  // end while

console.log("Goodbye");

function doTransaction(bal, type) {
  var amount = prompt("Enter " + type + " amount");
  amount *= 1;
  amount = Math.abs(amount);  // in case user enters negative amount

  if(type === 'deposit') {
    if(amount >= 500) {
      amount += 25;  // deposit extra 25 as bonus
    }
    return bal + amount;
  }
  else {
    if(isNegativeBalance(bal,amount)) {
      amount += 50;  // withdraw extra 50 as penalty
    }
    return bal - amount;
  }
}

function isNegativeBalance(bal, amt) {
  return (bal - amt) < 0;
}

function isValidResponse(response) {
  return (response==='d' || response==='w');  // true if 'd' or 'w'
}

function isQuit(response) {
  return (response === 'q');
}

function getTransaction(){
  var response = prompt('(d)eposit, (w)ithdraw, (q)uit');
  return response.toLowerCase();
}

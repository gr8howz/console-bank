var response = getTransaction();
console.log(response);




function isQuit(response) {
  return (response === 'q');
}

function transaction(amt, bal) {
  return amt+bal;
}

function getTransaction(){
  var response = prompt('(d)eposit, (w)ithdraw, (q)uit');
  return response.toLowerCase();
}

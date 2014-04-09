var response = getTransaction();

while(!isQuit(response)) {
  console.log(response);
  response = getTransaction();
}

console.log("Goodbye");


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

var customerNumber = 0;

function takeANumber(katzDeliLine){
  customerNumber++;
  katzDeliLine.push(customerNumber);
  return 'Welcome, you are number ' + customerNumber;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return 'There is nobody waiting to be served!';
  } else {
    var now = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + now + '.';
  }
}

function currentLine(katzDeliLine){
  var currently = 'The line is currently: ';
  if(katzDeliLine.length < 1){
    return 'The line is currently empty.';
  } else {
    var i = 0;
    while(i < katzDeliLine.length-1){
      currently += i+1 +'. ' + katzDeliLine[i] + ', ';
      i++;
    }
    if(i === katzDeliLine.length-1){
      currently += i+1 +'. ' + katzDeliLine[i];
    }
  }
  return currently;
}
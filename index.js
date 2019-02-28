function takeANumber (line, names) {
  line.push(names);
  return (`Welcome ${names}, you are ${line.length} in line.`);
}

function nowServing (katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'There is nobody waiting to be served!';
  }
  var firstCustomer = katzDeliLine.shift();
  return ('Currently serving ' + firstCustomer + '.');
}

function currentLine (line) {
  if (!line.length) {
    return `The line is currently empty.`;
  }
  const lineAsFollows = [];
  for (let i=0, l=line.length; i<l; i++) {
    lineAsFollows.push(`${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + lineAsFollows;
}
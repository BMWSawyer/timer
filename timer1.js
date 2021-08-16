let alarms = process.argv.slice(2);

let newAlarmsArr = [];

for (let num of alarms) {
  num  += '000';
  newAlarmsArr.push(Number(num));
}

if (newAlarmsArr.length === 0) {
  console.log('There were no alarms provided');
}

for (let i =  0; i < newAlarmsArr.length; i++) {
  if (isNaN(newAlarmsArr[i])) {
    newAlarmsArr.splice(i, 1);
  } else if (newAlarmsArr[i] < 0) {
    newAlarmsArr.splice(i, 1);
  }
}

for (const alarm of newAlarmsArr) {
  setTimeout(() => process.stdout.write('\x07'), alarm);
}
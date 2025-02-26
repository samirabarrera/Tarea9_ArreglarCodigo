//El siguiente programa no funciona
// EL scope de `random` es demasiado amplio
const random = Math.floor(Math.random() * 3);
const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope de `days` es demasiado limitado 
const getTrainingDays = event => {
  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }
  return days;
};

// El scope de`name` es demasiado limitado 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};
const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};
const event = getRandEvent();
const days = getTrainingDays(event);
//Defina una variable `name`.
// Úsela como argumento después de actualizar logEvent y logTime
logEvent(event);
logTime(days);
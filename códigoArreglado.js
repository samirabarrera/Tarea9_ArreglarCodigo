//El siguiente programa no funciona
//EL scope de `random` es demasiado amplio
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else {
    return 'Pentathlon';
  }
};

// The scope de `days` es demasiado limitado 
const getTrainingDays = event => {
    const days = ['50', '100', '200']
    if (event === 'Marathon') {
        return 50;
    } else if (event === 'Triathlon') {
        return 100;
    } else if (event === 'Pentathlon') {
        return 200;
    }
};

// El scope de`name` es demasiado limitado 
const logEvent = (name, event) => {
    const name = user;
    console.log(`${name}'s event is: ${event}`);
};
const logTime = (user, days) => {
    const name = user;
    console.log(`${name}'s time to train is: ${days} days`);
};
const event = getRandEvent();
const days = getTrainingDays(event);
//Defina una variable `name`.
//Úsela como argumento después de actualizar logEvent y logTime
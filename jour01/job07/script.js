function jourtravaille(date) {
    const holidays2020 = [
      '01-01', // Jour de l'An
      '04-13', // Lundi de Pâques
      '05-01', // Fête du Travail
      '05-08', // Victoire 1945
      '05-21', // Ascension
      '06-01', // Lundi de Pentecôte
      '07-14', // Fête Nationale
      '08-15', // Assomption
      '11-01', // Toussaint
      '11-11', // Armistice 1918
      '12-25'  // Noël
    ];
  
    let i = 0;
    let isHoliday = false;
    let isWeekend = false;
  
    while (!isHoliday && !isWeekend && i < holidays2020.length) {
      if (holidays2020[i] === `${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`) {
        isHoliday = true;
      }
      i++;
    }
  
    if (date.getDay() === 0 || date.getDay() === 6) {
      isWeekend = true;
    }
  
    if (isHoliday) {
      console.log(`Le ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} est un jour férié.`);
    } else if (isWeekend) {
      console.log(`Non, ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} est un week-end.`);
    } else {
      console.log(`Oui, ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} est un jour travaillé.`);
    }
  }
// Test 1 : jour férié
jourtravaille(new Date(2020, 4, 1)); // Output: "Le 1 5 2020 est un jour férié."

// Test 2 : week-end
jourtravaille(new Date(2020, 4, 2)); // Output: "Non, 2 5 2020 est un week-end."

// Test 3 : jour travaillé
jourtravaille(new Date(2020, 4, 4)); // Output: "Oui, 4 5 2020 est un jour travaillé."

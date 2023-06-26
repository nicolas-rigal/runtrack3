function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      return true; // L'année est bissextile
    } else {
      return false; // L'année n'est pas bissextile
    }
  }

  console.log(bisextile(2020));
  console.log(bisextile(2100));
  console.log(bisextile(2024));
  console.log(bisextile(2021));
  console.log(bisextile(1996));
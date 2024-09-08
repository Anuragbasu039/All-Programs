
function distinctDigitYear(year) {
    ++year;
   
    let years = [...new Set([...year.toString()])];
    if (years.length === 4) {
      return years.join('');
    }
    return distinctDigitYear(year);
  };
  
  console.log(distinctDigitYear(1987));
  console.log(distinctDigitYear(2013));
  console.log(distinctDigitYear(2550));
  console.log(distinctDigitYear(2112));  
  
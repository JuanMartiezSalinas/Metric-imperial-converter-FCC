/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var regex = /[a-z]+|[^a-z]+/gi
  this.getNum = function(input) {
    let result;
    result = input.match(regex)[0];
    let regexNum=/\d/
    
    if(!regexNum.test(result)){
      result = 1
    }
    if(result.toString().includes('/')){
      let values = result.split('/')
      if(values.length>2){
        return 'invalid number'
      }
      result = (values[0]/values[1]);
    }
    console.log(input)
    if(isNaN(result)){
      return 'invalid number'
    }
    return eval(result);
  };
  
  this.getUnit = function(input) {
    let units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    let result;
    result = input.match(regex)[1];
    if(result === undefined){
      result = input.match(regex)[0];
    }
    if(result ==='L' || result==='l'){
      result=result.toUpperCase();
    }else{
      result=result.toLowerCase();
    }
    if(!units.includes(result)){
      return 'invalid unit'
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit === 'gal' || initUnit ==='GAL'){
      result = 'L'
    }
    if(initUnit ==='l'|| initUnit==='L'){
      result = 'gal'
    }
    if(initUnit==='mi'||initUnit==='MI'){
      result = 'km'
    }
    if(initUnit==='km'||initUnit==='KM'){
      result = 'mi'
    }
    if(initUnit==='kg'||initUnit==='KG'){
      result = 'lbs'
    }
    if(initUnit==='lbs'||initUnit==='LBS'){
      result = 'kg'
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
      case 'GAL':
      case 'gal':
       result = 'gallon(s)';
        break;
      case 'l':
      case'L':
       result = 'liters'
        break;
        case 'kg':
      case'KG':
       result = 'kilograms'
        break;
        case 'lbs':
      case'LBS':
       result = 'pounds'
        break;
        case 'km':
      case'KM':
       result = 'kilometers'
        break;
        case 'mi':
      case'MI':
       result = 'miles'
        break;
     }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(initUnit==='gal'){
      result = (initNum*galToL).toFixed(5)
    }
    if(initUnit==='L'){
      result = (initNum/galToL).toFixed(5)
    }
    if(initUnit==='lbs'){
      result = (initNum * lbsToKg).toFixed(5)
    }
    if(initUnit ==='kg'){
      result = (initNum/lbsToKg).toFixed(5)
    }
    if(initUnit === 'mi'){
      result = (initNum*miToKm).toFixed(5)
    }
    if(initUnit === 'km'){
      result = (initNum/miToKm).toFixed(5)
    }
    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum+' '+ this.spellOutUnit(initUnit)+' converts to ' +returnNum+' '+this.spellOutUnit(returnUnit)
    return result;
  };
  
}

module.exports = ConvertHandler;

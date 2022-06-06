function toCamelCase(str){
    var camelString = "";
    
    for ( i = 0 ; str.length >  i ; i++ ){
      var charAdd = str[i];
      if (charAdd == '_' || charAdd == '-'){
        i++;
        charAdd = str[i].toUpperCase();
      }   
      camelString = camelString + charAdd;
    }
    
    return camelString;
  }
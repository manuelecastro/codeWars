function filter_list(l) {
    var filteredList = [];
    
    for (i = 0 ; i < l.length ; i++ ){
      if (typeof l[i] === 'number') {
        filteredList.push(l[i])
      }
    }
    return filteredList
  }
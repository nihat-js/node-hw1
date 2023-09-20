 function loadPortNumber(){
  for (let el of process.argv) {
    let num, arr = el.split("=")
    if (arr.length == 2 && arr[0] == "--port" && (num = parseInt(+arr[1])) && !isNaN(num) && num > 0 && num < 65535) {
      return  num
    }
  
    // if (arr.length != 2) continue;
    // if (arr[0] != "--port" ) continue;
    // let num = +arr[1]
    // console.log(num)
    // if ( isNaN(num) ) continue
    // if (num > 65535 || num < 1)  continue;
  }
  
}

module.exports = {
  loadPortNumber
}
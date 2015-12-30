fs = require('fs')

var cases ;

var stream = fs.createWriteStream("output.txt");

function small( number ) {
  var sortedArray = number.split("0").join("").split("").sort() ;
  var def = number.length - sortedArray.length ;
  var ret = sortedArray[0] ;
  sortedArray.splice(0, 1);

  for( var i = 0 ; i < def; i++ ){
    ret += "0" ;
  }
  ret += sortedArray.join("");
  return ret;
};

function large( number ) {
  return number.split("").sort().reverse().join("");
};

fs.readFile('./small.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var arry = data.split('\n') ;

  cases = arry[0];

  for( var i = 1 ; i < arry.length ; i++ ){
    if( arry[i] ){
      stream.write("Case #" + i + ": "+ small( arry[i] ) + " " + large( arry[i] ) + "\n");
    }
  }

});



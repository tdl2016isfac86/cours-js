// https://callicode.fr/pydefis/LogDiscret/txt


var pbEntree = [4,6,8];

var str = '(';
for(var i in pbEntree) {
     
     var x = 1;
     
     while((Math.pow(3,x) % 223) !== pbEntree[i]) {
          x +=1;
          
          
     }
     
     str += x;
     
     if(i+1 < pbEntree.length) {
          str +=","; 
     }
}

console.log(str+')');
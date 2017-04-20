// https://callicode.fr/pydefis/QSuite/txt

var Q = function() {
     var memo = [1,1];
     return function(n) {
          var resultat = memo[n-1];
          if(typeof resultat !== "number") {
               resultat = Q(n-Q(n-1))+Q(n-Q(n-2));
               memo[n-1] = resultat;
          }
          return resultat;
     };
}();

// (2313, 2374)

var sum=0;

for (var i = 2313; i<=2374;i+=1) {
     sum += Q(i);
}
     
console.log(sum);
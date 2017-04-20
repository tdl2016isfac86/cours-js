var ajax = function (url, fctOnResponse) {
  // créer un objet XMLHttpRequest
  	 var aja = null;

	try {
		aja  = new XMLHttpRequest(); // Créer un objet XMLHttpRequest
	}
    catch(Error) {
	    try {
    	    aja = new ActiveXObject("Msxml2.XMLHTTP"); // Pour IE > 5
        }
        catch(Error) {
          try {
          	aja = new ActiveXObject("Microsoft.XMLHTTP");  // Pour IE5
          }
          catch(Error) {
            alert("Votre navigateur n'est pas adapté");
            aja = null;
          }                       
		}
    }
  // Lancer une requête sur url
  var resultat = function(){
    if(aja.readyState == 4) {
	    if(aja.status == 200) {
     		fctOnResponse(aja.responseText);
/*    	}
    	else {
      		alert("Erreur HTTP n°"+aja.status); */
 	   }
    }  
  };
  
  aja.onreadystatechange = resultat;

  // aja.readyState == 0
  aja.open("GET", url, true);
   // aja.readyState == 1
  aja.send(null);
  // aja.readyState == 2

};

document.onreadystatechange = function () {
    
    
    document.getElementsByTagName('button')[0].onclick = function() {
        ajax('reponse.php', function(nomDeFichier) {
            var image = document.createElement('img');
            image.src = 'images/'+nomDeFichier;
            image.width = 500;
            document.body.appendChild(image);
        });
    };
    
    
    
};
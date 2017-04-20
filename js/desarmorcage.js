// PyDéfis
// https://callicode.fr/pydefis/SpymasterBomb/txt
//
<?php
/*------en php-------*/
/*Tony Stark*/
 $max=1325;
 $sum=0;
for ( $i=3; $i<$max ; $i++) 
{ 
	if (is_integer($i/3) || is_integer($i/5)) 
	{
		$sum=$sum+$i;
	}
}


echo $sum;
 /*Fin */
// En js
var max=1325;
var sum=0;
for(var i=3;i<max;i +=1){
	if(Number.isInteger(i/3) || Number.isInteger(i/5)){
		sum += i;
	}
};
console.log(sum); 





/*Défi 2 Les nombres Riche*/
// https://callicode.fr/pydefis/NombresRiches/txt
$min=4830;
$max =5030;
$j=0;

for ($i=$min; $i<=$max; $i++) { 
	$i2=bcmul($i,$i);
	$i3=bcmul($i2, $i);
	$istr=$i2.$i3;
	if (
		strstr($istr,'0')&&
		strstr($istr,'1')&&
		strstr($istr,'2')&&
		strstr($istr,'3')&&
		strstr($istr,'4')&&
		strstr($istr,'5')&&
		strstr($istr,'6')&&
		strstr($istr,'7')&&
		strstr($istr,'8')&&
		strstr($istr,'9')
		) 
	{
	echo $i.',';
	$j++;
	if ($j==13)
	{break;}
	}
}
/*Fin du Défi 2*/

var min=4830;
var max=5030;
var j=0;

for (var i = min; i<=max; i+=1) {
	var i2 = i*i;
	var i3 = i2*i;
	var istr = 'P' + i2.toString() + i3.toString();
	if(
		istr.indexOf('1') &&
		istr.indexOf('2') &&
		istr.indexOf('3') &&
		istr.indexOf('4') &&
		istr.indexOf('5') &&
		istr.indexOf('6') &&
		istr.indexOf('7') &&
		istr.indexOf('8') &&
		istr.indexOf('9') &&
		istr.indexOf('0')
		) {
	     
	     console.log(i);
	     
	}
}
echo "<br><br>";
/* Défi 3 Méli Mélo de nombre 
valeur de base du Défi*/
$n = 194;

function transphormation($u){
	if (strlen($u)<4) {
		$u = '0'.$u;
	}
	$u = str_split($u,2);
	$u = $u[0]+$u[1];
	$u = $u * 195;
	$u = $u + 117;
	$u = $u % 9973;
	return $u;
}
$u = 3773;
echo $u.',';
for ($i=0; $i<194; $i++) 
{ 
$u = transphormation($u);
echo $u.',';

}
/*Fin du Défi 3 */
echo "<br><br>";
/*Défi 4 les écurie d'Augias*/

$bleu=2;
$rouge=0;
$vert = 0;
$somme = $bleu;

for ($i=1; $i < 49; $i=$i+3) { 
	$rouge = $bleu * 7;
	$vert = $bleu * 5;
	$somme = $somme + $vert + $rouge;
	$bleu = substr($vert + $rouge,-2);
	$somme = $somme+$bleu;
}
echo $somme;

/*---------------Fin du Défi 4 -----------------------*/
echo "<br><br>";
/*----------------Début Désamorçage d'un explosif------*/

$entree =449149;
$a=str_split($entree,3);
$r=$a[0];
$y=$a[1];

for ($i=0; $i <$entree ; $i++) { 
	$r=substr($r*13, -3);
}
echo $r;

/*---------------Fin de Défi 5---------------*/


?>


<?php

$liste = scandir('images');

$min = 0;
$max = count($liste);

$test = TRUE;
while($test) {
     $index = rand($min, $max-1);
     if($liste[$index] != '.' && $liste[$index] != '..') {
          $test = FALSE;
     }
}

echo $liste[$index];


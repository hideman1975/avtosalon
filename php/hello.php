<?php

$file = file('http://pogoda.nn.ru'); 
print  implode("", $file);; 

?>
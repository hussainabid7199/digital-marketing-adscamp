<?php

echo "welcome to the data base";


// connecting to the datebase

$servername = "localhost";
$username = "root";
$password = "";


// creating a connection

$conn = mysquli_connect($servername,$username,$password);

echo "Connection was sucessfull";
?>
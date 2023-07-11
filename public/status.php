<?php
include('conn.php');
$id=$_GET['id'];
$etatannonce=$_GET['etatannonce'];
$req="update annonce set etatannonce=$etatannonce where id=$id";
mysqli_query($cam ,$req);
?>
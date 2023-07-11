<?php 
$link = mysqli_connect("localhost", "root", "", "bussniss") or die($link);
$id = mysqli_real_escape_string($link ,$_POST['id']);
$etatannonce = mysqli_real_escape_string($link ,$_POST['etatannonce']);

mysqli_query($success,"UPDATE annonce VALUES ('$etatannonce' ='publique') WHERE id = '$id' ");
  ?>
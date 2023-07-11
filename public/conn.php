<?php
             $nom_du_serveur ="localhost";
    $nom_de_la_base ="bussniss";
    $nom_utilisateur ="root";
    $passe ="";
 
    $cam = mysqli_connect ($nom_du_serveur,$nom_utilisateur,$passe,$nom_de_la_base);
    if (mysqli_connect_errno()) {
        die('Connexion impossible : ' . mysqli_connect_error() . "<br/>");
    }
        ?>
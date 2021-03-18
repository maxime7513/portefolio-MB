<?php

if (count($_POST) != 0)
{
    $nom        = $_POST["nom"];
    $prenom     = $_POST["prenom"];
    $email      = $_POST["email"];
    $objet      = $_POST["objet"];
    $message    = $_POST["message"];
    $dateMessage = date("d-m-Y H:i:s"); // FORMAT DATETIME POUR SQL


    $mail = 
    <<<texte

    message reçu sur le site: ($dateMessage)
    
    nom: $nom
    prenom: $prenom
    email: $email
    objet: $objet
    message:
    $message

    texte;
//headers pour reply mail tout sa
    $headers =  'From: contact@monsite.fr' . "\r\n" .
    'Reply-To: no-reply@monsite.fr' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    @mail("maxbln7513@gmail.com", "nouveau message", $mail, $headers);
// EN loclahost ERREUR CAR PAS DE SERVEUR EMAIL
    // Warning : mail(): Failed to connect to mailserver at "localhost" port 25, verify your "SMTP" and "smtp_port"    // STOCKER LES INFOS DANS UN FICHIER

    file_put_contents("php/contact.txt", $mail, FILE_APPEND); // FILE_APPEND pour pas que le nouvrau formulaire écrase l'ancien

    // AFFICHER UN MESSAGE DE CONFIRMATION
    echo '<h4 class="echo-formulaire">Votre message à été envoyé avec succès!</h4>';

}

?>
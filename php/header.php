<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Maxime BLEUNVEN, développeur web junior. Présentation de mes compétences et de mon savoir-faire en tant que développeur web.">
    <meta property="og:image" content="http://www.maxime-bln.com/assets/img/imagesite.png"/>
    <title>Maxime BLEUNVEN PortFolio</title>
    <link rel="shortcut icon" href="./assets/img/favicon.ico"/> 

    <!-- RESET ET NORMALIZE -->
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="./assets/css/normalize.css">
    <!-- MON CSS -->
    <link rel="stylesheet" href="./assets/css/style.css">
    <!-- FONTAWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Alice&display=swap" rel="stylesheet">
    <body>
        <header id="navbar">
            <nav class="header__nav d--flex flex--row jc--ce">
                <a href="#diplome">Diplômes</a>
                <a href="#competence">Compétences</a>
                <a class="logo" href="index.php"><img class="header__img" src="./assets/img/bm13.png" alt="logo-bm">
                </a>
                <a href="#realisation">Réalisations</a>
                <a href="#contact">Contact</a>
            </nav>
            <!--Menu smartphone-->
            <div id="menumobile" class="dontshow ">
                <div class="boutonmenu">
                    <button id="menu" class="btn-nav"><i id="iconemenu" class="fas fa-bars"></i></button>
                </div>
                <a class="m--auto" href="index.php"><img class="header__img" src="./assets/img/bm13.png" alt="logo"></a>
            </div>
            <div id="myDropdown" class="dontshow">
                <a class="fermerMenu" href="#"><i class="far fa-times-circle color2"></i></a>
                <a href="#diplome">Diplômes</a>
                <a href="#competence">Compétences</a>
                <a href="#realisation">Réalisations</a>
                <a href="#contact">Contact</a>
                <a id="resaux-sociaux"href="https://www.linkedin.com/in/maxime-bln/"><i class="fab fa-linkedin-in rs"></i><i class="fab fa-instagram rs"></i></a>
            </div>
        </header>


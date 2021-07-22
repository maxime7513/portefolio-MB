$(function () {
  // MENU MOBILE
  //afficher menu mobile
  $('#menu').click(function () {
    $('#myDropdown').addClass('show');
  });
  // Fermer menu mobile avec croix
  $('.fermerMenu').click(function () {
    $('#myDropdown').removeClass('show');
  });
  // Fermer menu mobile quand lien menu activé
  $('#myDropdown > a').click(function () {
    $('#myDropdown').removeClass('show');
  });
//

  //header changement de couleur
  $(window).scroll(function () {
    var header = $("#navbar");
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });

  // CHANGER DE COULEUR AUX LIENS ET CHANGER DE LOGO DANS LE HEADER
  var header = $("nav > a");
  var logo = $(".header__img");
  var lienHover = $("nav>a:not(.logo)");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      header.addClass("scrolled2");
      logo.attr("src", "./assets/img/bm19.png");
      lienHover.addClass("colori");
    } else {
      header.removeClass("scrolled2");
      logo.attr("src", "./assets/img/bm13.png");
      lienHover.removeClass("colori");
    }
  });
  
  // SLIDER BACKGROUND
    var current = 0,
    slides = document.getElementsByClassName("slider"),
    slidesMobile = document.getElementsByClassName("slider-mobile");

    setInterval(function() {
    if (window.matchMedia("(min-width: 692px)").matches){
    for (var i = 0; i < slides.length; i++){
        slides[i].style.opacity = 0;
      }
      current = (current != slides.length - 1) ? current + 1 : 0;
      slides[current].style.opacity = 1;
    } else{
    for (var i = 0; i < slidesMobile.length; i++){
        slidesMobile[i].style.opacity = 0;
      }
      current = (current != slidesMobile.length - 1) ? current + 1 : 0;
      slidesMobile[current].style.opacity = 1;
    }
    },8000);
  
  // FAIRE APPARAITRE VOIR/TELECHARGER CV
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".textecv").delay(1000).fadeIn(3000);
    }
  });
  //div presentation disparait au scroll
  $(window).scroll(function () {
    $(".presentation").css("opacity", 1 - $(window).scrollTop() / 200);
  });

  // chevron scrolldown disparait au scroll
  $(window).scroll(function () {
    $(".container-chevron").css("opacity", 1 - $(window).scrollTop() / 1100);
  });

  //aggrandir CV
  // et afficher boutton telechargerCV
  var miniCv = $('#cv');
  var lightbox = $('.lightbox');
  var btnTelecharger = $('.bouton__telecharger');
  miniCv.on('click', function (event) {
    // IL FAUT AJOUTER LA CLASSE .active SUR LA LIGHTBOX POUR LA VOIR DANS L'ECRAN
    lightbox.addClass('active');
    btnTelecharger.addClass('active');
  });
  // AVEC LA LIGHTBOX, IL FAUT POUVOIR LA CACHER QUAND ON CLIQUE DESSUS
  // ET CACHER BOUTON TELECHARGER CV AUSSI
  lightbox.on('click', function () {
    lightbox.removeClass('active');
    btnTelecharger.removeClass('active');
  });

  // FAIRE APPARAITRE DISPARAITRE H1
  var
    words = ['Développeur Web Junior', 'Création de sites Web'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 50,
    speed = 100;

  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $('h1').text(part);
    }, speed);
  };

    wordflick();

// FAIRE APPARAITRE AU SCROLL ICONE COMPETENCE
  $(window).scroll(function () {
    if (window.matchMedia("(min-width: 910px)").matches){
    var scroll = $(window).scrollTop();
    if (scroll >= 900 && scroll <= 1300) {

      $(".card").fadeIn(2000);
      $(".trait").fadeIn(2000);
    }else{
      $(".card").fadeOut(1500);
    }
    }
  });

// FAIRE APPARAITRE DISPARAITRE AU SCROLL ICONE LANGUAGES (POUR MOBILE)
$(window).scroll(function () {
    if (window.matchMedia("(max-width: 909px)").matches){
    var scroll = $(window).scrollTop();
    if (scroll >= 1250 && scroll <= 1600) {

      $(".card1").addClass("opacity-icone");
    }else{
      $(".card1").removeClass("opacity-icone");
    }
    }
    if (scroll >= 1650 && scroll <= 2000) {

      $(".card2").addClass("opacity-icone");
    }else{
      $(".card2").removeClass("opacity-icone");
    }
    if (scroll >= 2050 && scroll <= 2350) {

      $(".card3").addClass("opacity-icone");
    }else{
      $(".card3").removeClass("opacity-icone");
    }
  });

// SCROLLTOP REMONTER HAUT DE PAGE
    var scrollTop = $(".scrollTop");

    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1400);
      return false;
    });

// CHANGER COMPETENCE POUR MOBILE 
    $(window).ready(function () {      
      if (window.matchMedia("(max-width: 845px)").matches){
        $("#comp-pc").removeClass("d--flex").addClass("dontshow");
        $("#comp-mobile").removeClass("dontshow").addClass("d--flex");
      }
    });

// LOADER
      $(window).ready(function() {
      $(".loader").fadeOut();
    });

// SLIDER SECTION MES REALISATIONS
let slideshow_representation1 = document.querySelector('.slider_realisation1');
let slideshow_representation2 = document.querySelector('.slider_realisation2');
let src1 = slideshow_representation1.getAttribute("src");
let src2 = slideshow_representation2.getAttribute("src");
  setInterval(function() {
      if(src1 == "./assets/img/site-AutoPlusService.png"){
      src1 = "./assets/img/site-AutoPlusService2.png";
      src2 = "./assets/img/site-MeetInMarseille2.png";
      }else {
      src1 = "./assets/img/site-AutoPlusService.png";
      src2 = "./assets/img/site-MeetInMarseille.png";
      }
      slideshow_representation1.setAttribute("src", src1);	
      slideshow_representation2.setAttribute("src", src2);	
  },
  3000);  // 3s

});
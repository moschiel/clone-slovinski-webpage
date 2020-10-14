/************* MENU *********************/
let menuIcon = $('.menu-icon');
let menuMobile = $('.mobile-menu');

//evento para mostrar/esconder o menu mobile
menuIcon.click(function(){ 
  if(menuMobile.css('display') != 'none')
    menuMobile.slideUp();  
  else
    menuMobile.slideDown();
});

$(window).resize(function () { 
  if($(window).width() > 1050 && menuMobile.css('display') != 'none') {
    menuMobile.css('display', 'none');
  }
});

//envento para scroll automatico ao clicar em link do menu
$('nav a').click(function(e){
  e.preventDefault();

  var section_id = $(this).attr('href');
  var offsetPixels = $(section_id).offset().top;
  $('html, body').animate({scrollTop:offsetPixels}, 700);

  //return false; //pra nao redirecionar a pagina por ter clica em um link
});

/******************** TRATAMENTO **********************/
const cor_ativo = "#688293";
const cor_inativo = "#d8d8d8";

$(function() {

  let tratamentosContainer = $('.tratamentos .all-columns');
  let selectorContainer = $(".tratamentos-selector");
  let tratamentosColum =  $(".column-tratamentos");

  //carrega seletores dinamincamente
  tratamentosColum.each( function(){
    selectorContainer.append('<div class="selector"></div>');
  });

  let seletores = $('.tratamentos .selector');
  
  function setTratamentosDisplay() {
    let width = $(window).width();

    if(width <= 770){
      seletores.css('display', 'block');
    }
    else{
      seletores.css('display', 'none');
    }
  }

  setTratamentosDisplay();

  $(window).resize(()=>{
    setTratamentosDisplay();
  });

  tratamentosContainer.slick({
    // dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  tratamentosContainer.on('beforeChange', function (slick, currentSlide) {  
    let slideIndex = tratamentosContainer.slick('slickCurrentSlide');
    seletores.css('background-color', cor_inativo);
    seletores.eq(slideIndex).css('background-color', cor_ativo);
  });

})



/******************** DEPOIMENTOS **********************/
$( function() {
  let depos =  $(".depo");
  let selectorContainer = $('.depoimentos .depo-selector');

  //carrega seletores dinamincamente
  depos.each( function(){
    selectorContainer.append('<div class="selector"></div>');
  });

  let seletores = $('.depoimentos .selector')
  
  let deposContainer = $('.all-depos');
  deposContainer.slick({
    // dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  deposContainer.on('beforeChange', function (slick, currentSlide) {  
    let slideIndex = deposContainer.slick('slickCurrentSlide');
    seletores.css('background-color', cor_inativo);
    seletores.eq(slideIndex).css('background-color', cor_ativo);
  });
})



/******************** MOSAICO **********************/
$(function() {
  //carrega fotos no mosaico
  let mosaicoFotos = $('.mosaico-fotos');
  for(let i=1; i<12; ) {
    mosaicoFotos.append(
      `<div class="mosaico-couple">
        <div class="indiv-foto" style="background-image:url('./images/mosaico-${i++}.jpg')"></div>
        <div class="indiv-foto" style="background-image:url('./images/mosaico-${i++}.jpg')"></div>
      </div>`
    );  
  }
  
  //set slider do mosaico
  mosaicoFotos.slick({
    // dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  let fotos = $('.mosaico-fotos .indiv-foto');
  let secondRowFotos = $('.mosaico-fotos .indiv-foto:nth-child(2)');
  function setMosaicoSize() {
    let width = $(window).width();
    if(width > 300)
      secondRowFotos.css('display', 'block');

    if(width > 800) {
      fotos.css('height','15vw');
    }
    else if(width > 600) {
      fotos.css('min-height','17vw');
    }
    else if(width > 400) {
      fotos.css('min-height','25vw');
    }
    else if(width > 300) {
      fotos.css('min-height','36vw');
    }
    else {
      fotos.css('min-height','75vw');
      secondRowFotos.css('display', 'none');
    }
  }

  setMosaicoSize();

  $(window).resize(()=>{
    setMosaicoSize();
  });

})

/******************** MOSAICO **********************/
$(function() {
   //carrega fotos no mosaico
   let mosaicoSocialFotos = $('.social-fotos');
   for(let i=1; i<9;) {
      mosaicoSocialFotos.append(
       `<div class="indiv-foto" style="background-image:url('./images/mosaico-${i++}.jpg')"></div>`
      );  
   }
});


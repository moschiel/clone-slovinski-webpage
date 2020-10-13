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

//evento para trocar tratamento ao clicar nos seletores
const cor_ativo = "#688293";
const cor_inativo = "#d8d8d8";

var seletores = $('.tratamentos-selector .selector');
//const trocar_tratamento = (seletor) => {
seletores.click( (e) => { 
  let tratamentos = $('.column-tratamentos');
  let seletorIndex = seletores.index($(e.target));

  seletores.css('background-color', cor_inativo);
  $(e.target).css('background-color', cor_ativo);

  //Se width maior que 480px, apenas dois seletores (dois tratamentos na tela)
  if(screen.width > 480) {
    tratamentos.css('display', 'block');
    if(seletorIndex == 0) {
      tratamentos.eq(2).css('display', 'none');
    }
    else if(seletorIndex == 1) {
      tratamentos.eq(0).css('display', 'none');
    }
  }
  else { //Senao, se width <= 480px, tres seletores (um unico tratamento na tela)
    tratamentos.css('display', 'none');
    tratamentos.eq(seletorIndex).css('display', 'block');
  }
});

//evento para trocar depoimento ao clicar nos seletores
var seletoresDepo = $('.depo-selector .selector');
seletoresDepo.click((e) => {
  let depoimentos = $('.depo');
  let seletorIndex = seletoresDepo.index($(e.target));

  seletoresDepo.css('background-color', cor_inativo);
  $(e.target).css('background-color', cor_ativo);

  depoimentos.css('display', 'none');
  depoimentos.eq(seletorIndex).css('display', 'flex');
});



/************* SLICK jQuery ******************* */
$(function() {
  //$('.mosaico1').slick();
})
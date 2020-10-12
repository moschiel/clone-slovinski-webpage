let menuIcon = $('.menu-icon');
let menuMobile = $('.mobile-menu');


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


const cor_ativo = "#688293";
const cor_inativo = "#d8d8d8";

const trocar_tratamento = (seletor) => {

  column1 = document.getElementById("col1");
  column2 = document.getElementById("col2");
  column3 = document.getElementById("col3");

  seletor1 = document.getElementById("seletor1");
  seletor2 = document.getElementById("seletor2");
  seletor3 = document.getElementById("seletor3");

  seletor1.style.backgroundColor = cor_inativo;
  seletor2.style.backgroundColor = cor_inativo;
  seletor3.style.backgroundColor = cor_inativo;
  
  //Se width maior que 480px, apenas dois seletores
  if(screen.width > 480) 
  {
    if(seletor == "seletor1")
    {
      column1.style.display = "block";
      column3.style.display = "none";

      seletor1.style.backgroundColor = cor_ativo;
    }
    else if(seletor == "seletor2")
    {
      column1.style.display = "none";
      column3.style.display = "block";

      seletor2.style.backgroundColor = cor_ativo;
    }
  }
  else //Senao, se width <= 480px, tres seletores
  {
    if(seletor == "seletor1")
    {
      column1.style.display = "block";
      column2.style.display = "none";
      column3.style.display = "none";

      seletor1.style.backgroundColor = cor_ativo;
    }
    else if(seletor == "seletor2")
    {
      column1.style.display = "none";
      column2.style.display = "block";
      column3.style.display = "none";

      seletor2.style.backgroundColor = cor_ativo;
    }
    else if(seletor == "seletor3")
    {
      column1.style.display = "none";
      column2.style.display = "none";
      column3.style.display = "block";

      seletor3.style.backgroundColor = cor_ativo;
    }
  }
}




function trocar_depo(seletor){
  console.log(seletor);
   depo1 = document.getElementById('depo1');
   depo2 = document.getElementById('depo2');
  

  let select1 = document.getElementById('select1'); 
  let select2 = document.getElementById('select2');

  if(seletor == 'select1'){
    depo2.style.display = "none";
    depo1.style.display = "flex";
    select1.style.backgroundColor = cor_ativo;
    select2.style.backgroundColor =  cor_inativo
  }
  
  if(seletor == 'select2'){
    depo1.style.display = "none"; 
    depo2.style.display = "flex";
    select2.style.backgroundColor = cor_ativo;
    select1.style.backgroundColor = cor_inativo;
  }
}
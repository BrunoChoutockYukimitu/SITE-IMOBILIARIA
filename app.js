function fnIndiomaPortugues() {
    document.getElementById("menu1").innerText = "Inicial"
    document.getElementById("menu2").innerText = "Imóveis"
    document.getElementById("menu3").innerText = "Sobre nós"
    document.getElementById("menu4").innerText = "Contato"
    document.getElementById("titulo5").innerText = "Encontre a casa dos seus sonhos"
    document.getElementById("subtitulo6").innerText = "Explore nossa ampla variedade de imóveis e encontre a casa perfeita para você."
    document.getElementById("botao7").innerText = "Pesquise Imóveis"
    document.getElementById("botao8").innerText = "Saiba Mais"
    document.getElementById("contato9").innerText = "Entre em contato conosco hoje mesmo!"
    document.getElementById("contato10").innerText = "Entre em contato"
    document.getElementById("contato11").innerText = "Telefone"
    document.getElementById("contato12").innerText = "Escritório"
    document.getElementById("contato13").innerText = "Assine nossa newsletter para receber as últimas atualizações sobre novos recursos e lançamentos de produtos."
    document.getElementById("contato14").innerText = "Cadastrar"
    document.getElementById("rodape15").innerText = "© 2025 Guto Xavier. Todos os direitos reservados."
}

function fnIndiomaIngues() {
    document.getElementById("menu1").innerText = "Home"
    document.getElementById("menu2").innerText = "Properties"
    document.getElementById("menu3").innerText = "About Us"
    document.getElementById("menu4").innerText = "Contact"
    document.getElementById("titulo5").innerText = "Find Your Dream Home"
    document.getElementById("subtitulo6").innerText = "Explore our wide range of properties and find the perfect home for you."
    document.getElementById("botao7").innerText = "Search Properties"
    document.getElementById("botao8").innerText = "Learn More"
    document.getElementById("contato9").innerText = "Get in touch with us today!"
    document.getElementById("contato10").innerText = "Contact Us"
    document.getElementById("contato11").innerText = "Phone"
    document.getElementById("contato12").innerText = "Office"
    document.getElementById("contato13").innerText = "Subscribe to our newsletter for the latest updates on new features and product releases. "
    document.getElementById("contato14").innerText = "Subscribe"
    document.getElementById("rodape15").innerText = "© 2025 Guto Xavier. All rights reserved."
}

function fnBaner(){
     document.getElementById("Baner").src = "images/banner01.jpg"
    document.getElementById("Baner").src = "images/banner02.jpg"
    document.getElementById("Baner").src = "images/banner03.jpg"
     document.getElementById("Baner").src = "images/banner04.jpg"
}

function fnBotao1(){
    document.getElementById("trocaBaner").src = "images/banner01.jpg"
}

function fnBotao2(){
    document.getElementById("trocaBaner").src = "images/banner02.jpg"
}

function fnBotao3(){
    document.getElementById("trocaBaner").src = "images/banner03.jpg"
}

function fnBotao4(){
    document.getElementById("trocaBaner").src = "images/banner04.jpg"
}

function fnCadastrar() {
    let email = document.getElementById("email").value
    alert("Seu e-mail :"+" " +email +" " + "foi cadastrado com sucesso")

    //Limpar campos
    document.getElementById("email").value = ""
}


function mostrarHora() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    document.getElementById("hora").textContent = hora;
  }
 
 
  setInterval(mostrarHora, 1000);
 
  mostrarHora();

const botao = document.querySelector('.botao')

const corpo2 = document.querySelector('#corpo')

let subMenu2 = document.querySelector('.subMenu')

const botaoLupa = document.querySelector('.potaoLupa') 

let imagemXLupa = document.querySelector('.imagemXLupa')

let pesquisar = document.querySelector('.pesquisar')

let cabecalho = document.querySelector('.cabecalho')

let logoEmpresa = document.querySelector('.logoEmpresa')

let logo = document.querySelector('.logo')

let menuCabeclho = document.querySelector('.menuCabeclho')

let menu = document.querySelector('.menu')

let divSubMenu = document.querySelector('.divSubMenu')

let linkMenu = document.querySelector('.linkMenu')

let imagemBalao = document.querySelector('.imagemBalao')

let pessoa = document.querySelector('.pessoa')

let telefone = document.querySelector('.telefone')

let link = document.querySelector('.link')

let linkMenu2 = document.querySelector('.linkMenu2')

let linkMenu3 = document.querySelector('.linkMenu3')

let imagemMenu = document.querySelector('.imagemMenu')

let imagemX = document.querySelector('.imagemX')

let imagemLupa = document.querySelector('.imagemLupa')

let imagemLupaX = document.querySelector('.imagemXLupa')

let imagemX2 = document.querySelector('.imagemX')

let menuBotao = document.querySelector('.menuBotao')

let link1 = document.querySelector('.link1')

let link2 = document.querySelector('.link2')

let link3 = document.querySelector('.link3')

let botaoLinkMenu = document.querySelector('.botaoLinkMenu')

let linkMenu4 = document.querySelector('.linkMenu4')

let linkMenu5 = document.querySelector('.linkMenu5')

let imagemBalao2 = document.querySelector('.imagemBalao2')

let pessoa2 = document.querySelector('.pessoa2')

let telefone2 = document.querySelector('.telefone2')

let botaoLinkMenu1 = document.querySelector('.botaoLinkMenu1')

let botaoLinkMenu2 = document.querySelector('.botaoLinkMenu2')

let botaoLinkMenu3 = document.querySelector('.botaoLinkMenu3')

let divTelefone = document.querySelector('.divTelefone')

let linkMenubotao = document.querySelector('.linkMenubotao')

let menuBotaoNovo = document.querySelector('.menuBotaoNovo')

let imgMenuBotaoNovo = document.querySelector('.imgMenuBotaoNovo')

let imgMenuXPretoBotaoNovo = document.querySelector('.imgMenuXPretoBotaoNovo')

let linkSubMenu = document.querySelector('.linkSubMenu')

let formatSubMenu = document.querySelector('.formatSubMenu')

const subMenuNvo = document.querySelector('.subMenuNvo')

//Menu --------------------------------------------------------

botao.onclick = clicarBotao
subMenu2.style.display = "none"
botaoLupa.onclick = clicarBotaoLupa
imagemXLupa.style.display = 'none'
pesquisar.style.display = 'none'

let altura = window.innerWidth

let botaoBalao
let botaoPessoa
let botaoTelefone

let cont = 0

const mostrarTelefone = () => divTelefone.style.display = 'block'
const ocutarTelefone = () => divTelefone.style.display = 'none'

function contadorClicarBotao(){
    ++cont
    if(cont > 1) cont = 0
    return cont
}

let visibilidade = true

function mostrar(){

    let subMenu = document.querySelector('.subMenu')

    subMenu.classList.add("formatSubMenu")

    subMenu.style.display = "block"

}

function ocultar(){
    
    let subMenu = document.querySelector('.subMenu')

    subMenu.style.display = "none"

    let botaoX = document.querySelector('.botaoX')
    botaoX.style.display = "none"
}

function pesquisarMostrar(){
    pesquisar.style.display = 'block'
}

function pesquisarOcutar(){
    pesquisar.style.display = 'none'
}

function selecionarImagemMostrar(){
    imagemMenu.style.display = 'none'
        
    imagemX.style.height = `${20}px`
    imagemX.style.display = 'block'
    imagemX.style.position = 'absolute'
    if(altura > 1089) imagemX.style.right = `${60}px`
    if(altura <= 1089) imagemX.style.right = `${80}px`
    if(altura <= 1064){
        imagemX.style.height = `${45}px`
        imagemX.style.right = `${-10}px`
    }
}

function selecionarImagemOcutar(){
    imagemMenu.style.display = 'block'
    imagemMenu.style.position = 'absolute'
    if(altura > 1089) imagemMenu.style.right = `${60}px`
    if(altura <= 1089) imagemMenu.style.right = `${80}px`
    if(altura <= 1064) imagemMenu.style.right = `${-10}px`
    
    imagemX2.style.display = 'none'
}

function selecionarMostrarOuOcutarImagemX(){
    imagemLupaX.style.display = 'none'
    imagemLupa.style.display = 'block'
}

function clicarBotao(){

    let contador = contadorClicarBotao()

    if(visibilidade){
        mostrar()
        visibilidade = false
        selecionarImagemMostrar()
        selecionarMostrarOuOcutarImagemX()
        pesquisarOcutar()
        ocutarTelefone()
    }else{
        ocultar()
        visibilidade = true
        selecionarImagemOcutar()
    }
}

function ocutarImgLupaMostrarImgXLupa(){
    imagemLupa.style.display = 'none'
    imagemXLupa.style.display = 'block'
}

function ocultarImgXLupaMostrarImgLupa(){
    imagemLupa.style.display = 'block'
    imagemXLupa.style.display = 'none'
}

function clicarBotaoLupa(){

    let contador = contadorClicarBotao()

    let imagemLupa = document.querySelector('.imagemLupa')
    
    if(contador === 1){
        ocutarImgLupaMostrarImgXLupa()
        pesquisarMostrar()
        ocultar()
        selecionarImagemOcutar()
        ocutarTelefone()
        mostrarMenuBotaoNovo()
    }

    if(contador === 0){
        ocultarImgXLupaMostrarImgLupa()
        pesquisarOcutar()
    }
}

//Menu --------------------------------------------------------

//Resolução do body--------------------------------------------

const corpo = document.querySelector('#corpo')
tamanhoCorpo()
window.addEventListener('resize', tamanhoCorpo);
//corpo.onresize = tamanhoCorpo

function tamanhoCorpo(){

    altura = window.innerWidth
    let largura = window.innerHeight

    //console.log(altura)

    if(altura > 1292) divTelefone.style.left = `${850}px`

    if(altura < 1292) divTelefone.style.left = `${800}px`

    if(altura > 1260){
        logoEmpresa.style.paddingLeft = `${70}px`
        logo.style.width = `${390}px`
        divSubMenu.style.marginLeft = `${280}px`
    }

    if(altura <= 1260){
        logoEmpresa.style.paddingLeft = `${20}px`
        logo.style.width = `${340}px`
        divSubMenu.style.marginLeft = `${270}px`
        divTelefone.style.left = `${750}px`
    }

    if(altura > 1210){
        botaoLupa.style.left = `${80}px`
    }

    if(altura <= 1210){
        botaoLupa.style.left = `${50}px`
        divSubMenu.style.marginLeft = `${225}px`
        divTelefone.style.left = `${730}px`
    }

    if(altura > 1209){
        menu.style.width = `${850}px`
    }

    if(altura <= 1209){
        menu.style.width = `${820}px`
        divSubMenu.style.marginLeft = `${215}px`
        divTelefone.style.left = `${710}px`
    }

    if(altura <= 1180){
        menu.style.width = `${805}px`
        botaoLupa.style.left = `${35}px`
        divSubMenu.style.marginLeft = `${205}px`
    }


    if(altura <= 1165){
        menu.style.width = `${790}px`
        divSubMenu.style.marginLeft = `${190}px`
        botaoLupa.style.left = `${30}px`
    }

    if(altura > 1150){
        linkMenu.style.left = `${30}px`
        linkMenu.style.paddingRight = `${20}px`
        linkMenu.style.paddingLeft = `${20}px`
        imagemBalao.style.left = `${145}px`
        pessoa.style.left = `${180}px`
        telefone.style.left = `${230}px`
        linkMenu2.style.position = 'relative'
        linkMenu2.style.top = `${5}px`
        linkMenu2.style.left = `${30}px`
        linkMenu3.style.position = 'relative'
        linkMenu3.style.top = `${5}px`
        linkMenu3.style.left = `${30}px`
    }

    if(altura <= 1150){
        divSubMenu.style.marginLeft = `${160}px`
        menu.style.width = `${745}px`
        linkMenu.style.left = `${-15}px`
        linkMenu2.style.left = `${5}px`
        linkMenu3.style.left = `${5}px`
        linkMenu.style.paddingRight = `${0}px`
        linkMenu.style.paddingLeft = `${10}px`
        imagemBalao.style.left = `${90}px`
        pessoa.style.left = `${155}px`
        telefone.style.left = `${205}px`
        botaoLupa.style.left = `${15}px`
        divTelefone.style.left = `${680}px`
    }

    if(altura > 1105){
        imagemX.style.position = 'absolute'
        imagemX.style.right = `${60}px`
        imagemMenu.style.position = 'absolute'
        imagemMenu.style.right = `${60}px`
        botao.style.position = 'relative'
        botao.style.right = `${0}px`
    }

    if(altura <= 1105){
        menu.style.width = `${720}px`
        divSubMenu.style.marginLeft = `${140}px`
        imagemX.style.right = `${80}px`
        imagemMenu.style.right = `${80}px`
        botao.style.position = 'relative'
        botao.style.right = `${18}px`
        linkMenu.style.left = `${-35}px`
        imagemBalao.style.left = `${70}px`
        linkMenu2.style.left = `${-18}px`
        pessoa.style.left = `${138}px`
        linkMenu3.style.left = `${-18}px`
        telefone.style.left = `${185}px`
        botaoLupa.style.left = `${-10}px`
        divTelefone.style.left = `${650}px`
    }

    if(altura > 1081){
        menuBotao.innerHTML = 'Menu'
        linkMenu.innerHTML = 'Fale Conosco'
        linkMenu2.innerHTML = 'Portal do Cliente'
        linkMenu3.innerHTML = 'Central de Atendimentos'
        imagemLupa.style.height = `${30}px`
        imagemXLupa.style.height = `${30}px`
        botaoLupa.style.top = `${-6}px`
        imagemBalao.style.height = `${30}px`
        pessoa.style.height = `${30}px`
        telefone.style.height = `${30}px`
        telefone.style.bottom = `${1}px`
        pessoa.style.bottom = `${1}px`
        imagemBalao.style.bottom = `${1}px`
        imagemMenu.style.height = `${20}px`
        imagemX.style.height = `${20}px`
        imagemMenu.style.top = `${0}px`
        imagemX.style.top = `${0}px`
        linkMenu.style.display = 'inline'

        botaoLinkMenu1.style.display = 'none'
        botaoLinkMenu2.style.display = 'none'
        botaoLinkMenu3.style.display = 'none'
        linkMenu4.style.display = 'block'
        pessoa.style.display = 'block'
        telefone.style.display = 'block'
        link3.style.display = 'block'
        link2.style.display = 'block'
        botao.style.height = `${0}px`
        botao.style.position = 'relative'
        botao.style.top = `${-1}px`
        botao.style.width = 'auto'
        botao.style.opacity = 1
    }

    if(altura <= 1081){
        menuBotao.innerHTML = ''
        linkMenu.innerHTML = ''
        linkMenu2.innerHTML = ''
        linkMenu3.innerHTML = ''
        menu.style.width = `${580}px`
        divSubMenu.style.marginLeft = `${70}px`
        botaoLupa.style.left = `${415}px`
        imagemLupa.style.height = `${45}px`
        imagemXLupa.style.height = `${45}px`
        botaoLupa.style.top = `${-15}px`
        
        imagemMenu.style.height = `${45}px`
        imagemX.style.height = `${45}px`
        imagemX.style.right = `${-10}px`
        imagemMenu.style.right = `${-10}px`
        imagemMenu.style.top = `${-11}px`
        imagemX.style.top = `${-11}px`
        linkMenu4.style.display = 'none'
        pessoa.style.display = 'none'
        telefone.style.display = 'none'
        link3.style.display = 'none'
        link2.style.display = 'none'
        botao.style.position = 'fixed'
        botao.style.top = `${23}px`
        botao.style.right = `${530}px`
        botao.style.height = `${45}px`
        botao.style.width = `${50}px`
        botao.style.opacity = 0
        botaoLinkMenu1.style.display = 'block'
        botaoLinkMenu2.style.display = 'block'
        botaoLinkMenu3.style.display = 'block'
        divTelefone.style.left = `${550}px`
    }

    if(altura < 1019) divTelefone.style.left = `${500}px`

    if(altura < 987) divTelefone.style.left = `${450}px`

    if(altura > 941){
        menuBotaoNovo.style.display = 'none'
        linkMenubotao.style.display = 'block'
        botaoLinkMenu2.style.right = `${280}px`
        botaoLinkMenu1.style.right = `${410}px`
        botaoLinkMenu3.style.right = `${140}px`
    }

    if(altura < 902) divTelefone.style.left = `${380}px`


    if(altura <= 941){
        menu.style.width = `${430}px`
        botaoLupa.style.left = `${280}px`
        divSubMenu.style.marginLeft = `${5}px`
        botaoLinkMenu2.style.right = `${195}px`
        botaoLinkMenu1.style.right = `${290}px`
        //divTelefone.style.left = `${360}px`
        botaoLinkMenu3.style.right = `${100}px`
        linkMenubotao.style.display = 'none'
        menuBotaoNovo.style.display = 'block'
    }

    if(altura < 845) divTelefone.style.left = `${340}px`

    if(altura > 784){
        cabecalho.style.height = `${80}px`
        divTelefone.style.top = `${90}px`
    }

    if(altura <= 784){
        cabecalho.style.height = `${160}px`
        divTelefone.style.top = `${170}px`
        divTelefone.style.left = `${260}px`
    }

    if(altura < 708) divTelefone.style.left = `${185}px`

    if(altura < 637) divTelefone.style.left = `${120}px`

    if(altura < 575) divTelefone.style.left = `${50}px`

}

linkMenu3.onclick = clicarTelefone
botaoLinkMenu3.onclick = clicarTelefone

let controle = 0

function clicarTelefone(){
    if(controle == 0){
        controle = 1
        mostrarTelefone()
        ocultar()
        selecionarImagemOcutar()
        ocultarImgXLupaMostrarImgLupa()
        pesquisarOcutar()
        mostrarMenuBotaoNovo()
    }else{
        controle = 0
        ocutarTelefone()
    }
}

const ocutarDuasVxTelefone = () => {
    ocutarTelefone()
}

divTelefone.addEventListener("mouseleave", ocutarDuasVxTelefone)   

const mostrarMenuBotaoNovo = () => {
    imgMenuBotaoNovo.style.display = 'block'
    imgMenuXPretoBotaoNovo.style.display = 'none'
    if(altura > 784) {
        ocultar()
    }else{
        subMenuNvo.style.display = 'none'
    }
}

const mostrarXPretoBotaoNovo = () => {
    imgMenuBotaoNovo.style.display = 'none'
    imgMenuXPretoBotaoNovo.style.display = 'block'
    if(altura > 784) {
        mostrar()
    }else{
        subMenuNvo.style.display = 'block'
    } 
}

let controle2 = 0

menuBotaoNovo.onclick = () => {
   if(controle2 == 0){
       controle2 = 1
       mostrarXPretoBotaoNovo()
       ocultarImgXLupaMostrarImgLupa()
       pesquisarOcutar()
       ocutarTelefone()
   }else{
       controle2 = 0
       mostrarMenuBotaoNovo()
   }
}

function ocutarDivMenu(){
    if(altura > 784) {
        subMenuNvo.style.display = 'none'
        imgMenuBotaoNovo.style.display = 'block'
        imgMenuXPretoBotaoNovo.style.display = 'none'
    }
    if(altura <= 784) subMenu2.style.display = 'none'
}

window.addEventListener('resize', ocutarDivMenu);


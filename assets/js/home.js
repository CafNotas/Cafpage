let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')
logado.innerHTML = `Olá ${userLogado.nome}`

if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../../index.html'
}



function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../../index.html'
}


// =================================================================================================

var home = document.getElementById("h-loc");

home.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="contact-block">
    <img class="loc" src="https://maceio.al.gov.br/assets/images/location.svg" alt="">
    <div class="info-text">
        <p><strong>Secretaria Municipal de Saúde</strong></p>
        <p></p>
        <p>Rua Dias Cabral, 569 - Centro<br>CEP 57020-250 // Telefone: 82 3312-5400<br>Horário de
            atendimento: segunda a sexta, de 8h às 14h.</p>
        <p></p>
    </div>
</div>

<div class="contact-block">
    <img class="loc" src="https://maceio.al.gov.br/assets/images/location.svg" alt="">
    <div class="info-text">
        <p><strong>CTSMC</strong></p>
        <p></p>
        <p>Av. Juca Sampaio, 620 - Barro Duro<br>CEP 57040-600 // Telefone: 82 3312-5447<br>Horário de
            atendimento: segunda a sexta, de 7h às 19h.</p>
        <p></p>
    </div>
</div>`
}

// =================================================================================================

var links = document.getElementById("links");

links.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
            <div class="bt">
                <a class="link-bt" href="https://mail.sms.maceio.al.gov.br/#1" target="_blank">
                <div>
                    <img class="logo-op"
                        src="../img/ZIMBRA.png"
                        alt="logo ZIMBRA">
                </div>
            </a>
            <p class="m-title">ZIMBRA</p>
            </div>
            

            <div class="bt">
                <a class="link-bt" href="https://supe.maceio.al.gov.br/pages/comum/login.faces" target="_blank">
                    <div>
                        <img class="logo-op"
                            src="../img/logo_prefeitura.png"
                            alt="logo prefeitura">

                    </div>
                </a>
                <p class="m-title">SUPE</p>
            </div>

            <div class="bt">
                <a class="link-bt"
                href="http://www.licitacao.maceio.al.gov.br/pesquisar?modalidade=1&ano=2019&numero=95&objeto=&orgao=&cota=&status="
                target="_blank">
                <div>
                    <img class="logo-op"
                        src="../img/LIC.png"
                        alt="logo prefeitura">
                </div>
            </a>
            <p class="m-title">LICITAÇÕES</p>
            </div>

            <div class="bt">
                <a class="link-bt" href="https://www.diariomunicipal.com.br/maceio/adesao" target="_blank">
                <div>
                    <img class="logo-op"
                        src="../img/logo_prefeitura.png"
                        alt="logo prefeitura">
                </div>
            </a>
            <p class="m-title">DIÁRIO OFICIAL</p>
            </div>
            
            <div class="bt">
                <a class="link-bt" href="http://scaweb.saude.gov.br/scaweb/" target="_blank">
                <div>
                    <img class="logo-op"
                        src="https://supe.maceio.al.gov.br/siimm-semge/imgs/logo_prefeitura.png?pfdrid_c=true"
                        alt="logo prefeitura">
                </div>
            </a>
            <p class="m-title">HÓRUS</p>
            </div>
            
            <div class="bt">
                <a class="link-bt" href="https://consultas.anvisa.gov.br/#/medicamentos/" target="_blank">
                <div>
                    <img class="logo-op"
                        src="../img/ANVISA.png"
                        alt="logo prefeitura">
                </div>
            </a>
            <p class="m-title">ANVISA MEDICAMENTOS</p>
            </div>
            
            <div class="bt">
                <a class="link-bt" href="https://consultas.anvisa.gov.br/#/saude/" target="_blank">
                <div>
                    <img class="logo-op"
                        src="../img/ANVISA.png"
                        alt="logo prefeitura">
                </div>
            </a>
            <p class="m-title">ANVISA CORRELATOS</p>
            </div>
            </div>`;
}

// =================================================================================================

var notas = document.getElementById("notas");

notas.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1iGFaKFzF7flhMtvK9ozdzqMto-Ckc5SER-JGYz7ISxk/edit#gid=0" target="_blank">
            <div>
                <img class="logo-op"
                    src="../img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">CONTROLE DE PROCESSOS</p>
    </div>
    </div>`
}

// =================================================================================================

var logistc = document.getElementById("log");

logistc.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/12nt-Tvl4Jpzye9f2D1ieC2MKq6O6jtWgUPUWH0IK5zE/edit?pli=1#gid=0" target="_blank">
            <div>
                <img class="logo-op"
                    src="../img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">ROTA DIÁRIA</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1DZemm495IREQBm6mOTpERTstRZlPV0aHND8O2s5HVRo/edit#gid=1426336719" target="_blank">
            <div>
                <img class="logo-op"
                    src="../img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">PRODUTIVIDADE</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/10rcWazxcCs3pNh6mOXxaKS1Jb6WyAyh7xU6N8tQeVnU/edit#gid=1036754280" target="_blank">
            <div>
                <img class="logo-op"
                    src="../img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">INVENTÁRIO</p>
    </div>

</div>`;
}

// =================================================================================================

var farm = document.getElementById("farm");

farm.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="construc">
    <img class="img-c" src="../img/EM CONSTRUÇÃO.jpg" alt="">
</div>`;
}

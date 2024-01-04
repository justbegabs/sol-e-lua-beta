let textarea
let inputNumero

// Função para verificar e definir o estado da checkbox
function verificarEstadoCheckbox(idEl) {
    // Obtemos o estado salvo no localStorage
    const estadoSalvo = localStorage.getItem(idEl);

    // Se houver um estado salvo, aplicamos à checkbox
    if (estadoSalvo) {
        document.getElementById(idEl).checked = estadoSalvo === 'true';
    }
}
function verificarEstadoCheckbox(idEl) {
    try {
        const estadoSalvo = localStorage.getItem(idEl);

        if (estadoSalvo) {
            document.getElementById(idEl).checked = estadoSalvo === 'true';
        }
    } catch (error) {
        console.error('Erro ao verificar estado da checkbox:', error);
    }
}

// Função chamada quando a checkbox é alterada
function checkboxAlterada(evt) {
    console.log(evt.target.id)
    // Obtemos o estado atual da checkbox
    const estadoAtual = document.getElementById(evt.target.id).checked;

    // Salvamos o estado no localStorage
    localStorage.setItem(evt.target.id, estadoAtual);
}

// Adicionamos um ouvinte de evento para a carga da página
document.addEventListener('DOMContentLoaded', function () {
    // Verificamos e definimos o estado da checkbox ao carregar a página
    verificarEstadoCheckbox('item1');
    verificarEstadoCheckbox('item2');
    verificarEstadoCheckbox('item3');
    verificarEstadoCheckbox('item4');
    verificarEstadoCheckbox('item5');
    verificarEstadoCheckbox('item6');
    verificarEstadoCheckbox('item7');
    verificarEstadoCheckbox('item8');
    verificarEstadoCheckbox('item9');
    verificarEstadoCheckbox('item10');
    verificarEstadoCheckbox('item11');
    verificarEstadoCheckbox('item12');
    verificarEstadoCheckbox('item13');
    verificarEstadoCheckbox('item14');
    verificarEstadoCheckbox('item15');
    verificarEstadoCheckbox('item16');
    verificarEstadoCheckbox('item17');
    verificarEstadoCheckbox('item18');
    verificarEstadoCheckbox('item19');
    verificarEstadoCheckbox('item20');
    verificarEstadoCheckbox('item21');
    verificarEstadoCheckbox('item22');
    verificarEstadoCheckbox('item23');
    verificarEstadoCheckbox('item24');
    verificarEstadoCheckbox('item25');
    verificarEstadoCheckbox('item26');
    verificarEstadoCheckbox('item27');
    verificarEstadoCheckbox('item28');
    verificarEstadoCheckbox('item29');
    verificarEstadoCheckbox('item30');
    verificarEstadoCheckbox('item31');
    verificarEstadoCheckbox('item32');
    verificarEstadoCheckbox('item33');


    // Adicionamos um ouvinte de evento para quando a checkbox é alterada
    document.getElementById('item1').addEventListener('change', checkboxAlterada);
    document.getElementById('item2').addEventListener('change', checkboxAlterada);
    document.getElementById('item3').addEventListener('change', checkboxAlterada);
    document.getElementById('item4').addEventListener('change', checkboxAlterada);
    document.getElementById('item5').addEventListener('change', checkboxAlterada);
    document.getElementById('item6').addEventListener('change', checkboxAlterada);
    document.getElementById('item7').addEventListener('change', checkboxAlterada);
    document.getElementById('item8').addEventListener('change', checkboxAlterada);
    document.getElementById('item9').addEventListener('change', checkboxAlterada);
    document.getElementById('item10').addEventListener('change', checkboxAlterada);
    document.getElementById('item11').addEventListener('change', checkboxAlterada);
    document.getElementById('item12').addEventListener('change', checkboxAlterada);
    document.getElementById('item13').addEventListener('change', checkboxAlterada);
    document.getElementById('item14').addEventListener('change', checkboxAlterada);
    document.getElementById('item15').addEventListener('change', checkboxAlterada);
    document.getElementById('item16').addEventListener('change', checkboxAlterada);
    document.getElementById('item17').addEventListener('change', checkboxAlterada);
    document.getElementById('item18').addEventListener('change', checkboxAlterada);
    document.getElementById('item19').addEventListener('change', checkboxAlterada);
    document.getElementById('item20').addEventListener('change', checkboxAlterada);
    document.getElementById('item21').addEventListener('change', checkboxAlterada);
    document.getElementById('item22').addEventListener('change', checkboxAlterada);
    document.getElementById('item23').addEventListener('change', checkboxAlterada);
    document.getElementById('item24').addEventListener('change', checkboxAlterada);
    document.getElementById('item25').addEventListener('change', checkboxAlterada);
    document.getElementById('item26').addEventListener('change', checkboxAlterada);
    document.getElementById('item27').addEventListener('change', checkboxAlterada);
    document.getElementById('item28').addEventListener('change', checkboxAlterada);
    document.getElementById('item29').addEventListener('change', checkboxAlterada);
    document.getElementById('item30').addEventListener('change', checkboxAlterada);
    document.getElementById('item31').addEventListener('change', checkboxAlterada);
    document.getElementById('item32').addEventListener('change', checkboxAlterada);
    document.getElementById('item33').addEventListener('change', checkboxAlterada);

});

function alternarVisibilidade(elementId) {
    var elementoTexto = document.getElementById(elementId);

    // Alterna a visibilidade do texto
    if (elementoTexto.style.display === 'none') {
        elementoTexto.style.display = 'block'; // Torna o texto visível
    } else {
        elementoTexto.style.display = 'none'; // Torna o texto invisível
    }
}

function salvarNoLocalStorage(campo) {
    const texto = document.getElementById(campo).value;

    // Salva o texto diretamente no localStorage
    localStorage.setItem('dados_' + campo, texto);

    // alert('Texto salvo no localStorage!');
}

// Carrega os dados do localStorage ao carregar a página (opcional)
window.onload = function () {
    // Recupera o texto diretamente do localStorage para 'vida'
    const textoSalvoVida = localStorage.getItem('dados_vida');
    if (textoSalvoVida) {
        document.getElementById('vida').value = textoSalvoVida;
    }

    // Recupera o texto diretamente do localStorage para 'aura'
    const textoSalvoAura = localStorage.getItem('dados_aura');
    if (textoSalvoAura) {
        document.getElementById('aura').value = textoSalvoAura;
    }

    const textoSalvoPotencial = localStorage.getItem('dados_potencial');
    if (textoSalvoPotencial) {
        document.getElementById('potencial').value = textoSalvoPotencial;
    }

    const textoSalvoNome = localStorage.getItem('dados_nome');
    if (textoSalvoNome) {
        document.getElementById('nome').value = textoSalvoNome;
    }

    const textoSalvoSobrenome = localStorage.getItem('dados_sobrenome');
    if (textoSalvoSobrenome) {
        document.getElementById('sobrenome').value = textoSalvoSobrenome;
    }

    const textoSalvoIdade = localStorage.getItem('dados_idade');
    if (textoSalvoIdade) {
        document.getElementById('idade').value = textoSalvoIdade;
    }

    const textoSalvoProfissao = localStorage.getItem('dados_profissao');
    if (textoSalvoProfissao !== null) {
        document.getElementById('profissao').value = textoSalvoProfissao;
    }

    const textoSalvoHistoria = localStorage.getItem('dados_historia');
    if (textoSalvoHistoria) {
        document.getElementById('historia').value = textoSalvoHistoria;
    }

    // Recupera o texto diretamente do localStorage para 'story'
    const textoSalvoStory = localStorage.getItem('dados_story');
    if (textoSalvoStory) {
        document.getElementById('story').value = textoSalvoStory;
    }

    // Recupera o texto diretamente do localStorage para 'backstory'
    const textoSalvoBackstory = localStorage.getItem('dados_backstory');
    if (textoSalvoBackstory) {
        document.getElementById('backstory').value = textoSalvoBackstory;
    }


    const textoSalvoNumeroInput = localStorage.getItem('dados_numeroinput');
    if (textoSalvoNumeroInput) {
        document.getElementById('numeroinput').value = textoSalvoNumeroInput;
    }

    const textoSalvoNumero = localStorage.getItem('dados_numero');
    if (textoSalvoNumero) {
        document.getElementById('numero').value = textoSalvoNumero;
    }

    const textoSalvoNumber = localStorage.getItem('dados_number');
    if (textoSalvoNumber) {
        document.getElementById('number').value = textoSalvoNumber;
    }

    const textoSalvoValor = localStorage.getItem('dados_valor');
    if (textoSalvoValor) {
        document.getElementById('valor').value = textoSalvoValor;
    }

    const textoSalvoValue = localStorage.getItem('dados_value');
    if (textoSalvoValue) {
        document.getElementById('value').value = textoSalvoValue;
    }

    const textoSalvoUm = localStorage.getItem('dados_um');
    if (textoSalvoUm) {
        document.getElementById('um').value = textoSalvoUm;
    }

    const textoSalvoDois = localStorage.getItem('dados_dois');
    if (textoSalvoDois) {
        document.getElementById('dois').value = textoSalvoDois;
    }

    const textoSalvoTres = localStorage.getItem('dados_tres');
    if (textoSalvoTres) {
        document.getElementById('tres').value = textoSalvoTres;
    }

    const textoSalvoQuatro = localStorage.getItem('dados_quatro');
    if (textoSalvoQuatro) {
        document.getElementById('quatro').value = textoSalvoQuatro;
    }

    const textoSalvoCinco = localStorage.getItem('dados_cinco');
    if (textoSalvoCinco) {
        document.getElementById('cinco').value = textoSalvoCinco;
    }

    const textoSalvoSeis = localStorage.getItem('dados_seis');
    if (textoSalvoSeis) {
        document.getElementById('seis').value = textoSalvoSeis;
    }

    const textoSalvoSete = localStorage.getItem('dados_sete');
    if (textoSalvoSete) {
        document.getElementById('sete').value = textoSalvoSete;
    }

    const textoSalvoOito = localStorage.getItem('dados_oito');
    if (textoSalvoOito) {
        document.getElementById('oito').value = textoSalvoOito;
    }

    const textoSalvoNove = localStorage.getItem('dados_nove');
    if (textoSalvoNove) {
        document.getElementById('nove').value = textoSalvoNove;
    }

    const textoSalvoDez = localStorage.getItem('dados_dez');
    if (textoSalvoDez) {
        document.getElementById('dez').value = textoSalvoDez;
    }

    const textoSalvoOnze = localStorage.getItem('dados_onze');
    if (textoSalvoOnze) {
        document.getElementById('onze').value = textoSalvoOnze;
    }

    const textoSalvoDoze = localStorage.getItem('dados_doze');
    if (textoSalvoDoze) {
        document.getElementById('doze').value = textoSalvoDoze;
    }

    const textoSalvoTreze = localStorage.getItem('dados_treze');
    if (textoSalvoTreze) {
        document.getElementById('treze').value = textoSalvoTreze;
    }

    const textoSalvoQuatorze = localStorage.getItem('dados_quatorze');
    if (textoSalvoQuatorze) {
        document.getElementById('quatorze').value = textoSalvoQuatorze;
    }

    const textoSalvoQuinze = localStorage.getItem('dados_quinze');
    if (textoSalvoQuinze) {
        document.getElementById('quinze').value = textoSalvoQuinze;
    }

    const textoSalvoDezesseis = localStorage.getItem('dados_dezesseis');
    if (textoSalvoDezesseis) {
        document.getElementById('dezesseis').value = textoSalvoDezesseis;
    }
}


// Carrega o tamanho da textarea do localStorage ao carregar a página
const alturaSalva = localStorage.getItem('alturaTextarea');
const larguraSalva = localStorage.getItem('larguraTextarea');

if (alturaSalva && larguraSalva) {
    const textarea = document.getElementById('story');
    textarea.style.height = alturaSalva + 'px';
    textarea.style.width = larguraSalva + 'px';
}

function adicionarNumero(idEl) {
    const inputNumero = document.getElementById(idEl);
    inputNumero.value = parseInt(inputNumero.value) + 1;
    salvarNoLocalStorage(idEl);
}

function subtrairNumero(idEl) {
    const inputNumero = document.getElementById(idEl);
    inputNumero.value = parseInt(inputNumero.value) - 1;
    salvarNoLocalStorage(idEl);
}

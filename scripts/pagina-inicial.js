// SELECIONA um ID (Elemento): (document.getElementById('---'))
    const element = document.getElementById('exemplo-get');
    console.log("elemento (id) ->", element);
    element.style.color = 'black';

    // SELECIONA uma CLASSE: (document.querySelector('---'))
    const classeQuery = document.querySelector('.caixote');
    console.log("classe ->", classeQuery);

    // CRIA um ELEMENTO: (document.createElement('---'))
    const novoH1 = document.createElement('h1');
    novoH1.textContent = "NOVO H1 AQUI! CRIADO POR JAVASCRIPT";
    novoH1.style.color = 'blue';
    console.log("novo h1 ->", novoH1);

    // JUNTA um ELEMENTO / CLASSE: (---.appendChild('---'))
    classeQuery.appendChild(novoH1);

// ------------------------- exercicios do sor -------------------------------

    // // 1 - mudar cor do header:
    // const header = document.getElementsByTagName('header')[0];
    // header.style.backgroundColor = 'blue';

    // // 2 - mudar tamanho da letra do footer:
    // const footer = document.getElementsByTagName('footer')[0];
    // footer.style.fontSize = '10px';
    
    // "DESAFIO"

    const listanaoord = document.querySelector("ul");
    const botaoExercicio = document.getElementById("add-item");

    botaoExercicio.addEventListener('click', (event) => {
        let li = document.createElement("li");
        listanaoord.appendChild(li);
        li.textContent = "Novo Item " + listanaoord.children.length
    });

// ---------------------------------------------------------------------------

    // BOTAO com EVENT LISTENER:
    const buttonExemplo = document.getElementById("buttonExemplo");
    buttonExemplo.addEventListener('click', () => {
        alert("Bomba localizada embaixo da sua cadeira");
    });

    // FORM:
    const form = document.querySelector("form");
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("AAA");
    });

    // // Ads be like (mouse hover):
    // document.addEventListener('mouseover', () => {
    //     alert("Não pode")
    // });

    // PRESSIONAR UMA TECLA:
    document.addEventListener('keydown', (event) => {
        alert("Você pressionou a tecla: " + event.key);
    });


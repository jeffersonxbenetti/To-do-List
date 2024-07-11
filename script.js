const inputTask = document.querySelector(".input-task")
const buttonAddTask = document.querySelector(".button-add-task")
const listTask = document.querySelector(".task-list")

const todoList = []

function pickUpTask() {
    todoList.push({
        task: inputTask.value,
        completed: false
    })

    inputTask.value = ""

    showOnScreen()
}

function showOnScreen() {

    let newLi = ""

    todoList.forEach( (task, index) => {
        newLi = newLi + `
            <li class="task ${task.completed && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="completeTask(${index})">
                <p>${task.task}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletItem(${index})">
            </li>
        `
    })

    listTask.innerHTML = newLi
}

function completeTask(index) {
    todoList[index].completed = !todoList[index].completed

    showOnScreen()
}

function deletItem(index) {
    todoList.splice(index, 1)

    showOnScreen()
}

buttonAddTask.addEventListener("click", pickUpTask)


// // Variavél para guardar/mapear o botão para pegar o seu click.
// const buttonAddTask = document.querySelector(".button-add-task")
// // Variavél para guardar/mapear o input dentro HTML.
// const inputTask = document.querySelector(".input-task")
// // Variavél para guardar/mapear a lista(UL) dentro do HTML.
// const fullList = document.querySelector(".task-list")

// const minhaLista = [] // array onde irei guardar todas as minhas tarefas

// // função para pegar a tarefa que coloquei no INPUT
// function pegarTarefa() {
//     // Usa-se o .PUSH para enviar o que você quer guardar no array.
//     minhaLista.push({
//         tarefa: inputTask.value,
//         concluida: false
//     })

//     // Usa-se essa variavél para ZERAR o input quando você escreve/Adiciona na tela.
//     inputTask.value = ""

//     // Função para chamar a função MOSTRARNATELA().
//     mostrarTarefa()
// }

// // Funcão para mostrar na tela a tarefa.
// function mostrarTarefa() {

//     // Variavél para guardar a nova LI que será feita.
//     let novaLi = ""

//     // Função FOREACH - Serve para percorrer o array, assim pegando item por item e fazer o que você quiser com ele. Neste caso, uma NOVA LI.
//     minhaLista.forEach((item, posiçao) => {

//         // Pegando a Variavél NOVALI e guardando dentro dela uma NOVA LI.
//         novaLi = novaLi + `

//             <li class="task ${item.concluida && "done"}">
//                 <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posiçao})">
//                 <p>${item.tarefa}</p>
//                 <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posiçao})">
//             </li>
//         `
//     })

//     // Função para injetar a nova li dentro da lista(UL) dentro do HTML.
//     fullList.innerHTML = novaLi

//     // localStorage.setItem("lista", JSON.stringify(minhaLista)) // Para salvar direto no navegar. JSON.stringify converte o texto em STRING.
// }

// // Função para concluir a tarefas.
// function concluirTarefa(posiçao) {

//     // Vai pegar o seu ARRAY(minhaLista[+ posição que o item está]).concluida(o item que você quer acessar no seu objeto) = !(para sempre inverter os valores(true = false / false = true)) + ARRAY(minhaLista[posição]).concluida. Assim o item sempre irá converter os valores.
//     minhaLista[posiçao].concluida = !minhaLista[posiçao].concluida

//     // Função para chamar a função MOSTRARNATELA().
//     mostrarTarefa()
// }

// // Função para deletar tarefas.
// function deletarItem(posiçao) {

//     // splice serve para deletar um item no arry, você coloca a posição que quer deletar + quantos itens voce irá deletar.
//     minhaLista.splice(posiçao, 1)

//     // Função para chamar a função MOSTRARNATELA().
//     mostrarTarefa()
// }

// // Função para RECARREGAR TAREFAS NO NAVEGADOR.
// // function recarregarTarefas() {

// //     // Variavél para guardar o LOCALSTORAGE.getItem("list") - local do navegar onde irá guardar as suas tarefas.
// //     const tarefasDoLocalStorage = localStorage.getItem("lista")

// //     // Usa-se o IF para quando não houver nada dentro do localStorage para nao da erro na aplicação.
// //     if(tarefasDoLocalStorage) {
// //         minhaLista = JSON.parse(tarefasDoLocalStorage) // JSON.parse converte o texto em STRING em OBJETO novamente.
// //     }

// //     // Função para chamar a função MOSTRARNATELA().
// //     mostrarTarefa()
// // }

// // Chamando a função para toda vez que carregar a página mostrar as tarefas.
// // recarregarTarefas()

// // Adicionando EVENTO de CLICK para ouvir/observar quando o botão é clicado e logo em seguida chamar a função PEGAR TAREFA.
// buttonAddTask.addEventListener("click", pegarTarefa)
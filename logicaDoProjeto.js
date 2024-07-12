// Explicação do Código:

// Seleção de Elementos HTML:
const inputTask = document.querySelector(".input-task") // Seleciona o elemento HTML com a classe .input-task. Geralmente, isso representa um campo de entrada de texto onde o usuário pode digitar uma nova tarefa.
const buttonAddTask = document.querySelector(".button-add-task") // Seleciona o botão com a classe .button-add-task, que é utilizado para adicionar uma nova tarefa à lista.
const listTask = document.querySelector(".task-list") // Seleciona a lista onde as tarefas serão exibidas, identificada pela classe .task-list.
// Array todoList:

const todoList = [] // Declara uma array vazia chamada todoList que vai armazenar objetos representando cada tarefa a ser exibida na lista.

/*
- Função pickUpTask:

    - Essa função é chamada quando o usuário clica no botão buttonAddTask.

    - Ela cria um novo objeto task com a propriedade task (valor do campo inputTask.value) e completed inicializado como false.

    - Adiciona esse objeto à array todoList.

    - Limpa o campo inputTask.value após adicionar a tarefa.

    - Chama showOnScreen() para atualizar a exibição da lista de tarefas na tela.
*/

/*
- Função showOnScreen:

    - Essa função monta a representação visual das tarefas na página.

    - Usa um loop forEach para percorrer cada elemento da array todoList.

    - Para cada task, cria um <li> (item de lista) que contém:

    - Uma imagem de verificação (checkbox) que, quando clicada, chama a função completeTask(index) para marcar a tarefa como concluída.

    - O texto da tarefa (task.task).

    - Uma imagem de lixeira que, quando clicada, chama a função deletItem(index) para excluir a tarefa.

    - A classe do <li> é dinamicamente alterada com base na propriedade completed da task para aplicar estilos 
    diferentes se a tarefa estiver concluída.

    - O HTML resultante é armazenado na variável newLi e então atribuído ao innerHTML da lista listTask, atualizando assim a exibição das tarefas na página.
*/

/*
- Função completeTask:

    - Esta função é chamada quando o usuário clica na imagem de verificação associada a uma tarefa.

    - Alterna o estado da propriedade completed da tarefa (de false para true ou vice-versa) na posição index da array todoList.

    - Em seguida, chama showOnScreen() para atualizar a exibição das tarefas na tela.
*/

/*
- Função deletItem:

    - Esta função é chamada quando o usuário clica na imagem de lixeira associada a uma tarefa.

    - Remove o elemento na posição index da array todoList usando splice(index, 1).

    - Chama showOnScreen() para atualizar a exibição das tarefas na tela após a exclusão.
*/

/*
- Evento de clique no botão buttonAddTask:

    - Adiciona um ouvinte de evento ao botão buttonAddTask para que quando ele for clicado, a função pickUpTask seja chamada, iniciando o processo de adicionar uma nova tarefa à lista.
*/

/*
- Funcionamento Geral:

    - O código permite ao usuário digitar uma nova tarefa em inputTask, clicar em buttonAddTask para adicioná-la à lista (todoList), marcá-la como concluída através da imagem de verificação e deletá-la através da imagem de lixeira. A função showOnScreen garante que as mudanças na lista de tarefas sejam refletidas visualmente na página HTML.
*/
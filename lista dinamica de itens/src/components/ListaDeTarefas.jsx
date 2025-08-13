import { useState } from "react";

const ListaDeTarefas = () => {
  // Estado para o valor do campo de entrada
  const [textoTarefa, setTextoTarefa] = useState("");

  // Estado para a lista de tarefas (array de strings)
  const [listaTarefas, setListaTarefas] = useState([]);

  // Função para adicionar nova tarefa
  const adicionarTarefa = () => {
    // Verifica se o campo não está vazio (trim remove espaços)
    if (textoTarefa.trim() !== "") {
      // Adiciona a nova tarefa ao array usando spread operator
      setListaTarefas([...listaTarefas, textoTarefa]);

      // Limpa o campo de entrada
      setTextoTarefa("");
    }
  };

  // Função para lidar com a tecla Enter no input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
  };

  return (
    <div className="lista-container">
      <h2 className="titulo">Lista de Tarefas</h2>

      {/* Campo de entrada e botão */}
      <div className="input-container">
        <input
          type="text"
          value={textoTarefa}
          onChange={(e) => setTextoTarefa(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma nova tarefa..."
          className="input-tarefa"
        />
        <button onClick={adicionarTarefa} className="botao-adicionar">
          Adicionar
        </button>
      </div>

      {/* Lista de tarefas */}
      <ul className="lista-tarefas">
        {listaTarefas.map((tarefa, index) => (
          <li key={index} className="item-tarefa">
            {tarefa}
          </li>
        ))}
      </ul>

      {/* Mensagem quando não há tarefas */}
      {listaTarefas.length === 0 && (
        <p className="mensagem-vazia">Nenhuma tarefa adicionada ainda...</p>
      )}

      {/* Contador de tarefas */}
      {listaTarefas.length > 0 && (
        <p className="contador">Total de tarefas: {listaTarefas.length}</p>
      )}
    </div>
  );
};

export default ListaDeTarefas;

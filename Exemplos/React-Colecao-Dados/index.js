import { jogosExclusivos } from "../../data";

const ListaDeJogosExclusivos = () => {

  const jogosFiltrados = jogosExclusivos.filter(
    (jogo) => jogo.plataforma === "nintendo"
  );

  return (
    <div className="container-principal">
      <h2>Lista de Jogos Exclusivos</h2>
      <div className="container-jogos">
        {jogosFiltrados.map((jogo) => (
          <ItemJogos
            key={jogo.id}
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}
      </div>
    </div>
  );
};
export default ListaDeJogosExclusivos;
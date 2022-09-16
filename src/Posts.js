function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.foto} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imglike} />
          <div class="texto">
            Curtido por <strong>{props.nomelike}</strong> e{" "}
            <strong>outras {props.qtdlike} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const infoPosts = [
    {
      nome: "meowed",
      imagem: "./img/meowed.svg",
      foto: "./img/gato-telefone.svg",
      imglike: "./img/respondeai.svg",
      nomelike: "respondeai",
      qtdlike: 101.523,
    },
    {
      nome: "barked",
      imagem: "./img/barked.svg",
      foto: "./img/dog.svg",
      imglike: "./img/adorable_animals.svg",
      nomelike: "adorable_animals",
      qtdlike: 99.159,
    },
  ];

  return (
    <div class="posts">
      {infoPosts.map((p) => (
        <Post
          nome={p.nome}
          imagem={p.imagem}
          foto={p.foto}
          imglike={p.imglike}
          nomelike={p.nomelike}
          qtdlike={p.qtdlike}
        />
      ))}
    </div>
  );
}

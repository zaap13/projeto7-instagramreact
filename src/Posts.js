import React from "react";

function Post(props) {
  const [like, setLike] = React.useState(props.clicked);
  const [qtdLike, setqtdLike] = React.useState(props.qtdLike);

  const handleOnClick = () => {
    let newLike = 0;
    if (like === "heart-outline") {
      newLike = qtdLike + 1;
      setLike("heart-sharp");
    } else {
      newLike = qtdLike - 1;
      setLike("heart-outline");
    }
    setqtdLike(newLike);
  };

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
        <img src={props.foto} onClick={() => handleOnClick()} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              class={like}
              name={like}
              onClick={() => handleOnClick()}
            ></ion-icon>
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
            <strong>outras {qtdLike} pessoas</strong>
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
      qtdLike: 101523,
      clicked: "heart-outline",
    },
    {
      nome: "barked",
      imagem: "./img/barked.svg",
      foto: "./img/dog.svg",
      imglike: "./img/adorable_animals.svg",
      nomelike: "adorable_animals",
      qtdLike: 99159,
      clicked: "heart-outline",
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
          qtdLike={p.qtdLike}
          clicked={p.clicked}
        />
      ))}
    </div>
  );
}

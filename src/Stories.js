function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.imagem} alt="Story"/>
      </div>
      <div className="usuario">{props.nome}</div>
    </div>
  );
}

export default function Stories() {
  const infoStories = [
    { nome: "9gag", imagem: "./img/9gag.svg" },
    { nome: "meowed", imagem: "./img/meowed.svg" },
    { nome: "barked", imagem: "./img/barked.svg" },
    {
      nome: "nathanwpylestrangeplanet",
      imagem: "./img/nathanwpylestrangeplanet.svg",
    },
    { nome: "wawawicomics", imagem: "./img/wawawicomics.svg" },
    { nome: "respondeai", imagem: "./img/respondeai.svg" },
    { nome: "filomoderna", imagem: "./img/filomoderna.svg" },
    { nome: "memeriagourmet", imagem: "./img/memeriagourmet.svg" },
  ];

  return (
    <div className="stories">
      {infoStories.map((s) => (
        <Story nome={s.nome} imagem={s.imagem} />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

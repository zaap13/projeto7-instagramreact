import React from "react";

export default function Usuario(props) {
  const [nome, setNome] = React.useState(props.nome);
  const [image, setImage] = React.useState(props.image);

  const changeName = () => {
    setNome(prompt("Insira novo nome"));
  };

  const changeImg = () => {
    setImage(prompt("Insira URL da noma imagem de perfil"));
  };
  return (
    <div className="usuario">
      <img src={image} alt="Usuario" onClick={() => changeImg()}/>
      <div className="texto">
        <strong>catanacomics</strong>
        <span>
        {nome}
          <ion-icon name="pencil" onClick={() => changeName()}></ion-icon>
        </span>
      </div>
    </div>
  );
}

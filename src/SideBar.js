import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Usuario nome={"Catana"} image={"./img/catanacomics.svg"}/>

      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

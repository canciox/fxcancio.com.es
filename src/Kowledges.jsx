import Header from "./headerMenu/headerMenu";
import "./kowledges.css";
import { Link } from "react-router-dom";
import SliderProyects from "./slider/Slider";

/*imagenes*/
import PG1 from "./images/AC_SurfBoards.png";
import PG2 from "./images/ahorcado.jpg";
import PG3 from "./images/fakNews-logo.png";
import PG4 from "./images/iconoSilueta.png";

const IMAGES = [PG1, PG2, PG3, PG4];
/* nombres de los proyectos*/
/*recordar que el proyecto tiene que llevar una posicion equivalente en el array al nombre*/
const ProyectNames = ["SurfBoards", "Ahorcado", "FackNews", "Mi WebSite"];

function Kowledges() {
  return (
    <div className="FullBody">
      <div className="header">
        <Header />
      </div>

      <main className="BodyHome">
        <h2 className="subtitles">Web Development Programs</h2>
        <section className="knowledges">
          <ul className="program">
            <li className="programName">Java Script</li>
            <li className="svg">
              <img
                className="ImgIcon"
                src="javascript.svg"
                alt="imagen icono Java Script"
              />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">React </li>
            <li className="svg">
              <img className="ImgIcon" src="react.svg" alt="reactIcon" />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">nodeJs</li>
            <li className="svg">
              <img className="ImgIcon" src="node.svg" alt="nodeJs icon" />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">My SQL</li>
            <li className="svg">
              <img className="ImgIcon" src="mysql.svg" alt="mySQL icon" />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">CSS</li>
            <li className="svg">
              <img className="ImgIcon" src="css.svg" alt="css icon" />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">HTML</li>
            <li className="svg">
              <img className="ImgIcon" src="html.svg" alt="html icon" />
            </li>
          </ul>
        </section>
        <h2 className="subtitles">Web Development tools</h2>
        <section className="knowledges">
          <ul className="program">
            <li className="programName">gitHub</li>
            <li className="svg">
              <img
                className="ImgIcon"
                src="gitHub-logo.svg"
                alt="gitHub icon"
              />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">visual studio code</li>
            <li className="svg">
              <img
                className="ImgIcon"
                src="visual-studio-code.svg"
                alt="visual icon"
              />
            </li>
          </ul>
          <ul className="program">
            <li className="programName">WorkBench</li>
            <li className="svg">
              <img className="ImgIcon" src="mysql.svg" alt="mySQL icon" />
            </li>
          </ul>
        </section>
        <h2 className="subtitles">FrameWorks</h2>
        <section className="knowledges">
          <ul className="program">
            <li className="programName">Vite</li>
            <li className="svg">
              <img className="ImgIcon" src="/vite.svg" alt="Vite Icon" />
            </li>
          </ul>

          <ul className="program">
            <li className="programName">Gatsby</li>
            <li className="svg">
              <img className="ImgIcon" src="/gatsby.svg" alt="Gatsby icon" />
            </li>
          </ul>
        </section>
        section
        <section className="Proyects">
          <h2>Mis Proyectos</h2>

          <SliderProyects imageUrls={IMAGES} ProyectNames={ProyectNames} />
          <Link to="/proyects">More Proyects...</Link>
        </section>
      </main>
    </div>
  );
}

export default Kowledges;

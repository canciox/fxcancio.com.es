import Header from "./headerMenu/headerMenu";
import "./Proyects.css";
import { Link } from "react-router-dom";
function Proyects() {
  return (
    <div className="ProyectosFullBody">
      <div className="header">
        <Header />
      </div>

      <main className="bodyProyect">
        <section className="ProyectsLs">
          <article className="ProyectCard">
            <div className="FrontCard">
              <a href="">
                <h2>El ahorcado</h2>
                <img
                  className="ProyectsImg"
                  src="/ahorcado.jpg"
                  alt="image of proyect"
                />
              </a>
            </div>

            <div className="BackCard">
              <a href="">
                <p>
                  This game is the traditional Ahorcado which all of us have
                  played at school.
                  <br /> You can choose different levels to play, which increase
                  in difficulty from the words you attempt to guess, and also
                  the number of fails decreases at the top levels. <br />
                  <span style={{ textDecoration: "underline" }}>
                    TECNOLOGIES:
                  </span>
                  <br />
                  HTML, CSS, and JS.
                </p>
              </a>
            </div>
          </article>

          <article className="ProyectCard">
            <div className="FrontCard">
              <a href="">
                <h2>FackNews</h2>
                <img
                  className="ProyectsImg"
                  src="/fakNews-logo.png"
                  alt="image of proyect"
                />
              </a>
            </div>
            <div className="BackCard">
              <a href="">
                <p>
                  {" "}
                  FakNews is developed as a social network and news hub. Based
                  on the Reddit application, it has been developed as a fun
                  application for the enjoyment of the most curious.
                  <br />
                  <span style={{ textDecoration: "underline" }}>
                    TECNOLOGIES:
                  </span>
                  <br />
                  Front-end based on React using the Vite framework, and the
                  backend with Node.js and MySQL
                </p>
              </a>
            </div>
          </article>

          <article className="ProyectCard">
            <div className="FrontCard">
              <a href="">
                <h2></h2>
                <h3>
                 SurfBoards
                </h3>
                <img
                  className="ProyectsImg"
                  src="/AC_SurfBoards.png"
                  alt="image of proyect"
                />
              </a>
            </div>
            <div className="BackCard">
              <a href="">
                <p>
                  {" "}
                  AC SurfBoards is a commercial website dedicated to the
                  exhibition, sale, and social forum for surfers. <br />
                  <span style={{ textDecoration: "underline" }}>
                    TECNOLOGIES:
                  </span>
                  <br /> React, NodeJs, MySql, Html5 and CSS
                </p>
              </a>
            </div>
          </article>

          <article className="ProyectCard">
            <div className="FrontCard">
              <Link to="/">
                <h2>Mi página</h2>
                <img
                  className="ProyectsImg"
                  src="/iconoSilueta.png"
                  alt="image of proyect"
                />
              </Link>
            </div>
            <div className="BackCard">
              <Link to="/">
                <p>
                  {" "}
                  You are in <br />
                  <span style={{ textDecoration: "underline" }}>
                    TECNOLOGIES:
                  </span>
                  <br /> React, Html5 and CSS
                </p>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Proyects;

import Header from "./headerMenu/headerMenu"

import "./home.css"
function Home() {
    

    return(
        <div className="PresentationBody">
        <Header/>
<main className="BodyHome1">
           <section className="Presentation">
          <h1>
            Francisco Xavier <br /> Cancio-Donlebún Roca
          </h1>{" "}
          <h3>WebDeveloper</h3>
        </section></main>
        </div>
    )
}
export default Home
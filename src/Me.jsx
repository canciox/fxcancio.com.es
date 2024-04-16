import Header from "./headerMenu/headerMenu";
import "./me.css";

function Me() {
  return (
    <div className="FullBody">
       <div className="header">
        <Header />
      </div>
      <main className="bodyMe">
        <section className="PresentMySelf SectionMe">
          <article>
            <h1 className="titleMe">Who is Xavier Cancio?</h1>
            <p>
              Hey there! Nice to meet you, I´m Xavi and this is me. <br />
              
 For a long time, I´ve been working in the real estate and maritime sectors where I developed my skills in English. Most recently, I worked in the web commercial area, managing the selling process from stockage to attending to our clients. That´s when I found a new passion. So, I studied at HackaBoss—a challenging experience, but now I´m READY.
            </p>
          </article>
         
        </section>
        <section className="softSkills SectionMe">
          <article>
            <h1 className="titlesoftSkills">SoftSkills</h1>
            <ul>
              <li>
                <h3>HARD WORK: </h3>
                <p> I´m the kind of person who builds things on holidays.</p>
              </li>
              <li>
                <h3>PACIENCE: </h3>
                <p>
                  When something turns discusting, just take a breath and look
                  for another perspective
                </p>
              </li>
              <li>
                <h3>TeamWork: </h3>
                <p>
                  I love work on a team because another work together reduce the
                  stuck times and frustrations
                </p>
              </li>
              <li>
                <h3>FLEXIBILITY: </h3>
                <p>
                  Trying to do the same thing three times and expecting
                  different results is a sign of madness.
                </p>
              </li>
              <li>
                <h3>RESPOSABILITY: </h3>
                <p>
                  Our victories and my faults. I usually do my part, trying to
                  help my colleagues, because if one fails, we all fail
                </p>
              </li>
            </ul>
          </article>
        </section>
        <section className="origen SectionMe">
         <h1>Origen</h1>
          <ul>
            
                        <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16613.900944416637!2d-8.759745181892848!3d42.59879362759451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f13f7022eba35%3A0x404f58273cb18c0!2sVillagarc%C3%ADa%20de%20Arosa%2C%20Vilagarc%C3%ADa%20de%20Arousa%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1710965930369!5m2!1ses!2ses"
                width="250"
                height="250"
                allowFullScreen=""
                loading="lazy"
                // eslint-disable-next-line react/no-unknown-property
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
            <li > 
           
              <p>
                Born and raised in Vilagarcia de Arousa, Pontevedra, where I
                studied until the university entrance exams. Then I went to the
                nautical school in Vigo to train as a sea captain and worked
                several years at sea. Nowadays, I´m back living in Vilagarcia de
                Arousa.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Me;

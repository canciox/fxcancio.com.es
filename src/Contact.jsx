import Header from "./headerMenu/headerMenu";
import "./contacts.css";
function Contact() {
  return (
    <div className="bodyContact">
<div className="header"><Header /></div>
      <main className="ContactsCard">
        <h1 className="contactTitle">Contacts:</h1>
        <section className="contacts">
        <div className="contac">
            <h3>Telephone:</h3>
            <h2>649 41 53 33</h2>
          </div>
          <div className="contac">
            <h3>Email:</h3>
            <h2>canciox@gmail.com</h2>
          </div>
          <div className="contac">
            <h3>Linkedin:</h3>
            <h2>
              <a href="https://www.linkedin.com/in/xavier-cancio" target="_blank">
                Xavier Cancio
              </a>
            </h2>
          </div>
          <div className="contac">
            <h3>GitHub:</h3>
            <h2>
              <a href="">My proyects</a>
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;

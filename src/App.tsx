
import './App.css'


{/* ---IMPORT--- */}
import { PinContainer } from '@/component/3dpin';
import { GlareCard } from "./component/cardStudy";
import { ContactForm } from './component/contactForm';

import Navbar from "./component/navbar/navbarApp"; // aggiorna il percorso corretto


{/* ---IMMAGINI--- */}
import img1 from './img.header/img_1.jpg';
import imgDante from './img.header/screen-DCommedia.png';



{/* ---LOGO--- */}
import LogoD from './logo/logo_divinaCommedia.png';
import myLogo from './logo/logo_1.png';





function App() {
  const products = [
    {
      title: "Prodotto 1",
      link: "#",
      thumbnail: imgDante,
    },

      {
      title: "Prodotto 1",
      link: "#",
      thumbnail: img1,
    },

      {
      title: "Prodotto 1",
      link: "#",
      thumbnail: imgDante,
    },

          {
      title: "Prodotto 1",
      link: "#",
      thumbnail: img1,
    },

          {
      title: "Prodotto 1",
      link: "#",
      thumbnail: imgDante,
    },

          {
      title: "Prodotto 1",
      link: "#",
      thumbnail: img1,
    },

      {
      title: "Prodotto 1",
      link: "#",
      thumbnail: imgDante,
    },

          {
      title: "Prodotto 1",
      link: "#",
      thumbnail: img1,
    },

          {
      title: "Prodotto 1",
      link: "#",
      thumbnail: imgDante,
    },
  ];

  return (
    <div>
  

{/* ---HOME--- */}


<div className="container">

  <div >
        <Navbar />
      </div>

  {/* Primo container */}
<div className="home">
  {/* Logo sopra il titolo */}
  <img  src={myLogo} alt="Logo" className="home-logo" />



  {/* Sottotitolo */}
  <h1 className="home-subtitle">Front-End Developer <br /> UI & UX Focus</h1>



  {/* Pulsante */}
  <button className='button-section'> <a href="#project" >Vai ai Progetti</a></button>
</div>


  {/* Secondo container */}
  <div className="sotto-home">
    
      <div className="skills-icons">
          <span className="skill-html"><i className="devicon-html5-plain"></i></span>
          <span className="skill-css"><i className="devicon-css3-plain"></i></span>
          <span className="skill-js"><i className="devicon-javascript-plain"></i></span>
        </div>

  </div>
</div>






{/* ---ABOUT--- */}
<div className="about" id='about'>


    <div className="container-about21">

    {/* Colonna sinistra */}
    <div className="left-Aboute">

<div className='aboute-lin1'>
  <div className='line1'></div>
  <p>Front-End | Developer | Junior</p>
</div>

    <div className='left-header_1'>
      <h2 className="my-project-title"><span className="highlight">GET IN TOUCH</span> <br /> WITH ME</h2>
  <div>
    <h1 className='h1_decorazion'>B-A © 2025</h1>
  </div>

    </div>

      <div className='div-p-about'>
        <p className='p-aboutDescri'>Ciao, mi chiamo Boghian Alexandru. La programmazione è una parte importante 
          della mia vita: mi piace costruire applicazioni e siti web che siano funzionali, chiari e facili da usare. 
          Mi sono formato con impegno e continuo a migliorarmi costantemente, approfondendo nuove tecnologie e 
          metodologie per crescere come sviluppatore e affrontare ogni progetto con attenzione e professionalità.</p>
      
      </div>
     
       
   <button className='button-section'> <a href="#project" >Vai ai Progetti</a></button>


    </div>



</div>




<div className='cards-wrapper-1'>
  <h1 className='h1-study'  >STUDY</h1>


  <div className="cards-wrapper">
    <GlareCard>
      <h2>Sviluppo Pagine Web</h2>
      <h3>Dicembre 2023 - Giugno 2024</h3>
      
      <p>Formazione intensiva su sviluppo web moderno, con focus su Front-End, HTML, CSS, 
        JavaScript e best practice per pagine web responsive e funzionali.</p>
        <strong>Certificato di specializzazione</strong>
    </GlareCard>

    <GlareCard>
      <h2>Cisco Networking Essentials</h2>
      <h3>Settembre 2024 - Giugno 2025</h3>
      
      <p>Formazione pratica su reti, gestione PC e periferiche, con introduzione alla sicurezza e 
        alla configurazione di stampanti, completata con certificazione Cisco.</p>
        <strong>Certificato</strong>
    </GlareCard>

    <GlareCard>
      {/*<h2>Progetto Personale</h2>
      <h3>2025</h3>
      <p>Portfolio e applicazioni web</p>
      <p>Sviluppo front-end con focus su performance e design.</p>*/}
        <strong>In corso...</strong>
    </GlareCard>
  </div>

<div className='para_1'>
  {/* linea raffinata sopra il paragrafo */}
  <div className='divider'></div>

   <div className="skills-icons">
          <span className="skill-html"><i className="devicon-html5-plain"></i></span>
          <span className="skill-css"><i className="devicon-css3-plain"></i></span>
          <span className="skill-js"><i className="devicon-javascript-plain"></i></span>
        </div>

  {/* elementi visivi sotto il paragrafo: mini simboli che richiamano le card */}

</div>
</div>




<div className="about-right">
  <div className="container-skills1">

    {/* Titolo + testo introduttivo */}
    <div className="skills-header">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
Questa sezione mostra le tecnologie e gli strumenti che utilizzo nel mio lavoro quotidiano di sviluppo. 
Mi permettono di creare applicazioni moderne e ben strutturate, con attenzione sia alla qualità del 
codice che all’esperienza dell’utente.
      </p>
      <span className="skills-bg-text">Skills</span>

     
    </div>

    {/* Lista delle skill */}
    <div className="container_skills-group">
      <div className="skills-container">
        <div className="skill-group">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>MediaQueries</li>
            <li>React</li>
            <li>AOS</li>
           
          </ul>
        </div>

        <div className="skill-group">
          <h3>Backend</h3>
          <ul>
            <li>PHP</li>
            <li>SQL</li>
            <li>DataBase</li>
            
          </ul>
        </div>

        <div className="skill-group">
          <h3>Strumenti & Altro</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>
      </div>
    </div>





  </div>
</div>
</div>







{/* ---PROJECT--- */}
<div className='project-section' id='project'>




<div className='aboute-lin1'>
  <div className='line1'></div>
  <p>Front-End | Developer | Junior</p>
</div>

    <div className='left-header_1'>
      <h2 className="my-project-title"><span className="highlight">GET IN TOUCH</span> <br /> WITH ME</h2>
  <div>
    <h1 className='h1_decorazion'>B-A © 2025</h1>
  </div>

    </div>
<div className='container-project'>
        <p className='my-project-description'>In questa sezione presento alcuni dei miei progetti 
          più rappresentativi. Ognuno mostra le tecnologie utilizzate, le sfide affrontate e le 
          soluzioni adottate, mettendo in evidenza il mio approccio: unire design e funzionalità 
          per creare applicazioni intuitive, affidabili e curate in ogni dettaglio. L’obiettivo è 
          dimostrare non solo le competenze tecniche, ma anche il metodo con cui trasformo le idee 
          in soluzioni concrete e di qualità.</p>
</div>








{/* ---PROJECT-CARD--- */}
<div className='container_cardP'>

{/*<div className='my-project-right'>
  <div className='projects-number-card'>
    <div className='projects-number-container'>
      <span className='projects-number-label'>N°</span>
      <span className='projects-number'>1</span>
    </div>
  </div>

  <p className="projects-desc">
    Ho completato <span className="highlight">X progetti</span>, 
    ognuno con <span className="italic">cura</span>, 
    <span className="italic">attenzione ai dettagli</span> e 
    <span className="italic">design moderno</span>.
  </p>

  <div className="projects-visual-accent">
    <span className="accent-dot"></span>
    <span className="accent-dot"></span>
    <span className="accent-dot"></span>
  </div>
</div>*/}


<div className="scroll-container">
  <div className="scroll-content">
    {/* Prima card con il tuo progetto reale */}
    <div className="card-container_1" key={1}>
      <PinContainer href="https://hexion00.github.io/divinacommedia/">
        <div className="dpin-modern">
          <div className="logo-container">
           <img src={myLogo} alt="Logo Divina Commedia" className="logo" />
          </div>
          <h3 className="title">Divina Commedia</h3>
          <p className="description">
            Un sito interattivo dedicato alla Divina Commedia, sviluppato con tecnologie web moderne.
          </p>
          <a
            href="https://hexion00.github.io/divinacommedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Vai al progetto →
          </a>
        </div>
      </PinContainer>
    </div>

    {/* Le altre card rimangono segnaposto */}
    {[...Array(5)].map((_, i) => (
      <div className="card-container_1" key={i + 2}>
        <PinContainer href={`https://link-al-progetto${i + 2}.com`}>
          <div className="dpin-modern">
            <div className="logo-container">
             
            </div>
            <h3 className="title">Progetto {i + 2}</h3>
            <p className="description">
              In corso... {i + 2}.
            </p>
            <a
              href={`https://link-al-progetto${i + 2}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Vai al progetto →
            </a>
          </div>
        </PinContainer>
      </div>
    ))}
  </div>
</div>



</div>
</div>






{/* ---CONTACT--- */}
<div className="contact-section" id='contact'>



<div className='aboute-lin1'>
  <div className='line1'></div>
  <p>Front-End | Developer | Junior</p>

</div>
    <div className='left-header_1'>
      <h2 className="my-project-title"><span className="highlight">GET IN TOUCH</span> <br /> WITH ME</h2>
 <div>
      <h1 className='h1_decorazion'>B-A © 2025</h1>
</div>
    </div>

  

    

  <div className="container-2">

    {/* Colonna sinistra: Form */}
      <div className="left-col">
        <h2 className='h1-contact-form'>Contact Us</h2>
        <p className='p-contact-form'>Compila il modulo qui sotto, ti risponderò al più presto.</p>
        <ContactForm />
      </div>

    {/* Colonna destra: Canali diretti */}
    <div className="right-col">
    
      <p className="intro-text">
       Se vuoi metterti in contatto con me, oltre al modulo qui a fianco, puoi usare anche uno dei canali indicati qui sotto per scrivermi o chiamarmi in tutta comodità.
      </p>

     <div className='line-decor'></div>



      <div className="contact-grid">

        {/* WhatsApp */}
        <div className="contact-item">
          <span className="iconify contact-icon" data-icon="fa-brands:whatsapp"></span>
          <h3>WhatsApp</h3>
        
          <p className="contact-desc">+39 334 272 1529</p>
          <button className='button-section' onClick={() => window.open('https://wa.me/393342721529', '_blank')}>Chatta</button>
        </div>

        {/* Cellulare */}
        <div className="contact-item">
          <span className="iconify contact-icon" data-icon="fa-solid:phone"></span>
          <h3>Cellulare</h3>
          
          <p className="contact-desc">+39 334 272 1529</p>
          <button className='button-section' onClick={() => window.location.href = 'tel:+393342721529'}>Chiama</button>
        </div>

        {/* Email */}
        <div className="contact-item">
          <span className="iconify contact-icon" data-icon="fa-solid:envelope"></span>
          <h3>Email</h3>
        
          <p className="contact-desc">alexwebdev.it@gmail.com</p>
          <button className='button-section' onClick={() => window.location.href = 'mailto:tuo.email@example.com'}>Scrivi</button>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <span className="iconify contact-icon" data-icon="fa-brands:linkedin"></span>
          <h3>LinkedIn</h3>
          
          <p className="contact-desc">Linkdein.mgail</p>
          <button className='button-section' onClick={() => window.open('https://linkedin.com/in/tuonome', '_blank')}>Profilo</button>
        </div>

      </div>
    </div>
  </div>
</div>











{/* ---FOOTER--- */}
<footer className="footer">
  <div className="footer-container">

    
    <div className="footer-section">
      <h2 className="footer-logo">Frontline</h2>
      <p className="footer-description">
        Mostrando il lato migliore del front-end, un pixel alla volta.
      </p>
    </div>

    
    <div className="footer-section">
      <h3 className="footer-title">Navigazione</h3>
      <ul>
        
        <li><a href="#about">about</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    
  {/*  <div className="footer-section">
      <h3 className="footer-title">Seguimi</h3>
      <ul>
        <li><a href="https://github.com/tuoprofilo" target="_blank">GitHub</a></li>
        <li><a href="https://linkedin.com/in/tuoprofilo" target="_blank">LinkedIn</a></li>
        <li><a href="https://twitter.com/tuoprofilo" target="_blank">Twitter</a></li>
      </ul>
    </div>*/}

    
    <div className="footer-section">
      <h3 className="footer-title">Contatti</h3>
      <p>Email: <a href="costa.alle111@gmail.com">costa.alle111@gmail.com</a></p>
      <p>Cellulare: +393342721529</p>
    </div>

  </div>

  
  <div className="footer-bottom">
    © <span id="year"></span> Frontline. Tutti i diritti riservati.
  </div>
</footer>

<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
    </div>
  );
}

export default App;


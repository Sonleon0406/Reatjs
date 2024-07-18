
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
  <header>
    <div>
      <img src="./img/trang1.jpg" />
    </div>
    <h1>Vu Cong Son</h1>
    <section>
      <p>Hello! I am THI NEU. I work as interface and front-end developer. I have passion for pixel perfect, minimal and easy to use interfaces. I'm  focused, dedicated, hard-working and willing to learn in a changing and challenging environment.</p>
      <a href="https://www.facebook.com/profile.php?id=100012792013345&locale=vi_VN" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.twitter.com/flynerdpl/" target="_blank">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/ritaly" target="_blank">
        <i className="fab fa-github-alt"></i> 
      </a>
      <a href="https://www.instagram.com/flynerdpl/" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/ritalyczywek/" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </section>
  </header>
  <main>
    <section>
      <h3>Courses & Workshops</h3>
      <article className='course'>
        <div className='title'>
          <h4>Udacity: Intro to HTML and CSS</h4>
        </div>
        <div className="descrition">
          <p>Build styled, well-structured websites. Learn how to use HTML5 standard to create websites. Understand CSS syntax, selectors, and units. Learn about code editors and a browser's Developer Tools.</p>
        </div>
      </article>
      <article className='course'>
        <div className='title'>
          <h4>Udemy: The Web Developer Bootcamp</h4>
        </div>
        <div className="descrition">
          <p>Learn how to create full-stack web applications from scratch using HTML, CSS, JavaScript, jQuery, VanillaJS, NodeJS, MongoDB.</p>
        </div>
      </article>
      <article className='course'>
        <div className='title'>
          <h4>EdX: Web Programming with JavaScript</h4>
        </div>
        <div className="descrition">
          <p>Learn how to create web apps and prototypes with JavaScript, represent and exchange data using JavaScript Object Notation (JSON), and how to access RESTful APIs on the web.</p>
        </div>
      </article>
      <article className='course'>
        <div className='title'>
          <h4>Django Girls: 2-Day Workshops</h4>
        </div>
        <div className="descrition">
          <p>Learn back-end development with simple blog application using Django  framework.</p>
        </div>
      </article>
    </section>
    <section>
      <h3>Skills</h3>
      <div className='skills'>
        <div className='column'>
          <h4>Good knowledge</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript ES5/6</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Basic knowledge</h4>
          <ul>
            <li>jQuery</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Django</li>
          </ul>
        </div>
        <div>
          <h4>Languages</h4>
          <p>🇵🇱 Polish - Native speaker</p>
          <p>🇬🇧 English - Proficient C1/C2</p>
          <p>🇫🇷 French - Advanced - C1</p>
          <p>🇪🇸 Spanish - Intermediate - B1/B2</p>
          <p>🇩🇪 German - Elementary / Communicative - A2</p>
        </div>
      </div>
    </section>

    <section>
      <h3>Education</h3>
      <article>
        <div className='school'>
          <span>2020-2023</span> <strong>Octocats tech academy</strong>
        </div>
        <div className="descrition">
          Bechelor Degree of Octorobotics
        </div>
      </article>
      <article>
        <div className='school'>
          <span>2021-2023</span> <strong>Underwater kittens high school</strong>
        </div>
        <div>
          Main subject: Cathemathics
        </div>
      </article>
    </section>
    <section>
      <h3>Experience</h3>
      <article>
        <div className='job-title'>
          <span>03.2020 - 06.2023</span> <strong>Tentacles Company</strong><br/> <strong>Position:</strong> Web developer Intern
        </div>
        <div>
          <p><strong>Tech stack:</strong> HTML5 / CSS / JavaScript / jQuery</p>
          <ul className="job-description">
            <li>Develop web application for Octopoda departments</li>
            <li>Implement UI (front-end site) based on received graphic design and requirements</li>
            <li>Co-operate with the back-end team </li>
          </ul>
        </div>
      </article>
    </section>
  </main>
  <footer>
    <p>Created by: <a href="https://www.flynerd.pl/">@flynerd</a>  / <a href="https://www.linkedin.com/in/ritalyczywek/">LinkedIn</a> / 2024 </p>
  </footer>
  </div>

    </>
  )
}

export default App

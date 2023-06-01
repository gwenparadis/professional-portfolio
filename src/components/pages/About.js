import React from "react";

export default function About() {
  return (
    <div class="bg-dark text-white p-5">
      <div class="text-center border border-light rounded p-3">
        <h1 class="mb-3">Gwen Paradis</h1>
        <h4 class="mt-3 mb-3">Full Stack JavaScript Software Engineer</h4>
        <a
          class="text-info text-center"
          href="https://www.linkedin.com/in/gwen-paradis-b2abb7192/"
        >
          Click HERE to go straight to my LinkedIn
        </a>
        <br></br>
        <img
          alt="Headshot"
          style={{
            width: 200,
          }}
          src={require("../../images/profile-pic.jpg")}
        ></img>
      </div>

      <div class="container mt-3">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Overview
        </h3>
        <p>
          I am a Web Developer looking to bring my talents and abilities to your
          company as a Full Stack JavaScript Developer. I have completed a
          24-week coding bootcamp at the top of my class, where I learned Full
          Stack Web Development, specializing in Model-View-Controller software
          design utilizing MongoDB or SQL for API creation and implementation in
          the backend, as well as functional front-end Javascript with React. I
          offer the communication and community-building skills that I have
          gained in my career as a Social Worker to collaborate with other
          developers using Agile Methodologies. In that same way, I bring an
          easy-going personality combined with the ability to manage the tougher
          conversations when necessary. I take pride in my work, including
          producing user-friendly designs and effective functioning, presenting
          projects and public speaking, and learning new technologies along the
          way. I love to work hard with a smile. In my spare time I compete in
          Powerlifting, value time with friends and family, and love a good
          Netflix Reality TV Series.
        </p>
      </div>

      <div class="container">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          General Strengths
        </h3>
        <ul>
          <li>
            Incorporating Front-End HTML, CSS, and Javascript in React for a
            Cohesive User Experience
          </li>
          <li>API Creation and Integration (including Third Party API's)</li>
          <li>Model-View-Controller Software Design</li>
          <li>Agile Methodologies (SCRUM, SCRUM master)</li>
          <li>Community Building</li>
          <li>Collaborative Problem Solving</li>
          <li>Public Speaking</li>
        </ul>
      </div>

      <div class="container">
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Languages
        </h3>
        <ul>
          <li>Git</li>
          <li>HTML</li>
          <li>
            CSS, including: Bootstrap CSS Framework, Tailwind CSS Framework,
            Daisy UI Tailwind Plugin
          </li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>React.js</li>
          <li>Handlebars.js</li>
        </ul>
        <h3 class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Other Technologies
        </h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>Github</li>
          <li>Insomnia</li>
          <li>Workbench</li>
          <li>MongoDB Compass</li>
          <li>Github Pages</li>
          <li>Heroku</li>
          <li>Third Party API integration</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";

export default function Portfolio() {
  return (
    <div class="bg-dark text-white p-5">
      <div class="text-center border border-light rounded p-3 mb-3">
        <h1 class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
          Software Engineering Portfolio
        </h1>
        <a class="text-info text-center" href="https://github.com/gwenparadis">
          Click HERE to go straight to my Github
        </a>
      </div>

      <p class="text-center text-info">
        Click on the Project Screenshots to access the Github Repository.
      </p>

      <div class="container p-2 border border-warning rounded mb-3">
        <h2 class="p-3 bg-warning bg-opacity-10 ">
          Town Hall: Full Stack MySQL Group Project
        </h2>
        <p>
          We used Node.js and Express.js to create a RESTSful API. We used
          Handlebars.js as the templating engine, and we used MySQL and the
          Sequelize ORM for the database. For CSS/styling we used
          Tailwind/daisyUI, and we used placeimg.com for the random image
          generator. We used Insomnia to test routes and Workbench to test
          models, relationships, and queries. We used Github to host our
          repository and Heroku to deploy our solution.
        </p>
        <div class="text-center">
          <a
            href="https://github.com/tpowers29/Town-Hall"
            alt="Github Repository"
          >
            <img
              class="p-3"
              style={{
                height: 400,
              }}
              src={require("../../images/townhallscreenshot.png")}
              alt="Town Hall Group Project Screenshot"
            ></img>
          </a>
        </div>
        <h5>My Contribution</h5>
        <p>
          Commitment to Agile Methodologies, Front End Functionality, Sign Up
          and Login Forms, Styling with Tailwind CSS Framework, confirming
          functionality of Routes, Final Clean Up of Unecessary components from
          Source Code
        </p>
      </div>

      <div class="container p-2 border border-danger rounded mb-3">
        <h2 class="p-3 bg-danger bg-opacity-10">
          Event Forecast Planner: Third Party API Integration, Front End Group
          Project
        </h2>
        <p>
          The motivation to create this application came from the group???s
          interest in outdoor activities and events, with the real world problem
          of weather variation affecting the experience of those events. This
          project was built to allow the User to find events in their desired
          location, while also including a weather forecast to allow the User to
          plan for that event accordingly. This solves the problem of allowing
          the user to make an informed decision about going to an outdoor event,
          travel plans, and more. The group learned how to integrate multiple
          API's in javascript, and style the received information with a new (to
          us) CSS framework, Foundation. The group learned how to delegate and
          collaborate on project elements to create fairness in workload and
          highlight the strengths of each group member. The group also learned
          how make individual working branches on github, complete pull
          requests, and then approve and merge those requests into our main
          branch.
        </p>
        <div class="text-center">
          <a
            href="https://github.com/gwenparadis/EventsForecastPlanner"
            alt="Github Repository"
          >
            <img
              class="p-3"
              style={{
                height: 400,
              }}
              src={require("../../images/eventsforecastplanner.png")}
              alt="Events Weather Planner Group Project Screenshot"
            ></img>
          </a>
        </div>
        <h5>My Contribution</h5>
        <p>
          Commitment to Agile Methodologies, Creating the HTML to ensure Front
          End presentation and functionality, Mastering the OpenWeather API,
          Mastering the GeoLocation API, creating the Fetch requests and
          integrating this data into the Events API (mastered by another
          teammate), Dynamically rendering the fetched data into the HTML for
          user viewing.
        </p>
      </div>

      <div class="container p-2 border border-danger rounded mb-3">
        <h2 class="p-3 bg-danger bg-opacity-10">
          JavaScript Quiz: Front End Javascript
        </h2>
        <p>
          I have attempted to create an interactive JavaScript quiz utilizing
          original HTML, CSS, and JavaScript elements. This project intends to
          showcase the skills that I have learned in JavaScript. This webpage
          features an EventListener() on the start button, prompting the quiz to
          begin by presenting the first question and starting a timer. The
          answer buttons are interactive. The timer is affected by the user's
          answer choices. When the timer runs out, the endGame() functions are
          run to alert the user that the game is over, and providing an area for
          the user to input their initials to be displayed on the HighScore
          board. The initials and score are saved in local storage, which can be
          seen when you inspect the page. Throughout development, I learned the
          complexity of creating multiple interactive elements on one webpage.
        </p>
        <div class="text-center">
          <a
            href="https://github.com/gwenparadis/Front-End-Javascript-Quiz"
            alt="Github Repository"
          >
            <img
              class="p-3"
              style={{
                height: 400,
              }}
              src={require("../../images/jsquiz.png")}
              alt="JavaScript Front End Quiz Screenshot"
            ></img>
          </a>
        </div>
      </div>

      <div class="container p-2 border border-info rounded mb-3">
        <h2 class="p-3 bg-info bg-opacity-10">
          E-Commerce Back End: Back End MySQL with Sequelize
        </h2>
        <p>
          I created this E-Commerce Backend in order to create an interactive
          database to store my store's inventory data. I am able to view product
          Categories, Products, and Tags. I am able to add Categories, Products,
          or Tags, and update existing data, as desired, using Insomnia as the
          interactive space. This application utilizes Node, Express,js to
          create the application routes, MySQL and Sequelize to create, seed and
          update the database, as well as the relational capabilities of MySQL
          when desired. I learned how to improve coding structure and
          accessibility of MySQL databases utilizing Sequelize models, refined
          my knowledge of Express.js routes, and conducted testing of routes and
          database capabilities with Insomnia.
        </p>
        <a
          class="text-info text-center"
          href="https://drive.google.com/file/d/17MyLdJ6GeWjsGvi-UIof24Y7NaFncKqw/view"
        >
          This project does not have a front end. Click HERE to watch a
          recording of application functionality.
        </a>
        <div class="text-center">
          <a
            href="https://github.com/gwenparadis/ecommerce-backend"
            alt="Github Repository"
          >
            <img
              class="p-3"
              style={{
                height: 400,
              }}
              src={require("../../images/ecommerce.png")}
              alt="E-Commerce Back End Insomnia Screenshot"
            ></img>
          </a>
        </div>
      </div>

      <div class="container p-2 border border-light rounded mb-3">
        <h2 class="p-3 bg-light bg-opacity-10">
          Matching an Email: Regex Tutorial
        </h2>
        <p>
          I researched the fundamentals of Regular Expressions and how they are
          used to match user input, and wrote a tutorial for the "Matching an
          Email" expression, that is currently live at the Github Link below.
        </p>
        <div class="text-center">
          <a
            href="https://gist.github.com/gwenparadis/d094f5546e7de9dce389a57e728d8989"
            alt="Direct Gist Link"
          >
            <img
              class="p-3"
              style={{
                height: 400,
              }}
              src={require("../../images/regextutorial.png")}
              alt="Matching an Email Gist Screenshot"
            ></img>
          </a>
        </div>
      </div>

      <div class="container p-2 border border-light rounded mb-3">
        <h2 class="p-3 bg-light bg-opacity-10">
          #6 Placeholder: Full Stack React with MongoDB Group Project
        </h2>
        <p>
          This div will be completed and put at the top of the page to display
          the "Project 3: Full Stack Group Project" when completed with the
          proper description and deployment links.
        </p>
        <div class="text-center">
          <a href="https://github.com/gwenparadis" alt="Github Repository">
            <img
              class="p-3"
              style={{
                height: 400,
              }}
              src={require("../../images/profile-pic.jpg")}
              alt="Profile Placeholder for Future Screenshot"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

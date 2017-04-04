import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      skills: {
        tech: {
          column_1: [
            "Node",
            "ExpressJS",
            "React",
            "Webpack",
            "Sass",
            "Bootstrap",
            "HTML",
            "CSS",
            "Git"
          ],
          column_2: [
            "jQuery",
            "AngularJS",
            "Browserify",
            "Gulp",
            "Async.js",
            "Lodash",
            "Jade/Pug/Handlebars",
            "Mocha/Chai",
            "OSX"
          ]
        },
        soft: {
          column_1: [
            "Written Communication",
            "Strategy",
            "Ideation",
            "Mentoring"
          ],
          column_2: [
            "Public Speaking",
            "Implementation",
            "Iteration",
            "Development"
          ]
        }
      },
      work: [{
          "name": "Layer3 TV",
          "title": "Web Development Engineer",
          "time": "1 year",
          "summary": "Front-to-back JavaScript development as a member of an Agile development team at a rapidly-growing cable TV startup.",
          "work": [
            "Back office service development with Node, Express + MongoDB.",
            "Frontend development of both customer and employee-facing applications using everything from Jade + jQuery to AngularJS."
          ],
          "accomplishments": [
            "Rearchitected the legacy signup/marketing site as a single-page application with AngularJS, Gulp, Browserify, and Sass.",
            "Deployed the company's first ReactJS project.",
            "Wrote a command-line application in Node + ES2015 to import legacy Mongo records, create new records based on current schemas, and POST the new records to a backoffice API."
          ],
          "references": [{
            "name": "Justin Darner",
            "relation": "Team Lead + Mentor",
            "email": "justin.darner@gmail.com",
             "summary": "Justin was my team lead and mentor at Layer3 TV. He and I worked together daily, and he was a key player in my growth as a junior dev."
          }]
        },
        {
          "name": "BNC Systems",
          "title": "Network Engineer/Consultant",
          "time": "1 year",
          "summary": "IT support and consultation for small/medium business and enterprise clients.",
          "work": [
            "IT troubleshooting + support (PC and Mac).",
            "Vendor management.",
            "Network + workstation deployment.",
            "Mobile device management (MDM)."
          ],
          "references": [{
            "name": "Arn Johnson",
            "relation": "Manager + Mentor",
            "email": "arn.johnson@icloud.com",
            "summary": "Part mentor, part manager, Arn and I were teamed up almost daily keeping our clients (and their technology) happy and healthy."
          }]
        },
        {
          "name": "Apple",
          "title": "Creative",
          "time": "5 years",
          "summary": "Facilitated customer training and support on Apple products in an Apple Retail store location. Faciliated in-store training and mentoring of Apple employees.",
          "work": [
            "Sales + support of Apple products.",
            "Delivery of group and one-on-one training sessions for Apple customers.",
            "Training and development of new hires and employees promoted to new roles."
          ],
          "references": [{
              "name": "Kimberly Grimshaw",
              "relation": "Store Leader",
              "email": "kgrimshaw@mac.com",
              "summary": "My most senior manager for most of my tenure at Apple, Kimberly helped me grow from a part-time sales associate to a full-time professional trainer."
            },
            {
              "name": "Keith Harper",
              "relation": "Manager + Mentor",
              "email": "keithharper@mac.com",
              "summary": "Keith is a god at providing customer support, growing direct reports, and making every workplace fun and welcoming. He helped me learn to do the same."
            }
          ]
        }
      ],
      education: []
    }
  }
});

/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  "jobs": [
    {
      "title": "Senior Engineer",
      "employer": "Trend Micro Inc.",
      "dates": "2015 - 2016",
      "location": "Taipei",
      "description": "Web Developer"
    },
    {
      "title": "Engineer",
      "employer": "Trend Micro Inc.",
      "dates": "2013 - 2015",
      "location": "Taipei",
      "description": "Windows/Mac Developer"
    }
  ]
};

work.jobs.forEach(function(job) {
  $("#workExperience").append(HTMLworkStart);

  var html = "";
  html += HTMLworkEmployer.replace("%data%", job.employer);
  html += HTMLworkTitle.replace("%data%", job.title);
  html += HTMLworkDates.replace("%data%", job.dates);
  html += HTMLworkLocation.replace("%data%", job.location);
  html += HTMLworkDescription.replace("%data%", job.description);

  $(".work-entry:last").append(html);
});

var projects = {
  "projects": [
    {
      "title": "SafeSync For Enterprise",
      "dates": "2013 - 2016",
      "description": "An on-premise file syncing and sharing solution for enterprises.",
      "images": [
        "http://placehold.it/200x200",
        "http://placehold.it/200x200"
      ]
    }
  ]
};

var html = new EJS({url: "templates/projects.ejs"}).render(projects);
console.log(html);
$("#projects").append(html);

var bio = {
  "name": "Shu-Bo Chao",
  "role": "Front-End Ninja",
  "welcomeMessage": "Hello! I'm a developer who likes to create great websites!",
  "contacts": {
    "mobile": "",
    "email": "apiggy0204@gmail.com",
    "github": "apiggy0204",
    "twitter": "apiggy0204",
    "location": "Taipei"
  },
  "skills": [
    "Node.js (Express)",
    "Responsive Web Design (Bootstrap)",
    "JS Framework (Angular, React)",
    "Windows/Mac development"
  ]
};

var education = {
  "schools": [
    {
      "name": "National Taiwan University",
      "location": "Taipei",
      "degree": "MS",
      "majors": [
        "CS"
      ],
      "dates": "2011 - 2013",
      "url": "http://www.ntu.edu.tw"
    }
  ],
  "onlineCourses": [
    {
      "title": "Machine Learning - Stanford University",
      "school": "Coursera",
      "dates": "2016",
      "url": "https://www.coursera.org/learn/machine-learning"
    }
  ]
};

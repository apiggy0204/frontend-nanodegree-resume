var works = {
  "works": [
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

var workHtml = new EJS({url: "templates/works.ejs"}).render(works);
$("#workExperience").append(workHtml);

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
$("#projects").append(html);

var bio = {
  "name": "Shu-Bo Chao",
  "role": "Front-End Ninja",
  "welcomeMessage": "Hello! I'm a developer who likes to create great websites!",
  "profilePic": "http://placehold.it/200x200",
  "contacts": {
    "mobile": "",
    "email": "apiggy0204@gmail.com",
    "github": "apiggy0204",
    "twitter": "apiggy0204",
    "blog": "blog",
    "location": "Taipei"
  },
  "skills": [
    "C++",
    "Node.js",
    "Responsive Web Design",
    "Windows/Mac development",
  ]
};

var bioHtml = new EJS({url: "templates/bio.ejs"}).render(bio);
$("#header").append(bioHtml);

var education = {
  "schools": [
    {
      "name": "National Taiwan University",
      "location": "Taipei, Taiwan",
      "degree": "MS",
      "major": "Computer Science",
      "dates": "2011 - 2013",
      "url": "http://www.ntu.edu.tw"
    },
    {
      "name": "National Taiwan University",
      "location": "Taipei, Taiwan",
      "degree": "BS",
      "major": "Electrical Engineering",
      "dates": "2007 - 2011",
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

var educationHtml = new EJS({url: "templates/education.ejs"}).render(education);
$("#education").append(educationHtml);

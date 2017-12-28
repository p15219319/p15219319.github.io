let repositories = `
[
  {
    "id": 113980019,
    "name": "data-structures-labs",
    "html_url": "https://github.com/p15219319/data-structures-labs",
    "description": "Labs for data structures classes. Includes lists, queues, stacks both mutable and immutable",
    "language": "Java",
    "commits": "1"
  },
  {
    "id": 108242280,
    "name": "lab04-responsive-basics",
    "html_url": "https://github.com/p15219319/lab04-responsive-basics",
    "description": "front end web development lab for responsive web design. Creating two different breakpoints to allow for 3 different designs of the webpage",
    "language": "CSS",
    "commits": "10"
  },
  {
    "id": 113979719,
    "name": "student-marker",
    "html_url": "https://github.com/p15219319/student-marker",
    "description": "JavaFX Application which allows for inputting marks for a student. Parses courses and modules from a text file which can be easily edited",
    "language": "Java",
    "commits": "1"
  },
  {
    "id": 113979714,
    "name": "p15219319.github.io",
    "html_url": "https://github.com/p15219319/p15219319.github.io",
    "description": "Website for CTEC3905 assignment",
    "language": "HTML",
    "commits": "27"
  }
]`;
let projects = document.getElementById('projects');

function fillProjects() {
  //add header
  projects.innerHTML += '<h1>Projects</h1>';

  //parse json
  let json = JSON.parse(repositories);

  //loop through each project and add a section for each project
  for (let i = 0; i < json.length; i++) {
    let project = json[i];
    projects.innerHTML += '<section class="card">'
      + '<a href="' + project.html_url + '"><h1>'
      + project.name + '<span class="tooltip">Commits: ' + project.commits + '</span>'
      + '</h1></a>'
      + '<p>' + project.description + '</p><p>Language: ' + project.language + '</p></section>';
  }
}

fillProjects();

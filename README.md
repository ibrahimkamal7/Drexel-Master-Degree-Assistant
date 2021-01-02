# Drexel Master's Degree Assistant

## About
The web app is targeted towards potential Drexel CCI graduate students. Students need a flexible way to create a master’s program that fits their academic and professional goals. This tool will help students envisage the different combination of certificates that they can take to form a full master’s degree at CCI. 

The application is hosted on  https://ibrahimkamal7.github.io/Drexel-Master-Degree-Assistant/#/

Use any of the user info provided in the database section for signing in.


## Scalability

The application is getting information about the degrees and the certificates from their respective databases, so it would be easy to scale the application to support additional certificates and degrees.
* If additional certificates are to be added, it can easily be achieved by adding them to the database or an API can be built which can pull the information about the certificates and add them to the certificates database.
* If additional degrees are to be added, it can easily be achieved by adding them to the database or an API can be built which can pull the information about the degrees and add them to the degrees database.
* If additional prerequisites are to be added for a particular certificate, the certificates database can be modified or an API can be built which will pull the information about the certificate and update the certificate database accordingly


## Integration
* The users will have to sign-in in order to use the application (eventually, this can be replaced with Drexel Connect), and based on their profile they will be notified whether they have to complete the CS Foundation certificate or not if they are planning on completing a more technical certificates
* After the user selects the three certificates, they get the degrees which they can obtain along with the certificate which is a must have for that degree.



## Intuitiveness
* Users have the ability to make multiple 3 certificate combinations on a single page by simply clicking on the "+" button on the top right hand corner of the page.
* Users can expand/reduce the prerequisite and the degree information to make navigation easier
* Easy dropdown to select certificates. Once the certificate is selected, it cannot be re-selected.
* System is easy to navigate due to the use of tooltips with all the buttons

## User Testing Feedback

We had our application hosted on github using github pages and then sent out a google form to all of our friends and bachmates and asked them about the design and UI/UX of the application. We got the following suggestions in return:
* Use dropdowns for selecting the certificates instead of checkboxes. Checkboxes makes the navigation harder
* Ensure that the users have the option to expand or hide information about the degrees and prerequisite
* Ensure that the information about the user's CS background is collected using the information present in the Drexel Database
* Ensure that the prerequisite of each certificate and the degrees which can be obtained are displayed separately

After receiving the feedback, we worked on the suggestions and tried to incorporate most of them into our application, but the following where out of scope for this project:
* After signing in the users are redirected to the page where they select certificates and if they hit refresh they are redirected to the sign in page. Some of the reviewers/testers suggested that the application should not do this. But, in order to achieve this, a proper user database is required and the information used for signing in has to be stored in cookies or sessions.


## Database Used

* Certificates
```
{ title: "HCI/UX", preRequisite: [""] },
{ title: "Information Systems", preRequisite: [""] },
{ title: "Foundations of Data Science", preRequisite: [""] },
{ title: "Artificial Intelligence/Machine Learning",preRequisite: ["Computer Science Foundation"],},
{ title: "Technology Leadership", preRequisite: [""] },
{ title: "Cybersecurity",preRequisite: ["Computer Science Foundation"]},
{ title: "Computer Science Foundations", preRequisite: [""] },
{ title: "Advanced Computer Science", preRequisite: ["Computer Science Foundation"],},
{ title: "Software Architecture", preRequisite: ["Computer Science Foundation"],},
{ title: "Front-End Development", preRequisite: [""] },
```

* Degrees
```
{title:"Master of Science in Information", requirements:["HCI/UX", "Foundations of Data Science", "Front End Development"], mustHave:"HCI/UX"},
{title:"Master of Science in Computer Science", requirements:["Computer Science Foundations", "Software Architecture", "Advanced Computer Science"], mustHave:"Advanced Computer Science"},
{title:"Master of Science in Cyber Security", requirements:["Foundations of Data Science", "Software Architecture", "Cybersecurity"], mustHave:"Cybersecurity"},
{title:"Master of Science in Technology Leadership", requirements:["Information Systems", "Technology Leadership", "Computer Science Foundations"], mustHave:"Technology Leadership"},
{title:"Master of Science in Data Science", requirements:["Computer Science Foundations", "Foundations of Data Science", "AI/Machine Learning", "HCI/UX"], mustHave:"Foundations of Data Science"},
{title:"Master of Science in Information Systems", requirements:["Information Systems", "Software Architecture", "HCI/UX"], mustHave:"Information Systems"},
{title:"Master of Science in MLAI", requirements:["Artificial Intelligence/Machine Learning", "Computer Science Foundations", "Foundations of Data Science"], mustHave:"Artificial Intelligence/Machine Learning"},
```

* Users

```
{userid:"ik363", password:"123456", hasCSBackground:true},
{userid:"hv59", password:"123456", hasCSBackground:false},
{userid:"hg387", password:"123456", hasCSBackground:true},
```
## How to run the application
* Clone this directory
* Run `npm install` inside the directory to install all the dependencies
* Run `npm start` to run the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


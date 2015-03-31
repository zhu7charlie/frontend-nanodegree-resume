/*
$("#main").append("Charlie Zhu");

var email = "charlie@udacity.com";
var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Charlie, I am AWESOME !";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
*/

/*
var name = "Charlie Zhu";
var headerName = HTMLheaderName.replace("%data%", name);

var role = "Software Developer";
var headerRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(headerRole);
$("#header").prepend(headerName);
*/

/*
var bio = {
	"name" : "Charlie Zhu",
	"role" : "Web Developer!",
	"contacts" : {
		"mobile" : "678-230-1453",
		"email" : "zhu_charlie@yahoo.com",
		"github" : "https://github.com/zhu7charlie",
		"twitter" : "@CharlieZhu",
		"location" : "Atlanta, GA"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Welcome !",
	"skills" : [
		"JavaEE", "ETL", "PL/SQL", "Unix/Linux"
	]
};

var headerName = HTMLheaderName.replace("%data%", bio.name);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(headerRole);
$("#header").prepend(headerName);

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(email);

var picture_URL = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(picture_URL);

var welcome_message = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcome_message);

var skills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(skills);


var work = {};
work.position = "Software Developer";
work.employer = "at&t";
work.years = 9

var education = {};
education["name"] = "GA Tech";
education["years"] = "1992-1996";
education["city"] = "Atlanta, GA";
*/

/*
var work_position = HTMLworkTitle.replace("%data%", work["position"]);
$("#workExprience").append(work_position);

var school_name = HTMLschoolName.replace("%data%", education.name);
$("#education").append(school_name);
*/

//$("#main").append(work["position"]);
//$("#main").append(education.name);


var bio = {
	"name" : "Charlie Zhu",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "678-230-1453",
		"email" : "zhu_charlie@yahoo.com",
		"github" : "https://github.com/zhu7charlie",
		"twitter" : "@CharlieZhu",
		"location" : "Johns Creek, GA"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Welcome to my Resume !",
	"skills" : [
		"ETL (SSAS/SSIS, abinitio, datastage)", "JavaEE", "JSP", "Java Scripts", "SQL", "PL/SQL", "Shell-Scripting", "Unix/Linux", 
		"HTML", "XML", "WebLogic", "Tomcat", "Oracle", "SQL Server", "Visual Basic", "ASP", "C/C++", "Python", "R"
	]
};

var education = {
	"school": [
		{
			"name": "Georgia Institute of Technology",
			"location": "Atlanta, GA",
			"degree": "Master of Science",
			"majors": ["Aerospace Engineering"],
			"minors": ["Computer Science"],
			"dates": 1996,
			"url": "http://www.gatech.edu"
		},
		{
			"name": "BeiHang University",
			"location": "BeiJing, China",
			"degree": "Bachlor of Science",
			"majors": ["Aerospace Engineering"],
			"minors": [],
			"dates": 1987,
			"url": "http://www.buaa.edu.cn"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Web Developer",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Data Analyst",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com/course/nd002"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "at&t",
			"title": "Sr. Software Developer",
			"location": "Alpharetta, GA",
			"dates": "2006-Future",
			"description": "Have been working on several Cingular/at&t applications as a whole SDLC Softeware Developer. Applications include: iDSS, WITv2, VRI/CCR, EDIS Dashboard; Technical Skills include: SSAS/SSIS, SQL Server abinitio, datastage, Oracle PL/SQL, JavaEE Spring MVC, HTML, JSP, Java Scripts, Agile"
		},

		{
			"employer": "Accenture",
			"title": "Sr. Software Developer",
			"location": "Atlanta, GA",
			"dates": "2002-2006",
			"description": "Worked on several Bellsouth applications as a as a whole SDLC Softeware Developer. Applications include: Oracle CRM, LNP, ADSL Provisioning BASS/BOM; Technical Skills include: Oracle PL/SQL, Java, C/C++, Shell-scriptting, Unix"
		},

		{
			"employer": "Bellsouth",
			"title": "Software Developer",
			"location": "Norcross, GA",
			"dates": "2000-2002",
			"description": "Worked on Bellsouth Oracle CRM application as a as a whole SDLC Softeware Developer. Technical Skills include: Database Design, Oracle PL/SQL, Java"
		},

		{
			"employer": "CSA",
			"title": "Programer Analyst",
			"location": "Marietta, GA",
			"dates": "1996-2000",
			"description": "Worked on several CSA application as a as a whole SDLC Programer Analyst. Applications include: 3D CAD for Complext Enginerring Systems. Technical Skills include: Database Design, FORTRAN, C, Visual Basic, SGI, MS Windows"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Integrated Decision Support System --- iDSS",
			"dates": "2009-2015",
			"description": "iDSS collects traffic from AT&T middleware applications in order to provide real-time application and business process monitoring, troubleshooting, and diagnostic information to both first line responders, as well as executive leadership. This allows us to help reduce MTTR in the event of outages, while also providing information to determine scope of impact. iDSS is able to provide a unique capability to treat all of the captured transactions as a point-in-time business data warehouse, allowing the ability to find and view transactions on any data point, as well as provide business intelligence by creating extracts and reports on any data elements with any combination of filters.",
			"images": ["images/iDSS.png"]
		},

		{
			"title": "Work Intake Tool --- WITV2",
			"dates": "2014-2015",
			"description": "Created as a process to replace existing AFD tools and harden disparate processes, WIT is a tool for AFD teams to manage project estimates and vendor invoices, streamlining the estimating process and reducing overhead. It brings a standardized process to financial oversight at the AFD level, eliminating duplication and disparate measures while tightening coordination with our vendor partners. Skills: JavaEE, HTML, JSP, Java Scripts",
			"images": ["images/WITv2.png"]
		},

		{
			"title": "VRI --- Virtual Repository Interface for Enterprise Data",
			"dates": "2008-2009",
			"description": "A service abstraction gateway of web services to control direct access to the Mobility's critical Enterprise Directory Data. JavaEE, PL/SQL",
			"images": []
		},

		{
			"title": "EDIS Dashboard",
			"dates": "2006-2008",
			"description": "at&t home made dashboard to monitor its enterprise systems in real time. Skills: Java, shell-scripting, MS SSAS/SSIS",
			//"images": ["http://csidashboard1.it.att.com:8181/dashboard/","images/CSI.png", "images/CSI_01.png"]
			"images": ["images/CSI.png", "images/CSI_01.png"]
		},

		{
			"title": "Bellsouth Customized Oracle CRM",
			"dates": "2000-2002",
			"description": "Bellsouth Effort to Customize Oracle CRM to automate its ADSL provisioning. Skills: Java, PL/SQL",
			"images": ["images/CRM_01.jpg", "images/CRM_01.jpg", "images/CRM_01.jpg"]
		},

		{
			"title": "3D CAD for Complext Construction Systems",
			"dates": "1996-2000",
			"description": "Design and develope 3D CAD software for Complext Enginerring Systems. skills: FORTRAN/C, UNIX/Windows, Visial Basic, MS SQL Server",
			"images": ["images/timthumb.jpg", "images/timthumb_005.jpg", "images/timthumb_006.jpg", "images/timthumb_007.jpg", "images/timthumb_008.jpg"]
		}

	]
};

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(email);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(twitter);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(github);
var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(mylocation);

var headerName = HTMLheaderName.replace("%data%", bio.name);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(headerRole);
$("#header").prepend(headerName);

var picture_URL = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(picture_URL);

var welcome_message = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcome_message);

if( bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	for( skill in bio.skills ) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}


work.display = function() {
	if( work.jobs.length > 0 ) {
		$("#workExperience").append(HTMLworkStart);
		for( job in work.jobs ) {
			var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedHTMLworkEmployer+formattedHTMLworkTitle);

			var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedHTMLworkLocation);

			var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedHTMLworkDates);

			var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedHTMLworkDescription);
		}
	}	
}
work.display();


//add display() to projects Object//
projects.display = function() {

	for( project in projects.projects ) {

		$("#projects").append(HTMLprojectStart);

		var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedHTMLprojectTitle);

		var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedHTMLprojectDates);

		var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedHTMLprojectDescription);

		if( projects.projects[project].images.length > 0 ) {
			for( image in projects.projects[project].images ) {
				var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image] );
				$(".project-entry:last").append(formattedHTMLprojectImage);
			}
		}

	}	
}
if( projects.projects.length > 0 ) {
	projects.display();
}


//add display() to education Object//
education.display = function() {

	for( edu in education.school ) {

		$("#education").append(HTMLschoolStart);

		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.school[edu].name);
		$(".education-entry:last").append(formattedHTMLschoolName);

		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.school[edu].degree);
		$(".education-entry:last").append(formattedHTMLschoolDegree);

		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.school[edu].dates);
		$(".education-entry:last").append(formattedHTMLschoolDates);

		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.school[edu].location);
		$(".education-entry:last").append(formattedHTMLschoolLocation);

		if( education.school[edu].majors.length > 0 ) {
			for( major in education.school[edu].majors ) {
				var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.school[edu].majors[major] );
				$(".education-entry:last").append(formattedHTMLschoolMajor);
			}
		}
		if( education.school[edu].minors.length > 0 ) {
			for( minor in education.school[edu].minors ) {
				var formattedHTMLschoolMinor = HTMLschoolMinor.replace("%data%", education.school[edu].minors[minor] );
				$(".education-entry:last").append(formattedHTMLschoolMinor);
			}
		}

	}	

	$(".education-entry:last").append(HTMLonlineClasses);
	for( course in education.onlineCourses ) {

		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedHTMLonlineTitle);

		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedHTMLonlineSchool);

		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedHTMLonlineDates);

		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	}
}
if( education.school.length > 0 ) {
	education.display();
}



function locationizer(work_obj) {

    var work_locations = [];

    for (var job in work_obj.jobs) {
      work_locations.push(work_obj.jobs[job].location);
    }

    return work_locations;
}


function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
function inName(name) { return nameChanger(name) }

//$("#main").append("<button id='internationalizeButton'>internationalizeButton</button>");
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


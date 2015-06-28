function ResumeCtrl($scope) {
	$scope.data = {
		"name" : "Benjamin J. Fisher",
		"description" : "Front End Developer",
		"contact" : {
			"address" : {
				"street" : "400 West 119th Street",
				"street2" : "#9H",
				"city" : "New York, NY 10027"
			},
			"phone" : "503.869.5267",
			"email" : "benjamin.fisher@ymail.com",
			"web" : {
				"href" : "http://benjaminjfisher.com",
				"link" : "BenjaminJFisher.com",
				"LinkedIn" : "fisherbenjamin"
			}
		},
		"education" : [{
			"name" : "The Art Institute of Portland",
			"location" : "Portland, Oregon",
			"dates" : "January 2009 - September 2012",
			"details" : ["Enrolled in the Web Design and Interactive Media bachelor’s program", "Volunteered for the Web Raising event to build web sites for local non-profits two years running"]
		}, {
			"name" : "Portland Community College",
			"location" : "Portland, Oregon",
			"dates" : "October 2008",
			"details" : ["Completed self-directed courses in Microsoft Access 2007, Level I and Level II"]
		}, {
			"name" : "Baker College of Muskegon",
			"location" : "Muskegon, Michigan",
			"dates" : "Graduated Cum Laude 1998",
			"details" : ["Completed an Associate of Business degree with a focus in Computer Information Systems", "Completed three semesters of accounting, and classes in system theory and development, business writing, database design, and human relations"]
		}],
		"experience" : [{
			"name" : "Media Drink",
			"position" : "Junior Web Developer",
			"location" : "Portland Oregon",
			"dates" : "February 2012 - September 2012",
			"details" : ["Completed paid internship position", "Developed static responsive one page sites for local businesses, with turn-around times of less than five hours", "Worked on Wordpress themes for CMS driven dynamic sites", "Championed the use of open source version control, and mobile-first development"]
		}, {
			"name" : "The Art Institute of Portland",
			"position" : "Tutor",
			"location" : "Portland Oregon",
			"dates" : "May 2011 - September 2012",
			"details" : ["Tutoring individual students, and groups of up to five students, in subjects relating to web design and development", "Provided inclass support for instructors for HTML/CSS, JavaScript/jQuery, and Adobe Flash courses"]
		}, {
			"name" : "ACS, a Xerox Company",
			"position" : "iOS Tier 1 Support Technician",
			"location" : "Portland Oregon",
			"dates" : "September 2011 - January 2012",
			"details" : ["Provided technical support to U.S. and U.K. customers for mobile, tablet, and media devices"]
		}, {
			"name" : "H&R Block",
			"position" : "Customer Service Professional",
			"location" : "Portland Oregon",
			"dates" : "January 2010 - April 2010",
			"details" : ["Responsibilities included: setting appointments for tax preparers, taking credit and cash payments, EOD cash drawer reconciliation and reporting, general office work such as filing, collating and multi-line phone handling", "Within less than a week, and with minimal training, took on all of the standard customer service responsibilities after starting half way through the tax season", "Took on additional responsibilites including migrating employee records from a simple spreadsheet, to a database system with formatted reports"]
		}],
		"skills" : {
			"languages" : [{
				"name" : "HTML",
				"level" : 5
			}, {
				"name" : "CSS",
				"level" : 5
			}, {
				"name" : "JavaScript",
				"level" : 4
			}, {
				"name" : "PHP",
				"level" : 2
			}, {
				"name" : "SQL",
				"level" : 1
			}, {
				"name" : "Python",
				"level" : 2
			}, {
				"name" : "Ruby",
				"level" : 1
			}],
			"tools" : [{
				"name" : "jQuery",
				"level" : 4
			}, {
				"name" : "Node.js",
				"level" : 3
			}, {
				"name" : "AngularJS",
				"level" : 2
			}, {
				"name" : "Bootstrap",
				"level" : 2
			}, {
				"name" : "Ender",
				"level" : 2
			}, {
				"name" : "SASS/Compass",
				"level" : 4
			}, {
				"name" : "LESS",
				"level" : 3
			}, {
				"name" : "Wordpress",
				"level" : 3
			}],
			"applications" : [{
				"name" : "PhotoShop",
				"level" : 4
			}, {
				"name" : "Illustrator",
				"level" : 3
			}, {
				"name" : "Adobe Flash",
				"level" : 2
			}]
		}
	};
}
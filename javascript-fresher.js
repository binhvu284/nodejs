// ARROW FUNCTION
var name = "Thomas Vu";
var age = 21;
var gender = "male";

const User = (name, age, gender) => {
	return ("Name: " + name + "; " + "Age: " + age + "; " + "Gender: " + gender);
};


console.log(User(name, age, gender));

const birthYear = (age, currentYear) => currentYear - age;
console.log("Birth Year: " + birthYear(age, 2024));

const experience = a => a + 1;
console.log("Experience year: " + experience(2));

const job = () => "Student";
console.log("Current job: " + job());

// OBJECT
const student = {
    university: "HCMUT",
    major: "computer science",
    specialized: "software engineering",

    intro() {console.log("University: " + this.university + " - Major: " + this.major + " - Specialized: " + this.specialized)}
}
student.intro();

// ARRAY
const skill = ['design', 'code', 'business'];
for(let item of skill){
    console.log(item);
}
console.log(skill.map(item => 'programming'));

// SPREAD AND REST OPERATOR
const samePerson = {...student};
console.log(samePerson);

const intergerNumber = (...num) => num;
console.log(intergerNumber(1,2,3,4,5,6,7,8,9,10));

// DESTRUCTURING
const destructStudent = ({major}) => console.log(major);
destructStudent(student);

const {university, major} = student;
const [x, y] = skill;
console.log(university, major);
console.log(x, y);
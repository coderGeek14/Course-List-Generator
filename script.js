const ul = document.querySelector(".list-group");
const button = document.querySelector(".sort-btn");
var buttonBoolean = false;

const courses = [
	{
		name: "JavaScript Course",
		price: "500",
	},
	{
		name: "MERN Course",
		price: "2500",
	},
	{
		name: "Django Course",
		price: "800",
	},
	{
		name: "Flutter Course",
		price: "1000",
	},
	{
		name: "Java Course",
		price: "1200",
	},
];

function generateList() {
	courses.forEach((course) => {
		const li = document.createElement("li");
		li.classList.add("list-group-item");
		const span = document.createElement("span");
		span.classList.add("float-right");

		const name = document.createTextNode(course.name);
        const price = document.createTextNode("Rs."+course.price);
        
		span.appendChild(price);
		li.appendChild(name);
		li.appendChild(span);
        ul.appendChild(li);
        // price=price.splitText(3)
        // console.log(p);
	});
}

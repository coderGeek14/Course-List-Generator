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

window.addEventListener("load",generateList)
// window.onload = generateList();

button.addEventListener('click',()=>{
    if(buttonBoolean === true){
        courses.sort((a,b) => a.price - b.price);
        button.style.backgroundColor="red";
        buttonBoolean=(!buttonBoolean);
    }
    else{
        courses.sort((a,b) => b.price - a.price);
        button.style.backgroundColor="blue";
        buttonBoolean=(!buttonBoolean);
    }
    ul.innerHTML="";
    generateList();
});

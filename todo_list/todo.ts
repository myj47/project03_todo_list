import inquirer from "inquirer";
let todos:string[]=[];
let loop=true;

while(loop){
    let answers:{
        TODO:string,
        addmore:boolean
    }=await inquirer.prompt([{
        type:"input",
        name:"TODO",
        message:"What do you want to add into your todo list?"
    },
    {
        type:"confirm",
        name:"addmore",
         message:"Do you want to add more todo?",
         default:true
    }
])
const{TODO,addmore}=answers;
console.log(answers);
loop=addmore;
if(TODO){
todos.push(TODO)
}
else{
    console.log("Kindly add valid input...")
}
}

if(todos.length>0){
    console.log("Your new todo list is: ")
todos.forEach(TODO => {
    console.log(TODO)
});
}
else
{
    console.log("No todos found...")
}
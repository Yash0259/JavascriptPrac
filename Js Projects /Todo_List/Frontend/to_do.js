const url = "http://localhost:5000/api/Task";
const showTask = document.querySelector("#tasks");
const showStatus = document.querySelector("#status");

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

//Add Task
const addTask = async()=>{
    try{
        if(inputBox.value.trim() === ''){
            alert("Task is Empty");
            return;
        }
        const request = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({task:inputBox.value.trim(),status:false})
        });
        if(!request.ok){
            throw new Error(`Eroor:${request.status} ${request.statusText}`)
        }
        inputBox.value = "";
        fetchTasks();
    }
    catch(error){
        console.log(error); 
    }
}

//show task
const fetchTasks = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error : ${response.status} ${response.statusText}`);
        }
        const tasks = await response.json();
        console.log("Tasks data:", tasks); // Log the response here
        listContainer.innerHTML = " ";
        tasks.forEach(task => {
            listContainer.appendChild(liData(task));
        });
    } catch (error) {
        console.log(error);
    }
};


//create list 
function liData(task){
    const li = document.createElement('li');
    li.setAttribute('data-id',task.id);

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.task;

    const taskStatus = document.createElement('h5');
    taskStatus.textContent = task.status ? "Completed":"Incomplete";
    taskStatus.style.cursor = "pointer";
    taskStatus.style.color = task.status ? "green" : "red";
    taskStatus.addEventListener("click",()=> toggleStatus(task.id,!task.status));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click',()=> deleteTask(task.id));

    li.appendChild(taskTitle);
    li.appendChild(taskStatus);
    li.appendChild(deleteButton);

    return li;
}

//Toggle task status (PUT request )
const toggleStatus = async(id,newStatus) =>{
    try{
        const response = await fetch(`${url}/${id}`,{
            method:"PUT",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({status:newStatus})
        });
        if(!response.ok){
            throw new Error(`Error:${response.status} ${response.statusText}`)
        }
        fetchTasks();
    }
    catch(error){
        console.log(error)
    }
}

//delete task
const deleteTask = async(id) =>{
    try{
        const response = await fetch(`${url}/${id}`,{method:"DELETE"}

        );
        if(!response.ok){
            throw new Error(`Error:${response.status} ${response.statusText}`)
        }
        fetchTasks();

    }
    catch(error){
        console.log(error)
    }
}

//initial fetch of tasks when the page loads

document.addEventListener("DOMContentLoaded",fetchTasks);



























// // Add task
// const addTask = async () => {
//     try {
//         if (inputBox.value.trim() === '') { 
//             alert("You must add a task");
//             return; // Prevent further execution
//         }
//         const request = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" }, // Corrected header key casing
//             body: JSON.stringify({ task: inputBox.value.trim(), status: false }) // status as boolean
//         });

//         if (!request.ok) {
//             throw new Error(`Error: ${request.status} ${request.statusText}`);
//         }

//         inputBox.value = ""; // Clear input box

//         // Refresh task list
//         fetchTasks();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// // Fetch and display tasks
// const fetchTasks = async () => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         const tasks = await response.json();
//         listContainer.innerHTML = ""; // Clear existing tasks
//         tasks.forEach(task => {
//             listContainer.appendChild(liData(task));
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Function to create list item with task data
// function liData(task) {
//     const li = document.createElement('li');
//     li.setAttribute('data-id', task.id); // Store task ID in data attribute

//     const taskTitle = document.createElement('h3');
//     taskTitle.textContent = task.task;

//     const taskStatus = document.createElement('h5');
//     taskStatus.textContent = task.status ? "Completed" : "Incomplete";
//     taskStatus.style.cursor = "pointer";
//     taskStatus.style.color = task.status ? "green" : "red";
//     taskStatus.addEventListener('click', () => toggleStatus(task.id, !task.status));

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = "Delete";
//     deleteButton.style.marginLeft = "10px";
//     deleteButton.addEventListener('click', () => deleteTask(task.id));

//     li.appendChild(taskTitle);
//     li.appendChild(taskStatus);
//     li.appendChild(deleteButton);

//     return li;
// }

// // Toggle task status (PUT request)
// const toggleStatus = async (id, newStatus) => {
//     try {
//         const response = await fetch(`${url}/${id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ status: newStatus })
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         // Refresh task list
//         fetchTasks();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// // Delete task (DELETE request)
// const deleteTask = async (id) => {
//     try {
//         const response = await fetch(`${url}/${id}`, {
//             method: "DELETE"
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         // Refresh task list
//         fetchTasks();
//     }
//     catch (error) {f

//         console.log(error);
//     }
// }

// // Initial fetch of tasks when the page loads
// document.addEventListener('DOMContentLoaded', fetchTasks);

// // Event listener for adding a task (assuming there's a button with id 'add-task-btn')
// const addTaskButton = document.querySelector("#add-task-btn");
// if (addTaskButton) {
//     addTaskButton.addEventListener('click', addTask);
// }

// // Optional: Allow adding task by pressing Enter key
// inputBox.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });


























// const url = "http://localhost:3000/data";
// const showTask = document.querySelector("#tasks");
// const showStatus = document.querySelector("#status");

// const inputBox = document.querySelector("#input-box");
// const listContainer = document.querySelector("#list-container");

// // Add task
// const addTask = async () => {
//     try {
//         if (inputBox.value.trim() === ' ') {
//             alert("You must Add a Task");
//         }
//         else {
//             const request = await fetch(url, {
//                 method: "POST",
//                 headers: { "content-Type": "application/json" },
//                 body: JSON.stringify({ task: inputBox.value, status: "false" })
//             })
//         }
//         inputBox.value = " ";
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// //show data
// fetch(url)
//     .then(res => res.json())
//     .then(print => {
//         print.map(data => {
//             console.log(data)
//             listContainer.append(liData(data.task, data.status));
//         })
//     })

// function liData(task, status) {
//     let liT = document.createElement('li');
//     liT.innerHTML = `<h3>${task}</h3> 
//         <h5>${status}</h5> 
//         <button>Delete</button>`
//     return liT;
// }
//put data
// function update(){
// fetch(url/+`${1}`,{method:"PUT",
//     headers:{"content-Type":"application/json"},
//     body:JSON.stringify({status:"true"})
// })
// }





// const getTask = async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log({ data });

//         showTask.innerHTML = data.task;
//         showStatus.innerHTML = data.status;
//         console.log(data.status);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }



// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask()
// {
//     if(inputBox.value === ' ')
//         {
//             alert("You must write something!");
//         }
//     else
//     {
//         let li = document.createElement("li");
//         li.innerText = inputBox.value;
//         listContainer.appendChild(li);

//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = " ";
// }

// listContainer.addEventListener("click",function(e){

//     if(e.target.tagName === "LI")
//     {
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if (e.target.tagName === "SPAN")
//         {
//             e.target.parentElement.remove();
//             saveData();
//         }
// })

// function saveData()
// {
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showTask()
// {
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

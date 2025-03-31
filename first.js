//Get Api 
const showData = document.querySelector("#show");
const btn = document.querySelector("#btn");

let postedData=document.querySelector("#show2");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");


let putData=document.querySelector("#show3");
const btnP = document.querySelector("#btnP");

const url ="https://jsonplaceholder.typicode.com/posts";
const getApiData = async ()=>{
    try{
    let response = await fetch(url);
    let data = await response.json();
    showData.innerHTML = data[1].title;
    }
    catch(error) {
        console.log("Error");
    }
}

btn.addEventListener("click",getApiData);





//CREATE a post 

async function post(request) {
    try{
        const response1 = await fetch(request);
        const result = await response1.json();
        postedData.innerHTML = result.username;
        console.log(result.username);
    }
    catch(error){
        console.log("Error");
    }
}
const request1 = new Request("https://example.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "example1" }),
});

// const request2 = new Request(request1, {
//     body: JSON.stringify({ username: "example2" }),
// });

btn2.addEventListener("click",post(request1));
// btn3.addEventListener("click",post(request2));

// const postApiData = async()=>
    //     {
//         try{
    //             const request = new Request(url,{
        //                 method:"POST",
        //                 headers:{"content-Type":"application/json"},
        //                 body:JSON.stringify({username:"Yash"})
        //             });
        //             const response = await fetch(request);
        //             if(response.ok){
            //             let requestData = await response.json();
            
            //             postedData.innerHTML=requestData.username;
            //              }
            //              else{
                //                 throw new Error(`Response status :${response.status}`);
                //              }
                //         }
                //         catch(error){
                    //             console.log("Error");
                    //         }
                    //     }
                    
                    // btn2.addEventListener("click",postApiData);
                    
                    
//Update using put 
const postData =()=>{
    
}

async function postData(){
    try{
        const result = await fetch('',{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({username:"Yash"})
        })

        console.log(result)
        
    }catch(error){
        console.log(error);
    }
}

async function put(requestPut) {
    try{
        const responsep = await fetch(requestPut);
        const resultp = await responsep.json();
        postedData.innerHTML = resultp.username;
        console.log(resultp.username);
    }
    catch(error){
        console.log("Error");
    }
}
const requestP1 = new Request(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "Hello" }),
});
  

btn2.addEventListener("click",put(requestP1));






// practice api 
// const url="https://cat-fact.herokuapp.com/facts";

// const animalInfo = document.querySelector("#animal");
// const getData = async()=>{
    //     console.log("Getting data");
    //     let response = await fetch(url);
    //     let data = await response.json();
    
    //     animalInfo.innerHTML = data[0].type;
    
    // }
// getData();


// for promise chaining 
// function asyncFunc1(){
//     return new Promise((resolve,rejected)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },3000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,rejected)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetch data 1");
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("fetch data 2")
//     asyncFunc2().then((res)=>{})
// });




// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//         }, 2000);

//     })

// }

// console.log("Getting Data 1....")
// getData(1).then((res) => {
//     return getData(2);
// })
// .then((res)=>{
//     console.log(res);
// })


//async await

// function getData(dataId){
//      return new Promise((resolve, reject)=>
//     {
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("Success");
//         },2000);
//     })
// }

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data1...");
//     await getData(2);
//     console.log("getting data1...");
//     await getData(3);
// }


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((developer)=>{
        if(developer.profession==="developer"){
            console.log(developer);
        }
    })
   
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((developer)=>{
        if(developer.profession==="developer"){
            console.log(developer);
        }
    })
  }
  
  function addData() {
    const newEmployee ={id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    const filterArray =arr.filter((employee)=>{
        employee.profession ="admin";
    })
    console.log(filterArray);
  }
  
  function concatenateArray() {
    const newArray =[
        {id:5,name:"mirzapur",age:"20",profession:"team"} ,
        {id:6,name:"tripati",age:"20",profession:"head"} ,
        {id:7,name:"guddu",age:"20",profession:"designer"} ,
        {id:8,name:"munna bhaiya",age:"20",profession:"developer"} ,
    ];
    const newconcatenatedArray = arr.concat(newArray);
    console.log(newconcatenatedArray)
  }
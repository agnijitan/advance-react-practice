async function getName(){
    try{
        const res = await fetch("https://reqres.in/api/users/2");
        const data = await res.data.json();
        return data;
        console.log(data);
    } catch(err){
        console.log("Error during fetching record", err)
    }
}

console.log("The record is: ",getName())



    

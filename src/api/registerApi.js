const register = async (email,password)=>{
    const url='https://reqres.in/api/register';
 const response = await fetch(url,{
        method:"post",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          email,
          password
        })
    })

   const data = await response.json()
   console.log(data)  ;
   const status= response.status;
   if(status!==200){
       throw data;  
   }
   return data
}

export default register;
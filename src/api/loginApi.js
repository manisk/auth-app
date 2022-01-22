const login = async (email,password)=>{
    const url='https://reqres.in/api/login';
const response =  await fetch(url,{
        method:"post",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email,
            password
        })
    })
    const data = await response.json()
    const status = response.status;
    if(status!==200){
        throw data
    }
    return data
}
export default login
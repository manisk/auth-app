const getUserList = async () => {
    const url = 'https://reqres.in/api/users?page=1';
    const response = await fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json();
    console.log(data)
    const status = response.status;
    if(status!==200){
        throw data;
    }
    return data;
}
export default getUserList;
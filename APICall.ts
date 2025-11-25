const URL = "https://dummyjson.com/users";

const APICall = async ()=> {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

APICall().then((res)=> console.log(res));
import { useNavigate, useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData() 
    console.log(data)   

    const navigate = useNavigate();
    return(
        <div className=" text-center text-2xl py-10 grid place-content-center">
            <div>Github username = {data.login}</div>
            <div className=" py-5">Github Followers = {data.followers}</div>
            <button className=' border-white my-1 text-black bg-green-700 block' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Github

export const github_Information = async() =>{
    const res = await fetch('https://api.github.com/users/Github');
    return res.json();
}
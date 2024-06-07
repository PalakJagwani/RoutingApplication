import {useNavigate} from 'react-router-dom'

function About(){
    const navigate = useNavigate();
    return(
        <div className=" text-center text-2xl py-10 grid place-content-center">
            This is About Page
            <button className=' border-white my-1 text-black bg-green-700 block' onClick={() => navigate(-1)}>Go Back</button>
        </div>  
    )
}

export default About
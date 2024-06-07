import {useParams, useNavigate} from 'react-router-dom'

function Profile(){
    const navigate = useNavigate();
    const {user_id} = useParams()
    return(
        <div className=" text-center text-2xl py-10 grid place-content-center">
            This is Profile Page
            <div className=' py-5'>User Id = {user_id}</div>
            <button className=' border-white my-1 text-black bg-green-700 block' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Profile 
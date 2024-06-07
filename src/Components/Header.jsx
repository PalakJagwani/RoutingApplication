import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div>
            <h1 className=' text-center text-2xl font-bold py-10'>Routing in React</h1>
            <hr className=' border-2 border-white '/>
            <nav className=' bg-green-600 py-5 text-black flex justify-evenly font-bold text-xl'>
                <NavLink to={'/'}  className={({isActive}) => `${isActive ? "underline" : ""}`}>Home</NavLink>
                <NavLink to={'/about'} className={({isActive}) => `${isActive ? "underline" : ""}`}>About</NavLink>
                <NavLink to={'/github'} className={({isActive}) => `${isActive ? "underline" : ""}`}>Github</NavLink>
                <NavLink to={'/profile/:user_id'} className={({isActive}) => `${isActive ? "underline" : ""}`}>Profile</NavLink>
            </nav>
            <hr className=' border-2 border-white '/>
        </div>
    )
}

export default Header
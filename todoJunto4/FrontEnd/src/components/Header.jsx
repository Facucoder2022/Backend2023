import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/nbalogo.jpg'
import { FiUser, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { Navbar } from './Navbar';
import { useAuth } from '../context/AuthContext';

export const Header = () => {
    const { isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout();
        navigate('/')
    };

    return(
        <div className='w-full p-5 bg-[black]'>
            <div className='container justify-between mx-auto flex items-center px-8 gap-3'>
                <Link to="/">
                    <img src={logo} alt="bettermart logo" className="block w-24 min-w-[156px]" />
                </Link>
                <div className='flex gap-4 items-center justify-center text-white'>
                {
                    isAuthenticated
                    ?
                    <div className='flex gap-5'>
                        <Link to="/cart" className='flex flex-col items-center gap-2 text-white group'>
                            <FiShoppingCart className='text-2xl group-hover:fill-blue group-hover:text-blue-500 transition-all'></FiShoppingCart>
                            <span className='hidden lg:block'>Cart</span>
                        </Link>
                        <Link to="/account" className='flex flex-col items-center gap-2 text-white group'>
                            <FiUser className='text-2xl group-hover:fill-blue group-hover:text-blue-500 transition-all'></FiUser>
                            <span className='hidden lg:block'>Account</span>
                        </Link>
                        <button onClick={handleLogout} className='flex flex-col items-center gap-2 text-white group'>
                            <FiLogOut className='text-2xl group-hover:fill-blue group-hover:text-blue-500 transition-all'></FiLogOut>
                            <span className='hidden lg:block'>Sign out</span>
                        </button>
                    </div>
                    :
                    <div className='flex gap-5'>
                        <Link to="/login" className='flex flex-col items-center gap-2 text-white group'>
                            <FiUser className='text-2xl group-hover:fill-blue group-hover:text-blue-500 transition-all'></FiUser>
                            <span className='hidden lg:block'>Sign in</span>
                        </Link>
                        <Link to="/register" className='flex flex-col items-center gap-2 text-white group'>
                            <FiUser className='text-2xl group-hover:fill-Blue group-hover:text-blue-500 transition-all'></FiUser>
                            <span className='hidden lg:block'>Register</span>
                        </Link>
                    </div> 
                }
                </div>
            </div>
            <div className='container mx-auto mt-5 px-8'>
                <Navbar />
            </div>
        </div>
    )
}
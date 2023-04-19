import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
//
import bgImg from '../../assets/burg-al-arab.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(result=>{
            console.log('success fully logout');
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className={`bg-[url('${bgImg}')]  h-[40vh] bg-cover bg-center`}>
            <div className='w-full h-full backdrop-brightness-50 text-white pt-8'>
                <div className='flex max-w-5xl mx-auto  gap-5'>
                    <Link to='/'><h3>BurjALArab</h3></Link>
                    <div className='flex gap-5 '>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default hover:text-orange-600'} >Home</NavLink>
                        {/* <NavLink to='/login' className={({ isActive }) => isActive ? 'active' : 'default hover:text-orange-600'} >Login</NavLink> */}
                        
                        {
                            user ?
                                <>
                                    <p>{user.email}</p>
                                    <button onClick={handleLogOut} className="btn btn-sm">Log out</button>
                                </>
                                :
                            //    <Link to='/login'> <button className="btn btn-sm">Login</button></Link>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'active' : 'default hover:text-orange-600'} >Login</NavLink>
                        }
                        <NavLink to='/book' className={({ isActive }) => isActive ? 'active' : 'default hover:text-orange-600'} >Book</NavLink>
                    </div>
                </div>
                <div className='h-full flex flex-col items-center justify-center'>
                    <h2 className='text-5xl font-bold'>Burj Al Arab</h2>
                    <h3 className='text-2xl font-bold mt-5'>A global icon of Arabian luxury</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;
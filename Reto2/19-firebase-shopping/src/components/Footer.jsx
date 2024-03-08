import React, { useContext } from 'react'
import { IoHome } from "react-icons/io5";
import { FaShoppingCart,FaList } from "react-icons/fa";
import { AppContext } from '../App';

const Footer = () => {

    const {route, setRoute, user, setUser} = useContext(AppContext)


  return (
    <footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
        <div className='bg-sky-200 p-2 text-4xl rounded-full text-pink-500 cursor-pointer 
                        hover:bg-sky-50 transition' 
            onClick={() => setRoute('home')}>
            <IoHome />
        </div>
        <div className='bg-sky-200 p-2 text-4xl rounded-full text-pink-500 cursor-pointer 
                        hover:bg-sky-50 transition' 
            onClick={() => setRoute('shopping')}>
            <FaShoppingCart />
        </div>
        <div className='bg-sky-200 p-2 text-4xl rounded-full text-pink-500 cursor-pointer 
                        hover:bg-sky-50 transition' 
            onClick={() => setRoute('tasklist')}>
            <FaList />
        </div>
    </footer>
  )
}

export default Footer
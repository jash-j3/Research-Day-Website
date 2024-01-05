"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";

//import { Fabars }

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const contents = [
        {
            id: 1,
            content: "Home",

        },
        {
            id: 2,
            content: "About",
        },
        {
            id: 3,
            content: "Programme",
        },
        {
            id: 4,
            content: "Registration",
        },
        {
            id: 5,
            content: "Events & Schedule",
        },
        {
            id: 6,
            content: "Sponsorship",
        },
    ];

    return(
    <nav className="bg-gray-100 shadow-lg p-4">
        <img
            src="https://www.iith.ac.in/assets/images/horzlogolong.png" 
            alt="/"
            height={100}
            width={100} 
        />
        
    <div className="container mx-auto md:flex space-x-4 justify-center">
        
    
    <ul className= {nav ? 'nav-active' : 'nav'}
    >
        {contents.map((item) => (
            <li key={item.id} className="mr-4 flex space-x-4">
                <Link href={`/${item.content.toLowerCase()}`}>
                    <div className="text-black hover:text-gray-400">
                    {item.content}
                    </div>
                </Link> 
            </li>
        ))}
    </ul>
    </div>
    
</nav>


);
};

export default Navbar;




//function Navbar(){
//  return(
//    <div className="fixed w-full h-20 shadow-xl z-[100] ">
//        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//            <img src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="/" width='125' height='50' />
//            <ul className="hidden md:flex">
//                <Link href='/'>
//                    <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
//                    <li className="ml-10 text-sm uppercase hover:border-b">About</li>
//                    <li className="ml-10 text-sm uppercase hover:border-b">Registration</li>
//                    <li className="ml-10 text-sm uppercase hover:border-b">Events & Schedule</li>
//                    <li className="ml-10 text-sm uppercase hover:border-b">Sponsorship</li>
//                    
//                </Link>
//            </ul>
//        </div>    
//        
//    </div>
//  )
//}
//
//export default Navbar
"use client"
import Link from "next/link";
import menuOpen from "../public/menuOpen.png"
import menuClose from "../public/close-icon-48.png"
import Image from "next/image";
import { IoCartSharp } from "react-icons/io5";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";
import { FaTag } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";




export default function Navbar(){

    const [toggleNav, setToggleNav] = useState(false)
    let menuIcon = toggleNav? menuClose: menuOpen;
    function toggleFavorite(){
        setToggleNav((prevState) => !prevState)
    }

    return(
        
        <main>
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between">
                <div className="flex py-2 gap-2 justify-between w-full items-center">
                    <div>
                        <p className="text-xl font-bold text-timbu-black">Timbu</p>
                    </div>
                    <div className ="flex flex-row text-sm gap-10 items-center">
                        <Link href={"/"} className="hover:underline">Home</Link>
                        <Link href={"/products"} className="hover:underline">Products</Link>
                        <Link href={"/"} className="hover:underline">Support</Link>
                        <Link href={"/"} className="hover:underline">Account</Link>
                    </div>
                    <div className="text-sm gap-10 flex flex-row items-center">
                        <Link href={"#"} className="hover:underline">EN</Link>
                        <Link href={"/cart"} className="hover:underline text-2xl"> <IoCartSharp /> </Link>
                    </div>
                </div>
            </section>

            <section className="md:hidden p-2 relative left-0">
                <div className="flex items-center justify-between">
                    <h3 className="flex text-lg font-bold"> Timbu </h3>
                    {/** right Side**/}
                    <div>
                        <Image src={menuIcon} alt="menuIcon" height={25} width={25} className="mb-2" onClick={ toggleFavorite } />
                    </div>
                </div>
                
                <div className ={ `${toggleNav? 'flex': 'hidden'} flex-col gap-2 items-start text-sm bg-timbu-black px-2 text-timbu-white py-10 z-10 absolute left-0 w-1/3 h-svh rounded-r-md` }>
                    <Link href={"/"} className="flex flex-row items-center gap-2"> <GoHomeFill /> Home</Link>
                    <Link href={"/products"} className="flex flex-row items-center gap-2"> <AiFillProduct /> Products</Link>
                    <Link href={"/"} className="flex flex-row items-center gap-2"> <FaTag /> Support</Link>
                    <Link href={"/"} className="flex flex-row items-center gap-2"> <FaUserAlt /> Account</Link>
                    <Link href={"/cart"} className="flex flex-row items-center gap-2"> <IoCartSharp /> Cart</Link>
                </div>

                
            </section>
        </main>
    )
}
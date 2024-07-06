"use client"
import Link from "next/link";
import menuOpen from "../public/menuOpen.png"
import menuClose from "../public/close-icon-48.png"
import Image from "next/image";
import { IoCartSharp } from "react-icons/io5";
import { useState } from "react";


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
                        <Link href={"/support"} className="hover:underline">Support</Link>
                        <Link href={"/account"} className="hover:underline">Account</Link>
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
                
                <div className ={ `${toggleNav? 'flex': 'hidden'} flex-col gap-2 items-end text-sm bg-slate-100 p-2 z-10 absolute right-0 w-full` }>
                    <Link href={"/"} className="">Home</Link>
                    <Link href={"/products"} className="">Products</Link>
                    <Link href={"/support"} className="">Support</Link>
                    <Link href={"/account"} className="">Account</Link>
                </div>

                
            </section>
        </main>
    )
}
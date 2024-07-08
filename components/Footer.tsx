
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer(){
    return(
        
        <main className="w-full h-full mb-auto bottom-0">
            <section className="hidden  md:flex flex-col  bg-timbu-black ">
                <div className="flex max-w-screen-lg m-auto py-10 justify-between w-full   text-slate-300 bg-timbu-black rounded-b-md">
                    <div className="flex flex-col gap-5  ">
                        <p className="font-bold text-lg text-timbu-white">Site Links</p>
                        <Link href={"/"} className="hover:underline">Home</Link>
                        <Link href={"/products"} className="hover:underline ">Products</Link>
                        <Link href={"/"} className="hover:underline">Support</Link>
                        <Link href={"/"} className="hover:underline">Account</Link>
                    </div>
                    <div className ="flex flex-col gap-5 items-start  ">
                        <p className="font-bold text-lg text-timbu-white">Shopping Information</p>
                        <Link href={"/products"} className="hover:underline">Product categories</Link>
                        <Link href={"/products"} className="hover:underline">New arrivals</Link>
                        <Link href={"/products"} className="hover:underline">Best Sellers</Link>
                        <Link href={"/products"} className="hover:underline">Gift Cards</Link>
                    </div>
                    <div className="gap-5 flex flex-col items-start ">
                        <p className="font-bold text-lg text-timbu-white">Newsletter</p>
                        <p>Stay up to date on Timbu and recieve latest updates</p>
                        <div>
                            <input type="text" placeholder="Your email address" className="py-2 rounded-l-md px-3 bg-timbu-yellow text-black placeholder-timbu-black"/>
                            <button className="bg-gray-500 py-2 px-5 rounded-r-md text-black">Sign Up</button>
                            <div className="flex flex-row  pt-5 gap-10 text-3xl">
                                <FaWhatsapp />
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className=" m-auto p-5 items-center text-center flex flex-row text-white"> © 2024 Timbu. All rghts reserved </div>
            </section>

            <section className="md:hidden w-full flex flex-col text-center  bg-timbu-black text-timbu-white">
                <div className="flex items-center justify-between p-5 text-sm ">
                    
                    <Link href={"/"} className="flex flex-row items-center gap-2"> Site Link</Link>
                    <Link href={"/"} className="flex flex-row items-center gap-2"> Shopping Information</Link>
                    <Link href={"/"} className="flex flex-row items-center gap-2"> Newsletter</Link>
                </div>
                <div className="  p-5 items-center text-center text-sm flex flex-row text-white w-full justify-center"> © 2024 Timbu. All rghts reserved </div>
               

                
            </section>
        </main>
    )
}
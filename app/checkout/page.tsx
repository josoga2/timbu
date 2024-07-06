import Image from "next/image"
import { camera8, camera7 } from "@/public/assets"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiBox } from "react-icons/fi";



export default function page(){
    return(
        
        <main className="py-5">
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between text-timbu-black">
                <div>
                    <p className="font-bold text-lg">Checkout</p>
                    <div className="flex flex-row w-full gap-10 py-5">
                        
                        <div className="flex flex-row gap-10 items-center text-base rounded-md border-2 border-slate-100 p-2 w-1/2">
                            <Image src={camera7} alt="camera7" className="h-44 w-44 object-cover rounded border"/>
                            <div className="flex flex-col w-full gap-3">
                                <p className="font-bold ">Motorized varifocal</p>
                                <p className="">A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                <p className="font-bold text-base">NGN 200,000</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-10 items-center rounded-md border-2 border-slate-100 p-2 w-1/2">
                            <Image src={camera8} alt="camera8" className="h-44 w-44 object-cover rounded border"/>
                            <div className="flex flex-col w-full gap-3">
                                <p className="font-bold ">Remotable camera</p>
                                <p>A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                <p className="font-bold ">NGN 200,000</p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="py-10 px-5 gap-5 flex flex-col rounded-lg w-full text-sm ">
                            <p className="text-lg font-bold">Shipping address</p>
                            <span className="flex flex-row items-center w-full justify-between">
                                <div className="flex flex-row items-center gap-5">
                                    <FaMapMarkerAlt className="text-2xl"/>
                                    <div> 
                                        <p>Home</p> 
                                        <p>31, Oshin Folarin Street, Bariga, Lagos State</p>  
                                    </div>
                                </div>
                                <p className="underline"><a href="#"> Edit </a></p>
                            </span>
                            <hr className="w-full" />

                            <p className="text-lg font-bold">Choose shipping type</p>
                            <span className="flex flex-row items-center w-full justify-between">
                                <div className="flex flex-row items-center gap-5">
                                    <FiBox className="text-2xl"/>
                                    <div> <p>Home</p> <p>31, Oshin Folarin Street, Bariga, Lagos State</p>  </div>
                                </div>
                                <p className="underline"><a href="#"> Edit </a></p>
                            </span>
                    </div>

                    <div className="bg-timbu-green mx-56 py-2 rounded-md text-timbu-white  items-center ">
                        <p className="text-center"> <a href="/payment" className="text-center">Select Payment Method</a> </p>
                    </div>
                </div>
            </section>

            <section className="md:hidden p-5">
            <div className="flex flex-col gap-5">
                    <p className="font-bold text-lg items-center text-center">Checkout</p>

                    <div className="flex flex-col w-full gap-10 ">
                        
                        <div className="flex flex-row gap-10 items-center rounded-md text-xs border-2 border-slate-100 p-2">
                            <Image src={camera7} alt="camera7" className="h-28 w-28 object-cover rounded border"/>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm">Motorized varifocal</p>
                                <p className="">A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                <p className="font-bold text-xs">NGN 200,000</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-10 items-center text-xs rounded-md border-2 border-slate-100 p-2">
                            <Image src={camera8} alt="camera8" className="h-28 w-28 object-cover rounded border"/>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm">Remotable camera</p>
                                <p>A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                <p className="font-bold text-xs">NGN 200,000</p>
                            </div>
                        </div>

                        <div className="py-10 px-5 gap-5 flex flex-col rounded-lg w-full text-sm ">
                            <p className="text-lg font-bold">Shipping address</p>
                            <span className="flex flex-row items-center w-full justify-between">
                                <div className="flex flex-row items-center gap-5">
                                    <FaMapMarkerAlt className="text-2xl"/>
                                    <div> 
                                        <p>Home</p> 
                                        <p>31, Oshin Folarin Street, Bariga, Lagos State</p>  
                                    </div>
                                </div>
                                <p className="underline"><a href="#"> Edit </a></p>
                            </span>
                            <hr className="w-full" />

                            <p className="text-lg font-bold">Choose shipping type</p>
                            <span className="flex flex-row items-center w-full justify-between">
                                <div className="flex flex-row items-center gap-5">
                                    <FiBox className="text-2xl"/>
                                    <div> <p>Home</p> <p>31, Oshin Folarin Street, Bariga, Lagos State</p>  </div>
                                </div>
                                <p className="underline"><a href="#"> Edit </a></p>
                            </span>
                    </div>

                    <div className="bg-timbu-green  py-2 rounded-md text-timbu-white  items-center ">
                        <p className="text-center"> <a href="/payment" className="text-center">Select Payment Method</a> </p>

                    </div>


                    </div>
                    
                </div>
            </section>
        </main>
    )
}
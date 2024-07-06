import { camera7, camera8 } from "@/public/assets"
import Image from "next/image"
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";


export default function page(){

    return(
        
        <main className="py-5 text-sm">
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between text-timbu-black">
                <div className="flex flex-col gap-5 w-full">
                    <div>
                        <p className="font-bold text-lg"> Cart </p>
                    </div>
                    <div className="flex flex-row gap-16 w-full text-base">
                        
                        <div className="flex flex-col w-2/3 gap-10 ">
                            <hr className="bg-black h-full w-full"/>
                            <div className="flex flex-row gap-10 items-center">
                                <Image src={camera7} alt="camera7" className="h-48 w-48 object-cover rounded border"/>
                                <div className="">
                                    <p className="font-bold text-lg">Motorized varifocal</p>
                                    <p>A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                    <p className="font-bold text-lg">NGN 200,000</p>
                                    <p className="font-bold text-lg text-timbu-green">In stock</p>
                                    <div className="flex items-center gap-5"> <FaSquarePlus className="text-2xl" /> 1 <FaSquareMinus className="text-2xl"/> </div>
                                </div>
                            </div>

                            <hr />

                            <div className="flex flex-row gap-10 items-center">
                                <Image src={camera8} alt="camera8" className="h-48 w-48 object-cover rounded border"/>
                                <div className="">
                                    <p className="font-bold text-lg">Remotable camera</p>
                                    <p>A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                    <p className="font-bold text-lg">NGN 200,000</p>
                                    <p className="font-bold text-lg text-timbu-green">In stock</p>
                                    <div className="flex items-center gap-5"> <FaSquarePlus className="text-2xl" /> 1 <FaSquareMinus className="text-2xl"/> </div>
                                </div>
                            </div>


                        </div>
                        <div className="bg-slate-100 w-1/3 py-10 px-5 gap-5 flex flex-col rounded-lg">
                            <p>Items Total (2)</p>
                            <span className="flex justify-between"> <p>Sub Total:</p> <p>NGN 300,000</p> </span>
                            <span className="flex justify-between"> <p>Discount:</p> <p>(-20%) -NGN 7,000</p> </span>
                            <hr />
                            <span  className="flex justify-between"> <p>Total:</p> <p>(-20%) -NGN 7,000</p> </span>
                           

                            <div className="bg-timbu-green px-5 py-2 text-center rounded-md text-timbu-white"> <a href="/checkout"> Proceed to checkout</a> </div>
                            <div className="px-5 py-2 text-center border-2 rounded-md"><a href="/products"> Continue shopping</a></div>
                        </div>
                    </div>
                </div>
            </section>

{/**Small device */}
            <section className="md:hidden p-5 relative text-xs text-timbu-black">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-lg items-center text-center">Cart</p>

                    <div className="flex flex-col w-full gap-10 ">
                        
                        <div className="flex flex-row gap-10 items-center rounded-md border-2 border-slate-100 p-2">
                            <Image src={camera7} alt="camera7" className="h-28 w-28 object-cover rounded border"/>
                            <div className="">
                                <p className="font-bold text-sm">Motorized varifocal</p>
                                <p className="">A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                <p className="font-bold text-xs">NGN 200,000</p>
                                <p className="font-bold text-sm text-timbu-green">In stock</p>
                                <div className="flex items-center gap-2"> <FaSquarePlus className="text-xl" /> 1 <FaSquareMinus className="text-xl"/> </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-10 items-center text-xs rounded-md border-2 border-slate-100 p-2">
                            <Image src={camera8} alt="camera8" className="h-28 w-28 object-cover rounded border"/>
                            <div className="">
                                <p className="font-bold text-sm">Remotable camera</p>
                                <p>A versatile voice-activated device that helps to monitor your home effortlessly</p>
                                <p className="font-bold text-xs">NGN 200,000</p>
                                <p className="font-bold text-sm  text-timbu-green">In stock</p>
                                <div className="flex items-center gap-2"> <FaSquarePlus className="text-xl" /> 1 <FaSquareMinus className="text-xl"/> </div>
                            </div>
                        </div>

                        <div className="bg-slate-100 py-10 px-5 gap-5 flex flex-col rounded-lg w-full text-sm">
                            <p>Items Total (2)</p>
                            <span className="flex justify-between"> <p>Sub Total:</p> <p>NGN 300,000</p> </span>
                            <span className="flex justify-between"> <p>Discount:</p> <p>(-20%) -NGN 7,000</p> </span>
                            <hr />
                            <span  className="flex justify-between"> <p>Total:</p> <p>(-20%) -NGN 7,000</p> </span>
                            <div className="bg-timbu-green px-5 py-2 text-center rounded-md text-timbu-white"> <a href="/checkout"> Proceed to checkout</a> </div>
                            <div className="px-5 py-2 text-center border-2 rounded-md"> <a href="/products"> Continue shopping</a> </div>
                        </div>


                    </div>
                    
                </div>
            </section>
        </main>
    )
}
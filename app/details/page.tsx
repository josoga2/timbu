import Image from "next/image";
import { camera7, camera3 } from "@/public/assets";
import { FaStar } from "react-icons/fa6";


export default function page(){

    return(
        
        <main className="py-10">
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between">
                <div className="flex flex-col items-center gap-10 w-full">
                    <div>Product Details</div>
                    <Image src={camera7} alt="camera7"  className="h-72 w-72 object-cover rounded-t-md" />
                    <div className="flex gap-5">
                        <Image src={camera3} alt="camera3" className="h-20 w-20 object-cover rounded-t-md transform -scale-x-90"/>
                        <Image src={camera3} alt="camera3" className="h-20 w-20 object-cover rounded-t-md"/>
                    </div>
                    <div className="flex items-center justify-between w-full px-5">
                        <p className="font-bold text-lg">Motorized Varifocal</p>
                        <span className="flex items-center span gap-2 font-bold text-lg"> <FaStar color="chocolate" /> 4.5</span>
                    </div>
                    <div className="px-5">
                        <p className="leading-7 text-justify">
                            Indoor Cctv Camera Or Security Camera. A versatile voice-activated device that helps to monitor your home effortlessly. Motorized Security Camera, your vigilant guardian for peace of mind. With cutting-edge technology and robust features, this camera offers unparalleled surveillance capabilities. Its high-definition resolution captures crisp, detailed footage day or night, ensuring clarity in any lighting condition. Equipped with advanced motion detection, it promptly alerts you to any suspicious activity, allowing for swift response and enhanced security. Easy to install and seamlessly integrated with smart home systems, this camera provides remote access and control via a user-friendly app, putting control at your fingertips wherever you are. Whether safeguarding your home, office, or business premises, the [Brand Name] Security Camera is your reliable partner in protecting what matters most.
                        </p>
                    </div>
                    <div className="flex justify-between items-end w-full px-5">
                        <div className="flex flex-col gap-5">
                            <p>Selected Color: White</p>
                            <div className="flex flex-row gap-1">
                                <div className="h-10 w-10 rounded-full bg-timbu-white border "></div>
                                <div className="h-10 w-10 rounded-full bg-timbu-green"></div>
                                <div className="h-10 w-10 rounded-full bg-timbu-red"></div>
                                <div className="h-10 w-10 rounded-full bg-timbu-blue"></div>
                            </div>

                        </div>
                        <div className="flex flex-row items-center gap-10 font-semibold">
                            <p>NG₦ 200,000</p>
                            <div className="p-2 bg-timbu-black rounded-md text-timbu-white"><a href="/cart"> Add to Cart </a> </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:hidden p-5">
            <div className="flex flex-col items-center gap-3 w-full text-xs">
                    <div>Product Details</div>
                    <Image src={camera7} alt="camera7"  className="h-72 w-72 object-cover rounded-t-md" />
                    <div className="flex gap-5">
                        <Image src={camera3} alt="camera3" className="h-20 w-20 object-cover rounded-t-md transform -scale-x-90"/>
                        <Image src={camera3} alt="camera3" className="h-20 w-20 object-cover rounded-t-md"/>
                    </div>
                    <div className="flex items-center justify-between w-full px-5">
                        <p className="font-bold text-lg">Motorized Varifocal</p>
                        <span className="flex items-center span gap-2 font-bold text-lg"> <FaStar color="chocolate" /> 4.5</span>
                    </div>
                    <div className="px-5">
                        <p className="leading-5 text-justify">
                            Indoor Cctv Camera Or Security Camera. A versatile voice-activated device that helps to monitor your home effortlessly. Motorized Security Camera, your vigilant guardian for peace of mind. With cutting-edge technology and robust features, this camera offers unparalleled surveillance capabilities. Its high-definition resolution captures crisp, detailed footage day or night, ensuring clarity in any lighting condition. Equipped with advanced motion detection, it promptly alerts you to any suspicious activity, allowing for swift response and enhanced security. Easy to install and seamlessly integrated with smart home systems, this camera provides remote access and control via a user-friendly app, putting control at your fingertips wherever you are. Whether safeguarding your home, office, or business premises, the [Brand Name] Security Camera is your reliable partner in protecting what matters most.
                        </p>
                    </div>
                    <div className="flex justify-between items-end w-full px-5">
                        <div className="flex flex-col gap-3">
                            <p>Selected Color: White</p>
                            <div className="flex flex-row gap-1">
                                <div className="h-5 w-5 rounded-full bg-timbu-white border "></div>
                                <div className="h-5 w-5 rounded-full bg-timbu-green"></div>
                                <div className="h-5 w-5 rounded-full bg-timbu-red"></div>
                                <div className="h-5 w-5 rounded-full bg-timbu-blue"></div>
                            </div>
                            <p>NG₦ 200,000</p>

                        </div>
                        <div className="flex text-xs flex-row items-center gap-10 font-semibold">
                        
                            <div className="p-2 bg-timbu-black rounded-md text-timbu-white"><a href="/cart"> Add to Cart </a> </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
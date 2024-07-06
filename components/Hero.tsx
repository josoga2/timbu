
import Image from "next/image"
import { Cameras } from "@/details"

export default function Hero(){

    return(
        
        <main className="py-5">
            
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between">
                <div className="py-5 grid grid-cols-4 w-full justify-evenly gap-16">
                    {Cameras.map((cams) => (
                        <a href="/details" key={cams.id}>
                        <div  className="max-w-56 rounded bg-timbu-white">
                            <Image src={cams.cam} alt="cameraOne" width={300} height={300} className="h-56 w-56 object-cover rounded-t-md"/>
                            <div className="bg-slate-50 p-1 flex flex-col gap-2">
                                <div className="font-bold"> { cams.title } </div>
                                <div className="font-normal text-xs"> { cams.desc } </div>
                                <div className="flex flex-row text-sm justify-between ">
                                    <p> { cams.price } </p>
                                    <p className="underline font-bold"> <a href="/cart"> Add to Cart </a> </p>
                                </div>
                            </div>
                        </div>
                        </a>
                    ) )

                    }
                </div>
            </section>

            <section className="md:hidden p-5">

                <div className="py-5 flex flex-col gap-10 items-center">
                    {Cameras.map((cams) => (
                         <a href="/details" key={cams.id}>
                            <div className="max-w-56 rounded bg-timbu-white">
                                <Image src={cams.cam} alt="cameraOne" width={300} height={300} className="h-56 w-56 object-cover rounded-t-md"/>
                                <div className="bg-slate-50 p-1 flex flex-col gap-2">
                                    <div className="font-bold text-sm"> { cams.title } </div>
                                    <div className="font-normal text-xs"> { cams.desc } </div>
                                    <div className="flex flex-row text-xs justify-between ">
                                        <p> { cams.price } </p>
                                        <p className="underline font-bold"> <a href="/cart"> Add to Cart </a> </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        ) )

                    }
                </div>

            </section>
        </main>
    )
}
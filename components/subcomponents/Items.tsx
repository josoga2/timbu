import Image from "next/image";
import cameraOne from "../../public/cameraOne.png";

export default function Items(){

    return(
        
        <main>
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between">
                <div className="max-w-48 rounded bg-timbu-white">
                    <Image src={cameraOne} alt="cameraOne" width={300} height={300} className="h-48 w-48 object-cover rounded-t-md"/>
                    <div className="bg-slate-50 p-1 flex flex-col gap-2">
                        <div className="font-bold">Infra-red Bullet Camera </div>
                        <div className="font-normal text-xs">A versatile security Camera device that helps to monitor your home effortlessly</div>
                        <div className="flex flex-row text-sm justify-between ">
                            <p>N200,000</p>
                            <p className="underline font-bold">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:hidden p-5">

            </section>
        </main>
    )
}
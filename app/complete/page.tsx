import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function page(){

    return(
        
        <main className="py-5">
            <section className="hidden md:flex md:max-w-screen-lg  md:m-auto md:items-center md:justify-between">
                <div className="flex flex-col  items-center w-full text-center py-20 justify-center gap-10">
                    <IoCheckmarkCircleOutline className="font-black w-1/2 text-9xl" />
                    <p className="font-bold text-2xl w-1/2">Payment Succesful</p>
                    <p className="font-bold text-lg">Thank you for shopping. Your order has been successfully placed and has been processed for delivery</p>
                    <a href="/"><div className="p-2 px-5 rounded-md text-timbu-white bg-timbu-green text-center"> Back to Home </div></a>
                </div>
            </section>

            <section className="md:hidden p-5">
                <div className="flex flex-col  items-center w-full text-center py-10 justify-center gap-10">
                    <IoCheckmarkCircleOutline className="font-black w-1/2 text-9xl" />
                    <p className="font-bold text-2xl w-1/2">Payment Succesful</p>
                    <p className="font-bold text-lg">Thank you for shopping. Your order has been successfully placed and has been processed for delivery</p>
                    <a href="/"><div className="p-2 px-5 rounded-md text-timbu-white bg-timbu-green text-center"> Back to Home </div></a>
                </div>
            </section>
        </main>
    )
}
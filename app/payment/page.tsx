import Paymenttool from "@/components/subcomponents/Paymenttool"
import { RiBankFill } from "react-icons/ri";
import { IoCard } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { BsPaypal } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";


export default function page(){

    return(
        
        <main className="py-10">
            <section className="hidden md:flex flex-col md:gap-10 px-32 md:max-w-screen-lg md:m-auto md:items-center md:justify-between">
                <div className="flex flex-col gap-5 w-full mx-20 ">
                    <p className="font-semibold text-lg">Payment Method</p>
                    <Paymenttool title="Bank Payment" logo={<RiBankFill/>} />
                    <Paymenttool title="Card Payment" logo={<IoCard/>}/>
                    <Paymenttool title="Pay with Crypto" logo={<GrMoney/>}/>
                </div>

                <div className="flex flex-col gap-5 w-full mx-20 ">
                    <p className="font-semibold text-lg">More Options</p>
                    <Paymenttool title="Pay with PayPal" logo={<BsPaypal/>} />
                    <Paymenttool title="Pay with Amazon" logo={<FaAmazon/>}/>
                </div>

                <div className="p-2 rounded-md text-timbu-white bg-timbu-green text-center"> <a href="/card"> Enter your details</a></div>
            </section>

            <section className="md:hidden p-5">
                <div className="flex flex-col gap-5 w-full pb-5">
                    <p className="font-semibold text-lg">Payment Method</p>
                    <Paymenttool title="Bank Payment" logo={<RiBankFill/>} />
                    <Paymenttool title="Card Payment" logo={<IoCard/>}/>
                    <Paymenttool title="Pay with Crypto" logo={<GrMoney/>}/>
                </div>

                <div className="flex flex-col gap-5 w-full pb-5 ">
                    <p className="font-semibold text-lg">More Options</p>
                    <Paymenttool title="Pay with PayPal" logo={<BsPaypal/>} />
                    <Paymenttool title="Pay with Amazon" logo={<FaAmazon/>}/>
                </div>
                <div className="p-2 rounded-md text-timbu-white bg-timbu-green text-center"> <a href="/card"> Enter your details</a></div>
            </section>
        </main>
    )
}
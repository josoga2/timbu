import Paymenttool from "@/components/subcomponents/Paymenttool";
import { IoIosCard } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { TbArrowsExchange } from "react-icons/tb";



export default function page(){

    return(
        
        <main>
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between">
                <div className="w-full mx-44 flex flex-col gap-5">
                    <div className="font-bold pt-10">Make Payment</div>
                    <Paymenttool title="Card Payment" logo={<IoIosCard />} />
                    <div className="font-bold tetx-lg pt-5">Enter Card Details</div>
                    <div className="bg-timbu-white rounded-md border-2 border-timbu-black py-2 px-10 flex flex-col gap-2 text-sm">
                        <label htmlFor="cnum">CARD NUMBER</label>
                        <input type="text" id="cnum" name="cardname" placeholder="0000 0000 0000 0000" className="border-white" />
                    </div>
                    <div className="flex flex-row w-full gap-5 items-center justify-center">
                        <div className="bg-timbu-white rounded-md border-2 border-timbu-black py-2 px-10 flex flex-col gap-2 text-sm w-full">
                            <label htmlFor="cnum">CARD EXPIRY</label>
                            <input type="text" id="cnum" name="cardname" placeholder="MM/YY" className="border-white" />
                        </div>
                        <div className="bg-timbu-white rounded-md border-2 border-timbu-black py-2 px-10 flex flex-col gap-2 text-sm w-full">
                            <label htmlFor="cnum">CCV</label>
                            <input type="password" id="cnum" name="cardname" placeholder="123" className="border-white" />
                        </div>
                    </div>

                    <a href="/complete"><div className="p-2 rounded-md text-timbu-white bg-timbu-green text-center"> Pay NGN 203,000 </div></a>
                    <a href="/payment"><div className="p-2 rounded-md text-timbu-black border-2 border-timbu-black bg-timbu-white text-center mx-40  flex gap-5 items-center justify-center"> <TbArrowsExchange className="text-2xl" />  Change payment method</div></a>
                    <a href="/"> <div className="p-2 rounded-md text-timbu-black border-2 border-timbu-black bg-timbu-white text-center mx-40 flex gap-5 items-center  justify-center"> <GiCancel className="text-2xl" />  Cancel payment</div> </a>
                </div>

            </section>

            <section className="md:hidden p-5">
                <div className="w-full flex flex-col gap-5">
                    <div className="font-bold pt-5">Make Payment</div>
                    <Paymenttool title="Card Payment" logo={<IoIosCard />} />
                    <div className="font-bold tetx-lg pt-5">Enter Card Details</div>
                    <div className="bg-timbu-white rounded-md border-2 border-timbu-black py-2 px-5 flex flex-col gap-2 text-sm">
                        <label htmlFor="cnum">CARD NUMBER</label>
                        <input type="text" id="cnum" name="cardname" placeholder="0000 0000 0000 0000" className="border-white" />
                    </div>
                    <div className="flex flex-col w-full gap-5 items-center justify-center ">
                        <div className="bg-timbu-white rounded-md border-2 border-timbu-black py-2 px-5 flex flex-col gap-2 text-sm w-full">
                            <label htmlFor="cnum">CARD EXPIRY</label>
                            <input type="text" id="cnum" name="cardname" placeholder="MM/YY" className="border-white" />
                        </div>
                        <div className="bg-timbu-white rounded-md border-2 border-timbu-black py-2 px-5 flex flex-col gap-2 text-sm w-full">
                            <label htmlFor="cnum">CCV</label>
                            <input type="password" id="cnum" name="cardname" placeholder="123" className="border-white" />
                        </div>
                    </div>

                    <a href="/complete"> <div className="p-2 rounded-md text-timbu-white bg-timbu-green text-center"> Pay NGN 203,000 </div></a>
                    <a href="/payment"> <div className="p-2 rounded-md text-timbu-black border-2 border-timbu-black bg-timbu-white text-center flex gap-5 items-center justify-center mx-5"> <TbArrowsExchange className="text-2xl" />  Change payment method</div></a>
                    <a href="/"><div className="p-2 rounded-md text-timbu-black border-2 border-timbu-black bg-timbu-white text-center flex gap-5 items-center  justify-center mx-10"> <GiCancel className="text-2xl" />   Cancel payment</div></a>
                </div>

            </section>
        </main>
    )
}
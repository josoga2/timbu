export default function Discount(){

    return(
        
        <main>
            <section className="hidden md:relative md:flex  md:m-auto md:items-center md:justify-between">
                <div className=" bg-timbu-black w-full">
                    <p className="text-timbu-white text-sm text-center p-4">Get 10% off Discount Price On Selected Items. | Shop Now</p>
                </div>
            </section>

            <section className="md:hidden ">
            <div className=" bg-timbu-black w-full">
                    <p className="text-timbu-white text-sm text-center p-4">Get 10% off Discount Price On Selected Items. Shop Now</p>
                </div>
            </section>
        </main>
    )
}
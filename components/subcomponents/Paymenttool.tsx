

type Paymenttool = {
    title: string;
    logo: any;
}

const Paymenttool: React.FC<Paymenttool>= ({ title, logo }) => {

    return(
        
        <main>
            <section className="hidden md:flex md:max-w-screen-lg md:m-auto md:items-center md:justify-between w-full text-timbu-black">
                <div className="flex flex-row  w-full items-center justify-between border-2 rounded-md py-2 px-5">
                    <div className="flex flex-row gap-5 items-center">
                        {logo}
                        <p> {title} </p>
                    </div>
                    
                    <input type="radio"/>

                </div>
            </section>

            <section className="md:hidden ">
                <div className="flex flex-row  w-full items-center justify-between border-2 rounded-md py-2 px-5">
                        <div className="flex flex-row gap-5 items-center">
                            {logo}
                            <p> {title} </p>
                        </div>
                        
                        <input type="radio"/>

                    </div>
            </section>
        </main>
    )
}

export default Paymenttool;
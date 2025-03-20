function CheckoutContent() {

    return (
        <>
            <h1 className="mt-40 mb-10 text-center text-3xl">Kassan</h1>
            <div>
                <form action="">
                    <div className="m-8 grid md:grid-cols-2">
                        <div className="m-4">
                            <label htmlFor="first_name" className="block">Förnamn</label>
                            <input type="text" id="first_name" className="w-full md:w-80 h-8 border-1 rounded-md" />
                        </div>
                        <div className="m-4">
                            <label htmlFor="last_name" className="block">Efternamn</label>
                            <input type="text" id="first_name" className="w-full md:w-80 h-8 border-1 rounded-md" />
                        </div>
                        <div className="m-4">
                            <label htmlFor="email" className="block">E-post</label>
                            <input type="text" id="email" className="w-full md:w-80 h-8 border-1 rounded-md" />
                        </div>
                    </div>
                    
                    <div className="m-8 border-1 rounded-md grid md:grid-cols-2">
                    <h3 className="m-6 text-xl text-left">Leverans</h3>
                        <div className="m-4">
                            <label htmlFor="street" className="block">Gata</label>
                            <input type="text" id="street" className="w-full md:w-80 h-8 border-1 rounded-md" />
                        </div>
                        <div className="m-4">
                            <label htmlFor="zip" className="block">Postnummer</label>
                            <input type="text" id="zip" className="w-full md:w-80 h-8 border-1 rounded-md" />
                        </div>
                        <div className="m-4">
                            <label htmlFor="city" className="block">Stad</label>
                            <input type="text" id="city" className="w-full md:w-80 h-8 border-1 rounded-md" />
                        </div>
                    </div>
                    <div className="m-8">
                        <input type="checkbox" />
                        Jag vill ta emot nyhetsbrev
                    </div>
                    <div className="text-center">
                        <button className="items-center px-4 py-2 border-2 rounded-md text-sm font-medium transition-colors hover:text-gray-800 hover:shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-2 mb-2 cursor-pointer">Köp</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default CheckoutContent;
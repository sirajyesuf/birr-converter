import CountryDrawer from "./converter/country-drawer"
const Appbar =  () => {

    return (
        <div className="w-[100%] h-[60px] bg-white text-black">
            <header className="h-[100%] w-[90%] md:w-1/2 mx-auto flex justify-between items-center">

                <div className="font-black text-xl">
                    birrwise
                </div>
                <div>
                    <CountryDrawer/>
                </div>

            </header>
            <hr />

        </div>
    )
}

export default Appbar
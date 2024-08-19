

const Bannersection = () => {
    return (
        <div className="">
            <div className="w-full rounded-md bg-center bg-cover object-contain h-[34rem]  my-10 md:my-20" style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/04/62/71/58/1000_F_462715816_YK9bEILfUhAxSFayaAXk8W8ZpO1OvAru.jpg')" }}>
                <div className="flex rounded-md items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <div className="flex justify-center items-center">
                            <div className="max-w-xl mx-auto p-6">
                                <div className="flex items-center mt-1">
                                    <input type="text" id="input-9" className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm" placeholder="Search" />
                                    <button className="h-10 px-4 text-sm bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Search</button>
                                </div>
                            </div>
                        </div>
                        <h1 className=" md:text-5xl text-3xl font-semibold text-white lg:text-6xl">
                           Welcome <span className="text-yellow-600">Our</span> Side
                        </h1>
                        <button className="px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Start project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannersection;
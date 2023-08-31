
const CreateTeamButton = () => {
    return(
        <section>
            <main className="flex flex-col items-center justify-around bg-[#0097b3]">
                <div className="flex flex-col items-center justify-around mb-10 border-opacity-5 bg-[#0097b3] border-solid border-2 border-gray-100 rounded-xl pr-5 pl-5">
                    <div className="opacity-50">  
                        <div className="flex flex-col items-center justify-center mb-4">
                            <button className="bg-blue border-solid border-opacity-20 border-2 border-white rounded-xl pr-5 pl-5">
                                Create new Team
                            </button>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-center tracking-tight text-white sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                                Comming soon                 
                            </h2>
                        </div>
                    </div> 
                </div>
            </main>
        </section>
    )

}

export default CreateTeamButton;
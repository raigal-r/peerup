import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

//Rainbow Kit Connect button import
import CreateTeamButton from './CreateTeamButton';


export default function HomePage () {
    return(
        <section>
            <main className="flex flex-col items-center justify-between bg-[#0097b3] pt-10">
                <div className="flex flex-col items-center justify-center" >
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl max-h-[64px] mb-4">
                        Your Teams
                    </h1>

                    <div className="w-[75vw]">
                        <p className="text-xl text-center tracking-tight text-white sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-20">
                            Here will appear your Teams
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-around">
                    <div className="text-center ">
                        <div className="flex items-center justify-center">
                            <CreateTeamButton />
                        </div>
                    </div>
                </div>
            </main>

        </section>
    )

}
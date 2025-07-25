import React from 'react';
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';

function AimandScope() {
    return (
        <>
            <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3 items-center justify-center">
                <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-start">
                    <div className="rounded-xl overflow-hidden">
                        <img className="h-64 sm:h-80 w-full object-cover" rel="preload" src="/assets/Images/illus.jpg" alt="Conference Visual" />
                    </div>
                    <div className='flex flex-col md:gap-5 gap-3'>
                        <h1 className=" text-center font-semibold text-[#269C52] lg:text-2xl text-lg">
                            Scope of the Conference
                        </h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-justify md:text-base text-sm leading-7">
                                This conference aims to foster interdisciplinary collaboration and advance the state-of-the-art in data-driven technologies. It provides a vibrant environment to explore current challenges, share novel solutions, and discuss future directions across a wide spectrum of topics including artificial intelligence, machine learning, Internet of Things (IoT), edge and fog computing, cybersecurity, and data analytics.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="mx-auto text-justify text-gray-700 space-y-4 text-sm md:text-base leading-7">
                        <p className='leading-7'>
                            The International Conference on Intelligent Systems and Computational Methods aims to bring together researchers, academicians, and industry professionals to explore the evolving landscape of intelligent technologies and computational strategies. The conference covers a broad range of topics that reflect current trends and emerging innovations in the field. ICISCM encourages multidisciplinary research that contributes to the design and development of intelligent, adaptive, and high-efficiency systems capable of solving real-world problems across diverse domains. The conference fosters collaboration and knowledge exchange to drive progress in smart technologies and computational innovation.
                        </p>
                    </div>
                </section>
            </section>
            <LastSection />
        </>
    );
}

export default AimandScope;

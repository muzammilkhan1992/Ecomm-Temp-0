import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="pb-20 lg:py-0  bg-[#FBEBB5]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col-reverse lg:flex-row ">


                
                    <div className="lg:w-1/2 lg:pl-12 flex justify-center items-center text-center lg:items-start flex-col  lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                            Rocket single seater
                        </h2>
                        <span className="text-lg font-medium text-gray-500  mb-6">
                            Experience comfort and style with our Rocket Single Seater. Perfect for any living room.
                        </span>

                        
                        <button className="px-6 py-2 w-fit  bg-[#f4f4f4] text-black text-sm rounded-full shadow-md hover:shadow-xl transition-all">
                            Shop Now
                        </button>
                    </div>


                    
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <Image
                            src="/herosecsofa.png"
                            alt="Asgaard sofa"
                            width={600}
                            height={400}
                            className=" w-full h-auto"
                        />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero

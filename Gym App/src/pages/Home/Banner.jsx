import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

export const Banner = () => {
  return (
    <>
    <div className="w-full h-[55vh] flex items-center justify-center relative z-10 flex-col
    lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
    style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/469668857/photo/fitness-with-dumbbells.webp?a=1&b=1&s=612x612&w=0&k=20&c=D_N8e16uEvTBcXiQsQpkWoGNWAmxTix7XfFt2TGg9GI=")',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}>
        <div className="w-full h-full absolute bg-black/55 top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200
        mb-4 text-center uppercase">
            no <span className="text-indigo-600">Pain</span>, No{" "}
            <span className="text-indigo-600">Gain</span>
        </h1>
        <p className="text-lg text-gray-300 font-medium mb-8 text-center">
            Ignite Your Fittness Journey With Premium Solutions.
        </p>
        <PrimaryBtn className="uppercase rounded-full px-10 py-3">Become a member</PrimaryBtn>
    </div>
    </>
  )
}

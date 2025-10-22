import { Dumbbell, MoveRight } from 'lucide-react'
import TertiaryLink from '../../components/LinkBtn/TertiaryLink'
import SecondaryLink from '../../components/LinkBtn/SecondaryLink'
export const Services = () => {
    const serviceData = [
        {
          id: 1,
          serviceImg: "https://tinyurl.com/5a4hnjuw",
          icon: Dumbbell,
          title: "Fitness",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 2,
          serviceImg: "https://tinyurl.com/mtn76wx2",
          icon: Dumbbell,
          title: "Yoga",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 3,
          serviceImg: "https://tinyurl.com/5fnnkxhj",
          icon: Dumbbell,
          title: "Gym",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 4,
          serviceImg: "https://tinyurl.com/2ypxpn22",
          icon: Dumbbell,
          title: "Aerobics",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 5,
          serviceImg: "https://tinyurl.com/n8yu5jub",
          icon: Dumbbell,
          title: "Boxing",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 6,
          serviceImg: "https://tinyurl.com/rjuac6cr",
          icon: Dumbbell,
          title: "Yoga",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 7,
          serviceImg: "https://tinyurl.com/mu3xujxn",
          icon: Dumbbell,
          title: "Gym",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
        {
          id: 8,
          serviceImg: "https://tinyurl.com/4ea9hdry",
          icon: Dumbbell,
          title: "Zumba",
          desc: "Get ready to burn off some serious fat with our high quality products.",
          link: "#services",
        },
      ];  
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col 
  lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
    <h6 className="text-lg text-gray-200 items-center flex gap-x-2 mb-6">
        <Dumbbell className='w-4 h-4 text-indigo-600 -rotate-45' />
        Our Services
    </h6>
    <div className="w-full h-auto flex items-center justify-center gap-x-3.5 gap-y-7 flex-wrap mb-10">
        {serviceData.map((data) => (
            <div 
            key={data.id}
            className="lg:w-[24%] md:w-[48%] sm:w[48%] w-full 
                    lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 
                    hover:-translate-y-2 ease-out duration-500"
                    style={{
                        backgroundImage: `url(${data.serviceImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className="w-full h-full bg-black/90 absolute top-0 left-0 opacity-50"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-white p-4 h-full">
                            <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4
                            border-indigo-600/80 flex items-center justify-center mb-5">
                                <Dumbbell className='w-6 h-6 text-white'/>
                            </div>
                            <h1 className="text-xl font-semibold text-gray-100 text-center mb-4">
                                {data.title}
                            </h1>
                            <p className="text-base text-gray-100 text-center font-normal mb-4">
                                {data.desc}
                            </p>
                            {/* Centering the "Read More" link */}
                            <div className="text-center">
                                <TertiaryLink link={data.link}>
                                    Read More
                                    <MoveRight className="w-4 h-4 inline" />
                                </TertiaryLink>
                            </div>
                        </div>
                    </div>
        ))}
        
    </div>
    <SecondaryLink link="/trainers" className="lg:w-[18%] md:w-[50%] sm:w-[75%]
    w-[85%] justify-center ">
    View All Exersises
    <MoveRight className="w-4 h-4" />
    </SecondaryLink>
</div>
    </>
  )
}

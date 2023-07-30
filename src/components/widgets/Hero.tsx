import Wrapper from "@/components/shared/Wrapper";
import programs from '/public/programs.png';
import Image from 'next/image';
import Button from '@/components/shared/Button';
const Hero = () => (
    <section>
  <Wrapper>
   <div className="flex flex-col md:flex-row items-center">
    <div className="flex-1" >
        <h6 className="text-teal-700 mt-3font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h6>
        <h1 className={"text-3xl font-bold sm:text-4xl text-gray-900"}>Certified Web 3.0 and Metaverse Developer</h1>
        <p className="mt-4 text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
        <p className="mt-4 text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
        <div className="mt-6"> 
            <Button text="Enroll now"/> 
        </div>
     
    </div>
    <div className="flex-1">
        <Image src={programs} alt="hero poster" />
    </div>
   </div>
  </Wrapper>
  </section>
);

export default Hero;

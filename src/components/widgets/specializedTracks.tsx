import Wrapper from "@/components/shared/Wrapper"
import Button from "@/components/shared/Button"
import QuarterBox from "@/components/shared/QuarterBox"
import { Data } from "../shared/Data"
import Image from 'next/image';
import { useState } from "react";


const specializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd3")
  const selectedItemData = Data.find((item) =>item.slug === selectedItem )
  return (
    <section>
      <Wrapper>
        {/* <header /> */}
        <div>
          <h2  className={"text-2xl font-bold sm:text-3xl whitespace-pre-line"}>Specialized Tracks:</h2>
          <p className="mt-4 text-lg text-primary max-w-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
        </div>
        {/* < content left /> */}
        <div className="mt-10 flex flex-col md:flex-row gap-x-6 gap-y-5">
              <div className="shadow-xl rounded-xl basis-8/12  border border-slate-200 py-8 px-6">
                    <h6 className="text-teal-700 mt-3 font-semibold text-lg">Specialized Program</h6>
                    <h3 className="text-xl font-bold sm:text-3xl text-gray-900 whitespace-pre-line max-w-xs">{selectedItemData?.header}</h3>
                    <p className="mt-4 text-lg text-slate-600">{selectedItemData?.description}</p>
                      <Button text={"Learn More"} />
                      <div className="flex gap-x-4 mt-10">
                       {selectedItemData?.quaters.map((item) =>(
                          <QuarterBox 
                         
                           header={item.header}
                           description={item.description}
                           haveBorder={false} Number={item.Number}  />
                        ))
                       }
                         
                  
                       </div>
              
              </div>
              <div className="px-4 py-6 flex flex-col gap-4 bg-slate-200 basis-4/12">

                 {
                  Data.map((item,i) =>(
                    <div onClick ={()=> setSelectedItem(item.slug)} key = {i} className="flex hover:scale-110 gap-x-4 cursor-pointer">
                         {/* <div className="w-20 h-16 rounded bg-red-200"></div> */}
                         <div className="flex-shrink-0 h-24 w-20">
                          <Image src={item.image} alt={item.header} className=" object-cover rounded-md"  />
                         </div>
                       <div>
                              <h4 className="text-primary font-medium">Specialized Program</h4>
                             <h3 className=" text-base font-medium">{item.description}</h3>
                   </div>
                   </div>

                  ))
                 
                 } 
                

            
                 </div>  
              
            </div>
      </Wrapper>
    </section>
  )
}

export default specializedTracks

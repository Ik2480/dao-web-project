
import {FC} from 'react';

interface IProps {
  header: string;
  description: string;
  
  haveBorder?: Boolean;
}

const QuarterBox: React.FC<IProps> = ({ header, description,  haveBorder = true}) => {
  return (
    <div className={`rounded-md flex-1 relative flex flex-col bg-slate-400 sm:w-6/12 md:w-4/12 justify-center hover:scale-110 px-8 py-6 ${haveBorder && "border"}`}>
    <h4 className='font-bold text-lg'>{header}</h4>
    <p className='mt-2 text-white'>{description}</p>
    <div className='absolute top-0 right-10 font-bold text-9xl -z-10 text-gray-300'></div>
</div>
  )
};

export default QuarterBox;

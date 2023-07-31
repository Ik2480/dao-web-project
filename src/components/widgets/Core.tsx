import Wrapper from '@/components/shared/Wrapper';
import Button from '@/components/shared/Button';
import QuarterBox from '../shared/QuarterBox';

const CoreData = [
    {
        header:'Quarter I',
        description:'CS-101: Object-Oriented Programming using TypeScript',
        Number: 1
    },
    {
        header:'Quarter II',
        description:'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
        Number: 2
    },
    {
        header:'Quarter III',
        description:'$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
        Number: 3
    }
];
const Core = () => {
    const header ="Core Courses \n (Common in All Specializations):";
    return (
        
         <section className='mt-16 lg:mt-28'>
            <Wrapper>
                <div className='max-w-screen-sm'>
                    <h6 className="text-teal-700 mt-3font-semibold text-lg">Program of Studies</h6>
                    <h2 className={"text-2xl font-bold sm:text-3xl text-gray-900 whitespace-pre-line"}>{header}</h2>
                    <p className="mt-4 text-lg text-slate-600">Every participant of the program will start by 
                        completing the following three core courses:</p>
                </div>
                <div className='mt-3'>
                    <Button text="Learn More" />
                </div>
                <div className='my-20 flex flex-col md:flex-row gap-x-8 gap-y-6'>
                    {
                        CoreData.map( (item, i) =>(
                           
                        <QuarterBox 
                        key ={item.Number}
                        header={item.header} description={item.description} Number={item.Number} />
                                
                            ))
                        
                    }
                
                 
                </div>
                
            </Wrapper>
        </section>
        
    )

}

export default Core
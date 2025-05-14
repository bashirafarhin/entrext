import React from 'react'
import CardWithNumbers from './CardWithNumbers'

const list = [
    {
        numbers : "1",
        title : "Obsession",
        description : "Deep passion for solving the problem and commitment to the mission. Relentless focus on improving the solution based on feedback.",
    },
    {
        numbers : "2",
        title : "Drive",
        description : "Consistent effort to make daily progress, improving by 1% every day. Fully accountable, with a proactive approach to overcoming challenges",
    },
    {
        numbers : "3",
        title : "Visionary",
        description : "Should be a fine thinker and executionist.",
    }
]

const OurPartners = () => {
  return (
    <div className='w-[80vw] mx-auto my-10'>
      <div className='text-center text-[2vw] mb-4'>What we look in our partners</div>
      <div className="w-full mx-auto p-2 flex gap-4">
      {
        list.map((item, index) => {
          return (
            <div key={index} className="w-1/3 flex">
              <CardWithNumbers
                key={index}
                number={item.numbers}
                title={item.title}
                description={item.description}
                className="w-full"
              />
            </div>
          );
        })
      }
    </div>
    </div>
  );
};

export default OurPartners;
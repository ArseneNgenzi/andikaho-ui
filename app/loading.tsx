// import React from 'react'

export default function loading() {

    const skeleton = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    
    // * SKELETON START*
    <div className="px-40 py-10">
    <div className=" relative grid grid-cols-3 mb-20 gap-8">
    {skeleton.map((item: string) => (
        <div key={item} className="">
            <div className="w-fit ">
                <div className=" bg-grayMain/5 w-[500px] h-[500px] rounded-md skeleton"></div>
                <div className=" flex justify-between my-4">
                    <div className=" flex items-center">
                        <div className="w-[30px] h-[30px] bg-grayMain/5 rounded-full mr-4 "></div>
                        <div className=" h-[30px] w-[60px] bg-grayMain/5 mr-4 "></div>
                        <div className=" h-[30px] w-[60px] bg-grayMain/5 mr-4 "></div>
                    </div>
                    <div className=" flex items-center">
                        <div className=" h-[30px] w-[100px] bg-grayMain/5 mr-4 "></div>
                        <p className=" flex items-center ">
                            <span className=" h-[30px] w-[60px] bg-grayMain/5 mr-4 "></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>

    // * SKELETON END *
  )

}

// export default loading
'use client'
import Link from 'next/link';
import React from 'react'


const Items2 = () => {


  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12 mx-[250px] '>
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto group'>
              <img
                src={'https://s3-alpha-sig.figma.com/img/5633/5375/b19dc98ccde98dc5e1e2fb1bd0dc3b72?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ouofwkIMvXBm6mvnPMTGfyuW~gj08HYGnwF-nxWwe5Brw5dSt~NXE27s~IaSLBktUZA87lfFOyTGe6ODnMkxJViMI1zTNe-~qicHCf88I9vS~s-bIrsj~Svf64niAX~WrfI515XUzjqF694m2KAsKwY7NvZz-FdUs8sHCH1DyB367iCzvkh0Sx7oAOzjmL0QNzcoO-SEpThIrldB2czSA8fal0ZuaUJ6-dmHjWjg7r~YcbT0lnbNxyu2i55q~FXJbbJlJAYRqgUv~otVLCLpb4jvonwuvyPQfPRIxDgE9J9nZ2dAY3A2SL3HT0n3Z5fy0FY7r4-H5lRxOEh5tWgq6w__'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105  h-[375px] w-[305px] '
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <img
                src={'https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0JIVdmQompVglHCoo3zf7cZDQgyaBMkljN7xWoh89e5IgxGAO5cIuvCFR08zlioiz8N04SkvA9NoVwkJ3yM~ZmOP3tyVBbkC0nlCfVPrxfavgEOAl1AtYVJ1bSMbrfR1ZV-Jd-DlnG9l5B7HUoXL9IqnVlJ7vGn70WjtZA9VPFlAmP7x5wzWZYSsJxTZmejJ3JDyzo5Sf9mvXDowO2CQHtBkJRrLpNdUQ81H4O1Tnq69Ux9U0SBGrWBk1kSjuSOFhB431tsEYMCse7~uouC2HYqli3CmGN0pgoKTl3bgwc~y0ZKSldSop-DSkRKbwKpUG0aRgDwV5R7AyHU7tFdrQ__'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105  h-[375px] w-[305px] '
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <img
                src={'https://s3-alpha-sig.figma.com/img/0176/96da/46e4914903f11d10ddf03117c8cfe3b6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzvuuuPQMTu81JtW1EX5Jh24IqzoUuaGG0P9W8xV2opx9A340rA64SIsjTexffve95Sm~bLISda~mXPS9i4T~33lRM6ruUIMZlfnAKOJ~01pe4vP8CCP1GEF1vIGAqAt7gPo7uqfkUqHrMhuHDU0c9eZswWwzdEoa9gEGOFVp0QFdKttRPUkg7XlauBocJLdJneO3xqPq89OfG3ppvACnUbkuujX-KCVOXQD4w5AeXEVVph5bugtyrVUy9UOlSwbuvCTH7eX3oDePF0TLwHLsJcwizXtYVNTBtTf3R48Nz2xMJdsvQ11p3iHqMgAwV8Vm1w3tzI~AHW0PAP2j~ljpw__'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105  h-[375px] w-[305px] '
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
           <Link href={"/products"}> <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
              View products
            </button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Items2;


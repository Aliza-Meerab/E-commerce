import Link from "next/link";
import Footer from "./footer";

export default function Items() {
  return (
    <div>
    <div className="w-full flex justify-center items-center p-4 absolute ">
      <div className="">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">New ceramics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Dandy Chair */}
          <div className="">
            <div className=" w-[305px] h-[462px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0JIVdmQompVglHCoo3zf7cZDQgyaBMkljN7xWoh89e5IgxGAO5cIuvCFR08zlioiz8N04SkvA9NoVwkJ3yM~ZmOP3tyVBbkC0nlCfVPrxfavgEOAl1AtYVJ1bSMbrfR1ZV-Jd-DlnG9l5B7HUoXL9IqnVlJ7vGn70WjtZA9VPFlAmP7x5wzWZYSsJxTZmejJ3JDyzo5Sf9mvXDowO2CQHtBkJRrLpNdUQ81H4O1Tnq69Ux9U0SBGrWBk1kSjuSOFhB431tsEYMCse7~uouC2HYqli3CmGN0pgoKTl3bgwc~y0ZKSldSop-DSkRKbwKpUG0aRgDwV5R7AyHU7tFdrQ__"
                alt="The Dandy Chair"
                className="object-cover h-[375px] w-[305px] "
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">The Dandy Chair</h2>
              <p className="text-gray-500 mt-2">£250</p>
            </div>
          </div>


         {/* img2 */}
          <div className="">
            <div className=" w-[305px] h-[462px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOPS9qB-gWJFcpw3Z1Z-JtIqD1cd6j9yWUo1BAkoIz6sy5xjN6myFYaivh1MOOFyAVDn7914iVDF-wKTSKHBum2CKxwskXMJu~0ApkrIxuxnHaRESXKB2AKRXHODErXSPglyg9DNNsI9tvLE32MrGs55O2eWkj7kFAn~i6PwnCpZ2XTBIRmdTVFm~mlpqDLSims3ERwYQH50KxEzoUPyHyPH7G-FkC9Aue8KdYXP1mz0LMbyiaUc4XS88UMoX33gnI75GsJDOUkh6YX01IJVuh15P6DUq3mwPhN6gPSttZQZDr~vdsvy3-QQolI1S0DyxjqR0t34Cx0cHQDaKM1NjA__"
                alt="The Dandy Chair"
                className="object-cover  h-[375px] w-[305px]"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">Rustic Vase Set</h2>
              <p className="text-gray-500 mt-2">£155</p>
            </div>
          </div>


{/* img 3 */}
          <div className="">
            <div className=" w-[305px] h-[462px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnHaWAOMQ2rKD-IFu1rhjm4Tsb9P~v-e85dQSpJ6D2u7hCzd2R8ps0pjzUB4pleqUx1lgag9DE3GETuIG0IcLXRq03e8Pta4zk4VD4FKXbKEYXYrsej-knhg1APPekTNS2S75ZlwURRrfR1Hc0pCLY6c4vi20wv7-X4zOKUAk-IfpgLRNVbNfskcXwPT3SfpW5GOCDPF1Li1eoiHlLFyhvcI7AlliGETYSQX5fX4ivh3zy7Vx~hVBMC--h5LCeG5hEm6m1MlLoRESUqy09awWG8C2aihkh8FLJ2D~9PvXryDmHsTvqoIJGCy3huP6Eod-o7hVvYGQpcX12pQ8foWXg__"
                alt="The Dandy Chair"
                className="object-cover h-[375px] w-[305px]"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">The Silky Vase</h2>
              <p className="text-gray-500 mt-2">£125</p>
            </div>
          </div>

{/* img  4 */}

          <div className="">
            <div className=" w-[305px] h-[462px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfB9GzO2TovlEDG7wqyHIqOCEWizkroEPUFLt9wZZpnPTreM-s4vr~HCxS1yd7lRkxPsFH6IvoyoE-0Jntg7j1uXDHmbcJr1VdU1lEuM1NGRLigvZLThCisrP-FuIeSljKlil6Xyb~DqWf2hF12hchvkgInysG7C900vGxpUB4QJpRh93JA2-7k3xmSijfqzk1zIND~WAyAwTy2f5PUoLNRlpvwiN765E2bySTQZuVIpi7teA3~jYMWiUT2utItXG1eyZKYSQmzsK56Bvc5kbDqFLBMQUC2ApNAUeqGeF~mGwpYpnfgkzZtkIlTyVW~GG6-nomn-zz9xpleNa~CSUQ__"
                alt="The Dandy Chair"
                className="object-cover h-[375px] w-[305px]"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">The Lucy Lamp</h2>
              <p className="text-gray-500 mt-2">£399</p>
            </div>
          </div>




          <div className='my-10 flex justify-center items-center'>
           <Link href={"products"}> <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]' >
              View products
            </button></Link>
          </div>

        </div>
      </div>

    
    </div> 
    
    

    </div>
  );
}

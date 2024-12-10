import HeroSection from "./HeroSection";
import Main from "./main";
import Navbar from "./navbar";
import TopHeader from "./topHeader";
import Items from "./items";
import Footer from "./footer";
import Benifit from "./benifits";
import Items2 from "./itmes2";


export default function Home(){
  return(
    <div>

      <TopHeader/>
      <Navbar/>
      <HeroSection/>

      <div className="mt-[40%]">
      <Main/>
      </div>
      
      <Items/>

      <div className="mt-[40%]">
        <Items2/>
      </div>
      

<div className="">
      <Benifit/>
</div>

      <div className="">
     <Footer/>
    </div>
    </div>
  )
}
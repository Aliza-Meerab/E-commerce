import React from "react";
import Navbar from "../navbar";
import TopHeader from "../topHeader";
import Footer from "../footer";


const Cart = () => {
  return (
    <>
    <TopHeader/>
    <Navbar />
    <div>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple absolute top-[20%]">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          {/* Product Section */}
          <div className="border-2 p-4">
            <div className="flex justify-between">
            <h1 className="text-lg font-thin ">Product</h1>
            <h2 className="text-lg font-thin "> Quantity</h2>
            
            </div>
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnHaWAOMQ2rKD-IFu1rhjm4Tsb9P~v-e85dQSpJ6D2u7hCzd2R8ps0pjzUB4pleqUx1lgag9DE3GETuIG0IcLXRq03e8Pta4zk4VD4FKXbKEYXYrsej-knhg1APPekTNS2S75ZlwURRrfR1Hc0pCLY6c4vi20wv7-X4zOKUAk-IfpgLRNVbNfskcXwPT3SfpW5GOCDPF1Li1eoiHlLFyhvcI7AlliGETYSQX5fX4ivh3zy7Vx~hVBMC--h5LCeG5hEm6m1MlLoRESUqy09awWG8C2aihkh8FLJ2D~9PvXryDmHsTvqoIJGCy3huP6Eod-o7hVvYGQpcX12pQ8foWXg__"
                  alt="Product 1"
                  className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">
                    Graystone vase
                  </h1>
                  <p className="text-sm mt-2">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center">
                
                <p className="mt-8 text-lg font-medium">1</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ba4f/4473/e71e7542b61ce7099f02357e30719cd7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8YqLbOOwiv2hCu-eBU~zm8XXPLfF1dkMP6PZPMvgnMZG9KfX-Avb2s2o4O0D6eGBfcOARtzq3KUaRMPoZXjMYnuu110XoHl07JDoaVHP8YXMUYkuHESNbiJsthsFm5BWbCAInsE1jvMRj2MAyHvfCW7K-giUVGKw1A7RfqmPooBTX~c~7LQ8T-mTc5lx-ltTddEnW0oGmoPIOpAt3S8OCWXsiFmsYHiG~EOM2U~EtDlLX76llTqo6DWp7PUqg6vs1Y26km4xlZFkdIUKlsZcWjadBzmkj2mbMgRludr27vFRxN2IfIavsq78eUJzQs8hRRIigc~GVK1qrGaG8ddDw__"
                  alt="Product 2"
                  className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">
                    Basic white vase
                  </h1>
                  <p className="text-sm mt-2">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center">
                
                <p className="mt-8 text-lg font-medium">1</p>
              </div>
            </div>
          </div>

          {/* Total Section (Hidden on Small Screens) */}
          <div className="border-2 p-4 sm:hidden lg:block">
            <h1 className="text-lg font-thin">Total</h1>
            <p className="mt-10 text-lg font-medium">£85</p>
            <p className="mt-40 text-lg font-medium">£85</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">
            Subtotal
          </h1>
          <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
          <p className="text-sm mt-4 opacity-[0.7]">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white bg-[#2A254B]">
            Go to checkout
          </button>
        </div>
      </div>

<div className="mt-[54%]">
      <Footer/>
</div>

    </div></>
  );
};

export default Cart;
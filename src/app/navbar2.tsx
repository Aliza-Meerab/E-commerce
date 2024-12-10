export default function nav (){
  return(
    <div>
      <nav className="bg-white shadow-md fixed top-7 left-0 w-full ">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
     
      {/* <div className="flex items-center space-x-2">
        <img src={"https://via.placeholder.com/150x50"} alt="Logo" className="h-10"> 
      </div> */}
<div>kmdsa</div>
     
      <div className="hidden md:flex space-x-6 text-gray-600">
        <a href="#" className="text-lg font-semibold hover:text-blue-600 transition">Home</a>
        <a href="#" className="text-lg font-semibold hover:text-blue-600 transition">Shop</a>
        <a href="#" className="text-lg font-semibold hover:text-blue-600 transition">About</a>
        <a href="#" className="text-lg font-semibold hover:text-blue-600 transition">Contact</a>
      </div>

     
      <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2">
        <input type="text" placeholder="Search..." className="w-72 px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0v2m0 0v2m0 0v2m0 0v2m0 0v2" />
        </svg>
      </div>

    
      <div className="flex items-center space-x-4">
        <button className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 12h18M3 21h18" />
          </svg>
        </button>

        <button className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 12h18M3 21h18" />
          </svg>
        </button>

      
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 12h18M3 21h18" />
          </svg>
          <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-semibold text-white bg-red-600 rounded-full">3</span>
        </div>
      </div>
    </div>
  </nav>

    </div>
  )
}
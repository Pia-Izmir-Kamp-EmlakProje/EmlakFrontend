import React, { Component } from 'react'
import '../assest/logo.jpg'



 class Header extends Component {
  render() {

   
    return (
      <>
      
      <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logo.jpg"
            alt="Emlak Logo"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-white text-xl font-bold">Yıldız Emlak</div>
        </div>

        {/* Slogan */}
        <div className="text-white text-lg">
          Kimi için sığınabileceği bir ev, kimi için hayallerini sığdırabileceği bir cennet!
        </div>

        {/* İlan Ver Butonu */}
        
        <button cl className="bg-white text-blue-500 px-4 py-2 rounded-md">
          İlan Ver
        </button>
      </div>

      
    </header>
      
      </>
      
    )
  }
}
export default Header;
import React, { Component } from 'react'

class Aramacard extends Component {
  render() {
    
    return (
        <>
   
        <div className="container mx-auto mt-4">
             <div className="bg-white p-4 rounded-lg shadow-lg">
             <h2 className="text-xl font-bold text-center mb-2">Hoş Geldiniz</h2>
               
               <p className=" text-center mb-2">
                 Eviniz olsun istiyorsanız bizimle iletişime geçin
               </p>
     
               {/* Input Alanları ve Select List */}
               <div className="flex flex-wrap justify-center mt-4">
                 <div className="md:w-1/4 p-2">
                   <label className="block text-sm font-medium text-gray-700">Satılık/Kiralık</label>
                   <select className="form-select mt-1 block w-full p-2 border rounded-md">
                     <option value="satilik">Satılık</option>
                     <option value="kiralik">Kiralık</option>
                   </select>
                 </div>
                 <div className="md:w-1/4 p-2">
                   <label className="block text-sm font-medium text-gray-700">Daire/İşyeri</label>
                   <select className="form-select mt-1 block w-full p-2 border rounded-md">
                     <option value="daire">Daire</option>
                     <option value="isyeri">İşyeri</option>
                   </select>
                 </div>
                 <div className="md:w-1/4 p-2">
                   <label className="block text-sm font-medium text-gray-700">İl</label>
                   <select className="form-select mt-1 block w-full p-2 border rounded-md">
                     <option value="istanbul">İstanbul</option>
                     <option value="ankara">Ankara</option>
                     <option value="izmir">İzmir</option>
                   </select>
                 </div>
                 <div className="md:w-1/4 p-2">
                   <label className="block text-sm font-medium text-gray-700">İlçe</label>
                   <select className="form-select mt-1 block w-full p-2 border rounded-md">
                     <option value="kadikoy">Kadıköy</option>
                     <option value="beyoglu">Beyoğlu</option>
                     <option value="cankaya">Çankaya</option>
                   </select>
                 </div>
                 <div className="md:w-full p-2">
                   <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Ara</button>
                 </div>
               </div>
             </div>
           </div>
     
        </>
    )
  }
}


export default Aramacard;
import React, { Component } from 'react'

class Sononilan extends Component {
    render() {
        const sonOnIlanlar = [
            { 
              foto: 'logo.jpg',
              baslik: 'Örnek İlan 1',
              fiyat: '250.000 TL'
            },
            { 
              foto: 'ilan2.jpg',
              baslik: 'Örnek İlan 2',
              fiyat: '400.000 TL'
            },
            { 
              foto: 'ilan3.jpg',
              baslik: 'Örnek İlan 3',
              fiyat: '550.000 TL'
            },
            { 
              foto: 'ilan1.jpg',
              baslik: 'Örnek İlan 1',
              fiyat: '250.000 TL'
            },
            { 
              foto: 'ilan2.jpg',
              baslik: 'Örnek İlan 2',
              fiyat: '400.000 TL'
            },
            { 
              foto: 'ilan3.jpg',
              baslik: 'Örnek İlan 3',
              fiyat: '550.000 TL'
            },
            { 
              foto: 'ilan1.jpg',
              baslik: 'Örnek İlan 1',
              fiyat: '250.000 TL'
            },
            { 
              foto: 'ilan2.jpg',
              baslik: 'Örnek İlan 2',
              fiyat: '400.000 TL'
            },
            { 
              foto: 'ilan3.jpg',
              baslik: 'Örnek İlan 3',
              fiyat: '550.000 TL'
            },
            { 
              foto: 'ilan3.jpg',
              baslik: 'Örnek İlan 3',
              fiyat: '550.000 TL'
            },
            // Diğer ilanları buraya ekleyebilirsiniz
          ];
        return (
            <>

                <div className="container mx-auto mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {sonOnIlanlar.map((ilan, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                                <img src={ilan.foto} alt="İlan Fotoğrafı" className="w-full h-48 object-cover mb-2 rounded-lg" />
                                <h3 className="text-lg font-semibold mb-2">{ilan.baslik}</h3>
                                <p className="text-gray-700">{ilan.fiyat}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </>
        )
    }
}
export default Sononilan;





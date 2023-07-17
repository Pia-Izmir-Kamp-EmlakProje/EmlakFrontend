import React from 'react';

const Ilanekle = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">İlan Ver</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Başlık</label>
            <input
              type="text"
              className="form-input mt-1 block w-full p-2 border rounded-md"
              placeholder="İlan Başlığı"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Fiyat</label>
            <input
              type="text"
              className="form-input mt-1 block w-full p-2 border rounded-md"
              placeholder="Fiyat"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Açıklama</label>
            <textarea
              className="form-textarea mt-1 block w-full p-2 border rounded-md"
              rows={6}
              placeholder="İlan Açıklaması"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            İlanı Yayınla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ilanekle;

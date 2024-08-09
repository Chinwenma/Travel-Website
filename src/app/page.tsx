import Image from "next/image";

export default function Home() {
  return (
    // pages/index.js


      <main className="bg-gray-100 min-h-screen">

        <section className="flex flex-col items-center justify-center text-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
          <h2 className="text-6xl text-white font-bold">Discover Your Next Adventure</h2>
          <p className="text-xl text-white mt-4">Browse and book amazing travel packages with ease</p>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {/* Example Package Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/package1.jpg" alt="Package 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-2xl font-bold">Beach Paradise</h3>
                <p className="mt-2 text-gray-600">Enjoy the sun and sea in this tropical getaway.</p>
              </div>
            </div>
            {/* Repeat for other packages */}
          </div>
        </section>

       
      </main>


  );
}

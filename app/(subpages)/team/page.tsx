import React from 'react';
import Header from '@/app/Header';
import Image from 'next/image';
import Footer from '@/app/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="h-max text-[#252622] dark:text-[#fffcf2] bg-stone-100 dark:bg-black">
      <Header />
      <main className='h-max p-1 -mt-24 pt-32 mb:p-4 px-4 mb:px-10 bg-fixed bg-cover' style={{backgroundImage: 'url(/backgrounds/topography.svg)'}}>
        <div>
          <h1 className="text-5xl font-bold font-avenir mb-4 px-4">Meet the team</h1>
          <div className="">
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-2 items-center justify-center'>
              
              <div className='col-span-1 relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/fabian.webp" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Fabian</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Programming Lead</div>
              </div>

              <div className='col-span-1 relative rounded-lg overflow-hidden '>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/comp/gupta.png" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Adrian</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Outreach and Strategy Lead</div>
              </div>

              <div className='relative rounded-lg overflow-hidde'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/arthur.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Arthur</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Engineering Lead</div>
              </div>

              <div className='relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/kieran.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Kieran</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Finance Lead</div>
              </div>

              <div className='relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/teddy.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Teddy</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Merchandise Officer</div>
              </div>

              <div className='relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/zozo.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Zozo</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">CAD Officer</div>
              </div>

              <div className='relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/ethan.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Ethan</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Build Team</div>
              </div>

              <div className='relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/milo.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Milo</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Build Team</div>
              </div>


              <div className='relative rounded-lg overflow-hidden'>
                <div className="">
                  <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/fry_poon.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Mr Fry/Dr Poon</div>
                <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Mentors</div>
              </div>

            </div>
          </div>
        </div>
        
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;


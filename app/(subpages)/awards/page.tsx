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
          <h1 className="text-5xl font-bold font-avenir mb-4 px-4">Awards</h1>
          <div className="grid grid-cols-1 xl:grid-cols-1">
         { /* 
            <div>
                <h1 className="text-2xl font-bold font-avenir mb-4 px-4">Honours</h1>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-2  p-2 items-center justify-center'>
                    
                    <div className='col-span-1 relative rounded-lg overflow-hidden'>
                        <div className="">
                        <Image className='rounded-lg w-full aspect-square object-cover' src="/headshots/fabian.webp" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                        </div>
                        <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Championship Organisation</div>
                        <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">For our 'pincer' grip</div>
                    </div>

                </div>

            </div>
**/}

            <div>
                <h1 className="text-2xl font-bold font-avenir mb-4 px-4">2024 GB South East Qualifier (Harris Academy Sutton)</h1>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-2  p-2 items-center justify-center'>
                    
                    <div className='col-span-1 relative rounded-lg overflow-hidden'>
                        <div className="">
                        <Image className='rounded-lg w-full aspect-square object-cover' src="/content/innovate.jpg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                        </div>
                        <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Innovate Award</div>
                        <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">For our &apos;pincer&apos; grip</div>
                    </div>

                    <div className='col-span-1 relative rounded-lg overflow-hidden '>
                        <div className="">
                        <Image className='rounded-lg w-full aspect-square object-cover object-top' src="/content/red_underglow.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                        </div>
                        <div className="absolute bottom-12 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg font-mono text-2xl px-2 ">Finalist Alliance Captain</div>
                        <div className="absolute bottom-0 left-0 bg-stone-100 dark:bg-neutral-950 bg-opacity-70 dark:bg-opacity-70 rounded-tr-lg text-xl p-2">Led the Finalist Alliance</div>
                    </div>
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

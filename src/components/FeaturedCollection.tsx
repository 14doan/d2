'use client';

import Image from 'next/image';
import Link from 'next/link';
function FeaturedCollection() {
  const items = [
    {
      title: 'Regardless Collection',
      src: '/hoodie.png',
      alt: 'Good Regarless Hoodie',
      url: '/',
      price: '£66',
    },
    {
      title: 'Regardless Collection',
      src: '/tshirt.png',
      alt: 'Good Regardless Tshirt',
      url: '/',
      price: '£33',
    },
    {
      title: 'Regardless Collection',
      src: '/jumper.png',
      alt: 'Good Regardless Jumper',
      url: '/',
      price: '£45',
    },
  ];

  return (
    <div className="h-screen pt-[7rem] pb-[3rem] ">
      <div className=" h-full flex items-center">
        <div
          className=" m-0 grid grid-flow-col gap-[15px] sm:gap-[60px] lg:gap-[100px] w-full slide-padding snap-x snap-mandatory overflow-x-scroll overflow-y-hidden 
          "
        >
          {items.map((item, index) => (
            <div key={index} className={`snap-center`}>
              <Link href={item.url}>
                <div>
                  <div className="relative flex justify-center items-center w-[--card-width] h-[--card-height] overflow-hidden ">
                    <Image
                      className=" rounded-lg object-cover w-full h-full overflow-clip"
                      src={item.src}
                      alt={item.alt}
                      width="150"
                      height="150"
                    />
                  </div>

                  <div className="navBtn tracking-wide capitalize m-0">
                    <p className=" text-xs pb-3 pt-3">{item.title}</p>
                    <p> {item.alt}</p>
                    <p className=" text-xs pb-3 pt-3">{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;

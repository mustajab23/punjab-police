'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <main className="flex flex-col lg:flex-row mt-6 mx-5">
      <div className="lg:w-[69vw] w-full rounded-2xl shadow-lg shadow-primary">
        <Slider {...settings}>
          <Image
            src={'/home_1.jpg'}
            height={656}
            width={656}
            className="object-cover w-full h-[80vh] bg-no-repeat rounded-2xl"
          />
          <Image
            src={'/home_2.jpg'}
            height={656}
            width={656}
            className="object-cover w-full h-[80vh] bg-no-repeat rounded-2xl"
          />
          <Image
            src={'/home_3.jpg'}
            height={656}
            width={656}
            className="object-cover w-full h-[80vh] bg-no-repeat rounded-2xl"
          />
          <Image
            src={'/home_4.png'}
            height={656}
            width={656}
            className="object-cover w-full h-[80vh] bg-no-repeat rounded-2xl"
          />
        </Slider>
      </div>
      <div className="lg:w-[31vw] w-full px-5 py-5 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2">
          <Link href={'/faq'} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 rounded-lg" />
            <div className="px-8 py-2 hover:text-white bg-white text-black rounded-[6px] relative group transition duration-200 font-bold hover:bg-transparent w-full lg:w-72">
              Frequently Asked Questions
            </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <Link
              href={'/helplines'}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear text-center"
            >
              Helplines
            </Link>
            <Link
              href={'/tips'}
              className="shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear"
            >
              Safety Tips
            </Link>
          </div>

          <Link
            href={'/women-help'}
            className="mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Women Help
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;

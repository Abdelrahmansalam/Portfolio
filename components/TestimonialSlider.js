// testimonial slider data
export const testimonialSlider = [
  {
    image: '/Portfolio/t-avt-1.png',
    name: 'Sarah T.',
    position: 'CEO of TechStart',
    message:
      'Working with Abdelrahman was a game-changer for our online presence. The design was not only visually stunning but also user-friendly and optimized for SEO. Their understanding of our brand and attention to detail made the entire process seamless. I couldnt recommend them more!',
  },
  {
    image: '/Portfolio/t-avt-2.png',
    name: 'Emily R.',
    position: 'Small Business Owner',
    message:
      'I approached Mr Salam with a rough idea, and they transformed it into a beautiful website that exceeded my expectations. The code is clean, the design is engaging, and our site performance has never been better. Truly an outstanding web developer!',
  },
  {
    image: '/Portfolio/t-avt-3.png',
    name: 'James L.',
    position: 'Marketing Manager at CreativeCo.',
    message:
      'Abdelrahman expertise in web design and development truly shines through in their work. They delivered on time, maintained excellent communication, and provided valuable insights on SEO and branding. If you want a website that stands out, look no further.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

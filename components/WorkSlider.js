// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Project Simone',
          path: '/Portfolio/thumb1.png',
          url: 'https://abdelrahmansalam.github.io/Project-Simone/',
        },
        {
          title: 'Education website',
          path: '/Portfolio/thumb5.png',
          url: 'https://abdelrahmansalam.github.io/Education-website/',
        },      
        {
          title: 'Quotes',
          path: '/Portfolio/thumb3.png',
          url: 'https://abdelrahmansalam.github.io/Quotes/',
        },
        {
          title: 'Crud System',
          path: '/Portfolio/thumb4.png',
          url: 'https://abdelrahmansalam.github.io/Crud-System/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Div Folio',
          path: '/Portfolio/thumb2.png',
          url: 'https://abdelrahmansalam.github.io/DivFolio/',
        },
        {
          title: 'title',
          path: '/Portfolio/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/Portfolio/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/Portfolio/thumb3.jpg',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  const handleClick = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                    onClick={() => handleClick(image.url)}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>View</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            Demo
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

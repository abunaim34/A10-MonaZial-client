import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero mt-12 h-[510px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/hsKpDKm/slider-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl ">
                                <h1 data-aos="fade-right" className="mb-5 md:leading-[65px] text-4xl md:text-5xl  font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-black to-primary text-transparent bg-clip-text bg-300% animate-gradient'>MonaZila</span></h1>
                                <p data-aos="fade-left" className="mb-5">Experience the best of Bangladesh with Residential House. From luxury stays to gourmet dining, Your journey of dsicovery starts here.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
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
                    <div className="hero mt-12 h-[420px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/MD8zzC4/slider-3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl ">
                                <h1 className="mb-5 md:leading-[65px] text-4xl md:text-5xl  font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-secondary to-primary text-transparent bg-clip-text bg-300% animate-gradient'>MonaZila</span></h1>
                                <p className="mb-5">Experience the best of Bangladesh with monaZila from painting and Art. Starting from zero, he became the top artist and painters of the country..</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="hero mt-12 h-[420px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/VHX1bhY/slider-2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl ">
                            <h1 className="mb-5 md:leading-[65px] text-4xl md:text-5xl  font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-black to-primary text-transparent bg-clip-text bg-300% animate-gradient'>MonaZila</span></h1>
                            <p className="mb-5">Experience the best of Bangladesh with monaZila from painting and Art. Starting from zero, he became the top artist and painters of the country..</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero mt-12 h-[420px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/hsKpDKm/slider-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl ">
                                <h1 className="mb-5 md:leading-[65px] text-4xl md:text-5xl  font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-white to-secondary text-transparent bg-clip-text bg-300% animate-gradient'>MonaZila</span></h1>
                                <p className="mb-5">Experience the best of Bangladesh with monaZila from painting and Art. Starting from zero, he became the top artist and painters of the country..</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
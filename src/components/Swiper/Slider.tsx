// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import CssBaseline from '@mui/material/CssBaseline'

// Import Swiper styles
import 'swiper/css'
import './Slider.scss'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'


import slide1 from 'assets/5.jpg'
import slide2 from 'assets/6.jpg'
import slide3 from 'assets/9.jpg'
import slide4 from 'assets/10.jpg'
import slide5 from 'assets/11.jpg'
import slide6 from 'assets/12.jpg'
import slide7 from 'assets/13.jpg'
import slide8 from 'assets/14.jpg'
import slide9 from 'assets/15.jpg'
import slide10 from 'assets/16.jpg'

const Slider = () => {
    return (
        <>
            <CssBaseline />
            <Swiper
                className="slider"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="swiper-slide-1">
                        <img className='slide-img' src={slide1} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "The guy who invented the first wheel was an
                                idiot, but the guy who invented the other three
                                was a genius."
                            </p>
                            <p>Sid Caesar</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-2">
                        <img className='slide-img' src={slide2} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "The greatest danger on the roads is a car that
                                goes faster than its driver can think."
                            </p>
                            <p>Robert Lembke</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-3">
                        <img className='slide-img' src={slide3} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "The car should be a part of you, your flesh,
                                and you should be an integral part of it. This
                                is the only way to become one of a kind."
                            </p>
                            <p>Ayrton Senna</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-4">
                        <img className='slide-img' src={slide4} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "Of all the creations of human hands, the car is
                                most similar to a living being."
                            </p>
                            <p>William Lyons</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-5">
                        <img className='slide-img' src={slide5} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "Aerodynamics for those who do not know how to
                                make engines."
                            </p>
                            <p>Enzo Ferrari</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-6">
                        <img className='slide-img' src={slide6} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "Straight roads are for fast cars and curves are
                                for fast drivers."
                            </p>
                            <p>Colin McRae</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-7">
                        <img className='slide-img' src={slide7} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "Car racing began immediately after the second
                                car was born."
                            </p>
                            <p>Henry Ford</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-8">
                        <img className='slide-img' src={slide8} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "I couldn't find the sports car of my dreams, so
                                I made it myself."
                            </p>
                            <p>Ferdinand Porsche</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-9">
                        <img className='slide-img' src={slide9} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "When I was asked what my favorite car was, I
                                always answered - the next"
                            </p>
                            <p>Carroll Shelby</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-10">
                        <img className='slide-img' src={slide10} alt="auto" />
                        <div className="slide-text">
                            <p>
                                "Lamborghini is refinement, luxury and
                                perfection."
                            </p>
                            <p>Ferruccio Lamborghini</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider

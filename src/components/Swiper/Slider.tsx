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


import slide10 from 'assets/15.jpg'

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

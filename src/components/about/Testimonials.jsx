import mabel from '../../assets/mabel.webp';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
    return (
        <div className="testimonials container">

            <div className="section-title">
                <h2>Testimonials</h2>
            </div>

            <Swiper className="testimonials-slider"
                data-aos="fade-up" data-aos-delay="100"
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                speed={600}
                loop={true}
                slidesPerView='auto'
                spaceBetween={20}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false
                // }}
                // breakpoints={{
                //     600: {
                //         slidesPerView: 1,

                //     },
                //     768:{
                //         slidesPerView: 2,
                //     },
                //     1024:{
                //         slidesPerView: 3,
                //     }
                // }}
            >             
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Franklin es un extraordinario compañero de equipo.
                                        Fue un miembro invaluable del grupo de trabajo del que hicimos parte en MisionTIC2022-U.
                                        de Antioquia. Competente, colaborador, recursivo y siempre inquieto por buscar soluciones a los desafíos.
                                        Fue un placer trabajar con él y lograr graduarnos con éxito del programa de formación en programación,
                                        con énfasis en desarrollo web"
                                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                                    </p>
                                    <img src={mabel} className="testimonial-img" alt="" />
                                    <h3>Mabel Díaz Beltrán</h3>
                                    <h4>Asesora comercial &amp; lider de proyectos</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
            </Swiper>
        </div >
    )
}

export default Testimonials
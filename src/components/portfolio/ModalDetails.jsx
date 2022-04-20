import { Fragment } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../styles/portfolio.css';

const Modal = ({ title, type, link, img1, img2, img3, info, state, setState }) => {
  return (
    <Fragment>
      {state &&
        <div className="portfolio-details">
          <button
          onClick={() => setState(!state)}
          >
            <i className="bi bi-x-lg" />
          </button>
          <div className="container">
            <div className="row">

              <div className="col-lg-8">
                <h2 className="portfolio-title">{title}</h2>
                <Swiper className='portfolio-details-slider'
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  speed={600}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={20}
                >
                  <div className='swiper-wrapper align-items-center'>
                    <SwiperSlide>
                      <div className='swiper-slide'>
                        <img src={img1} alt='' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='swiper-slide'>
                        <img src={img2} alt='' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='swiper-slide'>
                        <img src={img3} alt='' />
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper >
              </div>

              <div className='col-lg-4 portfolio-info'>
                <h3>Project Details</h3>
                <ul>
                  <li><strong>Category</strong>: {type}</li>
                  <li>
                    <strong>Project URL</strong>:
                    <a href={link} target='_blank' rel="noreferrer">{link}</a>
                  </li>
                </ul>
                <p>
                  {info}
                </p>
              </div>

            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default Modal
import { Fragment, useState } from "react"
import Modal from "./ModalDetails"


const Card = ({ img, name, type, link, info, img2, img3 }) => {
    const [show, setShow] = useState(false);


    return (
        <Fragment>
            <div className='col-lg-4 col-md-6 portfolio-item'>
                <div className='portfolio-wrap'>
                    <img src={img} className='img-fluid' alt='' />
                    <div className='portfolio-info'>
                        <h4>{name}</h4>
                        <p>{type}</p>
                        <div className='portfolio-links'>
                            <button
                                onClick={() => setShow(!show)}
                                className='portfolio-details-lightbox'
                                title='Details'
                            >
                                <i className='bx bx-link' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal state={show} setState={setShow}
                title={name} type={type} link={link}
                info={info} img1={img} img2={img2} img3={img3} />

        </Fragment>
    )
}

export default Card
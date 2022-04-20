import GLightbox from 'glightbox';

const Card = ({ img, name, type }) => {
    const portfolioDetailsLightbox = GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh'
    });
    return (
        <div className='col-lg-4 col-md-6 portfolio-item'>
            <div className='portfolio-wrap'>
                <img src={img} className='img-fluid' alt='' />
                <div className='portfolio-info'>
                    <h4>{name}</h4>
                    <p>{type}</p>
                    <div className='portfolio-links'>
                        <a href={img}
                            className='portfolio-details-lightbox'
                            data-title="My title"
                            data-description="description here"
                            data-desc-position="right"
                            data-type="image"
                            data-effect="fade"
                            data-width="900px"
                            data-height="auto"
                            data-zoomable="true"
                            data-draggable="true"
                            title='Details'
                        >
                            <i className='bx bx-link' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
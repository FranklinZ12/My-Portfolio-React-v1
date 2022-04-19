
const Card = ({ img, name, type }) => {
    return (
        <div className='col-lg-4 col-md-6 portfolio-item'>
            <div className='portfolio-wrap'>
                <img src={img} className='img-fluid' alt='' />
                <div className='portfolio-info'>
                    <h4>{name}</h4>
                    <p>{type}</p>
                    <div className='portfolio-links'>
                        <a href='portfolio-details.html' data-gallery='portfolioDetailsGallery' data-glightbox='type: external'
                            className='portfolio-details-lightbox' title='Details'><i className='bx bx-link'></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
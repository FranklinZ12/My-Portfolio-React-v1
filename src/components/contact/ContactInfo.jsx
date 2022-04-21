import React from 'react'
import ContactDetails from './ContactDetails'

const ContactInfo = () => {
    return (
        <div className='row mt-2'>
            <ContactDetails
                email='Email Me'
                info='devfranklinzapata@gmail.com'
            />
            <div className='col-md-6 mt-4 mt-md-0 d-flex align-items-stretch'>
                <div className='info-box'>
                    <i className="bx bx-share-alt" />
                    <h3>Social Profiles</h3>
                    <div className='social-links'>
                        <a href='https://www.linkedin.com/in/franklin-zapata/' className='linkedin'>
                            <i className="bi bi-linkedin" />
                        </a>
                        <a href='https://github.com/FranklinZ12/' className='github'>
                            <i className="bi bi-github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
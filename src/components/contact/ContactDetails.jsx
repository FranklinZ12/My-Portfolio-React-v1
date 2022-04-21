
const ContactDetails = ({email, info}) => {
    return (
        <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
                <i className="bx bx-map" />
                <h3>{email}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default ContactDetails
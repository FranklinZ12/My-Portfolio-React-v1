import { Formik } from "formik";
import emailjs from '@emailjs/browser';
import { SignupSchema } from "../../utils/validation";

const FormContact = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: ""
            }}

            validationSchema={SignupSchema}

            onSubmit={(values) => {
                return emailjs.send(
                    process.env.REACT_APP_service_ID,
                    process.env.REACT_APP_template_ID ,
                    {
                        from_name: values.name,
                        message: values.message,
                        subject: values.subject,
                        user_email: values.email
                    },
                     process.env.REACT_APP_ID 
                );
            }}
        >
            {
                ({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                    <form
                        className="email-form mt-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name"
                                    className="form-control"
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    required
                                />
                                {
                                    errors.name && touched.name ?
                                        <div className="error-message">{errors.name}</div>
                                        : null
                                }
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={handleChange}
                                    required
                                />
                                {
                                    errors.email && touched.email ?
                                        <div className="error-message">{errors.email}</div>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control"
                                name="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                                required
                            />
                            {
                                errors.subject && touched.subject ?
                                    <div className="error-message">{errors.subject}</div>
                                    : null
                            }
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                onChange={handleChange}
                                required
                            />
                            {
                                errors.message && touched.message ?
                                    <div className="error-message">{errors.message}</div>
                                    : null
                            }
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit"
                                disabled={isSubmitting}
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )
            }
        </Formik>
    )
}

export default FormContact
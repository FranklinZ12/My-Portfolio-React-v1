import { Formik } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    subject: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: Yup.string()
    .test('email', 'Invalid email address', value => { return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) })
    .email('Invalid email')
    .required('Required'),
    message: Yup.string()
    .min(2, 'Too Short!')
});

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
                return console.log(values);
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
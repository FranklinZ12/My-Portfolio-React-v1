import { Formik, Field, Form, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
import { SignupSchema } from "../../utils/validation";
import { notifySuccess, notifyError } from 'utils/notifys';


const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const FormContact = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
                return await emailjs.send(
                    process.env.REACT_APP_service_ID,
                    process.env.REACT_APP_template_ID,
                    {
                        from_name: values.name,
                        message: values.message,
                        subject: values.subject,
                        user_email: values.email
                    },
                    process.env.REACT_APP_ID
                )
                    .then((res) => {
                        if (res) {
                            notifySuccess()
                        }
                    })
                    .catch((err) => {
                        if(err){
                           notifyError()
                        }
                    })
            }}
        >
            {
                ({ isSubmitting }) => (
                    <Form
                        className="email-form mt-4"
                    >
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <Field type="text" name="name"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                                <ErrorMessage
                                    name="name"
                                    component="small"
                                    className="error-message"
                                />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <Field type="email" className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                />
                                <ErrorMessage
                                    name="email"
                                    component="small"
                                    className="error-message"
                                />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <Field type="text" className="form-control"
                                name="subject"
                                placeholder="Subject"
                                required
                            />
                            <ErrorMessage
                                name="subject"
                                component="small"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <Field className="form-control"
                                as="textarea"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                            />
                            <ErrorMessage
                                name="message"
                                component="small"
                                className="error-message"
                            />
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit"
                                disabled={isSubmitting}
                            >
                                Send Message
                            </button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormContact
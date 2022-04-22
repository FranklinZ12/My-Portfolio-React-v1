import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
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
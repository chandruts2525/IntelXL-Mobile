import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    userName: Yup.string()
    .matches(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email')
    .required('Please enter username'),

    password: Yup.string()
    .required('Please enter password')
    .min(8, 'Please enter a valid password')
    .max(16, 'Please enter a valid password')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,16}$/, 'Please enter a valid password')
})

export default loginSchema
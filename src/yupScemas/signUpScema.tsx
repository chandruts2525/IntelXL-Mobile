import axios from 'axios';
import * as Yup from 'yup'
import { baseUrl } from '../constants/Urls';

const signUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Please enter firstname'),

    lastName: Yup.string()
        .required('Please enter lastname'),

    email: Yup.string()
        .matches(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email')
        .required('Please enter email')
        .test('unique-email', 'Email already exists', async (value) => {
            console.log(value);
            try {
                const response = await axios.get(`${baseUrl}User/IsUserExist/${value?.toLowerCase()}`);
                return response.data ? false : true;
            } catch (error) {
                console.log('Error checking email:', error);
                return true;
            }
        }),

    password: Yup.string()
        .min(8, 'Please enter a valid password')
        .max(16, 'Please enter a valid password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,16}$/, 'Please enter a valid password')
        .required('Please enter password'),

    confirmPwd: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
})

export default signUpSchema;
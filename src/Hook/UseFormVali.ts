import * as yup from 'yup'


export const useFormValidation = () => {

    const schema = yup.object().shape({
        'name' : yup.string().required("name is required").min(2, 'not a valid name'),
        "email" : yup.string().email().required("email is required"),
        "password" : yup.string().required("password is required").min(6 , "password too short")
    })

    return {schema}
}
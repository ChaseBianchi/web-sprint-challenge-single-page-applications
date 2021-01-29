import * as yup from 'yup'

export default yup.object().shape({
    size: yup.string().oneOf(['small','medium','large']).required('Size required'),
    sauce: yup.string().oneOf(['sauce1','sauce2','sauce3']).required('Sauce required.'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    olives: yup.boolean(),
    peppers: yup.boolean(),
    anchovies: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string(),
})
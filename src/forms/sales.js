import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button} from "antd";
import "antd/dist/antd.css";
// import inputFieldtest from '/../inputField';


// const validate = values => {
//     const errors = {};
//     if (!values.username) {
//         errors.username = 'Required'
//     } else if (values.username.length > 15) {
//         errors.username = 'Must be 15 characters or less'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }
//     if (!values.age) {
//         errors.age = 'Required'
//     } else if (isNaN(Number(values.age))) {
//         errors.age = 'Must be a number'
//     } else if (Number(values.age) < 18) {
//         errors.age = 'Sorry, you must be at least 18 years old'
//     }
//     return errors
// };
//
// const warn = values => {
//     const warnings = {};
//     if (values.age < 19) {
//         warnings.age = 'Hmm, you seem a bit young...'
//     }
//     return warnings
// };

// handleSubmit=()=>{
//     console.log('1111');
// };

const inputField = ({ input, label, type, placeholder, meta: { touched, error, warning }  }) => (
    <div className='modal_wrap_row row'>
        <label className='col-md-2'>{ label }</label>
        <div className='col-md-10'>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const SalesForm = props => {
    const { handleSubmit } = props;
    // {console.log(props,'SalesProps')}
    return (
        <form onSubmit={handleSubmit}>
            <p>Продажа</p>
            <div className='modal_wrap_row row'>
                <label className='col-md-2'>Магазин</label>
                <div className='col-md-10'>
                    <Field name="shops" component="select">
                        <option value="">Выберите магазин ...</option>
                        <option value="ebay">Ebay</option>
                        <option value="wallmart">Wallmart</option>
                    </Field>
                </div>
            </div>

            <Field name="link" type="text" component={inputField} label="Ссылка" placeholder="Example: http://www.yousite.com"/>
            <Field name="title" type="text" component={inputField} label="Заголовок" placeholder="Example: My best product title"/>
            <Field name="photo" type="text" component={inputField} label="Фото" placeholder="Example: http://www.yousite.com/photo"/>
            <Field name="id" type="text" component={inputField} label="Код" placeholder="Example: ASIN or ID"/>
            <Field name="price" type="text" component={inputField} label="Цена" placeholder="Example: 52.32"/>
            <Field name="comments" type="text" component={inputField} label="Комментарий" placeholder="Example: It's my comment for item"/>
            <Field name="bsr" type="text" component={inputField} label="BSR" placeholder="BSR"/>
            <Field name="brand" type="text" component={inputField} label="Бренд" placeholder="Nike,Apple,Volvo etc."/>

            <div className='modal_wrap_button'>
                <Button onClick={handleSubmit} type="submit" >Получить данные магазина</Button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'sales', // a unique identifier for this form
    // validate,                // <--- validation function given to redux-form
    // warn  // <--- warning function given to redux-form
})(SalesForm);

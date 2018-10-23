import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button} from "antd";
import "antd/dist/antd.css";
import inputField from './Fields/inputField';
import selectField from './Fields/selectField';


const inputFieldRow = ({ input, label, type, placeholder, meta: { touched, error, warning }  }) => (
    <div className='test'>
        <label>{ label }</label>
        <div >
            <input {...input} placeholder={placeholder} type={type} disabled={''}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const SupplierForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <p>Поставщик</p>
                <Field name="shop" component={selectField} label="Магазин"/>
                <Field name="link" type="text" component={inputField} label="Ссылка" placeholder="Example: http://www.yousite.com"/>
                <Field name="title" type="text" component={inputField} label="Заголовок" placeholder="Example: My best product title"/>
                <Field name="photo_link" type="text" component={inputField} label="Фото" placeholder="Example: http://www.yousite.com/photo"/>
                <Field name="comments" type="text" component={inputField} label="Комментарий" placeholder="Example: It's my comment for item"/>
            <div className='row'>
                <Field name="code" type="text" component={inputField} label="Код" placeholder="Example: ASIN or ID"/>
                <Field name="seller" type="text" component={inputField} label="Продавец" placeholder="Example: SallerName"/>
            </div>
            <div className='row'>
                <Field name="quantity" type="text"  className='modal_wrap_row_test' component={inputFieldRow} label="Количество" placeholder="put any number that represents quantity of products"/>
                <Field name="price" type="text" component={inputFieldRow} label="Цена" placeholder="Example: 5"/>
                <Field name="delivery" type="text" component={inputFieldRow} label="Доставка" placeholder="Example: 5"/>
                <Field name="commission" type="text" component={inputFieldRow} label="Комиссия" placeholder="Example: 5"/>
                <Field name="commission_percent" type="text" component={inputFieldRow} label="Комиссия %" placeholder="Example: 5"/>
                <Field name="result" type="text" component={inputFieldRow} label="Итог" placeholder="Example: 5"/>
            </div>
            <div className='row'>
                <Field name="profit_currency" type="text" component={inputField} label="Выгода$" placeholder="Example: 15$"/>
                <Field name="profit_percent" type="text" component={inputField} label="Выгода%" placeholder="Example: 10%"/>
            </div>
            <div className='modal_wrap_button'>
                <Button onClick={handleSubmit} type="submit" >Получить данные поставщика</Button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'supplier', // a unique identifier for this form
})(SupplierForm);

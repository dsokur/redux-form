import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button} from "antd";
import "antd/dist/antd.css";


const inputField = ({ input, label, type, placeholder, meta: { touched, error, warning }  }) => (
    <div className='modal_wrap_row row'>
        <label className='col-md-2'>{ label }</label>
        <div className='col-md-10'>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const inputFieldRow = ({ input, label, type, placeholder, meta: { touched, error, warning }  }) => (
    <div className='modal_wrap_row_test'>
        <label>{ label }</label>
        <div >
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const SupplierForm = props => {
    const { handleSubmit } = props;
    {console.log(props,'SupplierProps')}
    return (
        <form onSubmit={handleSubmit}>
            <p>Поставщик</p>
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
            <Field name="comments" type="text" component={inputField} label="Комментарий" placeholder="Example: It's my comment for item"/>

            <div className='row'>
                <div className='col-md-6'>
                    <Field name="id" type="text" component={inputField} label="Код" placeholder="Example: ASIN or ID"/>
                </div>
                <div className='col-md-6'>
                    <Field name="seller" type="text" component={inputField} label="Продавец" placeholder="Example: SallerName"/>
                </div>
            </div>
            <div className='modal_wrap_multiple row'>
                    <Field name="quantity" type="text" component={inputFieldRow} label="Количество" placeholder="put any number that represents quantity of products"/>
                    <Field name="price" type="text" component={inputFieldRow} label="Цена" placeholder="Example: 5"/>
                    <Field name="delivery" type="text" component={inputFieldRow} label="Доставка" placeholder="Example: 5"/>
                    <Field name="commission" type="text" component={inputFieldRow} label="Комиссия" placeholder="Example: 5"/>
                    <Field name="commission_percent" type="text" component={inputFieldRow} label="Комиссия %" placeholder="Example: 5"/>
                    <Field name="result" type="text" component={inputFieldRow} label="Итог" placeholder="Example: 5"/>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <Field name="profit_currency" type="text" component={inputField} label="Выгода$" placeholder="Example: 15$"/>
                </div>
                <div className='col-md-6'>
                    <Field name="profit_percent" type="text" component={inputField} label="Выгода%" placeholder="Example: 10%"/>
                </div>
            </div>

            <div className='modal_wrap_button'>
                <Button onClick={handleSubmit} type="submit" >Получить данные магазина</Button>
            </div>

        </form>
    );
};

export default reduxForm({
    form: 'supplier', // a unique identifier for this form
})(SupplierForm);

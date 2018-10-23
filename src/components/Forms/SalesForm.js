import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from "antd";
import "antd/dist/antd.css";
import inputField from './Fields/inputField';
import selectField from './Fields/selectField';


const SalesForm = props => {
    const { handleSubmit, loadSalesFormData } = props;
    {console.log(props,'initialValues')}
    return (
        <form>
            <p>Продажа</p>
            <Field name="shop" component={selectField} label="Магазин"/>
            <Field name="link" type="text" component={inputField} label="Ссылка" placeholder="Example: http://www.yousite.com"/>
            <Field name="title" type="text" component={inputField} label="Заголовок" placeholder="Example: My best product title"/>
            <Field name="photo_link" type="text" component={inputField} label="Фото" placeholder="Example: http://www.yousite.com/photo"/>
            <Field name="code" type="text" component={inputField} label="Код" placeholder="Example: ASIN or ID"/>
            <Field name="price" type="text" component={inputField} label="Цена" placeholder="Example: 52.32"/>
            <Field name="comments" type="text" component={inputField} label="Комментарий" placeholder="Example: It's my comment for item"/>
            <Field name="bsr" type="text" component={inputField} label="BSR" placeholder="BSR"/>
            <Field name="brand" type="text" component={inputField} label="Бренд" placeholder="Nike,Apple,Volvo etc."/>

            <div className='modal_wrap_button'>
                <Button onClick={handleSubmit} type="submit" >Получить данные магазина</Button>
                <Button onClick={()=>loadSalesFormData()} type="submit" >Load</Button>
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'sales', // a unique identifier for this form
})(SalesForm);

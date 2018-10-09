export const inputFieldtest = ({ input, label, type, meta: { touched, error, warning }  }) => (
    <div className='modal_sales_row'>
        <label>{ label }</label>
        <div className='modal_sales_field'>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);
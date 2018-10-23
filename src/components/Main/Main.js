import React, { Component } from 'react';
import './../../App.scss';
import Modal from 'react-modal';
import SalesForm from './../../containers/SalesForm';
import SupplierForm from "./../../containers/SupplierForm";
import photo from './../../assets/photo.gif';
import { Button} from "antd";
import "antd/dist/antd.css";


const customStyles = {
    content : {
        // width:'90%',
        // height:'90%',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : '#D3D3D3',


    }
};

Modal.setAppElement('#root');

class Main extends Component {

    render() {
        {console.log(this.props,'mainProps')}
        return (
            <div className='main'>
                <Button onClick={this.props.openModal} className='addButton'> Добавить товар </Button>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <p className='modal_title'>Добавить товар</p>
                    <Button onClick={this.props.openModal} className='modal_close' type="close" shape="circle" icon="close" />
                    <div className='modal_wrap'>
                        <div className='col-md-6'>
                            <SalesForm onSubmit={this.props.receiveSalesFormData}/>
                        </div>
                        <div className='col-md-6'>
	                        <SupplierForm onSubmit={this.props.receiveSupplierFormData}/>
                        </div>

                    </div>
                    <div className='modal_profit'>
                        <table>
                            <tbody>
                            <tr>
                                <th>Фото</th>
                                <th>Статус</th>
                                <th>Профит</th>
                                <th>+30%</th>
                                <th>+50%</th>
                                <th>+70%</th>
                                <th>+100%</th>
                                <th>+150%</th>
                                <th>+200%</th>
                            </tr>
                            <tr>
                                <td rowSpan="2">
                                    <div className='photo'>
                                        <img src={photo} alt=""/>
                                    </div>
                                </td>
                                <td id="profit_status">-</td>
                                <td id="profit_p">-</td>
                                <td id="profit_30">-</td>
                                <td id="profit_50">-</td>
                                <td id="profit_70">-</td>
                                <td id="profit_100">-</td>
                                <td id="profit_150">-</td>
                                <td id="profit_200">-</td>
                            </tr>
                            <tr>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='modal_navigation'>
                        <Button> Сравнить </Button>
                        <Button> Добавить поставщика </Button>
                        <Button onClick={this.props.openModal}> Отмена </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Main;


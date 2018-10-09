import React, { Component } from 'react';
import '../../App.scss';
import { Menu } from "antd";
import "antd/dist/antd.css";

/*for menu*/
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/*for menu*/


class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'mail',
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render() {
        return (
            <div className='menu'>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="main">
                        Главная
                    </Menu.Item>
                    <Menu.Item key="goods">
                        Товары
                    </Menu.Item>
                    <Menu.Item key="top_watch">
                        Тоp-watch
                    </Menu.Item>
                    {/*<Menu.Item key="app" disabled>*/}
                    {/*<Icon type="appstore" />Navigation Two*/}
                    {/*</Menu.Item>*/}
                    <SubMenu title={<span className="submenu-title-wrapper">Настройки</span>}>
                        <Menu.Item key="profile">Профиль</Menu.Item>
                        <Menu.Item key="shop">Магазин</Menu.Item>
                        <Menu.Item key="wallet">Кошелек</Menu.Item>
                        <Menu.Item key="services">Сервисы</Menu.Item>
                        <Menu.Item key="export_product">Export товаров</Menu.Item>
                        <Menu.Item key="import_product">Import товаров</Menu.Item>
                        <Menu.Item key="blacklist">Черный список</Menu.Item>
                        <Menu.Item key="exit">Выход</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Toolbar;


import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        // const menus = ['Quién soy', 'Mi Curriculum', 'Proyectos', 'Contacta'];
        // const { menus } = this.props;
        // console.log(this.props.menus)
    }
    

    render() {
        const { menus } = this.props;
        console.log(menus)
        return (
            <div className='header'>
                <button className='menu-button'>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </button>
                <ul className='menu-list hidden'>
                    {menus.map(menu => <li className='menu-element'>{menu}</li>)}
                </ul>
            </div>
        );
    }
}

export default Header;
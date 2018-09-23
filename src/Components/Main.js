import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)
        const description = ['Olatz', 'Front-end developer', 'Economic analyst']
    }
    render() {
        return (
            <div>
                <h1 className='main-description'>I'm Olatz</h1>
                <p>Página de inicio</p>
            </div>
        );
    }
}

export default Main;
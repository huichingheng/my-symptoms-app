import React, { Component } from 'react';
import WelcomeView from './components/welcome/view';

class DemoController extends Component {
    constructor(el) {
        super(el);
        this.viewMapper = {
            'welcome': WelcomeView,
        }
    }

    render() {
       console.log(this.viewMapper)
        return (
            <div>
                
            </div>
        );
    }
}

export default DemoController;

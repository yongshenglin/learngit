import React, { Component } from 'react';
import Lb from './lb.js';
import Xls from './xls.js';
import Hy from './hy.js';
import Dt from './dt.js';
import Xz from './xz.js';
import Ft from './footer.js';
export default class App extends Component {
    render() {
        return (
            <div>  
                <content>
                    <Lb/>
                    <Xls/>
                    <Hy/>
                    <Dt/>
                    <Xz/>
                </content>
                <Ft/>
            </div>
        )
    }
}
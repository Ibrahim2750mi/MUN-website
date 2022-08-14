import './InfoBar.css';
import logo from './logo.jpg';

// let logo = require('./modules/components/logo.jpg');

function InfoBar(){
    return (
        <div className="MUNInfoBar">
            <img src={logo} className="InfoBar-logo" alt="logo"/>
            <p className="InfoBar-text">Bifrost MUN</p>
        </div>
    )
}

export default InfoBar;

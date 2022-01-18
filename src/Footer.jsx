import './App.css'
import Fbutton1 from './Components/Fbutton1';
export default function Footer(){

    return(
        <div className="footer">
            <p>This is footer and 2+2={2+5} </p>
            <Fbutton1 text="Contact Us" />
            <Fbutton1 text="About Us" />
            <Fbutton1 text="FAQ" />
        </div>
    );


}
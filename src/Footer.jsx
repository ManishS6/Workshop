import './App.css'
import Fbutton1 from './Components/Fbutton1';
export default function Footer(){

    return(
        <div className="footer">
            <form method="post">
                <input type="text" className='input1' placeholder='name' />
                <input type="text" className='input2' placeholder='team' />
                <input type="text" className='input3' placeholder='score' />
                <input type="submit" value="submit" />
            </form>
        </div>
    );


}
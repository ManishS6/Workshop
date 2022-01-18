import './App.css'
import Button1 from './Components/Button1'
export default function Header(){
    return(
        <div className="header">
            <Button1 text="Home" />
            <Button1 text="Blog" />
            <Button1 text="Documentation" />
            <Button1 text="Community" />
            <Button1 text="Pricing" />
            <Button1 text="About" />
        </div>
    )
}

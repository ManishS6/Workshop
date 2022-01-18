import './App.css'
import Button1 from './Components/Button1'
export default function Header(){
    return(
        <div className="header">
            <p>This is header </p>
            <Button1 text="Hom" text2="e" />
            <Button1 text="Documentati" text2="on" />
        </div>
    )
}

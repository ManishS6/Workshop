import '../App.css'

export default function Button1(props){
    return (
        <div className="button1">
            <input type="button" value={props.text+props.text2} />
        </div>
    )
}
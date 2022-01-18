import '../App.css'

export default function Card(props){
    return(
        <div className="tweet">
            <h1>{props.name}</h1>
            <p>{props.message}</p>
            <h3>Score: {props.score}</h3>
        </div>
    );
}
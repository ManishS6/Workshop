import React,{useState} from "react";
import './App.css'
export default function Container(){

    const [name, setName] = useState("default Name");
    const [team, setTeam] = useState("DELHI")
    const [score, setScore] = useState(0)


    const submit = async(e) => {
        e.preventDefaults();
        // setOutput()
        // Store state's data into Database
    }

    return(
        <div className="container">

            <form onSubmit={submit}>
                <input type="text" className='input1' placeholder='name' onChange={(e)=>setName(e.target.value)}/>
                <input type="text" className='input2' placeholder='team' onChange={e => setTeam(e.target.value)} />
                <input type="text" className='input3' placeholder='score' onChange={e=>setScore(e.target.value)} />
                <input type="submit" value="submit" />
            </form>
            {/* <p className="answer">The submitted response was:</p><br />
            <p className="answer name">{name}</p>
            <p className="answer team">{team}</p>
            <p className="answer score">{score}</p> */}
        </div>
    )
}
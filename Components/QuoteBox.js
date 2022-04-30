import { useState } from "react";
import users from '../quotes.json';

const colors = ["red", "lightblue", "yellow", "lightgreen", "lightcoral"]

const QuoteBox = () => {
    
    const randomIndex = Math.floor(Math.random() * 102)
    const [ index, setIndex ] = useState(randomIndex)

    const changeUser = () => {
        const randomIndex = Math.floor(Math.random() * 102);
        setIndex(randomIndex);
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
    // document.body.style = `background: red`

    console.log(users);


    return(
        <div  className="card" style={{color: colors[randomColor]}}>
            <div className="text">
                <blockquote>
                {users[index].quote}
                </blockquote>
            </div>
            <div className="author">
            Author: {users[index].author}
            </div>

            <button onClick={changeUser}>
                Give me another quote!
            </button>
        </div>
    )
}
export default QuoteBox;
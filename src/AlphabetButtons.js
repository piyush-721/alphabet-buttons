import React, {useState} from "react";

export default function AlphabetButtons(){
    const [displayText, setDisplayText] = useState("");

    // generate A-Z array
    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const handleLetterClick = (letter) => {
        setDisplayText((prev) => prev + letter);
    }

    const handleBackspace = () => {
        setDisplayText((prev) => prev.slice(0, -1));
    }

    // handle keyboard input
    const handleKeyDown = (e) => {
        // backspace or delete key 
        if(e.key === "Backspace" || e.key === "Delete"){
            handleBackspace();
            return;
        }

        // A-Z letters only (ignore other keys)
        const key = e.key.toUpperCase();
        if(alphabet.includes(key)){
            setDisplayText((prev) => prev + key);
        }
    }
    return(
        <div 
        style={{ 
            textAlign: 'center',
             padding: '20px',

            }}
                 tabIndex={0}// makes div focusable for keyword
                onKeyDown={handleKeyDown} // keyboard listener
                autofocus // keyboard buttons will work when page refresh 
            >
            <h1>Alphabet Builder</h1>
            <div
            style={{
                background: '#f0f0f0',
                border: '3px solid #333',
                borderRadius: '10px',
                minHeight: '80px',
                maxHeight:"120px",
                margin: '20px 0',
                display: 'flex',
                
                alignItems: 'flex-start',
                overflow:"auto",
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                padding: '20px',
                textAlign:"center",
                wordBreak:"break-word",
              }}
            >
                {displayText || "Click letters to type"} 
            </div>

            {/* backspace button */}
            <div style={{marginBottom:"16px"}}>

            <button
                onClick={handleBackspace}
            >
                Backspace
            </button>
            </div>

            {/* A-Z Buttons */}
            <div style={{
                display:"grid", 
                gridTemplateColumns:"repeat(9, 1fr)",
                gap:"8px",
                maxWidth:"600px",
                margin:"0 auto",
            }}>
                {alphabet.map((letter) => (
                    <button 
                        key={letter}
                        onClick={() => handleLetterClick(letter)}
                        style={{cursor:"pointer"}}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    )
}
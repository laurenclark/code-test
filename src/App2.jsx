import React, { useState, useEffect } from 'react';
import { GridContainer } from './AppStyles';

function App2() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [allRecords, setAllRecords] = useState([]);
    const [data, setData] = useState({
        id: 1,
        text: 'There once was a big bad wolf',
        choices: {
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
        },
    });
    function computeClass(className, index) {
        return String(`${className}-${index + 1}`);
    }

    // function handleChange(e, index) {
    //     setData(data.choices[]);
    // }

    return (
        <>
            <div>
                <button onClick={() => handleGoBack(currentPosition)}>
                    &lt;&lt; Go Back to Start
                </button>
                <button onClick={() => handleGoBack(1)}>
                    &lt; Back One Step
                </button>
            </div>

            <GridContainer>
                <div className="cell-0">{data.text}</div>
                {Object.keys(data.choices).map((choice, index) => {
                    if (data.choices[index]) {
                        return (
                            <div
                                key={choice}
                                className={computeClass('cell', index)}
                            >
                                <a
                                    onClick={() => handleTextClick(index)}
                                    href="#"
                                >
                                    {data.choices[index]}
                                </a>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={choice}
                            className={computeClass('cell', index)}
                        >
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    value={data.choices[choice]}
                                    id={choice}
                                />
                                <button>Submit</button>
                            </form>
                        </div>
                    );
                })}
            </GridContainer>
        </>
    );
}

export default App2;

import React, { useState, useEffect } from 'react';
import { GridContainer } from './AppStyles';

function App2() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [allRecords, setAllRecords] = useState([]);
    const [data, setData] = useState({
        id: 1,
        text: 'There once was a big bad wolf',
        choices: {
            choice1: {
                text: '',
                isSet: false,
            },
            choice2: {
                text: '',
                isSet: false,
            },
            choice3: {
                text: '',
                isSet: false,
            },
            choice4: {
                text: '',
                isSet: false,
            },
        },
    });
    function computeClass(className, index) {
        return String(`${className}-${index + 1}`);
    }

    function handleChange(e) {
        setData((prev) => {
            return {
                id: prev.id,
                text: prev.text,
                choices: {
                    ...prev.choices,
                    [e.target.name]: {
                        text: e.target.value,
                        isSet: prev.choices[e.target.name].isSet,
                    },
                },
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setData((prev) => {
            return {
                id: prev.id,
                text: prev.text,
                choices: {
                    ...prev.choices,
                    [e.target.name]: {
                        text: prev.choices[e.target.name].text,
                        isSet: true,
                    },
                },
            };
        });
    }

    return (
        <>
            {currentPosition > 0 && (
                <div>
                    <button onClick={() => handleGoBack(currentPosition)}>
                        &lt;&lt; Go Back to Start
                    </button>
                    <button onClick={() => handleGoBack(1)}>
                        &lt; Back One Step
                    </button>
                </div>
            )}

            <GridContainer>
                <div className="cell-0">{data.text}</div>
                {Object.keys(data.choices).map((choice, index) => {
                    if (data.choices[choice].isSet) {
                        return (
                            <div
                                key={choice}
                                className={computeClass('cell', index)}
                            >
                                <a
                                    onClick={() => handleTextClick(index)}
                                    href="#"
                                    id={data.choices[index]}
                                >
                                    {data.choices[choice].text}
                                </a>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={choice}
                            id={data.choices[index]}
                            className={computeClass('cell', index)}
                        >
                            <form
                                name={choice}
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    value={data.choices[choice].text}
                                    name={choice}
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

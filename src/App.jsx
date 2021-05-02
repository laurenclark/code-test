import React, { useState } from 'react';
import { GridContainer } from './AppStyles';

function App() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [template, setTemplate] = useState('');
    const [data, setData] = useState([
        {
            id: '1',
            text: 'There once was a big bad wolf',
            fields: ['', '', '', ''],
        },
    ]);

    function handleSubmit(index, field) {
        // Add the field to the correct index in fields array (Set?)
    }

    function handleTextClick(text) {
        // Add the text to the text property in template
        // Move to the next item in array to progress linear path
    }

    function handleGoBack(steps) {
        setCurrentPosition(currentPosition - steps);
    }

    function handleChange(e) {
        setTemplate(e.target.value);
    }

    function computeClass(className, index) {
        return String(`${className}-${index + 1}`);
    }

    return (
        <div>
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
            {data &&
                data.map(
                    ({ id, text, fields }, index) =>
                        index === currentPosition && (
                            <GridContainer key={id}>
                                <div className="cell-0">{text}</div>
                                {fields.map((field, index) => {
                                    if (field) {
                                        return (
                                            <div
                                                className={computeClass(
                                                    'cell',
                                                    index,
                                                )}
                                                key={field + index}
                                            >
                                                <a href="#">{field}</a>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div
                                            className={computeClass(
                                                'cell',
                                                index,
                                            )}
                                            key={field + index}
                                        >
                                            <input
                                                onChange={(e, index) =>
                                                    handleChange(e, index)
                                                }
                                                type="text"
                                            />
                                            <button>Submit</button>
                                        </div>
                                    );
                                })}
                            </GridContainer>
                        ),
                )}
        </div>
    );
}

export default App;

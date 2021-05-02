import React, { useState } from 'react';
import { GridContainer } from './AppStyles';

function App() {
    const fieldsQuantity = 4;
    const [currentPosition, setCurrentPosition] = useState(0);
    const [template, setTemplate] = useState({});
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

    function computeClass(className, index) {
        return String(`${className}-${index + 1}`);
    }

    return (
        <div>
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
                                            <input type="text" />
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

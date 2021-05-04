import React, { useState, useEffect } from 'react';
import { GridContainer } from './AppStyles';

function App() {
    const arrayTemplate = ['', '', '', ''];
    const [currentPosition, setCurrentPosition] = useState(0);
    const [currentData, setCurrentData] = useState({});
    const [newFields, setNewFields] = useState(arrayTemplate);
    const [fields, setFields] = useState(arrayTemplate);
    const [data, setData] = useState([
        {
            id: 0,
            text: 'There once was a big bad wolf',
            fields: arrayTemplate,
        },
    ]);

    useEffect(() => {
        setCurrentData(data[currentPosition]);
        setNewFields(arrayTemplate);
    }, [currentPosition]);

    useEffect(() => {
        setCurrentData((prev) => {
            return {
                id: prev.id,
                text: prev.text,
                fields: newFields,
            };
        });
    }, [newFields]);

    function handleSubmit(e, index) {
        e.preventDefault();
        const value = fields[index];
        setNewFields((prevItems) => [
            ...prevItems.slice(0, index),
            value,
            ...prevItems.slice(index + 1),
        ]);
    }

    function handleTextClick(index) {
        const newObj = {
            id: currentPosition + 1,
            text: fields[index],
            fields: arrayTemplate,
        };
        setData((data[currentPosition].fields = fields));
        setData(data.concat(newObj));
        setCurrentPosition(currentPosition + 1);
        setFields(arrayTemplate);
    }

    function handleGoBack(steps) {
        setCurrentPosition(currentPosition - steps);
    }

    function handleChange(e, index) {
        setFields((prevItems) => [
            ...prevItems.slice(0, index),
            e.target.value,
            ...prevItems.slice(index + 1),
        ]);
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

            <GridContainer>
                <div className="cell-0">{currentData.text}</div>
                {currentData.fields &&
                    currentData.fields.map((field, index) => {
                        if (field !== '') {
                            return (
                                <div className={computeClass('cell', index)}>
                                    <a
                                        onClick={() => handleTextClick(index)}
                                        href="#"
                                    >
                                        {field}
                                    </a>
                                </div>
                            );
                        }
                        return (
                            <div className={computeClass('cell', index)}>
                                <form onSubmit={(e) => handleSubmit(e, index)}>
                                    <input
                                        onChange={(e) => handleChange(e, index)}
                                        type="text"
                                        value={fields[index]}
                                    />
                                    <button>Submit</button>
                                </form>
                            </div>
                        );
                    })}
            </GridContainer>
        </div>
    );
}

export default App;

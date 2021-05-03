import React, { useState, useEffect } from 'react';
import { GridContainer } from './AppStyles';

function App() {
    const [currentPosition, setCurrentPosition] = useState(1);
    const [currentData, setCurrentData] = useState({});
    const [newFields, setNewFields] = useState(['', '', '', '']);
    const [fields, setFields] = useState(['', '', '', '']);
    const [data, setData] = useState([
        {
            id: '1',
            text: 'There once was a big bad wolf',
            fields: ['', '', '', ''],
        },
    ]);

    useEffect(() => {
        setCurrentData(data[0]);
    }, []);

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

    function handleTextClick(text) {
        // Add the text to the text property in template
        // Move to the next item in array to progress linear path
        // setData((prev) => (prev.fields[index] = e.target.value));
        //   handleAddFeature = () => {
        //       const car = this.state.car;
        //       car.features.push('Your feature');
        //       this.setState({ car });
        //   };
        // setCurrentData((prev, index) => {
        //     return (prev.fields[index] = e.target.value);
        // });
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
            {currentPosition > 1 && (
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
                        if (field) {
                            return (
                                <div className={computeClass('cell', index)}>
                                    <a href="#">{field}</a>
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

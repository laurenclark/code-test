import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const fieldsQuantity = 4;
    const [data, setData] = useState[{}];

    useEffect(() => {
        setData([
            ...data,
            {
                id: 1,
                text: 'Wolfie',
                fields: ['Something', 'sdf', 'sdfsdf', 'sdfds'],
            },
        ]);
        return () => {};
    }, []);

    return (
        <div>
            {data.length > 1 &&
                data.map((item) => {
                    <pre>{item.id}</pre>;
                })}
        </div>
    );
}

export default App;

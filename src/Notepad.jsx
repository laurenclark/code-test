import React from 'react';
import { TextContainer } from './AppStyles';

function Notepad({ allRecords, currentData }) {
    return (
        <div>
            <TextContainer>
                <img src="./assets/notepad.svg" />
                <div>
                    <h2 contentEditable>My Story</h2>
                    {allRecords.map(({ text }) => {
                        return <p>{text}</p>;
                    })}
                    <p>{currentData.text}</p>
                </div>
            </TextContainer>
        </div>
    );
}

export default Notepad;

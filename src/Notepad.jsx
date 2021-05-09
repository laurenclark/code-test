import React from 'react';
import { TextContainer } from './AppStyles';

function Notepad({ allRecords }) {
    return (
        <div>
            <TextContainer>
                <img src="./assets/notepad.svg" />
                <div>
                    {allRecords.map(({ text }) => {
                        return <p>{text}</p>;
                    })}
                </div>
            </TextContainer>
        </div>
    );
}

export default Notepad;

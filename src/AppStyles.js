import styled from 'styled-components';

const GridContainer = styled.div`
    @media (min-width: 769px) {
        display: grid;
        grid-template-rows: 2fr 1fr 2fr;
        grid-row-gap: 5rem;
        max-width: 800px;
        margin: auto;
        place-content: center;
        place-items: center;
        div {
            width: 300px;
            display: grid;
            place-content: center;
            place-items: center;
        }
        .cell-0 {
            grid-column: 2;
            grid-row: 2;
            order: 3;
        }
        .cell-1 {
            grid-column: 2;
            grid-row: 1;
            order: 1;
        }
        .cell-2 {
            grid-column: 1;
            grid-row: 2;
            order: 2;
        }
        .cell-3 {
            grid-column: 2;
            grid-row: 3;
            order: 4;
        }
        .cell-4 {
            grid-column: 3;
            grid-row: 2;
            order: 2;
        }
    }
`;

const TextContainer = styled.div`
    position: relative;
    img {
        max-width: 900px;
        display: block;
        margin: 2rem auto;
    }
    div {
        position: absolute;
        text-align: center;
        top: 130px;
        left: 0;
        right: 0;
        margin: 0 auto;
        p {
            line-height: 1;
            font-size: 2rem;
        }
    }
`;

export { GridContainer, TextContainer };

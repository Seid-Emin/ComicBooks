import styled from 'styled-components'

export const StyledSearchField = styled.div`
    margin: 28px 0;
    width: 100%;
    height: 60px;
    border: 3px solid var(--categoryAndIconBG);
    box-sizing: border-box;
    border-radius: 8px;

    form  {
        position: relative;
        height: 100%;
    }
    
    input {
        height: 23px;
        left: calc(100% - (100% - 60px));
        position: absolute;
        padding: 0;
        border: 0;
        background-color: var(--primaryBG) !important;
        color: var(--yearColor) !important;
        width: calc(100% - 60px);
        height: 100%;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        font-family: 'Roboto', sans-serif;
    }
    
    img {
        position: absolute;
        left: 1.01%;
        top: 23.33%;
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`
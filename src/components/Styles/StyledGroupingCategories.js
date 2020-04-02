import styled from 'styled-components'
import { device } from '../Styles/device'

export const StyledGroupingCategories = styled.ul`
    display: block;
    height: 38px;
    margin-bottom: 28px;

    li {
        display: inline-block;
        list-style: none;
        width: fit-content;
        padding: calc(21px/2 - 1.5px);
        border-radius: 19px;
        margin-right: 3px;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
    
    a{
        color: var(--categoryAndIconBG);
        text-decoration: none;
        
    
    }
    
    li:hover,
    .activeGroupingCategories li {
        color: var(--hoverTextColor);
        background: var(--hoverColorAndLogo);
        box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
    }
    
    p{
        font-size: 18px;
        line-height: 21px;
    }

    @media ${device.mobileL} {
        p{
            font-size: 14px;
            line-height: 18px;
        }
    }
`
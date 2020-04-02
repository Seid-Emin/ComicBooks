import styled from 'styled-components'
import { device } from '../Styles/device'

export const StyledGroupBook = styled.div`
    width: 100%;
    cursor: pointer;
    max-width: 200px;

    .GroupBookImg{
        width: 100%;
    }

    .GroupBook_inner-title{
        font-size: 22px;
        line-height: 26px;
        color: var(--bookAndUserNameColor);
        margin: 16px 0 9px 0;
    }
    
    .GroupBook_inner-ownedBy{
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: var(--ownedByColor) ;
    }
    
    .ownerName{
        color: var(--bookAndUserNameColor);
    }

    @media ${device.laptopL} { 
    
            grid-template-columns: repeat(4, 1fr);    
        
    }
    
    @media ${device.mobileL} { 
        max-width: 150px;

        .GroupBook_inner-title{
            font-size: 18px;
            line-height: 22px;
        }
        
        .GroupBook_inner-ownedBy{
            font-size: 12px;
        }
    }


`
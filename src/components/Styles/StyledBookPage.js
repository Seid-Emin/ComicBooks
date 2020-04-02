import styled from 'styled-components'
import { device } from '../Styles/device'

export const StyledBookPage = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--primaryBG);
    z-index: 10;
    margin: 0 28px;

   .backToCollection{
        color: var(--categoryAndIconBG);
        margin: 32px 0 36px 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 26px;
        cursor: pointer;
    }
    
    .backIcon{
        width: 7px;
        height: 12px;
        margin-right: 6.6px;
        margin-top:5px;
    }
    
    .backText{
        text-decoration: underline;
    }
    
    .BookInfo{
        display: grid;
        grid-template-columns: auto auto;
    }
    
    .BookInfo_img{
        height: fit-content;
        border-radius: 4px;
        width: 100%;
        min-width: 340px;
        height: auto;
    }
    
    .BookInfo_info{
        margin-left: 24px;
    }
    
    .BookNameAndRating{
        display: flex;
    }
    
    .Rating{
        display: flex;
        align-self: center;
        margin-left: 39px;
    }
    
    .FullStars,
    .EmptyStars {
        margin-right: 10px;
        width: 25px;
        height: 24px;
    }
    
    .BookName{
        font-weight: 500;
        font-size: 32px;
        line-height: 37px;
        color: var(--yearColor);
    }
    
    .BookSummary-text,
    .BookCreds_title,
    .BookCreds_title-text{
        font-size: 16px;
        line-height: 19px;
    }
    
    .BookCreds_title{
        font-weight: 500;
        color: var(--ownedByColor);
        margin: 14px 0 11px 0;
    }
    .BookCreds_title:last-child{
        margin-bottom: 44px;
    }
    
    .BookCreds_title-text{
        margin-left: 9px;
        font-weight: bold;
        color: var(--bookAndUserNameColor);
    }
    
    .BookSummary-text{
        font-weight: bold;
        color: var(--bookAndUserNameColor);
    }
    
    .BookPage-divideLine{
        width: 100%;
        height: 2px;
        background-color:var(--navColor);
        margin: 72.5px 0 32.5px 0;
    }
    
    .CategoryGroup-title{
        font-size: 32px;
        line-height: 37px;
        color: var(--yearColor);
    }

    @media ${device.laptop} { 
        .BookInfo_img{
            min-width: 300px;
        }
    }

    @media ${device.mobileL} {
        .BookInfo_img{
            min-width: 200px;
        } 
        .BookInfo{
            grid-template-columns: auto;
        }

        .BookInfo_img{
            width: 100%;
            min-width: 340px;
        }

        .BookInfo_info{
            margin-left: 0;
        }
        
        .FullStars,
        .EmptyStars {
            width: 15px;
            height: 15px;
        }
        
        .BookName{
            font-size: 28px;
            line-height: 32px;
        }
        
        .BookSummary-text,
        .BookCreds_title,
        .BookCreds_title-text{
            font-size: 12px;
            line-height: 14px;
        }
       
        .BookNameAndRating{
            flex-direction:column;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .Rating{
            margin-top: 20px;
        }
    }
`
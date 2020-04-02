import styled from 'styled-components'
import { device } from '../Styles/device'

export const StyledCategoryGroup = styled.section`
.CategoryGroupGridWrapper{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 96px;
    position: relative;

}

.CategoryGroup-title{
    margin-top: 0;
    margin-bottom: 32px;
    color: var(--yearColor);
    font-size: 32px;
    line-height: 37px;
}

.NoResults{
    font-size: 32px;
    color: var(--yearColor);
}

.CategoryGroup-divideLine{
    width: 100%;
    height: 2px;
    background-color:var(--navColor);
    margin-top: 69px;
    margin-bottom: 67px;
}

@media ${device.desktop} { 
    .CategoryGroupGridWrapper{
        grid-template-columns: repeat(4, 1fr);    
    }
}

@media ${device.laptopL} { 
    .CategoryGroupGridWrapper{
        grid-template-columns: repeat(3, 1fr);    
    }
}

// @media ${device.laptop} { 
//     .CategoryGroupGridWrapper{
//         grid-template-columns: repeat(2, 1fr);    
//     }
// }

@media ${device.tablet} { 
    .CategoryGroupGridWrapper{
        grid-template-columns: repeat(2, 1fr);    
    }
}
`
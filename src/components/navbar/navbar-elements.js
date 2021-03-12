import styled from 'styled-components'

export const ImgAvatar = styled.img`
    width: 45px;
    border: 3px solid #f69d52;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    &:hover {
        border: 0px solid #f69d52;
        transition: 0.1s all ease-in-out;
    }
    
     @media screen and (max-width: 768px) {
        width: 40px;
        margin: 0 0 14px 0;
    }
`
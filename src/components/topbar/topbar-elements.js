import  styled from 'styled-components'

export const TopbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({expand}) => (expand ? '100%' : '0')};
    top: ${({expand}) => (expand ? '0' : '-100%')};
`;
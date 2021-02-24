import styled from 'styled-components'

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    filter: blur(3px);
    opacity: 60%;
    box-shadow: inset 1000 1000 1000px black;
`
import styled from 'styled-components'
export const WaveSurfMain=styled.div`
#waveform{
    display: block;
    position: relative;
    user-select: none;
    height: 40px;
    width: 36%;
    cursor: auto;
    overflow: hidden;
    margin: 0 auto;
    &>wave{
        height: 50px !important;
    }
}
`
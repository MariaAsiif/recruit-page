import styled from "styled-components";

export const QuoteContainer = styled.div`




position: fixed;
bottom: 0;
left: 0;
width: 10%;
// z-index: 1000;

/* 
.background-audio{
opacity: 0;
} */


.controles-button-quote{
    color: white;
    font-size: 5rem;
    align-items: baseline !important;
}

.controles-button{
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1000;

    &-voice{
        background-color: #E84025;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
        margin-bottom: 2rem;
        cursor: pointer;

        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }
    &-quote{
        background-color: #368240;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2rem;
        margin-bottom: 2rem;
        cursor: pointer;

        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }
}

`
import styled from 'styled-components'

export const StylePopup=styled.div`

button{
    border:1pt solid;
}

`

export const StyleClose = styled.button`
border:1pt solid;
padding:10px 20px;
background-color: transparent;
font-size:12px;
background-color:blue;
color:white;
&:hover{
    background-color:red;
    color:white;
}

`

export const StyleSuccess = styled.button`
border:1pt solid;
padding:10px 20px;
background-color: transparent;
font-size:12px;
background-color:red;
color:white;
&:hover{
    background-color:green;
    color:white;
}
`
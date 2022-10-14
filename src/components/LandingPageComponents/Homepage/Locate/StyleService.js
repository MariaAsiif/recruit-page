import styled from 'styled-components'


export const ModelStyled = styled.div`

padding-bottom:50px;

`

export const InputFields = styled.div`

label{
    font-size:16px;
    
}

input{
    font-size:18px;
    margin-bottom:10px;

   
}

.border_new{
    border-color:red;   
   }
   .border_remain{
    border-color:lightgray;   

   }

select{
    font-size:18px;
    margin-bottom:10px;

}

.error_show{
    color:red;
    font-size:15px;
    padding:0px;
}



.btn_submit{
    width:30%;
    height:40px;
    border:1pt solid white;
    background-color:red;
    color:white;
    font-size:16px;

    &:hover{
        background-color:green;
        color:white;
    }
   
}

`
import styled from "styled-components";

export const ViewTableContainer = styled.div`

margin-top:3rem;
margin-left:1rem;

h2{
    font-weight:600;
    margin-bottom:20px;
}



 table{
    caption-side: bottom !important; 
    border-collapse: collapse !important;
    font-size:15px !important;
    thead tr {
     th {
        border-color: inherit;
        border-style: none !important;
        border-width: 0;
        font-size:16px;
        font-weight:400;
        color:gray;
     }
      
        .price{
                padding-left:20rem;
            }
            .chang{
                 padding-left:20rem;
            }
            .charge{
                 padding-left:20rem;
            }
        @media (max-width: 912px) {
            .price{
                padding-left:0px;
            }
            .chang{
                 padding-left:0px;
            }
            .charge{
                 padding-left:0px;
            }
        
    
            }

        }

        
        
    

   
 }
tbody tr {
    .price{
        padding-left:20rem;
    }
    .chang{
         padding-left:20rem;
    }
    .charge{
         padding-left:20rem;
    }
@media (max-width: 912px) {
    .price{
        padding-left:0px;
    }
    .chang{
         padding-left:0px;
    }
    .charge{
         padding-left:0px;
    }


    }

}
 }

 tbody, td, tfoot, th, thead, tr {
    border-color: inherit;
    border-style: none !important;
    border-width: 0;
    margin-bottom:17px;
    font-size:18px;
 
}

 tr {
    border-color: inherit; 
    border-style: none !important;
    border-width: 0;
}

.table_row{
    display:flex;
    align-items:center;
    h2{
        font-size:18px;
        font-weight:400;
        margin-top:3px;
        margin-left:20px;
    }
}

`


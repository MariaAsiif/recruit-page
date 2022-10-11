import styled from "styled-components";

export const LocateMainContainer = styled.div`
margin-top:4rem;
width:100%;
height:100%;

.image_wrapper{
  img{
    width:100%;
    height:300px
  }
}


.work_exp{
  margin-top:20px

}
.text-wrapper{
  display:flex;



  span{
    width:30%;
    height:34px;
    text-align:center;
    padding-top:2px;
    font-size:16px;
    padding:5px 10px;
    background-color:lightblue;
    color:blue;
    margin-left:20px;
    
  }
}

.address{
  p{
    font-size:16px;
    line-hight:0.8px;
    display:flex;
    font-weight:500;
    span{
      color:blue;
      padding-left:10px;
    }
    p{
      padding-left:10px;
      font-weight:400;
    }
  }
  
}


.right_wrapper{
  padding-left:30px;
}

.name_wraper{
  display:flex;
  justify-content:space-between;
  align-items:center;

  h2{
    font-size:24px;
    display:flex;

    p{
      padding-left:20px;
      font-size:14px;
      padding-top:10px
    }
  }

  p{
    font-size:14px;
    color:gray;
    padding-top:5px
  }

  
}

.project{
  font-size:18px;
  line-height:1px;
  color:blue;
  font-wight:500;
}

.ranking{
  margin-top:40px;
  h2{
    text-transform:uppercase;
    color:gray;
    font-size:14px;
  }
}

.report{
  margin-top:20px;
  display:flex;
  button{
    margin-right:20px;
    padding:10px 10px;
    font-size:16px;
  }
}

.timeline{
  margin-top:40px;
 .para{
  display:flex;
  p{
    font-size:18px;
    font-wight:500;
    // padding-right:30px;
    margin-right:20px;
  }
  .active_tab{
    border-bottom:1pt solid blue;

  }
 }
}

.contact{
  p{
    font-size:14px;
    text-transform:uppercase;
    color:gray;
  }
}

.review_button{
display:flex;
justify-content:end;
  button{
    width:10%;
    height:40px;
    border-radius:20px;
    background:red;
    border:1pt solid white;
    font-size:14px;
    color:white;
    cursor:pointer;


    &:hover{
      background:green;
      color:white;
    }
  }

}

`

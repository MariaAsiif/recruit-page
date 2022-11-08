import styled from "styled-components";

export const AgenciesHeaderContainer = styled.div`


.logo{
	@media only screen and (max-width: 600px){
		width: 90px;
		height:40px;
		margin-top:10px !important;
		object-fit:contain;

	}
}

.search_bar{
@media screen and (min-width: 768px) and (max-width:992px){
		width: 630px !important;
}
}



#main{
	@media screen and (min-width: 768px) and (max-width:992px){
		display:flex;
		align-items:center;
		justify-centent:center;
	}
	
	
	.right_side{
		@media screen and (min-width: 768px) and (max-width:992px){
	margin-top:-1px;
		}

}

	@media screen and (max-width:600px){
			flex-direction:column;
	}

}


.top-bar .inner-content{
	min-height: 8rem;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: space-between;

	
}


}


.search-box{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35rem;

    img{
        width: 20px;
		
    }
	
}

.search-box input[type="search"]{
	height: 3rem;
	background: #FFFFFF;
	border: 1px solid #C4C4C4;
	border-right: none;
	box-sizing: border-box;
	border-radius: 10px 0 0 10px;
	width: 100%;
	padding: 1rem 1.7rem;

	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	

	color: black;
}



.search-box input[type="search"]::placeholder{
	color: #C4C4C4;
}

.search-box button{
	height: 3rem;
	width: 2rem;
	background: #F0F0F0;
	border-radius: 0px 10px 10px 0px;
	border: 1px solid #C4C4C4;

}

.micro{
	font-size:25px;
	margin-right:20px;
	color:gray;
}

.top-bar .inner-content .right-part{
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
}


@media only screen and (max-width: 991px){
	.search-box{
		width: auto;
		padding: 0 2rem;
	}
}

@media only screen and (max-width: 600px){
	.search-box{
		display: none;
	}

	.top-bar .inner-content .right-part{
		gap: 2rem;
	}
}

`
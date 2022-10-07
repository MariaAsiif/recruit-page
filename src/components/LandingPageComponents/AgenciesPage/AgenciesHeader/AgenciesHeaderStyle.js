import styled from "styled-components";

export const AgenciesHeaderContainer = styled.div`

.top-bar .inner-content{
	min-height: 8rem;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: space-between;


}


.search-box{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40rem;

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
	border-radius: 100px 0 0 100px;
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
	width: 6.5rem;
	background: #F0F0F0;
	border-radius: 0px 100px 100px 0px;
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
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {  Container } from "@mui/system";
import styled from "styled-components";

export const  StyledContainer=styled(Container)`
margin:auto;
`;

export const  MenuButton=styled(Button)`
color: black;
border-radius: 0;
&:after {
	content: '';
	display: block;
	margin: auto;
	height: 3px;
	width: 0px;
	background: transparent;
    margin-top: 5px;
	transition: width .5s ease, background-color .5s ease;
};
&:hover:after{
	width: 100%;
	background: #f5df4e;
};
&.active:after{
    width: 100%;
	background: #f5df4e;
}
`;

export const SocialIcon=styled(IconButton)<{color}>`
    &:hover{
        color:${props=>props.color};
    }
`;

import React from "react";
import styled from "styled-components";

const Homepage = () => {
    return (
    <Wrapper>
        <Title>Home Page</Title>
    </Wrapper>
    )
}; 

export default Homepage; 

const Wrapper = styled.div`
display: flex;
`;

const Title = styled.div`
font-family: arial;
font-size: 25px;
color: #355E3B;
`;
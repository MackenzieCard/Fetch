import React from "react";
import styled from "styled-components";

const PlayDatePage = () => {
    return (
        <Wrapper>
            <Title>Request a Play Date!</Title>
        </Wrapper>
        )
}; 

export default PlayDatePage; 

const Wrapper = styled.div`
display: flex;
`;

const Title = styled.div`
font-family: arial;
font-size: 25px;
color: #355E3B;
`;
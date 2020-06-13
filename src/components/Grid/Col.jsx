import styled from "styled-components";

const Col = styled.div`
    flex: ${props => props && props.size};
`;

export default Col;

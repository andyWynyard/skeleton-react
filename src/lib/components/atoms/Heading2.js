import styled from "styled-components";

export default styled.h2`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.fontSize * 1.7};
`;

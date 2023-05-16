import styled from "styled-components";

export const LeftWrapper = styled.div`
flex: 1;
/* color: var(--primary-color); */
color: ${props => props.theme.color.primaryColor};
display: flex;
align-items: center;
.logo{
  margin-left: 25px;
  cursor: pointer;
}
`
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  /* background-color: #fff; */
  background-color: ${props =>
    props.isAlpha ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,1)'};
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
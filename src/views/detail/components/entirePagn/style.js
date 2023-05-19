import styled from "styled-components";

export const PagnWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
.info{
  display: flex;
  flex-direction: column;
  align-items: center;
  .MuiPaginationItem-icon {
    font-size: 24px;
  }
  .MuiPaginationItem-page{
    &:hover {
      text-decoration: underline;
    }
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
  }
  .desc{
    margin-top: 16px;
    color: #222;
  }
}
`
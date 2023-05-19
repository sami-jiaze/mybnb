import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0; // 不压缩
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 9px;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /* 不被压缩 */
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.textColor.primaryColor};

    .count {
      margin: 0 2px -2px 10px;
    }
    .extra {
      margin-top: 2px;
    }
    .MuiRating-decimal {
      margin-right: -2px;
    }
    .rate {
      li {
        margin-inline-end: 0px !important;
      }
    }
  }
`

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

  .swiper {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: -20px;
      right: -20px;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparant 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
        &.right {
          background: linear-gradient(
            to right,
            transparant 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      width: 30%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          &.active{
            width: 8px;
            height: 8px;
          }
        }
      }
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

import styled from 'styled-components'

export const PictureWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;

  .top {
    position: relative;
    height: 85px;
    .close-btn {
      position: absolute;
      top: 45px;
      right: 30px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }
  }

  .content {
    position: relative;
    margin-top: 5vh;
    width: 100%;
    height: 68vh;
    /* background-color: pink; */
    overflow: hidden;
    .btn {
      position: absolute;
      display: flex;
      width: 100px;
      height: 100%;
      justify-content: center;
      align-items: center;
      /* background-color: lightblue; */
      cursor: pointer;
      color: #fff;
      &.right {
        right: 10vw;
      }
      &.left {
        left: 10vw;
      }
    }
    .c-picture {
      width: 40%;
      height: 80%;
      /* background-color: powderblue; */
      margin: 50px auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .preview{
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;
    }
    .desc {
      display: flex;
      justify-content: space-between;
      .toggle{
        cursor: pointer;
      }
    }
    .list {
      margin-top: 3px;
      overflow: hidden;
      transition:  height 300ms ease;
      .item{
        margin-right: 15px;
        cursor: pointer;
        img {
          height: 67px;
          opacity: 0.5;
        }
        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }


  // 动画
  .pic-enter {
    transform: translateX(${props => (props.isNext ? '100%' : '-100%')});
    opacity: 0;
  }
  .pic-enter-active {
    transform: translate(0);
    opacity: 1;
    transition: all 200ms ease;
  }
  .pic-exit {
    opacity: 1;
  }
  .pic-exit-active {
    opacity: 0;
    transition: all 400ms ease;
  }
`

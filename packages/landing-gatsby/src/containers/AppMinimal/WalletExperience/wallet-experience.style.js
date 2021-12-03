import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  background-image: linear-gradient(to top, #6225ff -5%, #521fd5 24%, #1d0760 95%);
  padding: 150px 0;
  overflow: hidden;
  @media (max-width: 1600px) {
    padding: 100px 0;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
`;

export const ThumbWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 70%;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @keyframes bubbleLeftRight {
    0% {
      transform: translateX(0px);
    }
    25% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(15px);
    }
    75% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes bubbleTopBottom {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(15px);
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .bubble-image-1 {
    position: absolute;
    top: 55px;
    right: -125px;
    animation: bubbleTopBottom 10s linear infinite;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .bubble-image-2 {
    position: absolute;
    top: 150px;
    right: -199px;
    animation: bubbleTopBottom 7s linear infinite;
    @media (max-width: 1600px) {
      right: -120px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  .bubble-image-3 {
    position: absolute;
    bottom: 85px;
    left: -115px;
    animation: bubbleLeftRight 10s linear infinite;
    @media (max-width: 1600px) {
      left: -80px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const TextWrapper = styled.div`
  width: 510px;
  @media only screen and (max-width: 1219px) {
    width: 640px;
  }
  @media only screen and (max-width: 991px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
  }
  .section-header-two {
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
    h1 {
      width: 459px;
      height: 56px;
      margin: 37.6px 0 23px;
      font-family: Exo;
      font-size: 42px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.02;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
    p {
      padding-right: 50px;
      width: 449px;
      height: 296px;
      margin: 23px 10px 0 0;
      font-family: Exo;
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.56;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
  }
  .feature__block {
    margin-top: 50px;
    align-items: center;
    padding-right: 70px;
    @media (max-width: 575px) {
      padding-right: 0;
    }
    .icon__wrapper {
      flex-shrink: 0;
      width: 85px;
      img {
        width: 100%;
      }
    }
    .content__wrapper {
      padding-left: 20px;
      h3 {
        color: ${themeGet('colors.headingColor', '#09131F')};
        font-size: 18px;
        line-height: 1.45;
        font-weight: 700;
        margin-bottom: 12px;
        @media (max-width: 1600px) {
          font-size: 16px;
        }
      }
      p {
        color: ${themeGet('colors.textColor', '#343D48')};
        font-size: 15px;
        line-height: 2;
        @media (max-width: 1600px) {
          font-size: 14px;
        }
      }
    }
    &:last-of-type {
      .content__wrapper {
        h3::after {
          content: 'Coming Soon';
          text-transform: uppercase;
          background-color: #108aff;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          padding: 4px 7px;
          margin-left: 10px;
          @media (max-width: 1199px) {
            display: block;
            width: 95px;
            margin-left: 0;
            margin-top: 5px;
          }
        }
      }
    }
  }
`;

export default SectionWrapper;

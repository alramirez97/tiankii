import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
background-color: #eeedf2;
  padding: 75px 0 120px;
  overflow: hidden;
  .soluciones {
    width: 270px;
    height: 56px;
    margin: 0 0 0 0;
    font-family: Exo;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.02;
    letter-spacing: normal;
    text-align: left;
    color: #1d0760;
  }
  .multiples {
    width: 300.8px;
    height: 42.3px;
    font-family: Exo;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.02;
    letter-spacing: normal;
    margin: 0 0 0 0;
    background: linear-gradient(89deg, #6225ff 0%, #ff763c 100%);
    -webkit-background-clip: text;
    color: transparent; 
  }
  h1, h2 {display: inline;}
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto -30px;
  @media only screen and (max-width: 1366px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    margin: 0;
  }

  > div {
    width: calc(100% / 3 - 27px);
    margin: 15px 0 30px;
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 15px);
    }
    @media only screen and (max-width: 667px) {
      width: calc(100% - 27px);
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .feature__block {
    text-align: center;
    .icon__wrapper {
      max-width: 115px;
      margin: 0 auto 25px;
      position: relative;
      @media only screen and (max-width: 1366px) {
        margin-bottom: 25px;
      }
      img {
        display: inline-block;
        @media only screen and (max-width: 1366px) {
          height: 90px;
        }
        @media only screen and (max-width: 767px) {
          height: 80px;
        }
      }
    }
    .content__wrapper {
      max-width: 375px;
      margin: 0 auto;
      h3 {
        color: ${themeGet('colors.headingColor', '#09131F')};
        font-size: 18px;
        line-height: 1.45;
        font-weight: 700;
        margin-bottom: 10px;
        @media (max-width: 1600px) {
          font-size: 16px;
        }
      }
      p {
        color: ${themeGet('colors.textColor', '#343D48')};
        font-size: 15px;
        line-height: 2;
        padding: 0 15px;
      }
    }
  }
`;

export default SectionWrapper;

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
h2 {

font-family: Exo;
font-size: 60px;
font-weight: 700;
font-stretch: normal;
font-style: normal;
line-height: 1.02;
letter-spacing: normal;
text-align: left;
color: #fff;
}
p {
  color: #FFF;
  font-size: 22px;
  line-height: 1.92;
  text-align: justify;
  @media (max-width: 1600px) {
    font-size: 19px;
  }
}
  padding: 75px 0 180px;
  background-color: #6225ff;
  @media (max-width: 1600px) {
    padding-top: 0;
    padding-bottom: 100px;
  }
  > div.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media only screen and (max-width: 624px) {
      flex-direction: column;
    }
  }
  .section-header-two {
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  
`;

export const ThumbWrapper = styled.div`
  img {
    width: 495px;
    height: 495px;
    margin: 2px 30px 2px 30px;
    object-fit: contain;
  }
  width: calc(100% - 510px);
  @media (max-width: 1600px) {
    width: calc(100% - 476px);
    img {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 480px) {
    img {
      max-width: 100%;
    }
  }

`;

export const TextWrapper = styled.div`

  width: 440px;
  @media (max-width: 1600px) {
    width: 406px;
    margin-left: 70px;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
  .feature__block {
    margin-top: 40px;
    align-items: flex-start;
    .icon__wrapper span {
      color: ${rgba('#09131F', 0.2)};
      font-size: 64px;
      line-height: 1em;
      font-family: 'Work Sans', sans-serif;
      width: 100px;
      flex-shrink: 0;
      padding-top: 10px;
      display: block;
      @media only screen and (max-width: 1600px) {
        font-size: 55px;
        width: 80px;
      }
    }
    h3 {
      color: ${themeGet('colors.headingColor', '#FFF')};
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
      line-height: 1.92;
      @media (max-width: 1600px) {
        font-size: 14px;
      }
    }
  }
`;

export default SectionWrapper;

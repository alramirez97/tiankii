import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
  background-color: #1d0760;
  
  padding: 50px 0 180px;
  @media (max-width: 1600px) {
    padding-bottom: 50px;
    padding-top: 50px;
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
    .title {
      width: 516px;
      height: 56px;
      margin: -100px 36px -50px 0;
      font-family: Exo;
      font-size: 42px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.02;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      margin-top: -10px;
      margin-bottom: -10px;
      margin-left: -100px;
      @media (max-width: 1600px) {
        font-size: 42px;
      }
      @media (max-width: 1024px) {
        font-size: 42px;
      }
      @media (max-width: 736px) {
        font-size: 28px;
        text-align: left;
        margin-left: -85px;
      }
    }
  }
`;

export const ThumbWrapper = styled.div`
  width: calc(100% - 510px);
  @media (max-width: 1024px) {
    width: calc(100% - 476px);
    margin-left: 10%;
    width: 100%;
    img {
      max-width: 100%;
      
    }
  }
  @media (max-width: 736px) {
    width: 100%;
    margin-right: 10%;
    img {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 10%
    }
  }
  @media (max-width: 480px) {
    img {
      max-width: 100%;
      
    }
  }

  .logoM {
    margin-top: -110px;
    width: 600px;
    height: 671px;
    margin-bottom: 30px;
    margin-left: -50px;
    margin-right: -10px;
    
  }
`;

export const TextWrapper = styled.div`
  width: 440px;
  margin-left: 20px;
  margin-right: -50px;
  @media (max-width: 1600px) {
    width: 406px;
    margin-left: 70px;
    margin-right: -50px;
  }
  @media (max-width: 1024px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 25%;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 25px;
  }
  @media (max-width: 480px) {
    width: 100%;
    
  }
  .feature__block {
    margin-top: 40px;
    margin-right: 80px;
    margin-left: -100px;
    @media (max-width: 414px) {
      max-width: 100%
    }
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
      width: 390px;
      height: 28px;
      margin: -5px 162px 16.3px 0;
      font-family: Exo;
      font-size: 21px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: left;
      color: #9b8eff;
     
      @media (max-width: 1024px) {
        font-size: 22px;
        text-align: left;
      }
      @media (max-width: 736px) {
        font-size: 16px;
      }
    }
    descripcion {
      width: 552px;
      height: 71px;
      margin: 16.3px 0 46px;
      font-family: Exo;
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.56;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      
      @media (max-width: 1024px) {
        font-size: 20px;
      }
      @media (max-width: 736px) {
        font-size: 12px;
        text-align: left;
        margin-left: 0;
        margin-right: 100px;
      }
      @media (max-width: 414px) {
        font-size: 12px;
        text-align: left;
        margin-left: 0;
        margin-right: 100px;
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
  .logoG {
    margin-left: -100px;
  }
`;

export default SectionWrapper;

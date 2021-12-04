import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const CounterArea = styled.section`
background-color: #eeedf2;
  text-align: justify;
  padding-top: 20px;
  .imagenMaq {
    width: 732px;
    height: 732px;
    margin: -87px 48px 0px 105px
    object-fit: contain;
    @media (max-width: 789px) {
      margin: -125px 20px -130px 5px;
    max-width: 100%;
  }
  @media (max-width: 480px) {
    margin: -125px 20px -130px 5px;
  max-width: 100%;
}
}
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
  .imageP1 {
    width: 296.1px;
    height: 45.5px;
    margin: 0 169.3px 19.2px 1px;
    object-fit: contain;
  }
  .imageP2 {
    width: 296.1px;
    height: 45.5px;
    margin: 0 169.3px 19.2px 1px;
    object-fit: contain;
  }
  .imageP3 {
    width: 296.1px;
    height: 45.5px;
    margin: 0 169.3px 19.2px 1px;
    object-fit: contain;
  }
  .somos{
    width: 335px;
    height: 50px;
    margin-bottom: 5px;
    font-family: Exo;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #1d0760;
      }
  
      .servicios{
        width: 370.8px;
        margin-top: 5px;
        font-family: Exo;
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.02;;
        text-align: left;
        background: linear-gradient(89deg, #6225ff 0%, #ff763c 100%);
        -webkit-background-clip: text;
        color: transparent; 
      }
      .Conozca{
        width: 486px;
        height: 71px;
        margin: 29.7px 57px 30px 0px;
        font-family: Exo;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: #1d0760;
      }
    }
   
    .CounterBox {
      background-color: #fff;
      }
      .Privacidad-y-seguridad{
        width: 465.9px;
        height: 222px;
        margin: 19.2px 0 0 0.5px;
        font-family: Exo;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: #1d0760;
      }
      .etiquetas {
        font-family: Exo;
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: #1d0760;
        opacity:0.7;
      }
      
      .Privacidad-y-seguridad{
        font-family: Exo;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: #1d0760;
      }

      .text1 {
        width: 370px;
      padding: 27.7px 21px 13px 23.5px;
      border-radius: 20px;
      font-family: Exo;
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.56;
      letter-spacing: normal;
      text-align: left;
      color: #230764;
    
      background-color: #FFF;
        @media (max-width: 1600px) {
          margin-left: 30px;
          border-radius: 20px;
        }
        @media only screen and (max-width: 991px) {
          width: 80%;
          margin-top: 20px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px;
        }
        @media only screen and (max-width: 467px) {
          width: 100%;
          margin-top: 20px;
          border-radius: 20px;
        }
        h2 {
          color: ${themeGet('colors.headingColor', '#09131F')};
          font-size: 40px;
          line-height: 1.35;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-weight: 500;
          @media (max-width: 1600px) {
            font-size: 32px;
          }
          @media (max-width: 575px) {
            font-size: 22px;
          }
        }
        h2 {
          color: ${themeGet('colors.headingColor', '#09131F')};
          font-size: 40px;
          line-height: 1.35;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-weight: 500;
          @media (max-width: 1600px) {
            font-size: 32px;
          }
          @media (max-width: 575px) {
            font-size: 22px;
          }
        }
        p {
          font-size: 16px;
          font-weight: normal;
          line-height: 2;
          margin-bottom: 35px;
          color: ${themeGet('colors.textColor', '#343D48')};
          @media only screen and (max-width: 1600px) {
            margin-bottom: 30px;
          }
        }
      }

  
  .counterLink {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #1089ff;
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
      font-family: Exo;
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

export const Row = styled.div`
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  @media (max-width: 789px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 25px;
  }
  @media (max-width: 489px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 25px;
  }
`;
export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 25px;
  }
`;

export default CounterArea;

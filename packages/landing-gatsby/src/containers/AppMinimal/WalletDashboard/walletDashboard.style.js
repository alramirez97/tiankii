import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
.llaves {
  width: 499px;
  height: 99px;
  margin: 0 53px 22px 0;
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

.bannerMoc {
  width: 686px;
  height: 686px;
  margin: 0px 0px 0px 105px;
  object-fit: contain;
}

.parrafo {
  width: 552px;
  height: 296px;
  margin: 22px 0 31px;
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

.button {
  width: 174px;
  height: 53px;
  margin: 31px 120px 0 0;
  padding: 17px 32px 16px 25px;
  border-radius: 10px;
  background-color: #ff763c;
  font-family: Exo;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}

h2 {

  font-family: Exo;
  font-size: 80px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.02;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  }
  p {
    font-family: Exo;
    color: #FFF;
    font-size: 22px;
    line-height: 1.92;
    text-align: justify;
    @media (max-width: 1600px) {
      font-size: 19px;
    }
  }
  width: 1366px;
  height: 675px;
  margin: 1476.2px 0 0;
  padding: 92px 734px 82px 80px;
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
      color: #FFF;
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
      color: #FFF;
      font-size: 18px;
      line-height: 1.45;
      font-weight: 700;
      margin-bottom: 12px;
      @media (max-width: 1600px) {
        font-size: 16px;
      }
    }
    p {
      color: #FFF;
      font-size: 15px;
      line-height: 1.92;
      @media (max-width: 1600px) {
        font-size: 14px;
      }
    }
  }
`;

export default SectionWrapper;

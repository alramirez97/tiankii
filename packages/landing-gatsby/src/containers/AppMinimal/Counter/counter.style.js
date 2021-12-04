import styled from 'styled-components';

const CounterArea = styled.section`
background-color: #eeedf2;
  text-align: center;
  padding-top: 100px;

  .Container {
  max-width: 1000px;

  .somos{
  width: 335px;
  height: 50px;
  font-family: Exo;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1d0760;
    }
    img.untitled {
     
      object-fit: contain;
    }

    .servicios{
      width: 370.8px;
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
      margin: 29.7px 57px 30px 23px;
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
    
    .Privacidad-y-seguridad.text-style-1 {
      color: #a7a7a7;
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
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
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

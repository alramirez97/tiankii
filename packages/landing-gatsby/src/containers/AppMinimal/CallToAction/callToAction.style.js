import styled from 'styled-components';

const CallToActionArea = styled.section`
.button {
  width: 325px;
  height: 47px;
  margin: 22px 123.5px 60px 81px;
  padding: 14px 81px;
  border-radius: 10px;
  background-color: #ff763c;
  font-family: Exo;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}
.acerca {
  margin: 45px 229.7px 22.7px 191.7px;
}
.texto {
  width: 329px;
  height: 211px;
  font-family: Exo;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}
.acercade {
  width: 178px;
  height: 27px;
  font-family: Exo;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.15;
  letter-spacing: normal;
  text-align: left;
  color: #9b8eff;
}
.link {
  width: 274px;
  height: 31px;
  margin: 1.7px 149px 29.1px 166px;
  font-family: Exo;
  font-size: 25px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.87;
  letter-spacing: normal;
  color: #ff763c;
  display: block;
      margin-left: auto;
      margin-right: auto;
}
  
  background-color: #000;
  .facebook {
    width: 49.9px;
    height: 49.9px;
    margin: 0px 0px 0 165px;
    object-fit: contain;
}


  

  }
  .instagram {
    width: 49.9px;
    height: 49.9px;
    margin: 0 0 0 85px;
    object-fit: contain;
  }
  .centerface {
    
    width: 49.9px;
    height: 49.9px;
    margin: 0 0 0 22.1px;
    object-fit: contain;
  }
  
  

  a, p {
    display: inline;
  }
  .power {
    width: 300.1px;
  height: 29px;
  margin: 22.7px 123.5px 23.1px 86px;
  object-fit: contain;
  }
  .logofooter {
    display:block;
margin:auto
    width: 108px;
    height: 93.5px;
    margin: 45px 229.7px 22.7px 191.7px;
    object-fit: contain;
  }
  .Container {
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;
    @media (max-width: 991px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }
  h3 {
    letter-spacing: -0.02em;
    font-size: 36px;
    line-height: 1.81;
    margin-bottom: 0;
    margin-bottom: 10px;
    @media (max-width: 1600px) {
      font-size: 30px;
    }
    @media (max-width: 991px) {
      margin-bottom: 0;
    }
    @media (max-width: 575px) {
      font-size: 26px;
      line-height: 1.6;
    }
  }
  p {
    font-size: 19px;
    color: #FFF;
    opacity: 0.7;
    line-height: 1.84;
    letter-spacing: 0.1px;
    @media (max-width: 575px) {
      font-size: 16px;
    }
  }
`;
export const Left = styled.div`

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  p {
    position: relative;
    top: 2px;
    font-size: 15px;
    color: #09131f;
    line-height: 1;
    margin-left: 15px;
    @media (max-width: 1600px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      margin-top: 10px;
    }
    a {
      color: #108aff;
      margin-left: 10px;
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  a {
    color: #0f2137;
    transition: all 500ms ease;
    @media (max-width: 1600px) {
      font-size: 14px;
    }
    &:hover {
      color: #108aff;
    }
    + a {
      margin-left: 35px;
    }
  }
`;
export const CopyText = styled.p`
  margin: 0;
`;
export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  a {
    margin-left: 15px;
  }
`;
export const SocialText = styled.span`
  font-size: 15px;
  color: #0f2137;
  line-height: 1;
  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;

export default CallToActionArea;

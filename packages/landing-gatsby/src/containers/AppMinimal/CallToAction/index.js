import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import CallToActionArea, { Left, Menu,
  CopyText,
  Social,
  SocialText } from './callToAction.style';
import logo from '../../../common/assets/image/app-minimal/footer/logo.png'
import powerby from '../../../common/assets/image/app-minimal/footer/power.png'
import face from '../../../common/assets/image/app-minimal/footer/face.png'
import insta from '../../../common/assets/image/app-minimal/footer/insta.png'

const CallToAction = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        CallToActionData {
          title
          text
          link {
            path
            label
          }
        }
      }
    }
  `);
  const { title, text, link } = Data.appMinimalJson.CallToActionData;
  const { path, label } = link;
  return (
    <CallToActionArea>
      <Container className="Container">
      <Left>
      <img className="logofooter" src={logo}/>
      <img className="power" src={powerby}/>
      <br/>
          <p className="centerface"><img className="facebook" src={face}/></p>
          <a className="instagram"><img className="instagram" src={insta}/></a>
          <br/>
          <button  className="button">
                  HABLAR POR WHATSAPP
          </button>
      </Left>
        <Menu>
        <h3 className="acercade">Acerca de Norttech</h3>
        <p className="texto" >En Norttech Labs construimos productos y servicios que ayudan a las personas a estar listas para la infraestructura financiera del futuro.
        NORTTECH LABS LTDA con su producto TIANKII PAY es un proveedor de servicios BITCOIN registrado en el Banco Central de Reserva de El Salvador BCR.
        </p>
        <a link="https://www.norttech.com/" className="link">www.norttech.com</a>
        </Menu>
        <Social>
        <h3 className="acercade">Acerca de Norttech</h3>
        <p className="texto" >En Norttech Labs construimos productos y servicios que ayudan a las personas a estar listas para la infraestructura financiera del futuro.
        NORTTECH LABS LTDA con su producto TIANKII PAY es un proveedor de servicios BITCOIN registrado en el Banco Central de Reserva de El Salvador BCR.
        </p>
        <a link="https://www.norttech.com/" className="link">www.norttech.com</a>
          
        </Social>
        {/* <Left>
        <div>
          <img className="logofooter" src={logo}/>
          <img className="power" src={powerby}/>
          <br/>
          <p className="centerface"><img className="facebook" src={face}/></p>
          <a className="centerinsta"><img className="instagram" src={insta}/></a>
          <br/>
          <button  className="button">
                  HABLAR POR WHATSAPP
          </button>
        </div>
        </Left>
        <Right>
        <div>
        <h3 className="acercade">Acerca de Norttech</h3>
        <p className="texto" >En Norttech Labs construimos productos y servicios que ayudan a las personas a estar listas para la infraestructura financiera del futuro.
        NORTTECH LABS LTDA con su producto TIANKII PAY es un proveedor de servicios BITCOIN registrado en el Banco Central de Reserva de El Salvador BCR.
        </p>
        <a link="https://www.norttech.com/" className="link">www.norttech.com</a>
        
        
        </div>
        </Right> */}
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;

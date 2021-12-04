import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import CounterArea, { Row, Col, ThumbWrapper, TextWrapper } from './counter.style';
import maquina from '../../../common/assets/image/app-minimal/maquinita.png'
import tianki from '../../../common/assets/image/app-minimal/tiankipay.png'
import tp from '../../../common/assets/image/app-minimal/tiankp.png'
import consult from '../../../common/assets/image/app-minimal/tiankiiconsult.png'

const Counter = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        CounterData {
          blockTitle {
            title
            tagline
          }
          countBox {
            number
            text
            button {
              link
              label
            }
          }
        }
      }
    }
  `);
  const { blockTitle, countBox } = Data.appMinimalJson.CounterData;
  const { title, tagline } = blockTitle;
  return (
    <CounterArea>
      <Container>
      <TextWrapper>
          
          <h1 className="somos">Somos líderes en</h1>
        <h1 className="servicios">servicios de bitcoin</h1>
        <span class="Conozca">Conozca nuestros paquetes y servicios y seleccione el paquete que más se ajuste a las necesidades de tu empresa.</span>
        

        </TextWrapper>
        {/* <Box className="topTitle">
        </Box> */}
        <ThumbWrapper>
          <img className="imagenMaq" src={maquina} />
        </ThumbWrapper>
        <Row>
          
            
              
              <div className="text1">
              <img className="imageP1" src={tianki} />
                <span class="Privacidad-y-seguridad">Privacidad y seguridad es lo primero: Cree wallets non-custodial directamente en el blockchain de bitcoin  sin intermediario- en su propio Nodo Bitcoin para almacenar sus bitcoins en hardware wallet, cold o hot wallets.
                <p class="etiquetas">Pasarela de pagos en Tiankii.<br/>
                                          Nodo Lightning y Bitcoin en Tiankii.<br/>
                                          Sus Wallets non-custodial fuera de Tiankii.</p>
                </span>
                </div> 
                <div className="text1">
                <img className="imageP2" src={tp} />
                <span class="Privacidad-y-seguridad">Privacidad y seguridad es lo primero: Cree wallets non-custodial directamente en el blockchain de bitcoin  sin intermediario- en su propio Nodo Bitcoin para almacenar sus bitcoins en hardware wallet, cold o hot wallets.
                <p class="etiquetas">Pasarela de pagos en Tiankii. <br/>
                                          Nodo Lightning y Bitcoin en Tiankii.<br/>
                                          Sus Wallets non-custodial fuera de Tiankii.</p>
                </span>
                </div>
                <div className="text1">
                <img className="imageP2" src={consult} />
                <span class="Privacidad-y-seguridad">Privacidad y seguridad es lo primero: Cree wallets non-custodial directamente en el blockchain de bitcoin  sin intermediario- en su propio Nodo Bitcoin para almacenar sus bitcoins en hardware wallet, cold o hot wallets.
                </span>
                </div>
              
            
         

        
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;

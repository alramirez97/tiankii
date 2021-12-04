import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import CounterArea, { Row, Col } from './counter.style';
import untitled from '../../../common/assets/image/app-minimal/untitled.jpg';

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
       
      <Container className="Container">
      
        <Box className="topTitle">
        <div>
          <img className="untitled" src={untitled}/>
        </div>
        <h1 className="somos">Somos líderes en</h1>
        <h1 className="servicios">servicios de bitcoin</h1>
        <span class="Conozca">Conozca nuestros paquetes y servicios y seleccione el paquete que más se ajuste a las necesidades de tu empresa.</span>
        </Box>
        
        <Row>
          {countBox.map(({ number, text, button }, index) => (
            <Col key={`counter-key-${index}`}>
              <Box className="CounterBox">

                <Heading as="h3" content={`${number}%`} />
                <span class="Privacidad-y-seguridad">Privacidad y seguridad es lo primero: Cree wallets non-custodial directamente en el blockchain de bitcoin  sin intermediario- en su propio Nodo Bitcoin para almacenar sus bitcoins en hardware wallet, cold o hot wallets.
                <span class="text-style-1">Pasarela de pagos en Tiankii.
                                          Nodo Lightning y Bitcoin en Tiankii.
                                          Sus Wallets non-custodial fuera de Tiankii.</span>
                </span>
                
                
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;

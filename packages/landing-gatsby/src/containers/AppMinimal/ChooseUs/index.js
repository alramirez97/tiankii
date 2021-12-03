import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './choose-us.style';
import Mano from '../../../common/assets/image/app-minimal/mano.webp';

const ChooseUs = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        chooseUs {
          title
          description
          features {
            id
            title
            description
          }
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 724
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  const { title, description, thumbnail, features } =
    Data.appMinimalJson.chooseUs;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
          <img src={Mano} />
        </ThumbWrapper>
        
        <TextWrapper>
          <SectionHeader className="section-header-two">
          <h2>Acepta BTC en tu negocio </h2>
          <p>Tiankii Pay es una pasarela de pagos que ayuda a las empresas a aceptar Pagos Bitcoin en cualquier lugar y de manera segura. TiankiiPay esta enfocado en proveer herramientas para que las empresas acepten pagos Bitcoin en todos sus canales de ventas. </p>
            
          </SectionHeader>

        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;

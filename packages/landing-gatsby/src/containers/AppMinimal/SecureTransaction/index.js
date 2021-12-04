import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { Icon } from "react-icons-kit";
import { androidArrowForward } from "react-icons-kit/ionicons/androidArrowForward";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import GatsbyImage from "common/components/GatsbyImage";
import SectionWrapper, { ContentWrapper } from "./secure-transaction.style";
import tiankii from "../../../common/assets/image/app-minimal/tiankii.png";
import icono from "../../../common/assets/image/app-minimal/icono.png";

const SecureTransaction = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        secureTransaction {
          title
          description
          image {
            thumb {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            bubble {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { image, title, description } = Data.appMinimalJson.secureTransaction;

  return (
    <SectionWrapper>
      <Container>
        <div>
          <img className="imageTiankii" src={tiankii} />
        </div>
        <h3 className="pasarela">Pasarela de pagos Bitcoin</h3>
        <span className="vender">
          Vender por Redes Sociales con Bitcoin nunca había sido tan fácil!,
          Cree Facturas, Enlaces o botones de pago y envíe a sus clientes estos
          enlaces por Messenger, email, Whatsapp, etc
        </span>

        <ContentWrapper>
          <div className="image">
            <GatsbyImage
              src={
                (image.thumb !== null) | undefined
                  ? image.thumb.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Transaction"
            />
          </div>
          <div className="content">
            <div className="text1">
              <Heading content={title} />
              <Text content={description} />
            </div>
            <div className="text1">
              <Heading content={title} />
              <Text content={description} />
            </div>
            <div className="text1">
              <Heading content={title} />
              <Text content={description} />
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default SecureTransaction;

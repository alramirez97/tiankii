import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';

import logo from '../../../common/assets/image/app-minimal/img-Titulo.png'
import logoM from '../../../common/assets/image/app-minimal/hands-punch.png'

import SectionWrapper, {
  ThumbWrapper,
  TextWrapper,
} from './wallet-experience.style';
import { Button } from 'react-aria-menubutton';

const WalletExperience = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        walletExperience {
          title
          description
          features {
            id
            icon {
              publicURL
            }
            title
            description
          }
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
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);
  const { image, title, description, features } =
    Data.appMinimalJson.walletExperience;

  return (
    <SectionWrapper>
      <Container>
        <TextWrapper>
          <SectionHeader className="section-header-two">
            <img src={logo} />
            <Heading as="h1" content={title} />
            <Text content={description} />
            <button className='Button'>SOLICITAR DEMO</button>
          </SectionHeader>
          {/* {features.map((item) => (
            <FeatureBlock
              key={`wallet--key${item.id}`}
              iconPosition="left"
              icon={<Image src={item.icon.publicURL} alt={item.title} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))} */}
        </TextWrapper>
        <ThumbWrapper>
        <img className='logoM' src={logoM} />
          {/* <GatsbyImage
            src={
              (image.thumb !== null) | undefined
                ? image.thumb.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Wallet Thumbnail"
          /> */}
          {/* {image.bubble.map(({ image }, index) => (
            <Image
              src={image.publicURL}
              key={`image-bubble-key-${index}`}
              className={`bubble-image-${index + 1}`}
              alt="Wallet Thumbnail"
            />
          ))} */}
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletExperience;

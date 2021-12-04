import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './track.style';
import logoS from '../../../common/assets/image/app-minimal/seguro-nubee.png'
import logoG from '../../../common/assets/image/app-minimal/Grupo.png'

const Track = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        TrackData {
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
    Data.appMinimalJson.TrackData;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
        <img className='logoM' src={logoS} />
          {/* <GatsbyImage
            src={
              (thumbnail !== null) | undefined
                ? thumbnail.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Choose Thumbnail"
          /> */}
        </ThumbWrapper>

        <TextWrapper>
          <SectionHeader className="section-header-two">
            <Heading className='title' content={title} />
            <Text content={description} />
          </SectionHeader>
          
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              // icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text as="descripcion" content={item.description} />}
            />
          ))}
          <img className='logoG' src={logoG} />
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Track;

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import Mano from '../../../common/assets/image/app-minimal/boveda.png';
import { SectionHeader } from '../app-minimal.style';
import GatsbyImage from 'common/components/GatsbyImage';

import SectionWrapper, { ThumbWrapper, TextWrapper } from './walletDashboard.style';

const WalletDashboard = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        WalletDashboardData {
          title
          text
          button {
            link
            label
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 945
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          tagline
        }
      }
    }
  `);
  const { title, text, button, image, tagline } =
    Data.appMinimalJson.WalletDashboardData;
  return (
    <SectionWrapper id="dashboard_section">
      <Container>
      
        
        <TextWrapper>
          <SectionHeader className="section-header-two">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <button className="button">
              {button.label}
            </button>
          </SectionHeader>

        </TextWrapper>
        <ThumbWrapper>
        <GatsbyImage
        src={
          (image !== null) | undefined
            ? image.childImageSharp.gatsbyImageData
            : {}
        }
        className="bannerMoc"
        alt="banner image"
      />
        </ThumbWrapper>
        
      </Container>
    </SectionWrapper>
  );
};

WalletDashboard.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

WalletDashboard.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '400',
    color: '#0F2137',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '28px'],
    fontWeight: '500',
    color: '#0F2137',
    letterSpacing: '-0.5px',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    maxWidth: '100%',
    mb: '15px',
  },
};

export default WalletDashboard;

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'common/components/Image';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterArea, {
  Left,
  Menu,
  CopyText,
  Social,
  SocialText,
} from './footer.style';

const Footer = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        FooterData {
          menu {
            link
            label
          }
          logo {
            publicURL
          }
          social {
            link
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { menu, logo, social } = Data.appMinimalJson.FooterData;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          
          
        </Left>
        <Menu>
        <CopyText>
            Copyright © {year}
            <Link to="/"> Norttech Labs Ltda - All rights reserved</Link>
          </CopyText>
        </Menu>
        <Social>
          
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appclassic';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppClassic/Navbar';
import Banner from 'containers/AppClassic/Banner';
import Customer from 'containers/AppClassic/Customer';
import KeyFeatures from 'containers/AppClassic/KeyFeatures';
import AppSlider from 'containers/AppClassic/AppSlider';
import Features from 'containers/AppClassic/Features';
import DesignedAndBuilt from 'containers/AppClassic/DesignedAndBuilt';
import FeatureTab from 'containers/AppClassic/FeatureTab';
import PricingPolicy from 'containers/AppClassic/PricingPolicy';
import Testimonial from 'containers/AppClassic/Testimonial';
import Faq from 'containers/AppClassic/Faq';
import JoinTrail from 'containers/AppClassic/JoinTrail';
import Footer from 'containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'containers/AppClassic/appClassic.style';

import Seo from 'components/seo';

const AppClassic = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo title="App Classic" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Customer />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default AppClassic;

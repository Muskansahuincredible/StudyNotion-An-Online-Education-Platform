import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Container>
      <ContentWrapper>
        <TitleWrapper className="text-center">
          <PolicyWrapper className="privacy">
            <Section className="text-left">
            <h1 style={{ fontSize: '2.5rem' }}>Privacy Policy</h1>
            <Paragraph>Last updated: June 8, 2024</Paragraph>
              <Paragraph>
                Welcome to Study Notion. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at support@studynotion.com.
              </Paragraph>
            </Section>
            <Section className="text-left">
              <Heading2>Information We Collect</Heading2>
              <Paragraph>
                We collect personal information that you provide to us, such as name, email address, contact information, and payment information. We collect personal information when you register for our services, create or consume educational content, rate content, participate in activities on the platform, or otherwise contact us.
              </Paragraph>
            </Section>
            <Section className="text-left">
              <Heading2>How We Use Your Information</Heading2>
              <Paragraph>
                We use personal information collected via our platform for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </Paragraph>
            </Section>
            <Section className="text-left">
              <Heading2>Sharing Your Information</Heading2>
              <Paragraph>We may process or share data based on the following legal basis:</Paragraph>
              <List>
                <ListItem>
                  <strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.
                </ListItem>
                <ListItem>
                  <strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                </ListItem>
                <ListItem>
                  <strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                </ListItem>
                <ListItem>
                  <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                </ListItem>
              </List>
            </Section>
            <Section className="text-left">
              <Heading2>Security of Your Information</Heading2>
              <Paragraph>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </Paragraph>
            </Section>
            <Section className="text-left">
              <Heading2>Contact Us</Heading2>
              <Paragraph>
                If you have questions or comments about this policy, you may email us at: <a href="mailto:support@studynotion.com">support@studynotion.com</a>.
              </Paragraph>
            </Section>
          </PolicyWrapper>
        </TitleWrapper>
      </ContentWrapper>
    </Container>
    <Footer />
    </>
  );
};

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  max-width: 90vw;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  margin: 2.5rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const PolicyWrapper = styled.div`
  padding: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  color: white;
  line-height: 1.6;
`;

const Section = styled.section`
  margin: 1.25rem 0;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.25rem;
`;

const Paragraph = styled.p`
  margin: 0.625rem 0;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.25rem;
`;

const ListItem = styled.li`
  margin: 0.625rem 0;
`;

export default PrivacyPolicy;

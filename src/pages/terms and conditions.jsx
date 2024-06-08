import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';

const TermsAndConditions = () => {
    return (
        <>
      <Container>
        <ContentWrapper>
          <TitleWrapper className="text-center">
            <PolicyWrapper className="terms">
              <Section className="text-left">
                <h1 style={{ fontSize: '2.5rem' }}>Terms and Conditions</h1>
                <Paragraph>Last updated: June 8, 2024</Paragraph>
                <Paragraph>
                  Welcome to Study Notion. These terms and conditions outline the rules and regulations for the use of Study Notion's Website, located at www.studynotion.com.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Interpretation and Definitions</Heading2>
                <Paragraph>
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Intellectual Property</Heading2>
                <Paragraph>
                  Unless otherwise stated, Study Notion and/or its licensors own the intellectual property rights for all material on Study Notion. All intellectual property rights are reserved.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Use of Our Platform</Heading2>
                <Paragraph>
                  By using Study Notion, you agree to abide by the following terms and conditions.
                </Paragraph>
                <SubSection>
                  <SubHeading3>Account Creation</SubHeading3>
                  <Paragraph>
                    To access certain features of the platform, you may be required to create an account. You agree to provide accurate and complete information when creating an account.
                  </Paragraph>
                </SubSection>
                <SubSection>
                  <SubHeading3>Prohibited Activities</SubHeading3>
                  <Paragraph>
                    You agree not to engage in any activity that may interfere with or disrupt the operation of the platform or the servers and networks connected to it.
                  </Paragraph>
                </SubSection>
              </Section>
              <Section className="text-left">
                <Heading2>Content</Heading2>
                <Paragraph>
                  You retain ownership of any intellectual property rights that you hold in the content you submit to the platform. By submitting, posting, or displaying content on or through the platform, you grant Study Notion a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Indemnification</Heading2>
                <Paragraph>
                  You agree to indemnify and hold Study Notion and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages, or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your content, your use of the platform, or any willful misconduct on your part.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Modifications to the Service</Heading2>
                <Paragraph>
                  Study Notion reserves the right to modify or discontinue, temporarily or permanently, the platform or any part of it with or without notice. You agree that Study Notion shall not be liable to you or any third party for any modification, suspension, or discontinuance of the platform.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Termination</Heading2>
                <Paragraph>
                  Study Notion may terminate or suspend access to the platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Governing Law</Heading2>
                <Paragraph>
                  These terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights. If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect. These terms constitute the entire agreement between us regarding our service, and supersede and replace any prior agreements we might have had between us regarding the service.
                </Paragraph>
              </Section>
              <Section className="text-left">
                <Heading2>Contact Us</Heading2>
                <Paragraph>
                  If you have any questions about these terms,
                  <br />please contact us at: Email: support@studynotion.com
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
  
  const SubSection = styled.div`
    margin-top: 1rem;
  `;
  
  const SubHeading3 = styled.h3`
    font-size: 1.25rem;
    margin-top: 1rem;
  `;
  
  const Paragraph = styled.p`
    margin: 0.625rem 0;
  `;
  
  export default TermsAndConditions;
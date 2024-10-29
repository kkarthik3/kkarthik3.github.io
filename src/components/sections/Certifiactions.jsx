import React from "react";
import styled from "styled-components";
import aiCert from "../../images/Certificates/AI.jpg";
import cloudCert from "../../images/Certificates/Cloud Practitioner.jpg";
import dbmsCert from "../../images/Certificates/Data Base Management System.jpeg";
import cert1 from "../../images/Certificates/1.png";
import cert2 from "../../images/Certificates/2.png";
import cert3 from "../../images/Certificates/3.png";
import cert4 from "../../images/Certificates/4.png";
import cert5 from "../../images/Certificates/5.png";
import cert6 from "../../images/Certificates/6.png";
import cert7 from "../../images/Certificates/7.png";
import cert8 from "../../images/Certificates/8.png";


const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin: 0 0 10px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: #bbbbbb;
  margin: 0 auto 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`;

const Certificate = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(250, 250, 250, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
  flex: 1 0 300px; /* Allows responsiveness */
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease;
  
  ${Certificate}:hover & {
    transform: scale(1.05);
  }
`;

const Certifications = () => {
  const certificates = [
    { src: aiCert, alt: "AI Certificate" },
    { src: cloudCert, alt: "Cloud Practitioner Certificate" },
    { src: dbmsCert, alt: "Database Management System Certificate" },
    { src: cert1, alt: "Certificate 1" },
    { src: cert2, alt: "Certificate 2" },
    { src: cert3, alt: "Certificate 3" },
    { src: cert4, alt: "Certificate 4" },
    { src: cert5, alt: "Certificate 5" },
    { src: cert6, alt: "Certificate 6" },
    { src: cert7, alt: "Certificate 7" },
    { src: cert8, alt: "Certificate 8" },
    
  ];

  return (
    <Container id="Certifications">
      <Wrapper>
      <Title>Certifications</Title>
      <Subtitle>Here are my certifications.</Subtitle>
      <CertificatesContainer>
        {certificates.map((certificate, index) => (
          <Certificate key={index}>
            <Img src={certificate.src} alt={certificate.alt} />
          </Certificate>
        ))}
      </CertificatesContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;

import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { SiGmail } from "react-icons/si";
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin-top: 2px;
  font-style: italic;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.primary};
  display: inline;
  margin-right: 0.5rem;
`;

// const Nav = styled.nav`
//   width: 100%;
//   max-width: 800px;
//   margin-top: 0.5rem;
//   display: flex;
//   flex-direction: row;
//   gap: 2rem;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 1rem;
//     justify-content: center;
//     text-align: center;
//     font-size: 12px;
//   }
// `;

// const NavLink = styled.a`
//   color: ${({ theme }) => theme.text_primary};
//   text-decoration: none;
//   font-size: 1.2rem;
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

const FooterText = styled.p`
  font-size: 15px;
  font-style: italic;
  padding: 0;
  margin: 0 0 5px 0;
  margin-top: 0.7rem;
`;

const Role = styled.div`
  font-size: 20px;
  font-style: italic;
  display: inline;

`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1.5rem;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Wrapper = styled.div`
  font-size: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        
        <>
          <Wrapper>
            <Logo>Karthikeyan K</Logo><Role>ML/AI Engineer</Role>
          </Wrapper>
        </>
        <Title>Feel free to reach me on</Title>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <FaLinkedin />
          </SocialMediaIcon>
          
          {/* <iconname style={{alignItems: 'center'}} >Linkedin</iconname> */}
          <SocialMediaIcon href={`https://wa.me/${Bio.mobile}`} target="display">
            <FaWhatsapp />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.mail} target="display">
            <SiGmail />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <FaGithub />
          </SocialMediaIcon>
        </SocialMediaIcons>
        {/* <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Certifications">Certifications</NavLink>
        </Nav> */}
          <FooterText>Number of Visitors</FooterText> 
          <img src="https://profile-counter.glitch.me/karthickportfoliocounter0/count.svg" alt="Visitor counter" />
        <Copyright>&copy; 2024 Karthikeyan K. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

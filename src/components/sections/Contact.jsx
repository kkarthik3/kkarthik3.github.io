// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";
// // import EarthCanvas from "../canvas/Earth";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 12px;
//   z-index: 1;
//   align-items: center;
//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 0px 0px 80px 0px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 16px;
//   }
// `;
// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   padding: 32px;
//   border-radius: 12px;
//   box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `;
// const ContactTitle = styled.div`
//   font-size: 28px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;
// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   background: -moz-linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   background: -webkit-linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `;

// const Contact = () => {
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_tox7kqs",
//         "template_nv7k7mj",
//         form.current,
//         "SybVGsYS52j2TfLbi"
//       )
//       .then(
//         (result) => {
//           alert("Message Sent");
//           form.current.resut();
//         },
//         (error) => {
//           alert(error);
//         }
//       );
//   };

//   return (
//     <Container>
//       <Wrapper>
//         {/* <EarthCanvas /> */}
//         <Title>Contact</Title>
//         <Desc>
//           Feel free to reach out to me for any questions or opportunities!
//         </Desc>
//         <ContactForm onSubmit={handleSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Email" name="from_email" />
//           <ContactInput placeholder="Your Name" name="from_name" />
//           <ContactInput placeholder="Subject" name="subject" />
//           <ContactInputMessage placeholder="Message" name="message" rows={4} />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Contact;
import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { Bio } from "../../data/constants";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 130%;
  max-width: 1300px;
  gap: 12px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 120px;
    font-size: 16px;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const InfoBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  margin: 50px 0;


  i {
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px; /* Space between icon and text */
    width: 44px;
    height: 44px;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    color: #f2fffd;
    border: 1px solid #0563bb;

    &:hover {
      background: #0563bb;
      color: #f2fffd;
    } 
  }

  h4 {
    font-size: 22px;
    font-weight: 600;
    color: #f2fffd;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #728394;
    margin: 0;
    
  }
`;

const ContactTitle = () => (
  <Title>Contact</Title>
);

const ContactDescription = () => (
  <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
);

const ContactInfo = ({ icon: Icon, title, link, description }) => (
  <InfoBlock>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i><Icon size={25} /></i>
    </a>
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </InfoBlock>
);

const ContactInfoList = () => (
  <ContactInfoContainer>
    <ContactInfo
      icon={FaLinkedin}
      title="LinkedIn"
      link="https://www.linkedin.com/in/kkarthick-k/"
      description="Linkedin.com/in/kkarthick-k"
    />
    <ContactInfo
      icon={SiGmail}
      title="Email"
      link={`mailto:${Bio.mail}`}
      description="karthickinfo45@gmail.com"
    />
    <ContactInfo
      icon={BsFillTelephoneForwardFill}
      title="Call"
      link={`https://wa.me/${Bio.mobile}`}
      description="+91 8248663423"
    />
    <ContactInfo
      icon={FaGithub}
      title="GitHub"
      link={Bio.github}
      description="github.com/kkarthik3"
    />
  </ContactInfoContainer>
);

const Contact = () => (
  <Container>
    <Wrapper>
      {/* <EarthCanvas /> */}
      <ContactTitle />
      <ContactDescription />
      <ContactInfoList />
    </Wrapper>
  </Container>
);

export default Contact;

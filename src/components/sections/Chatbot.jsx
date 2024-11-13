import React, { useState, useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { TbMessageChatbotFilled } from "react-icons/tb";

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: ${(props) => (props.isOpen ? "300px" : "55px")};
  height: ${(props) => (props.isOpen ? "450px" : "55px")};
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 400px) {
    width: ${(props) => (props.isOpen ? "300px" : "45px")};
    height: ${(props) => (props.isOpen ? "400px" : "45px")};
  } 
  
  &:hover{
  scale:${(props) => (props.isOpen ? "1" : "1.15")};}
`;

const ChatHeader = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: ${(props) => (props.isOpen ? "10px" : "15px")};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 5px;
`;

const ChatBody = styled.div`
  padding: 8px;
  height: 342px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_secondary};
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
  margin: 8px 0;
  width: 100%;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 8px 15px;
  border-radius: 15px;
  background-color: ${({ theme, sender }) => 
    sender === "user" ? theme.primary : theme.card_light};
  color: ${({ theme, sender }) => 
    sender === "user" ? theme.white : theme.text_primary};
  word-wrap: break-word;
  font-size: 12px;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${({ theme }) => theme.bgLight};
  border-top: 0px solid ${({ theme }) => theme.card_light};
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.card_light};
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  margin-right: 10px;
  border-color: ${({ theme }) => theme.primary};
  &:focus {
    border-color: ${({ theme }) => theme.text_primary};
  }
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ClosedChatIcon = styled(TbMessageChatbotFilled)`
  font-size: ${(props) => (props.isOpen ? "35px" : "30px")};
`;

const ChatIcon = styled(TbMessageChatbotFilled)`
  font-size: 24px;
  color: ${({ theme }) => theme.white};
`;

const Chatbot = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi, I'm Karthikeyan K, How may i help you", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  
  const chatBodyRef = useRef(null); // Reference for auto-scrolling

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [
        ...messages,
        { text: input, sender: "user" }
      ];
      setMessages(newMessages);
      setInput("");

      setTimeout(() => {
        setMessages([
          ...newMessages,
          { text: "Hello! How can I help you?", sender: "bot" }
        ]);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]); // Trigger this whenever the messages array changes

  return (
    <ChatbotContainer isOpen={isOpen}>
      <ChatHeader onClick={toggleChatbot} isOpen={isOpen}>
        {isOpen ? (
          <ChatIcon isOpen={isOpen} />
        ) : (
          <ClosedChatIcon isOpen={isOpen} />
        )}
        <span>{isOpen ? "Virtual Karthick" : ""}</span>
        <span></span>
      </ChatHeader>
      {isOpen && (
        <>
          <ChatBody ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <MessageContainer key={index} sender={msg.sender}>
                <MessageBubble sender={msg.sender} theme={theme}>
                  {msg.text}
                </MessageBubble>
              </MessageContainer>
            ))}
          </ChatBody>
          <ChatInputContainer>
            <ChatInput
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <SendButton onClick={sendMessage}>
              <ChatIcon style={{ fontSize: "16px" }} />
            </SendButton>
          </ChatInputContainer>
        </>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import caminhao2 from '../assets/images/caminhao2.jpg';
import caminhao3 from '../assets/images/caminhao3.jpg';

const IMAGES = [caminhao2, caminhao3];

export default function Inicio() {
  const [idx,     setIdx]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % IMAGES.length);
        setVisible(true);
      }, 700);
    }, 7000);
    return () => clearInterval(tick);
  }, []);

  return (
    <Section id="hero">
      <BgImage $url={IMAGES[idx]} $visible={visible} />
      <Overlay />
      <Content>
        <Eyebrow>Transporte Rodrimar · Lavras, MG · Desde 1970</Eyebrow>
        <Headline>
          Cargas que chegam.<br />
          Compromisso que<br />
          <Accent>permanece.</Accent>
        </Headline>
        <Sub>
          Mais de 55 anos movendo calcário, minérios e grãos pelo Brasil,
          com frota própria e a solidez de quem nunca parou.
        </Sub>
        <CTA
          onClick={() => {
            const el = document.getElementById('sobre-nos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Conheça a Rodrimar
        </CTA>
      </Content>

      <PulseDot aria-hidden="true">
        <span />
      </PulseDot>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  scroll-margin-top: 0;
`;

const BgImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center 60%;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    108deg,
    rgba(7, 30, 61, 0.90) 0%,
    rgba(7, 30, 61, 0.62) 52%,
    rgba(7, 30, 61, 0.28) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
  padding-top: 72px;

  @media (max-width: 768px) {
    padding: 72px 24px 0;
  }
`;

const Eyebrow = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Headline = styled.h1`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 700;
  line-height: 1.0;
  color: #ffffff;
  margin-bottom: 28px;
  max-width: 720px;
`;

const Accent = styled.span`
  color: var(--amber);
`;

const Sub = styled.p`
  font-size: clamp(15px, 1.4vw, 18px);
  font-weight: 300;
  line-height: 1.75;
  color: var(--text-light);
  max-width: 500px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CTA = styled.button`
  background: var(--amber);
  color: #ffffff;
  border: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  padding: 14px 36px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: #a8781f;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.5); }
`;

const PulseDot = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  span {
    display: block;
    width: 7px;
    height: 7px;
    background: rgba(255,255,255,0.6);
    border-radius: 50%;
    animation: ${pulse} 2.2s ease-in-out infinite;
  }
`;

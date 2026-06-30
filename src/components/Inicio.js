import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import caminhao2 from '../assets/images/caminhao2.jpg';
import caminhao3 from '../assets/images/caminhao3.jpg';
import logo from '../assets/images/newLogoWhiteNoBG.png';

const IMAGES = [caminhao2, caminhao3];

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

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
        <Logo src={logo} alt="Transporte Rodrimar" decoding="async" />
        <Eyebrow>Lavras, MG · Desde 1970</Eyebrow>
        <Headline>
          Cargas que chegam.<br />
          Compromisso que<br />
          <Accent>permanece.</Accent>
        </Headline>
        <Sub>
          Mais de 55 anos movendo calcário, minérios e grãos pelo Brasil,
          com frota própria e a solidez de quem atua no mercado há décadas.
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

const Logo = styled.img`
  display: block;
  height: 80px;
  width: auto;
  object-fit: contain;
  margin-bottom: 32px;
  image-rendering: -webkit-optimize-contrast;
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 0ms forwards;

  @media (max-width: 768px) {
    height: 56px;
    margin-bottom: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
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
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 140ms forwards;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const Headline = styled.h1`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(32px, 4.8vw, 68px);
  font-weight: 700;
  line-height: 1.0;
  color: #ffffff;
  margin-bottom: 28px;
  max-width: 900px;
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 280ms forwards;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const Accent = styled.span`
  color: var(--amber);
`;

const Sub = styled.p`
  font-size: clamp(15px, 1.5vw, 20px);
  font-weight: 300;
  line-height: 1.75;
  color: var(--text-light);
  max-width: 720px;
  margin-bottom: 40px;
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 400ms forwards;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
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
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 520ms forwards;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: #a8781f;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
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

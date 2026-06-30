import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import logo from '../assets/images/newLogoWhiteNoBG.png';

import mobile1 from '../assets/images/background mobile 1.png';
import mobile2 from '../assets/images/background mobile 2.png';
import mobile3 from '../assets/images/background mobile 3.png';

const MOBILE_IMAGES = [mobile1, mobile2, mobile3];

const BG_VIDEO = 'https://res.cloudinary.com/tb5zvp2z/video/upload/f_auto,q_auto/Vi%CC%81deo_Rdm_2025_OTIMIZADO_PARA_WEB_mel5ta';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export default function Inicio() {
  const [isMobile,    setIsMobile]    = useState(() => window.innerWidth <= 768);
  const [videoReady,  setVideoReady]  = useState(() => window.innerWidth <= 768);
  const [idx,         setIdx]         = useState(0);
  const [visible,     setVisible]     = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => {
      setIsMobile(e.matches);
      setIdx(0);
      setVisible(true);
      if (e.matches) setVideoReady(true);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const timeout = setTimeout(() => setVideoReady(true), 7000);
    return () => clearTimeout(timeout);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const tick = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % MOBILE_IMAGES.length);
        setVisible(true);
      }, 700);
    }, 5500);
    return () => clearInterval(tick);
  }, [isMobile]);

  return (
    <>
      <LoadingScreen $ready={videoReady}>
        <LoadingLogo src={logo} alt="Transporte Rodrimar" />
        <Spinner />
      </LoadingScreen>

      <Section id="hero">
        {isMobile ? (
          <BgImage $url={MOBILE_IMAGES[idx]} $visible={visible} />
        ) : (
          <BgVideo
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
          >
            <source src={BG_VIDEO} type="video/mp4" />
          </BgVideo>
        )}
        <Overlay />
        <Content>
          <Logo src={logo} alt="Transporte Rodrimar" decoding="async" $ready={videoReady} />
          <Eyebrow $ready={videoReady}>Lavras, MG · Desde 1970</Eyebrow>
          <Headline $ready={videoReady}>
            Cargas que chegam.<br />
            Compromisso que<br />
            <Accent>permanece.</Accent>
          </Headline>
          <Sub $ready={videoReady}>
            Mais de 55 anos atuando no mercado nacional com solidez e comprometimento.
          </Sub>
          <CTA
            $ready={videoReady}
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
    </>
  );
}

const LoadingScreen = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--navy-deep);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  opacity: ${({ $ready }) => ($ready ? 0 : 1)};
  pointer-events: ${({ $ready }) => ($ready ? 'none' : 'all')};
  transition: opacity 0.7s ease;
`;

const LoadingLogo = styled.img`
  height: 72px;
  width: auto;
  object-fit: contain;
  opacity: 0.9;

  @media (max-width: 768px) {
    height: 52px;
  }
`;

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-top-color: var(--amber);
  border-radius: 50%;
  animation: ${spin} 0.85s linear infinite;
`;

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
  background-image: url("${({ $url }) => $url}");
  background-size: cover;
  background-position: center center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const BgVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  ${({ $ready }) => $ready && css`animation: ${fadeUp} 0.7s ease 0ms forwards;`}

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
  ${({ $ready }) => $ready && css`animation: ${fadeUp} 0.7s ease 140ms forwards;`}

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
  ${({ $ready }) => $ready && css`animation: ${fadeUp} 0.7s ease 280ms forwards;`}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const Accent = styled.span`
  color: var(--amber);
`;

const Sub = styled.p`
  font-size: clamp(17px, 1.7vw, 23px);
  font-weight: 300;
  line-height: 1.75;
  color: var(--text-light);
  max-width: 720px;
  margin-bottom: 40px;
  opacity: 0;
  ${({ $ready }) => $ready && css`animation: ${fadeUp} 0.7s ease 400ms forwards;`}

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
  ${({ $ready }) => $ready && css`animation: ${fadeUp} 0.7s ease 520ms forwards;`}
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

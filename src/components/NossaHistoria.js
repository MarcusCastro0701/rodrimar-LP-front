import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { FaPlay } from 'react-icons/fa';
import styled from 'styled-components';
import useInView from '../hooks/useInView';
import fadeStyles from '../utils/fadeStyles';

const VIDEO_ID  = '4Se-PKhXZhU';
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

const YT_OPTS = {
  width: '100%',
  height: '100%',
  playerVars: {
    autoplay: 1,
    controls: 1,
    fs: 1,
    iv_load_policy: 3,
    modestbranding: 1,
    rel: 0,
  },
};

export default function NossaHistoria() {
  const [leftRef,  leftIn]  = useInView();
  const [rightRef, rightIn] = useInView();
  const [playing,  setPlaying] = useState(false);

  return (
    <Section id="nossa-historia">
      <Inner>
        <Left ref={leftRef} $inView={leftIn}>
          <Eyebrow>Nossa História · fundação</Eyebrow>
          <YearMark>1970</YearMark>
          <Body>
            Fundada em 1 de abril de 1970 por Celso Rodrigues, a Transporte Rodrimar
            é uma história de determinação, paixão e comprometimento que começou há
            mais de cinco décadas na cidade de Lavras. Com visão e expertise, Celso
            constituiu uma empresa que rapidamente se destacou no setor de transporte.
          </Body>
          <Body>
            Desde o início, a missão tem sido oferecer serviços de transporte de alta
            qualidade, baseados em princípios sólidos de confiabilidade e excelência.
            A Rodrimar tornou-se um pilar da comunidade de Lavras e uma referência
            regional no setor de transporte de cargas.
          </Body>
        </Left>

        <Right ref={rightRef} $inView={rightIn} $delay={150}>
          <VideoWrap>
            {playing ? (
              <YouTube videoId={VIDEO_ID} opts={YT_OPTS} />
            ) : (
              <Thumb type="button" onClick={() => setPlaying(true)} aria-label="Reproduzir vídeo Nossa História">
                <ThumbImg src={THUMBNAIL} alt="" loading="lazy" decoding="async" />
                <PlayBadge aria-hidden="true"><FaPlay /></PlayBadge>
              </Thumb>
            )}
          </VideoWrap>
        </Right>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: var(--warm-white);
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  gap: 80px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 52px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 40px;
  }
`;

const Left = styled.div`
  flex: 1;
  ${fadeStyles}
`;

const Eyebrow = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 12px;
`;

const YearMark = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(83px, 11.5vw, 138px);
  font-weight: 700;
  line-height: 0.9;
  color: var(--amber);
  letter-spacing: -0.01em;
  margin-bottom: 32px;
`;

const Body = styled.p`
  font-size: 17px;
  line-height: 1.85;
  color: var(--text-muted);
  margin-bottom: 16px;
  max-width: 540px;
`;

const Right = styled.div`
  flex-shrink: 0;
  width: 500px;
  ${fadeStyles}

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const VideoWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(7,30,61,0.14);

  > div,
  iframe {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

const Thumb = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--navy-deep);
  -webkit-tap-highlight-color: transparent;
`;

const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.82;
  transition: opacity 0.2s ease;

  ${Thumb}:hover & {
    opacity: 0.68;
  }
`;

const PlayBadge = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--amber);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  padding-left: 4px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
  transition: transform 0.2s ease, background 0.2s ease;

  ${Thumb}:hover & {
    transform: translate(-50%, -50%) scale(1.08);
    background: #a8781f;
  }

  @media (max-width: 768px) {
    width: 54px;
    height: 54px;
    font-size: 18px;
  }
`;

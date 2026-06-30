import React from 'react';
import styled from 'styled-components';
import useInView from '../hooks/useInView';
import fadeStyles from '../utils/fadeStyles';

const VIDEO_SRC    = 'https://res.cloudinary.com/tb5zvp2z/video/upload/f_auto,q_auto/Video_familia_draqjr';
const VIDEO_POSTER = 'https://res.cloudinary.com/tb5zvp2z/video/upload/so_61/Video_familia_draqjr.jpg';

export default function Fundador() {
  const [leftRef,  leftIn]  = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <Section id="fundador">
      <Rule />
      <Inner>
        <Left ref={leftRef} $inView={leftIn} $delay={100}>
          <Title>O FUNDADOR</Title>
          <Body>
            Celso Rodrigues dedicou décadas de sua vida à construção de algo que vai além
            de uma empresa. Com a Rodrimar, ele estabeleceu uma cultura de trabalho honesto,
            comprometimento com os clientes e respeito pelas pessoas, valores que continuam
            vivos em cada viagem que fazemos.
          </Body>
          <Body>
            Como reconhecimento a essa trajetória, a família e a equipe Rodrimar prepararam
            uma homenagem especial ao fundador. Um gesto de gratidão por tudo que ele
            construiu, e de reafirmação dos princípios que nos guiam há mais de cinco décadas.
          </Body>
        </Left>

        <Right ref={rightRef} $inView={rightIn}>
          <VideoWrap>
            <video
              src={VIDEO_SRC}
              poster={VIDEO_POSTER}
              controls
              playsInline
              preload="metadata"
            />
          </VideoWrap>
        </Right>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: var(--warm-white);
  padding: 0 0 100px;
  scroll-margin-top: 72px;

  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
`;

const Rule = styled.hr`
  border: none;
  border-top: 1px solid rgba(7, 30, 61, 0.10);
  max-width: 1280px;
  margin: 0 auto 72px;
  padding: 0 48px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 80px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 32px;
  }
`;

const Left = styled.div`
  width: 480px;
  max-width: 100%;
  padding-top: 8px;
  ${fadeStyles}
`;

const Title = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(41px, 5.2vw, 69px);
  font-weight: 700;
  line-height: 1.0;
  color: var(--amber);
  margin-bottom: 28px;
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
  width: 300px;
  ${fadeStyles}

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
  }
`;

const VideoWrap = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(7, 30, 61, 0.14);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

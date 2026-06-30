import React from 'react';
import styled, { keyframes } from 'styled-components';
import PARTNER_LIST from './partners/partnerList';

const doubled = [...PARTNER_LIST, ...PARTNER_LIST];

export default function Clientes() {
  return (
    <Section id="clientes">
      <Inner>
        <Eyebrow>Nossos Clientes</Eyebrow>
        <Title>Quem confia na Rodrimar</Title>
      </Inner>

      <Track>
        <Marquee aria-hidden="true">
          {doubled.map((p, i) => (
            <LogoCard key={i}>
              <img
                src={p.imageUrl}
                alt={`Cliente ${(i % PARTNER_LIST.length) + 1}`}
              />
            </LogoCard>
          ))}
        </Marquee>
      </Track>
    </Section>
  );
}

const scrollLeft = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Section = styled.section`
  background: var(--warm-white);
  padding: 80px 0 0;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px 52px;

  @media (max-width: 768px) {
    padding: 0 24px 40px;
  }
`;

const Eyebrow = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(28px, 3.2vw, 42px);
  font-weight: 700;
  color: var(--navy-deep);
  line-height: 1.1;
`;

const Track = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 8px 0 80px;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
`;

const Marquee = styled.div`
  display: flex;
  width: max-content;
  animation: ${scrollLeft} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 24px;
    gap: 12px;
  }
`;

const LogoCard = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-right: 12px;
  background: #ffffff;
  border: 1px solid rgba(7,30,61,0.07);
  border-radius: 6px;

  img {
    max-width: 120px;
    max-height: 46px;
    object-fit: contain;
    filter: grayscale(0.25);
    opacity: 0.80;
    transition: opacity 0.25s ease, filter 0.25s ease;
  }

  &:hover img {
    filter: grayscale(0);
    opacity: 1;
  }
`;

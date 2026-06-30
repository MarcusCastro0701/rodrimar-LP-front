import React from 'react';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
import useInView from '../hooks/useInView';
import fadeStyles from '../utils/fadeStyles';

export default function Contato() {
  const [leftRef,  leftIn]  = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <Section id="contato">
      <Inner>
        <Left ref={leftRef} $inView={leftIn}>
          <Eyebrow>Contato e Endereço</Eyebrow>
          <Title>Estamos em Lavras,<br />Minas Gerais.</Title>
          <InfoList>
            <InfoItem>
              <LocationIcon />
              <span>Rua Rosa Kasinski, 1195 — Distrito Industrial, Lavras-MG, 37205-842</span>
            </InfoItem>
            <InfoItem>
              <PhoneIcon />
              <span>(35) 3821-6262</span>
            </InfoItem>
            <InfoItem>
              <EmailIcon />
              <a href="mailto:comercial@rodrimar.net">comercial@rodrimar.net</a>
            </InfoItem>
          </InfoList>
        </Left>

        <Right ref={rightRef} $inView={rightIn} $delay={150}>
          <MapFrame
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3718.030736127133!2d-44.978613!3d-21.2702509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd88fff8038d%3A0x6203fb732a8a547a!2sTransporte%20Rodrimar!5e0!3m2!1spt-BR!2sbr!4v1693863803794!5m2!1spt-BR!2sbr"
            title="Localização Transporte Rodrimar"
            loading="lazy"
            allowFullScreen
          />
        </Right>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: var(--warm-card);
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
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
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
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(32px, 3.45vw, 46px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--navy-deep);
  margin-bottom: 40px;
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--text-muted);

  a {
    color: var(--navy-deep);
    font-weight: 500;
    transition: color 0.2s;
    &:hover { color: var(--amber); }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LocationIcon = styled(FaLocationDot)`
  flex-shrink: 0;
  margin-top: 3px;
  font-size: 18px;
  color: var(--amber);
`;

const PhoneIcon = styled(FaPhone)`
  flex-shrink: 0;
  margin-top: 4px;
  font-size: 16px;
  color: var(--amber);
`;

const EmailIcon = styled(MdEmail)`
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 20px;
  color: var(--amber);
`;

const Right = styled.div`
  flex-shrink: 0;
  width: 500px;
  ${fadeStyles}

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 380px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(7,30,61,0.12);

  @media (max-width: 768px) {
    height: 240px;
  }
`;

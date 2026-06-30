import React from 'react';
import styled from 'styled-components';
import { MdAgriculture, MdRecycling, MdOutlineBlinds } from 'react-icons/md';
import { GiFactory, GiFallingRocks } from 'react-icons/gi';
import useInView from '../../hooks/useInView';
import fadeStyles from '../../utils/fadeStyles';

const SEGMENTS = [
  { Icon: MdAgriculture,  name: 'Agronegócio', desc: 'Calcário agrícola, cal, farelo e grãos a granel.',                            color: '#5C7A3A' },
  { Icon: MdRecycling,    name: 'Resíduos',    desc: 'Transporte e destinação de resíduos industriais.',                            color: '#3D6645' },
  { Icon: GiFallingRocks, name: 'Minérios',    desc: 'Minérios a granel e ensacados, agregados e rochas.',                          color: '#8B7250' },
  { Icon: MdOutlineBlinds,name: 'Cerâmica',    desc: 'Insumos e produtos para o setor cerâmico.',                                   color: '#9B4A35' },
  { Icon: GiFactory,      name: 'Metalurgia',  desc: 'Carvão coque e matérias-primas para usinas siderúrgicas.',                    color: '#2E5480' },
];

export default function Segmentos() {
  const [headerRef, headerIn] = useInView();
  const [gridRef,   gridIn]   = useInView();

  return (
    <Section id="segmentos">
      <Inner>
        <SectionHeader ref={headerRef} $inView={headerIn}>
          <Eyebrow>O que transportamos</Eyebrow>
          <Title>Nossos Segmentos</Title>
        </SectionHeader>

        <Grid ref={gridRef}>
          {SEGMENTS.map(({ Icon, name, desc, color }, i) => (
            <Card key={name} $color={color} $inView={gridIn} $delay={i * 90}>
              <IconWrap>
                <Icon style={{ color, width: 40, height: 40 }} />
              </IconWrap>
              <CardName>{name}</CardName>
              <CardDesc>{desc}</CardDesc>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: var(--navy-deep);
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 56px;
  ${fadeStyles}

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const Eyebrow = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(37px, 4.6vw, 60px);
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: 3px solid ${({ $color }) => $color};
  border-radius: 8px;
  padding: 28px 20px 24px;
  transition: background 0.2s ease, transform 0.2s ease,
              opacity 0.65s ease ${({ $delay = 0 }) => $delay}ms,
              transform 0.65s ease ${({ $delay = 0 }) => $delay}ms;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(22px)')};

  &:hover {
    background: rgba(255,255,255,0.08);
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const IconWrap = styled.div`
  margin-bottom: 16px;
`;

const CardName = styled.h3`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 23px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

const CardDesc = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-light-muted);
`;

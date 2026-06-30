import React from 'react';
import styled from 'styled-components';
import { MdAgriculture, MdRecycling, MdOutlineBlinds } from 'react-icons/md';
import { GiFactory, GiFallingRocks } from 'react-icons/gi';

const SEGMENTS = [
  {
    Icon:  MdAgriculture,
    name:  'Agronegócio',
    desc:  'Calcário agrícola, cal, farelo e grãos a granel.',
    color: '#5C7A3A',
  },
  {
    Icon:  MdRecycling,
    name:  'Resíduos',
    desc:  'Transporte e destinação de resíduos industriais.',
    color: '#3D6645',
  },
  {
    Icon:  GiFallingRocks,
    name:  'Minérios',
    desc:  'Minérios a granel e ensacados, agregados e rochas.',
    color: '#8B7250',
  },
  {
    Icon:  MdOutlineBlinds,
    name:  'Cerâmica',
    desc:  'Insumos e produtos para o setor cerâmico.',
    color: '#9B4A35',
  },
  {
    Icon:  GiFactory,
    name:  'Metalurgia',
    desc:  'Carvão coque e matérias-primas para usinas siderúrgicas.',
    color: '#2E5480',
  },
];

export default function Segmentos() {
  return (
    <Section id="segmentos">
      <Inner>
        <SectionHeader>
          <Eyebrow>O que transportamos</Eyebrow>
          <Title>Nossos Segmentos</Title>
        </SectionHeader>

        <Grid>
          {SEGMENTS.map(({ Icon, name, desc, color }) => (
            <Card key={name} $color={color}>
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

  @media (max-width: 768px) {
    margin-bottom: 36px;
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
  font-size: clamp(32px, 4vw, 52px);
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
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.08);
    transform: translateY(-4px);
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
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

const CardDesc = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-light-muted);
`;

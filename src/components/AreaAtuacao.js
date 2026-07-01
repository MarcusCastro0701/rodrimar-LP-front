import React from 'react';
import styled from 'styled-components';
import useInView from '../hooks/useInView';
import fadeStyles from '../utils/fadeStyles';
import mapaAtuacao from '../assets/images/Mapa de atuação.png';

const ESTADOS = [
  'MG', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'TO', 'DF',
];

export default function AreaAtuacao() {
  const [leftRef,  leftIn]  = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <Section id="area-atuacao">
      <Inner>
        <Left ref={leftRef} $inView={leftIn}>
          <Eyebrow>Área de Atuação</Eyebrow>
          <Title>Cobertura em todo o Brasil.</Title>
          <Body>
            Atendemos rotas que conectam polos industriais e agrícolas de todo o país, e já atuamos em Minas Gerais,
            São Paulo, Paraná, Santa Catarina, Rio Grande do Sul, Mato Grosso, Mato Grosso
            do Sul, Goiás, Tocantins e Distrito Federal.
          </Body>
          <EstadoList>
            {ESTADOS.map((uf) => (
              <Estado key={uf}>{uf}</Estado>
            ))}
          </EstadoList>
        </Left>

        <Right ref={rightRef} $inView={rightIn} $delay={150}>
          <MapWrap>
            <img src={mapaAtuacao} alt="Mapa dos estados brasileiros atendidos pela Rodrimar" loading="lazy" />
          </MapWrap>
        </Right>
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
  display: flex;
  gap: 80px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 36px;
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
  font-size: clamp(32px, 3.7vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 520px;
`;

const Body = styled.p`
  font-size: 17px;
  line-height: 1.85;
  color: var(--text-light-muted);
  max-width: 520px;
  margin-bottom: 28px;
`;

const EstadoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Estado = styled.li`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--amber);
  background: rgba(191, 141, 53, 0.10);
  border: 1px solid rgba(191, 141, 53, 0.30);
  border-radius: 4px;
  padding: 6px 12px;
`;

const Right = styled.div`
  flex-shrink: 0;
  width: 440px;
  ${fadeStyles}

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 420px;
  }
`;

const MapWrap = styled.div`
  width: 100%;
  background: var(--warm-white);
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

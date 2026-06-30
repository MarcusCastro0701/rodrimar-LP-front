import React from 'react';
import styled from 'styled-components';
import useInView from '../hooks/useInView';
import fadeStyles from '../utils/fadeStyles';

export default function SobreNos() {
  const [leftRef,  leftIn]  = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <Section id="sobre-nos">
      <Inner>
        <Left ref={leftRef} $inView={leftIn}>
          <Eyebrow>Sobre Nós</Eyebrow>
          <Title>Uma empresa que se mede em décadas, não em campanhas.</Title>
          <Body>
            Somos uma transportadora de alto padrão e excelência. Atuamos no transporte de
            calcário, cal, carvão coque e farelo, além de transportes pesados com frota
            própria e agregados, abrangendo minérios em geral: a granel e ensacados.
          </Body>
          <Body>
            No mercado há mais de 55 anos, a Transporte Rodrimar é uma das empresas mais
            tradicionais em seus segmentos. Com frota acima de 60 veículos, oferecemos
            qualidade e eficiência, desenvolvendo um trabalho mais seguro para nossos
            clientes e colaboradores.
          </Body>
        </Left>

        <Right ref={rightRef} $inView={rightIn} $delay={150}>
          <StatGrid>
            <Stat>
              <StatNum>55<Plus>+</Plus></StatNum>
              <StatLabel>Anos de mercado</StatLabel>
            </Stat>
            <Stat>
              <StatNum>60<Plus>+</Plus></StatNum>
              <StatLabel>Veículos na frota</StatLabel>
            </Stat>
            <Stat $wide>
              <StatWord>Lavras</StatWord>
              <StatLabel>Minas Gerais · sede desde 1970</StatLabel>
            </Stat>
          </StatGrid>
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
  align-items: flex-start;

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
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(28px, 3.2vw, 42px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--navy-deep);
  margin-bottom: 28px;
  max-width: 520px;
`;

const Body = styled.p`
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-muted);
  margin-bottom: 16px;
  max-width: 540px;
`;

const Right = styled.div`
  flex-shrink: 0;
  width: 340px;
  ${fadeStyles}

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(7,30,61,0.10);
  border-radius: 10px;
  overflow: hidden;
`;

const Stat = styled.div`
  background: #ffffff;
  padding: 32px 24px;
  grid-column: ${({ $wide }) => ($wide ? 'span 2' : 'span 1')};
  border-bottom: 1px solid rgba(7,30,61,0.07);
  border-right: ${({ $wide }) => ($wide ? 'none' : '1px solid rgba(7,30,61,0.07)')};

  &:nth-child(2) {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const StatNum = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
  color: var(--navy-deep);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 56px;
  }
`;

const Plus = styled.span`
  color: var(--amber);
  font-size: 44px;
`;

const StatWord = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
  color: var(--navy-deep);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StatLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

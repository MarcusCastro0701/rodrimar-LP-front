import React from 'react';
import styled from 'styled-components';

const VALUES = [
  { name: 'Pessoas',          desc: 'As pessoas certas para as funções certas são imprescindíveis para o sucesso da empresa.' },
  { name: 'Comprometimento',  desc: 'Fazer o seu melhor, executar o trabalho com assertividade e buscar sempre o melhor resultado.' },
  { name: 'Responsabilidade', desc: 'Cumprir todas as obrigações assumidas.' },
  { name: 'Profissionalismo', desc: 'Respeitar as normas da empresa e manter um bom relacionamento interpessoal.' },
  { name: 'Sustentabilidade', desc: 'Focar no crescimento a longo prazo, com práticas que reduzam os impactos socioambientais.' },
];

const PRINCIPLES = [
  'Entender e atender as necessidades e expectativas dos nossos clientes e partes interessadas.',
  'Incentivar e prover recursos para a melhoria contínua do sistema de gestão da qualidade.',
  'Comprometer-se com todos os requisitos legais e estatutários aplicáveis ao negócio.',
];

export default function Valores() {
  return (
    <Section id="valores">
      <Inner>

        <MissaoBlock>
          <BlockLabel>Missão</BlockLabel>
          <MissaoQuote>
            "Atender as necessidades dos nossos clientes, oferecendo serviços de
            qualidade, transportando com segurança e gerando valores sustentáveis
            a todas as partes."
          </MissaoQuote>
        </MissaoBlock>

        <Divider />

        <MidRow>
          <ValoresBlock>
            <BlockLabel>Valores</BlockLabel>
            <ValoresList>
              {VALUES.map(({ name, desc }) => (
                <ValueItem key={name}>
                  <Dot />
                  <div>
                    <ValueName>{name}</ValueName>
                    <ValueDesc>{desc}</ValueDesc>
                  </div>
                </ValueItem>
              ))}
            </ValoresList>
          </ValoresBlock>

          <VisaoBlock>
            <BlockLabel>Visão</BlockLabel>
            <VisaoQuote>
              "Ser uma transportadora de referência no mercado nacional, reconhecida
              pela excelência dos serviços prestados."
            </VisaoQuote>
          </VisaoBlock>
        </MidRow>

        <Divider />

        <PolicyBlock>
          <PolicyHeader>
            <BlockLabel>Política de Qualidade</BlockLabel>
            <PolicyLead>
              Assegurar a satisfação dos nossos clientes através do fornecimento
              de soluções logísticas sustentáveis. Nossa política está estruturada
              em três princípios fundamentais:
            </PolicyLead>
          </PolicyHeader>
          <PrincipleGrid>
            {PRINCIPLES.map((text, i) => (
              <Principle key={i}>
                <PrincipleNum>0{i + 1}</PrincipleNum>
                <PrincipleText>{text}</PrincipleText>
              </Principle>
            ))}
          </PrincipleGrid>
        </PolicyBlock>

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

const BlockLabel = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 16px;
`;

const MissaoBlock = styled.div`
  max-width: 820px;
`;

const MissaoQuote = styled.blockquote`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(22px, 2.6vw, 34px);
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  border-left: 3px solid var(--amber);
  padding-left: 28px;
  margin: 0;

  @media (max-width: 768px) {
    padding-left: 18px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.07);
  margin: 56px 0;

  @media (max-width: 768px) {
    margin: 40px 0;
  }
`;

const MidRow = styled.div`
  display: flex;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 44px;
  }
`;

const ValoresBlock = styled.div`
  flex: 1;
`;

const ValoresList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const ValueItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Dot = styled.div`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--amber);
  margin-top: 9px;
`;

const ValueName = styled.h3`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
`;

const ValueDesc = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-light-muted);
`;

const VisaoBlock = styled.div`
  flex-shrink: 0;
  width: 320px;
  padding-top: 4px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const VisaoQuote = styled.blockquote`
  font-size: 17px;
  font-weight: 300;
  line-height: 1.75;
  color: rgba(255,255,255,0.65);
  font-style: italic;
  margin: 0;
  border-left: 1px solid rgba(255,255,255,0.15);
  padding-left: 20px;
`;

const PolicyBlock = styled.div``;

const PolicyHeader = styled.div`
  margin-bottom: 36px;
`;

const PolicyLead = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255,255,255,0.60);
  max-width: 640px;
`;

const PrincipleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const Principle = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: 2px solid var(--amber);
  border-radius: 6px;
  padding: 24px 20px;
`;

const PrincipleNum = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: var(--amber);
  opacity: 0.30;
  line-height: 1;
  margin-bottom: 12px;
`;

const PrincipleText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255,255,255,0.62);
`;

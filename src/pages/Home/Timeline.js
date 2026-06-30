import React from 'react';
import styled from 'styled-components';
import Clientes from '../../components/Clientes';
import Contato from '../../components/Contato';
import Fundador from '../../components/Fundador';
import Inicio from '../../components/Inicio';
import NossaHistoria from '../../components/NossaHistoria';
import SobreNos from '../../components/SobreNos';
import Valores from '../../components/Valores';
import Segmentos from '../../components/partners/PartnersCarousel';

export default function Timeline() {
  return (
    <Main>
      <Inicio />
      <SobreNos />
      <Valores />
      <NossaHistoria />
      <Fundador />
      <Segmentos />
      <Clientes />
      <Contato />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

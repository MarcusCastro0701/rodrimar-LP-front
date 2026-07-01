import React, { useState } from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from './Header';
import Timeline from './Timeline';

const INSTAGRAM    = 'https://www.instagram.com/transporterodrimar/';
const WA_NUMBER    = '+553599716386';
const WA_MSG       = 'Olá, eu gostaria de fazer uma cotação com o comercial da Rodrimar.';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header />
      <Timeline />
      <Footer />

      <Fab>
        <FabChild $open={open} $index={1}>
          <FabLink
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Rodrimar"
            onClick={() => setOpen(false)}
          >
            <BsInstagram />
          </FabLink>
        </FabChild>

        <FabChild $open={open} $index={0}>
          <FabLink
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Rodrimar"
            onClick={() => setOpen(false)}
          >
            <BsWhatsapp />
          </FabLink>
        </FabChild>

        <FabMain
          $open={open}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Fechar contatos' : 'Abrir contatos'}
          aria-expanded={open}
        >
          <FaPhone />
        </FabMain>
      </Fab>

      {open && <Backdrop onClick={() => setOpen(false)} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Fab = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 900;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const FabMain = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid ${({ $open }) => ($open ? 'rgba(191, 141, 53, 0.50)' : 'rgba(255, 255, 255, 0.18)')};
  background: ${({ $open }) => ($open ? 'rgba(191, 141, 53, 0.85)' : 'rgba(7, 30, 61, 0.55)')};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.06);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.25s ease;
  transform: ${({ $open }) => ($open ? 'rotate(135deg)' : 'rotate(0deg)')};
  flex-shrink: 0;

  @media (hover: hover) {
    &:hover {
      background: rgba(191, 141, 53, 0.85);
      border-color: rgba(191, 141, 53, 0.50);
    }
  }
`;

const FabChild = styled.div`
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open, $index }) =>
    $open ? 'translateY(0) scale(1)' : `translateY(${($index + 1) * 20}px) scale(0.85)`};
  transition: opacity 0.22s ease ${({ $open, $index }) => ($open ? $index * 60 : 0)}ms,
              transform 0.22s ease ${({ $open, $index }) => ($open ? $index * 60 : 0)}ms;
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
`;

const FabLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(7, 30, 61, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  color: rgba(255, 255, 255, 0.90);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(255,255,255,0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: background 0.2s ease, border-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) {
    &:hover {
      background: rgba(191, 141, 53, 0.85);
      border-color: rgba(191, 141, 53, 0.50);
      color: #ffffff;
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 899;
`;

import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import styled from 'styled-components';
import rodrimarNoBG from '../assets/images/newLogoWhiteNoBG.png';

const FOOTER_LINKS = [
  { label: 'Início',         id: 'hero' },
  { label: 'Sobre Nós',      id: 'sobre-nos' },
  { label: 'Valores',        id: 'valores' },
  { label: 'Nossa História', id: 'nossa-historia' },
  { label: 'Segmentos',      id: 'segmentos' },
  { label: 'Clientes',       id: 'clientes' },
  { label: 'Contato',        id: 'contato' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  const instagram      = 'https://www.instagram.com/transporterodrimar/';
  const whatsappNumber = '+553538216262';
  const whatsappMsg    = 'Olá, gostaria de fazer uma cotação com o comercial da Rodrimar.';

  return (
    <Root>
      <Top>
        <LogoCol>
          <img src={rodrimarNoBG} alt="Transporte Rodrimar" />
          <Tagline>Transporte de cargas com<br />dedicação desde 1970.</Tagline>
        </LogoCol>

        <NavCol>
          <ColTitle>Navegação</ColTitle>
          {FOOTER_LINKS.map(({ label, id }) => (
            <NavLink key={id} onClick={() => scrollTo(id)}>{label}</NavLink>
          ))}
        </NavCol>

        <ContactCol>
          <ColTitle>Contato</ColTitle>
          <ContactLine>comercial@rodrimar.net</ContactLine>
          <ContactLine>(35) 3821-6262</ContactLine>
          <ContactLine>
            Rua Rosa Kasinski, 1195<br />
            Distrito Industrial, Lavras-MG
          </ContactLine>
        </ContactCol>

        <SocialCol>
          <ColTitle>Redes Sociais</ColTitle>
          <SocialRow>
            <SocialLink
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Rodrimar"
            >
              <BsInstagram />
            </SocialLink>
            <SocialLink
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Rodrimar"
            >
              <BsWhatsapp />
            </SocialLink>
          </SocialRow>
        </SocialCol>
      </Top>

      <Bottom>
        <BottomText>
          © {new Date().getFullYear()} Transporte Rodrimar. Todos os direitos reservados.
        </BottomText>
        <BottomLink
          href="https://www.alphawebrasil.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por AlphaWeb
        </BottomLink>
      </Bottom>
    </Root>
  );
}

const Root = styled.footer`
  background: var(--navy-deep);
  color: var(--text-light);
`;

const Top = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 48px;
  display: grid;
  grid-template-columns: 2fr 1fr 1.6fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 48px 24px;
    gap: 36px;
  }
`;

const LogoCol = styled.div`
  img {
    height: 48px;
    width: auto;
    object-fit: contain;
    opacity: 0.90;
    display: block;
    margin-bottom: 16px;
  }
`;

const Tagline = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-light-muted);
`;

const ColTitle = styled.h4`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 20px;
`;

const NavCol = styled.div``;

const NavLink = styled.button`
  display: block;
  background: none;
  border: none;
  color: var(--text-light-muted);
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 0;
  text-align: left;
  transition: color 0.2s ease;

  &:hover { color: var(--amber); }
`;

const ContactCol = styled.div``;

const ContactLine = styled.p`
  font-size: 13px;
  line-height: 1.75;
  color: var(--text-light-muted);
  margin-bottom: 10px;
`;

const SocialCol = styled.div``;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 50%;
  color: var(--text-light-muted);
  font-size: 17px;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #ffffff;
    border-color: var(--amber);
    background: var(--amber-faint);
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.06);
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
  }
`;

const BottomText = styled.span`
  font-size: 13px;
  color: var(--text-light-muted);
`;

const BottomLink = styled.a`
  font-size: 13px;
  color: var(--text-light-muted);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover { color: var(--amber); }
`;

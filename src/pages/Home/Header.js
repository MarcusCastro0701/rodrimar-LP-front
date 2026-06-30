import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/newLogoTRWhiteNoBG1.png';

const NAV_ITEMS = [
  { label: 'Início',         id: 'hero' },
  { label: 'Sobre Nós',      id: 'sobre-nos' },
  { label: 'Valores',        id: 'valores' },
  { label: 'Nossa História', id: 'nossa-historia' },
  { label: 'Segmentos',      id: 'segmentos' },
  { label: 'Contato',        id: 'contato' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);

      const sections = NAV_ITEMS
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setActiveId(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <Root $scrolled={scrolled}>
      <Inner>
        <LogoWrap onClick={() => handleNav('hero')}>
          <img src={logo} alt="Transporte Rodrimar" />
        </LogoWrap>

        <Nav aria-label="Navegação principal">
          {NAV_ITEMS.map(({ label, id }) => (
            <NavBtn key={id} $active={activeId === id} onClick={() => handleNav(id)}>
              {label}
            </NavBtn>
          ))}
        </Nav>

        <Burger
          $open={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </Burger>
      </Inner>

      <Drawer $open={menuOpen} role="navigation" aria-label="Menu mobile">
        {NAV_ITEMS.map(({ label, id }) => (
          <DrawerBtn key={id} onClick={() => handleNav(id)}>
            {label}
          </DrawerBtn>
        ))}
      </Drawer>
    </Root>
  );
}

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ $scrolled }) =>
    $scrolled
      ? 'var(--navy-deep)'
      : 'linear-gradient(to bottom, rgba(7,30,61,0.88) 0%, transparent 100%)'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled }) =>
    $scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'};
  transition: background 0.35s ease, border-color 0.35s ease;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
  height: 72px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const LogoWrap = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  img {
    height: 42px;
    width: auto;
    object-fit: contain;
  }
  &:hover img { opacity: 0.8; }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavBtn = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? 'var(--amber)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--amber)' : 'var(--text-light)')};
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  cursor: pointer;
  padding: 4px 0;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--amber);
    border-bottom-color: var(--amber);
  }
`;

const Burger = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  `}
`;

const Drawer = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    background: var(--navy-deep);
    border-top: 1px solid rgba(255,255,255,0.07);
    max-height: ${({ $open }) => ($open ? '400px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

const DrawerBtn = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: var(--text-light);
  font-family: 'Lexend Deca', sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 16px 24px;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: var(--amber);
    background: var(--amber-faint);
  }
`;

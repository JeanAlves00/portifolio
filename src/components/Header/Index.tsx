import { useState } from 'react'
import * as S from './styles'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    return (
        <S.Header>
            <S.HeaderContainer>
                <S.HeaderTop>
                    <S.Logo href="#home" onClick={handleMenuClose}>
                        <S.LogoIcon>
                            <div className="logo-glow"></div>
                            <div className="logo-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                </svg>
                            </div>
                        </S.LogoIcon>
                        <S.LogoText>
                            <div className="title">DEV<span>CODE</span></div>
                            <div className="dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </S.LogoText>
                    </S.Logo>
                    
                    <S.Nav>
                        <S.NavLink href="#home">
                            <span>HOME</span>
                            <div className="bg"></div>
                            <div className="underline"></div>
                        </S.NavLink>
                        <S.NavLink href="#about">
                            <span>SOBRE</span>
                            <div className="bg"></div>
                            <div className="underline"></div>
                        </S.NavLink>
                        <S.NavLink href="#projects">
                            <span>PROJETOS</span>
                            <div className="bg"></div>
                            <div className="underline"></div>
                        </S.NavLink>
                        <S.NavLink href="#skills">
                            <span>HABILIDADES</span>
                            <div className="bg"></div>
                            <div className="underline"></div>
                        </S.NavLink>
                        <S.NavLink href="#contact">
                            <span>CONTATO</span>
                            <div className="bg"></div>
                            <div className="underline"></div>
                        </S.NavLink>
                    </S.Nav>
                    
                    <S.MobileMenuButton 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        $open={menuOpen}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </S.MobileMenuButton>
                </S.HeaderTop>

                <S.MobileMenu $open={menuOpen}>
                    <S.MobileNavLink href="#home" onClick={handleMenuClose}>HOME</S.MobileNavLink>
                    <S.MobileNavLink href="#about" onClick={handleMenuClose}>SOBRE</S.MobileNavLink>
                    <S.MobileNavLink href="#projects" onClick={handleMenuClose}>PROJETOS</S.MobileNavLink>
                    <S.MobileNavLink href="#skills" onClick={handleMenuClose}>HABILIDADES</S.MobileNavLink>
                    <S.MobileNavLink href="#contact" onClick={handleMenuClose}>CONTATO</S.MobileNavLink>
                </S.MobileMenu>
            </S.HeaderContainer>
            <S.HeaderBar />
        </S.Header>
    )
}

export default Header

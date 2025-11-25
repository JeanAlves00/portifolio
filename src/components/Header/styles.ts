import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    transition: all 0.3s;
    background: transparent;
`;

export const HeaderContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    width: 100%;
`;

export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    width: 100%;

    @media (max-width: 767px) {
        height: 70px;
    }
`;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    flex-shrink: 0;
    
    &:hover .logo-glow {
        opacity: 1;
    }

    @media (max-width: 767px) {
        gap: 8px;
    }
`;

export const LogoIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .logo-glow {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #FDC700 0%, #FF1493 50%, #9810FA 100%);
        filter: blur(12px);
        opacity: 0.75;
        transition: opacity 0.3s;
        animation: pulse 2s infinite;
        border-radius: 4px;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.75; }
        50% { opacity: 1; }
    }
    
    .logo-box {
        position: relative;
        background: linear-gradient(135deg, #FDC700 0%, #FF6900 100%);
        padding: 12px;
        border: 4px solid #FFF;
        box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.30);
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg {
            width: 24px;
            height: 24px;
            color: #4A0080;
        }

        @media (max-width: 767px) {
            padding: 8px;
            border: 3px solid #FFF;
            
            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
`;

export const LogoText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    
    .title {
        font-size: 24px;
        color: white;
        letter-spacing: 2px;
        font-weight: bold;
        line-height: 1;
        
        span {
            color: #FDC700;
        }

        @media (max-width: 767px) {
            font-size: 16px;
            letter-spacing: 1px;
        }
    }
    
    .dots {
        display: flex;
        gap: 4px;
        
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            animation: blink 1.4s infinite;
            
            &:nth-child(1) {
                background: #FF0000;
            }
            
            &:nth-child(2) {
                background: #FDC700;
                animation-delay: 0.2s;
            }
            
            &:nth-child(3) {
                background: #00FF00;
                animation-delay: 0.4s;
            }

            @media (max-width: 767px) {
                width: 5px;
                height: 5px;
            }
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    
    @media (max-width: 767px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    position: relative;
    padding: 8px 20px;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    overflow: hidden;
    letter-spacing: 1.2px;
    font-size: 13px;
    white-space: nowrap;
    
    &:hover {
        color: #FDC700;
        
        .bg {
            transform: translateX(0);
        }
        
        .underline {
            transform: scaleX(1);
        }
    }
    
    span {
        position: relative;
        z-index: 10;
    }
    
    .bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, #FF1493, #9810FA, #0080FF);
        transform: translateX(-100%);
        transition: transform 0.3s;
    }
    
    .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #FDC700, #FF1493, #9810FA);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s;
    }
`;

export const MobileMenuButton = styled.button<{ $open: boolean }>`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 44px;
    height: 44px;
    padding: 10px;
    background: linear-gradient(135deg, #FF1493, #9810FA);
    border: 3px solid white;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 101;
    flex-shrink: 0;
    
    @media (max-width: 767px) {
        display: flex;
    }
    
    span {
        width: 100%;
        height: 2px;
        background: white;
        border-radius: 2px;
        transition: all 0.3s ease;
        transform-origin: center;
        
        &:nth-child(1) {
            transform: ${({ $open }) => $open ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'};
        }
        
        &:nth-child(2) {
            opacity: ${({ $open }) => $open ? '0' : '1'};
        }
        
        &:nth-child(3) {
            transform: ${({ $open }) => $open ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'};
        }
    }
`;

export const MobileMenu = styled.nav<{ $open: boolean }>`
    position: fixed;
    top: 78px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #2a0052 0%, #1a003b 100%);
    border-top: 4px solid rgba(255, 255, 255, 0.1);
    max-height: ${({ $open }) => $open ? '400px' : '0'};
    overflow-y: auto;
    transition: max-height 0.3s ease;
    z-index: 40;
    
    @media (min-width: 768px) {
        display: none;
    }
    
    @media (max-width: 767px) {
        top: 70px;
    }
`;

export const MobileNavLink = styled.a`
    display: block;
    padding: 14px 24px;
    background: linear-gradient(90deg, rgba(255, 20, 147, 0.15) 0%, rgba(152, 16, 250, 0.15) 100%);
    border-left: 4px solid #FDC700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    letter-spacing: 1px;
    font-size: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:hover {
        background: linear-gradient(90deg, rgba(255, 20, 147, 0.3) 0%, rgba(152, 16, 250, 0.3) 100%);
        padding-left: 32px;
        color: #FDC700;
    }
    
    &:active {
        background: linear-gradient(90deg, #FF1493 0%, #9810FA 100%);
    }
`;

export const HeaderBar = styled.div`
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #FB2C36 0%, #FDC700 25%, #00FF00 50%, #0080FF 75%, #9810FA 100%);

    @media (max-width: 767px) {
        height: 5px;
    }
`;
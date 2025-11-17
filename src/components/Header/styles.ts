import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    width: 100%px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    display: flex;
    height: 88px;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    width: 56px;
    height: 56px;

    div {
        display: flex;
        width: 56px;
        height: 56px;
        padding: 16px 16px 4px 16px;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        border: 4px solid #FFF;
        background: linear-gradient(135deg, #FDC700 0%, #FF6900 100%);
        box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.30);
    }
    
`;

export const HeaderBar = styled.div`
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #FB2C36 0%, #FDC700 50%, #9810FA 100%);
`;
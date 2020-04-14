import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    background: #0e1a33;
    height: 50vh;
    width: 100%;
    margin-bottom: auto;
`;

export const Section = styled.section`
    display: grid;
    grid-template-rows: 4fr 2fr 1fr;

    width: 100%;
    max-width: 650px;
    margin-top: 120px;
    margin-bottom: 30px;
    height: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 5px 5px 5px #939598;

    .Icons {
        height: 50px;
        width: 50px;
        transition: color 0.6s;

        :hover {
            color: #8dc63f
            }        
    }
`;
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Img = styled.img`
    position: relative;
    left: 33%;
    margin-top: 50px;
    border-radius: 200px;
    height: 35%;
`;

export const Linha = styled(Link)`
    .leftIcon {
        color: #FFF;
        height: 40px;
        width: 40px;
        margin-top: 17px;
        margin-left: 17px;
    }
`;
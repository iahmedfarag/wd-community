import { BsDiscord } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    return (
        <Wrapper>
            <Link to={`https://discord.gg/WVdb5G4T`} className="discord">Discord<BsDiscord /></Link>
            <Link to={`https://forms.gle/ELuMGrhfo8XF9bSbA`} className="apply">APPLY</Link>
        </Wrapper>
    )
}
const Wrapper = styled.footer`
    background-color: var(--black);
    padding: 40px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 20px;
    margin-top: 50px;
    a {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        &:hover {
            opacity: 0.7;
        }
    }
    .discord {
        color: #5865F2;
        background-color: #333;
        gap: 5px;
    }
    .apply {
        background-color: var(--main-red);
        color: var(--white);
    }
`
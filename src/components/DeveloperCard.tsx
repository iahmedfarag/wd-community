import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiFillLinkedin } from 'react-icons/ai'

export default function DeveloperCard() {
    return (
        <Wrapper>
            <h3>Developer 1 </h3>
            <div className="info">
                <p>Name: <span>Ahmed Farag</span></p>
                <p>Title: <span>Front-End Developer (React.js)</span></p>
                <p>Github Link: <Link to={`https://github.com/iahmedfarag`}>Click</Link></p>
                <p><AiFillLinkedin />Linkedin Link: <Link to={`https://linkedin.com`}>Click</Link></p>
                <p>CV Link: <Link to={`https://drive.google.com/drive/my-drive`}>Click</Link></p>
            </div>
            <hr />
        </Wrapper>
    )
}

const Wrapper = styled.article`
    width: 100%;
    h3 {
        margin-bottom: 10px;
        border-bottom: 1px solid var(--main-red);
        width: fit-content;
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
            display: flex;
            align-items: center;
            gap: 5px;
        span,a {
            font-weight: bold;
        }
    }
    }
    
`
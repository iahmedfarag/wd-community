import styled from "styled-components"
import { AiFillYoutube } from "react-icons/ai"
export default function Hero() {
    return (
        <Wrapper>
            <div className="container">
                <h2>WHO WE ARE</h2>
                <p>
                    We will be a group of <span> web developers </span> who are passionate about connecting,
                    sharing projects, and getting feedback from our peers.
                    <br />
                    We also have weekly Discord calls where we will try to invite <span> HR professionals </span>,
                    <span> senior developers </span>, and <span> technical experts </span> to comment on our CVs and code.
                </p>
                <h3>We record our weekly Discord calls and upload them to YouTube. <AiFillYoutube /></h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 30px 0;
    padding: 50px 0;
    background-color: var(--white);
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        p {
            line-height: 1.5;
            font-size: 20px;
            span {
                border-bottom: 2px solid var(--main-red);
            }
        }
        .hero {
            background-color: var(--white);
        }
        h3 {
            display: flex;
            align-items: center;
            svg {
                color: red;
            }
        }
    }
    @media(max-width: 768px) {
        padding: 30px 0;
        .container {
            p {
                font-size: 18px;
            }
        }
    }
    @media(max-width: 576px) {

    }


`
import styled from "styled-components"
import { AiFillYoutube } from "react-icons/ai"
export default function Hero() {
    return (
        <Wrapper>
            <div className="container">
                <h2>WHO WE ARE</h2>
                <p>
                    We will be a group of web developers who are passionate about connecting,
                    sharing projects, and getting feedback from our peers.
                    <br />
                    We also have weekly Discord calls where we will try to invite HR professionals,
                    senior developers, and technical experts to comment on our CVs and code.
                </p>
                <p className="second">
                    We believe that everyone in our community has something to offer,
                    <br />
                    and we're committed to creating a welcoming and supportive environment where everyone can learn and grow.
                    <br />
                    Whether you're a beginner just starting out,
                    or a seasoned developer looking for new challenges,
                    we encourage you to join us and become part of our community.
                </p>
                <div className="benefits">
                    <h2>Here are just a few of the benefits of joining our community:</h2>
                    <br />
                    <ul>
                        <li>Connect with other web developers.</li>
                        <li>Share your projects and get feedback from your peers.👌</li>
                        <li>Learn from experienced HR professionals, senior developers, and technical experts.✍️</li>
                        <li>Get help with your CV and code.</li>
                        <li>Find new job opportunities.</li>
                        <li>Make lifelong friends and collaborators.🤝</li>
                        <li>Learn from the mistakes and successes of others.</li>
                    </ul>
                </div>
                <h3>We record our weekly Discord calls and upload them to YouTube. <AiFillYoutube /></h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px 0;
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        p {
            line-height: 1.5;
            font-size: 20px;
        }
        .benefits {
            ul {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-left: 30px;
                li {
                    font-size: 20px;
                }
            }
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
            .second {
                display: none;
            }
            p {
                font-size: 18px;
            }
            .benefits {
                ul {
                    li {
                        font-size: 18px;
                    }
                }
            }
        }
    }
    @media(max-width: 576px) {

    }


`
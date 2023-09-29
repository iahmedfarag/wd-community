import styled from "styled-components"
import { AiFillYoutube } from "react-icons/ai"
import { Link } from "react-router-dom"
import DeveloperCard from "../components/DeveloperCard"

export default function CallDetails() {
    return (
        <Wrapper>
            <div className="container">
                <h2>Fresh / Junior Web Developers Present Projects And CVS To Senior & HRS (1) -- DETAILS</h2>
                <div className="call">
                    <div className="details">
                        <p>Video <AiFillYoutube />: <Link to={`https://youtube.com`}>Click</Link></p>
                        <p>Date: <span>00/00/2023</span></p>
                        <p>Senior: <span>Ahmed Ahmed</span></p>
                        <p>HR: <span>Ahmed Ahmed</span></p>
                        <p className="devs">Web Developers: <span>11</span> Presented</p>
                    </div>

                    <div className="developers">
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                        <DeveloperCard />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
padding: 50px 0;
    .container {
        h2 {
            margin-bottom: 20px;
        }
        .call {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        .details {
            width: 300px;
            background-color: var(--white);
            padding: 10px 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            p {
                display: flex;
                align-items: center;
                gap: 5px;
                svg {
                    color: red;
                }
                span {
                    font-weight: bold;
                }
                &.devs {
                    span {
                        color: var(--main-red);
                    }
                }
            }
            
        }
        .developers {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 20px;
            width: calc(100% - 320px);
            background-color: var(--white);
            padding: 10px;
        }
        }
    }
    @media(max-width: 992px) {

    }
    @media(max-width: 768px) {
        padding: 30px 0;
        .container {
            .call {

                .details {
                    width: 100%;
                }
                .developers {
                    width: 100%;
                }
            }
        }
    }
    @media(max-width: 576px) {

    }

`
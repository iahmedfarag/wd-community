
import styled from "styled-components"
import { Link } from 'react-router-dom'
import partner from '../assets/partner.svg'
import { AiFillLinkedin } from 'react-icons/ai'
export default function PartnerCard() {
    return (
        <Wrapper className="partner">
            <div className="img">
                <img src={partner} alt="partner-image" />
            </div>
            <div className="info">
                <p>Ahmed Ahmed</p>
                <p>Lead 3D Graphics Software Engineer</p>
                <Link to={`https://linkedin.com`}>Linkedin  <AiFillLinkedin /></Link>
            </div>
            <p></p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
            width: calc((100% / 4) - (60px / 4));
            background-color: var(--white);
            position: relative;
            .img {
                img {
                    width: 100%;
                    height: 180px;
                }
            }
            .info {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 20px 10px;
                p {
                    font-size: 18px;
                }
                a {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    svg {
                        color: #0077b5;
                    }
                    &:hover {
                        color: #0077b5;
                    }
                }
            }
            &:hover > p{
                width: 100%;
            }
            >p {
                position: absolute;
                bottom: -2px;
                left: 0;
                height: 2px;
                width: 0px;
                background-color: var(--main-red);
                transition: 0.3s;
            }


            @media(max-width: 992px) {
            width: calc((100% / 3) - (40px / 3));

            }
            @media(max-width: 768px) {
                width: calc((100% / 2) - (20px / 2));
                
            }
            @media(max-width: 576px) {
                width: 100%;
                
            }


`
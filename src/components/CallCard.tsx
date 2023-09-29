
import styled from "styled-components"
import { Link } from 'react-router-dom'
import thumb from "../assets/thumb.png"
export default function CallCard() {
    return (
        <Wrapper>
            <Link to={`/`} className="img">
                <img src={thumb} alt="youtube-thumbanil" />
            </Link>
            <div className="details">
                <Link to={`https://youtube.com`}>Fresh / Junior Web Developers Present Projects And CVS To Senior & HRS (1)</Link>
                <p>Date: <span>00/00/2023</span></p>
                <p>Senior: <span>Eng: Ahmed Ahmed</span></p>
                <p>HR: <span>Mr: Ahmed Ahmed</span></p>
                <p className="devs">Web Developers: <span>11</span> Presented</p>
                <Link to={`/calls/1`} className="more">MORE DETAILS</Link>
            </div>
            <p></p>
        </Wrapper>
    )
}
const Wrapper = styled.article`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: calc((100%/3) - (40px / 3));
background-color: var(--white);
position: relative;
    .img {
        &:hover {
            opacity: 0.7;
        }
        img {
            width: 100%;

        }
    }
    .details {
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        a {
            line-height: 1.5;
            &:hover {
                color: var(--main-red);
            }
        }
        p {
            &.devs {
                span {
                    color: var(--main-red);
                }
            }
        }
        a.more {
            background-color: var(--main-red);
            width: fit-content;
            padding: 2px 4px;
            color: var(--white);
            &:hover {
                background-color: var(--light-red);
            }
        }
    }

    &:hover > p{
        width: 100%;
    }
    > p {
                position: absolute;
                bottom: -2px;
                left: 0;
                height: 2px;
                width: 0px;
                background-color: var(--main-red);
                transition: 0.3s;
            }

    @media(max-width: 992px) {
    width: calc((100%/2) - (20px / 2));

    }
    @media(max-width: 768px) {
        width: calc(100%);

    }
    @media(max-width: 576px) {

    }
       


`
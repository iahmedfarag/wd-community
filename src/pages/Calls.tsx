
import styled from "styled-components"
import { AiFillYoutube } from "react-icons/ai"
import CallCard from "../components/CallCard"

export default function Calls() {
    return (
        <Wrapper>
            <div className="container">
                <h2>Our calls that we have done so far <AiFillYoutube /></h2>
                <div className="calls">
                    <CallCard />
                    <CallCard />
                    <CallCard />
                    <CallCard />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px 0;
    h2 {
        margin-bottom: 20px;
        svg {
                color: red;
            }
    }
    .calls {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    @media(max-width: 768px) {
        padding: 30px 0;

    }

`
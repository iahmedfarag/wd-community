import styled from "styled-components"
import PartnerCard from "../components/PartnerCard"

export default function Partners() {
    return (
        <Wrapper>
            <div className="container">
                <h2>Our Partners who want to help OTHERS ❤️</h2>
                <div className="partners">
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
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
        .partners {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
      
        }
    }
    @media(max-width: 992px) {
        .container {
            .partners {
                gap: 15px;
            }
        }

    }
    @media(max-width: 768px) {
        padding: 30px 0;
    }
    @media(max-width: 576px) {

    }


`
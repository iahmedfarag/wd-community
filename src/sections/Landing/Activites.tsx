
import styled from "styled-components"
import img from "../../assets/event.jpg"

export default function Activites() {
    return (
        <Wrapper>
            <div className="container">
                <h2>ACTIVITES</h2>
                <div className="event">
                    <div className="img"><img src={img} alt="event-img" /></div>
                    <div className="details">
                        <h3>😂 ماتش كوره⚽ للمبرمجين فقط </h3>
                        <ul>
                            <li><span>هنشوف</span> :الميعاد</li>
                            <li><span>هنشوف</span> :المكان</li>
                            <li><span>هنعمل فورم للناس المهتمه</span> :اسجل ازاى</li>
                            <li><span>هنعمل واتساب او ديسكور حاجه خاصه للناس المهتمه بالماتش او الايفنت</span> :هنجمع ازاى</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    .container {
        h2 {
            margin-bottom: 20px;
        }
        .event {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            .img {
                width: calc((100% / 2) - (20px / 2));
                img {
                    width: 100%;
                }
            }
            .details {
                width: calc((100% / 2) - (20px / 2));
                h3 {
                    text-align: right;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    li {
                        display: flex;
                        gap: 10px;
                        justify-content: right;
                        text-align: right;
                        font-size: 20px;
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
        }


    }

    @media(max-width: 768px) {
        .container {
            .event {
                .img {
                    width: 100%;
                }
                .details {
                    width: 100%;
                }
            }
        }
    }
 
`
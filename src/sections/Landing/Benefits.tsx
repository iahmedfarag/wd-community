import styled from 'styled-components'

export default function Benefits() {
    return (
        <Wrapper className="benefits">
            <div className="container">
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
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 30px 0;
    padding: 50px 0;
.container {

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

            @media(max-width: 768px) {
        padding: 30px 0;
        .container {
            .benefits {
                ul {
                    li {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`
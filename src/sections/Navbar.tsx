import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useRef, useState } from "react"

export default function Navbar() {
    const [height, setHeight] = useState<number>(0)
    const ref = useRef(null)


    const handleMenu = () => {
        if (height === 0) {
            if (ref.current) {
                setHeight(ref.current[`scrollHeight`] + 10)
            }
        } else {
            setHeight(0)
        }
    }
    return (
        <Wrapper>
            <div className="container">
                <Link to={`/`} className="logo">
                    <span>WD</span> Community
                    <p></p>
                </Link>
                <div className="links">
                    <NavLink to={`/calls`}>Calls</NavLink>
                    <NavLink to={`/partners`}>Partners</NavLink>
                </div>
                <Link to={`https://forms.gle/ELuMGrhfo8XF9bSbA`} target="_blank" className="apply">APPLY</Link>
                <button className="menu" onClick={handleMenu}>MENU {height === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                <div className="links-phone" ref={ref} style={{ height: `${height}px` }}>
                    <div className="links">
                        <NavLink to={`/calls`}>Calls</NavLink>
                        <NavLink to={`/partners`}>Partners</NavLink>
                    </div>
                    <Link to={`https://forms.gle/ELuMGrhfo8XF9bSbA`} target="_blank" className="apply">APPLY</Link>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.nav`
    padding: 50px 0;
    background-color: var(--white);
    position: relative;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            position: relative;
            font-size: 30px;
            span {
                border-bottom: 2px solid var(--main-red);
            }
            &:hover p {
                width: 100%;
            }
            p {
                position: absolute;
                bottom: -2px;
                left: 0;
                height: 2px;
                width: 0px;
                background-color: var(--main-red);
                transition: 0.3s;
            }
        }
        .links {
            display: flex;
            gap: 20px;
            a {
                font-size: 22px;
                transition: 0.2s;
                &:hover {
                    color: var(--main-red);
                }
                &.active {
                    color: var(--main-red);
                }
            }
        }
        .apply {
            padding: 10px 30px;
            background-color: var(--main-red);
            transition: 0.3s;
            color: var(--white);

            &:hover {
                background-color: var(--light-red);
            }
        }
    }

    .menu {
        display: none;
    }
    .links-phone {
        display: none;
    }
    @media(max-width: 768px) {
        padding: 30px 0;
    }

    @media(max-width: 576px) {
        .container {
            .menu {
                display: flex;
                align-items: center;
                font-weight: bold;
                background-color: var(--main-red);
                padding: 5px 10px;
                color: var(--white);
            }
            > .links {
                display: none;
            }
            > .apply {
                display: none;
            }
            .links-phone {
                display: block;
                position: absolute;
                width: 100%;
                right: 0;
                top: 90px;
                background-color: var(--white);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                padding: 0; //
                height: 0; // 
                overflow: hidden; //
                transition: 0.3s;
                z-index: 44;
                .links {
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                    a {
                        font-size: 18px;
                        text-align: center;
                        padding: 5px;
                    }
                }
                .apply {
                    padding: 5px 10px;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }

`


import { IoIosContact } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosFingerPrint } from "react-icons/io";
import Wrapper from "@/components/wrapper";
// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/components/_splashscreen.scss";
import "@/styles/pages/_login.scss";


export default function Login() {

    return (
        <>
                <Wrapper>
                    <section className="login">
                        <h2 className="login__title">Log In</h2>
                        <form className="login__form">
                            <div className="login__form-group">
                                <label className="login__label" htmlFor="username">Username</label>
                                <input
                                    className="login__input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    required
                                />
                                <IoIosContact className="login__icon" />

                            </div>
                            <div className="login__form-group">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input
                                    className="login__input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                />
                                <IoIosKey className="login__icon" />
                            </div>
                            <div className="login__button">
                                <Link href={
                                    `https://accounts.spotify.com/authorize?`
                                    + `response_type=code`
                                    + `&client_id=${process.env.CLIENT_ID}`
                                    + `&scope=user-read-private%20user-read-email`
                                    + `&redirect_uri=${process.env.CALLBACK_URL}`
                                } className="login__link">Log in</Link>
                            </div>
                        </form>
                        <div className="touch">
                            <IoIosFingerPrint className="touch__icon" />
                        </div>
                        <p className="touch__text">one-touch login</p>
                    </section>
                </Wrapper>
        </>
    );
}
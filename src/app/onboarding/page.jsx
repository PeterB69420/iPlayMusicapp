"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/pages/_onboarding.scss";
import { IoRadioSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { IoIosMusicalNote } from "react-icons/io";
import Wrapper from "@/components/wrapper";

export default function Onboarding() {
   

    return (
        <Wrapper>
            <section className="onboarding-hero">
                <img
                    className="onboarding-hero__image"
                    src="/onboardingimage.png"
                    alt=""
                />
            </section>
            <section className="onboarding">
                
                    <div className="onboarding__step onboarding__step--welcome">
                        <div className="onboarding__content">
                            <h2 className="onboarding__title">where words fail, music speaks</h2>
                            <p className="onboarding__description">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                        </div>
                        <div className="onboarding__icons">
                            <div className="onboarding__icon-item--active">
                                <IoRadioSharp className="onboarding__icon onboarding__icon--radio" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosHeart className="onboarding__icon onboarding__icon--heart" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosMusicalNote className="onboarding__icon onboarding__icon--note" />
                            </div>
                        </div>
                        <Link href="/" className="onboarding__button">skip</Link>
                    </div>
                
                
                    {/* <div className="onboarding__step onboarding__step--music">
                        <div className="onboarding__content">
                            <h2 className="onboarding__title">no music no life</h2>
                            <p className="onboarding__description">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                        </div>
                        <div className="onboarding__icons">
                            <div className="onboarding__icon-item">
                                <IoRadioSharp className="onboarding__icon onboarding__icon--radio" />
                            </div>
                            <div className="onboarding__icon-item--active">
                                <IoIosHeart className="onboarding__icon onboarding__icon--heart" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosMusicalNote className="onboarding__icon onboarding__icon--note"/>
                            </div>
                        </div>
                        <Link href="/featured" className="onboarding__button">skip</Link>
                    </div>
                
                
                    <div className="onboarding__step onboarding__step--finish">
                        <div className="onboarding__content">
                            <h2 className="onboarding__title">peace, love and music</h2>
                            <p className="onboarding__description">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                        </div>
                        <div className="onboarding__icons">
                            <div className="onboarding__icon-item">
                                <IoRadioSharp className="onboarding__icon onboarding__icon--radio" />
                            </div>
                            <div className="onboarding__icon-item">
                                <IoIosHeart className="onboarding__icon onboarding__icon--heart" />
                            </div>
                            <div className="onboarding__icon-item--active">
                                <IoIosMusicalNote className="onboarding__icon onboarding__icon--note" />
                            </div>
                        </div>
                        <Link href="/featured" className="onboarding__button">skip</Link>
                    </div>
                 */}
            </section>
        </Wrapper>

    );
}
"use client";


import Link from "next/link";
import "@/styles/pages/_onboarding.scss";
import { IoRadioSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { IoIosMusicalNote } from "react-icons/io";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function Onboarding() {
   

    return (
        <Wrapper>
            <section className="onboarding-hero">
                <Image src="/onboardingimage.png" alt="Onboarding Hero" width={1920} height={1080} className="onboarding-hero__image" />
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
            </section>
        </Wrapper>

    );
}
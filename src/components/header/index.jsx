"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Header({ heading, search = false, color = "black" }) {
    const router = useRouter();

    return (
        <header className="header" style={{ color }}>
            <div className="header-icon__div">
                <IoIosArrowBack
                    size={24}
                    onClick={() => router.back()}
                    className="headerSide__icon"
                />
            </div>
            <h1 className="header__title" style={{ color }}>{heading}</h1>
            <div className="header-icon__div">
                {search ? <IoIosSearch size={24} className="header__icon" /> : ""}
            </div>
        </header>
    )
}

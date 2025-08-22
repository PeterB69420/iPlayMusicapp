"use client";
import "@/styles/components/_footer.scss";
import { IoIosAlbums } from "react-icons/io";
import { TbBroadcast } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import Link from "next/link";

export default function Footer() {
    return (
        <nav className="dock">
            <ul className="dock__list">
                <li className="dock__item">
                    <Link
                        href="/categories"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <PiSquaresFour className="dock__icon" />
                    </Link>
                </li>
                <li className="dock__item">
                    <Link
                        href="/albums"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <IoIosAlbums className="dock__icon" />
                    </Link>
                </li>
                <li className="dock__item">
                    <Link
                        href="/"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <TbBroadcast className="dock__icon" />
                    </Link>
                </li>
                <li className="dock__item">
                    <Link
                        href="/playlist"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <CiBoxList className="dock__icon" />
                    </Link>
                </li>
                <li className="dock__item">
                    <Link
                        href="/"
                        className={({ isActive }) =>
                            `dock__link${isActive ? " dock__link--active" : ""}`
                        }
                    >
                        <IoMdSettings className="dock__icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
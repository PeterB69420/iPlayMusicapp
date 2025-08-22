"use client";
import Image from "next/image";
import Link from "next/link";

export default function AlbumsCard({ album }) {
    return (
        <Link href={`/album/${album.id}`} className="no-underline">
            <article>
                <div>
                    <Image
                        className="albums__featured-image"
                        src={album.images[0].url}
                        alt={`${album.name} cover`}
                        width={100}
                        height={100}
                    />
                </div>
            </article>
        </Link>
    )
}
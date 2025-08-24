"use client";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ album }) {
	return (
		<Link href={`/album/${album.id}`} className="no-underline">
			<article className="featured-card">
				<div className="image-wrapper">
					<Image
						unoptimized
						src={album.images[0].url}
						width={album.images[0].width}
						height={album.images[0].height}
						alt={album.name}
					/>
				</div>
				<div className="info-overlay">
					<h3>{album.name}</h3>
					<p className="artists">{album.artists.map((artist) => artist.name).join(", ")}</p>
					<p className="album-type">{album.album_type}</p>
				</div>
			</article>

		</Link>
	);
}

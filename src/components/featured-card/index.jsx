"use client";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ album }) {
	return (
		<Link href={`/album/${album.id}`} className="no-underline">
			<article className="relative overflow-hidden drop-shadow-lg">
				<div className="flex items-center justify-center w-full h-full">
					<Image
						unoptimized
						src={album.images[0].url}
						width={album.images[0].width}
						height={album.images[0].height}
						alt={album.name}
						className="object-contain rounded-2xl"
					/>
				</div>
				<div className="absolute bottom-8 left-8 right-6 text-white z-10">
					<h3 className="text-xl font-semibold drop-shadow-lg">{album.name}</h3>
					<p className="text-sm drop-shadow-md">
						{album.artists.map((artist) => artist.name).join(", ")}
					</p>
					<p className="uppercase drop-shadow-md">
						{album.album_type}
					</p>
				</div>
			</article>
		</Link>
	);
}

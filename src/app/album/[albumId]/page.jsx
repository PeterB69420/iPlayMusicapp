
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import { cookies } from "next/headers";
import Image from "next/image";
import "@/styles/pages/_albumsdetails.scss";
import Footer from "@/components/footer";
import AlbumSong from "@/components/album-song";

export async function generateMetadata({ params }) {
    const { albumId } = await params;
    const cookieStore = await cookies();

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/albums/" + albumId, {
        headers: {
            Authorization: "Bearer " + access_token.value
        }
    });

    const data = await response.json();

    return {
        title: data.name
    }
}

export default async function AlbumDetailPage({ params }) {
    const { albumId } = await params;
    const cookieStore = await cookies();

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/albums/" + albumId, {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
    });


    const data = await response.json();
    console.log(data);

    return (
        <>
            <Wrapper>

                <section className="album-hero">
                    <Image
                        className="album-hero__image"
                        src={data.images[0].url}
                        alt={`${data.name} cover`}
                        width={500}
                        height={500}

                    />
                    <div className="album-hero__header">
                        <Header heading="Album" color="white" />
                    </div>

                    <div className="album-hero__overlay">
                        <h2 className="album-hero__title">{data.name}</h2>
                        <p className="album-hero__song-count">{data.total_tracks} Songs</p>
                    </div>
                </section>
                <section className="album-songs">
                    <h2 className="album-songs__title">All Songs</h2>
                    <div className="album-songs__list-container">
                        {data.tracks.items.map(song => (
                            <AlbumSong key={song.id} song={song} />
                        ))}
                    </div>
                </section>
            </Wrapper>
            <Footer />
        </>
    );
}
import Header from "@/components/header";
import PlaylistSong from "@/components/playlist-song";
import Wrapper from "@/components/wrapper";
import { cookies } from "next/headers";
import "@/styles/pages/_playlist.scss";
import Footer from "@/components/footer";
import Image from "next/image";



export const metadata = {
    title: "Playlists"
}

export default async function PlaylistPage() {
    const cookieStore = await cookies();
    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/me/playlists?limit=1", {
        headers: {
            "authorization": `Bearer ${access_token.value}`
        }
    });

    const newresponse = await fetch("https://api.spotify.com/v1/playlists/5n4LCNHxFzn4Ovo7L4XYzU/tracks", {
        headers: {
            "authorization": `Bearer ${access_token.value}`
        }
    });

    const newdata = await newresponse.json();
    console.log("newdata", newdata);

    const data = await response.json();
    console.log("data", data);

    return (
        <>
            <Wrapper>
                <Header search heading='PLAYLISTS' />
                <section className="playlists">
                    <div className="playlists__list">
                        {data.items.map(playlist => (
                            <div key={playlist.id} className="playlists__item">
                                <Image width={200} height={200} src={playlist.images[0]?.url} alt={playlist.name} className="playlists__thumb" />
                            </div>
                        ))}
                    </div>
                    <section className="playlists__section">
                        <div className="playlists-songs__list-container">
                            {newdata.items.map(song => (
                                <PlaylistSong key={song.track.id} song={song.track} />
                            ))}
                        </div>
                    </section>
                </section>
            </Wrapper>
            <Footer />
        </>
    );
}
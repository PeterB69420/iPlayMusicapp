import AlbumsCard from "@/components/albums-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import "@/styles/pages/_albums.scss";
import { cookies } from "next/headers";


export const metadata = {
    title: "Albums"
}

export default async function Albums() {
    const cookieStore = await cookies();

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch(
        "https://api.spotify.com/v1/search?q=year:2025&type=album&limit=30",
        {
            headers: {
                "Authorization": `Bearer ${access_token.value}`
            }
        }
    );

    const newresponse = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
            "authorization": `Bearer ${access_token.value}`
        }
    });

    const data = await response.json();
    console.log("data", data);
    const newdata = await newresponse.json();
    console.log("newdata", newdata);
    return (
        <>
            <Wrapper>
                <Header search heading='MUSIC' />
                <section className="albums">
                    <h2 className="albums__title">all albums</h2>
                    <section className="albums__section">
                        <div className="albums__section-header">
                            <h2 className="albums__section-title">featured albums</h2>
                            <p className="albums__view-all">view all</p>
                        </div>
                        <div className="albums__featured-list">
                            {data.albums.items.map(albums => <AlbumsCard key={albums.id} album={albums} />)}
                        </div>
                    </section>
                    <section className="albums__section">
                        <div className="albums__section-header">
                            <h2 className="albums__section-title">new releases</h2>
                            <p className="albums__view-all">view all</p>
                        </div>
                        <div className="albums__list">
                            {newdata.albums.items.map(album => (
                                <div key={album.id} className="albums__item">
                                    <AlbumsCard album={album} />
                                    <div className="albums__info">
                                        <p className="albums__name">{album.name}</p>
                                        <p className="albums__artist">{album.artists.map(artist => artist.name).join(', ')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </Wrapper>
            <Footer />
        </>
    );
}
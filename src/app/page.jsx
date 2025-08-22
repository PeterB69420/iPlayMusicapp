
import FeaturedCard from "@/components/featured-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
// import Footer from "@/components/footer";
import Wrapper from "@/components/wrapper";
import "@/styles/pages/_featured.scss";
import { cookies } from "next/headers";

 export const metadata = {
 	title: "Featured"
 }


export default async function Featured() {
    const cookieStore = await cookies();    

    const access_token = cookieStore.get("ipm_access_token");

    const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
    });

    const data = await response.json(); 
    console.log("data", data);
    
    return (
        <>
            <Wrapper>
                 <Header search heading='FEATURED' /> 
                <section className="featured">
                    
                    
                    <div className="flex flex-col gap-4 ">
                        {data.albums.items.map(album => <FeaturedCard key={album.id} album={album} />)}
                    </div>
                    
                </section>
            </Wrapper>
             <Footer /> 
        </>
    );
}
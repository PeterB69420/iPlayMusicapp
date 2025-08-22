

import "@/styles/pages/_categories.scss";
import Wrapper from "@/components/wrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cookies } from "next/headers";

export const metadata = {
  title: "Categories"
}

export default async function Categories() {

  const cookieStore = await cookies();

  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch("https://api.spotify.com/v1/browse/categories", {
    headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
  });

  const data = await response.json();
  console.log("data", data);

  return (
    <>
      <Wrapper>
        <Header search heading="CATEGORIES" />
        <section className="categories">
          <div className="categories__list">
            {data.categories.items.map(category => (
              <div key={category.id} className="categories__item">
                <h3 className="categories__item-title">{category.name}</h3>
              </div>
            ))}
            </div>  
        </section>
      </Wrapper>
      <Footer />
    </>
  );
}

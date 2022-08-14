import React from "react";
import Navbar from "./Navbar";
import "./styles.css";

export default function Home() {
  return (
    <section>
      <div className="first-section-bg-img">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/327506e9-f0a6-4ae6-8115-97ea4c94268d/IN-en-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-background" style={{width: "100%", height: "100%"}}/>
      </div>
      <Navbar />
    </section>
  );
}
import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://cdn.pixabay.com/photo/2017/05/27/20/43/lagoon-2349401_1280.jpg"
          heading="Trip in Indonesia"
          text="Indonesia has the world’s fourth largest population and is the largest economy in Southeast Asia. The development of the country and its efforts to position itself more globally make Indonesia a highly interesting market in many areas. In the textile industry in particular, Indonesia is an attractive target market for the application of more sophisticated technologies and production methods. The size of the domestic market makes an important contribution to the production of the textile industry, which ranks 6th in a global comparison.  

"
        />

        <TripData
          image="https://cdn.pixabay.com/photo/2016/11/14/04/22/harvesting-1822578_1280.jpg"
          heading="Trip in Malaysia"
          text="Malaysia welcomes almost 25 million tourists annually, and for good reason – our colourful, multi-cultural and multi-religious nation is a multi-faceted gem that sparks as much interest with her quiet graces and natural attractions as her wild, thrilling ones. Visit Malaysia Year is a campaign event held from time to time to highlight the best of what Malaysia has to offer as a leading tourist destination in Asia.
"
        />

        <TripData
          image="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg"
          heading="Trip in France"
          text="he Declaration of the Rights of Man and of the Citizen came into existence in the summer of 1789, born of an idea of the Constituent Assembly, which was formed by the assembly of the Estates General to draft a new Constitution, and precede it with a declaration of principles.  

There were many proposals. The Constituent Assembly tasked five deputies – Démeunier, La Luzerne, Tronchet, Mirabeau et Redon – with examining the various draft declarations, combining them into a single one and presenting it to the Assembly. Article by article, the French declaration was voted on between 20 and 26 August 1789.
"
        />
      </div>
    </div>
  );
}

export default Trip;

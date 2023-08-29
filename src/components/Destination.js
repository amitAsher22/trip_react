import React from "react";
import "../components/DestinationStyles.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame. </p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano Batangas"
        text="Taal Volcano is part of a chain of volcanoes lining the western edge
          of the island of Luzon. They were formed by the subduction of the
          Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies
          within caldera formed by explosive eruptions between 140,000 and 5,380
          BP. Each of these eruptions created extensive ignimbrite deposits
          reaching as far away as present-day Manila."
        imge={
          "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
        }
        imge2={
          "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_1280.jpg"
        }
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mount Daguldol is within the vicinity of the town of San Juan in Batangas. Normally it will take you around 3 hours to reach the jump off point Barrio Hugom by private vehicle.

The site has been a favorite trekking location of mountaineers. Although quite new to other hikers, it was discovered by the University of the Philippines Mountaineers in the 1990’s."
        imge={
          "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg"
        }
        imge2={
          "https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_1280.jpg"
        }
      />
    </div>
  );
}

export default Destination;

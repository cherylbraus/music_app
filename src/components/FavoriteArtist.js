// import { useState, useEffect } from "react";

const FavoriteArtists = () => {
  const artistMap = [
    {
      name: "Incubus",
      src:
        "https://static.spin.com/files/2020/05/Incubus_PressPhoto_Color-1589238244.png"
    },
    {
      name: "Guster",
      src:
        "https://vuhaus-production.imgix.net/store/08ea4f53a037af563e53e55e61d45f6ae03da4cbbf67e0852a303522acb3?ixlib=rb-1.1.0&w=960&h=540&rect=0%2C684%2C2048%2C1151&q=70&dpr=1&fm=jpg"
    },
    {
      name: "Rage Against the Machine",
      src:
        "https://static.spin.com/files/2019/11/GettyImages-566789191-1572893068.jpg"
    },
    {
      name: "John Legend",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZZA48SQDi_JxnLSiBPQ0SlCDzeXlX8nq_g&usqp=CAU"
    },
    {
      name: "Silk Sonic",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwYx3GAXqQKl1dF4qdzv6sPvSVlYdw1iJ6A&usqp=CAU"
    },
    {
      name: "Beyonce",
      src:
        "https://pyxis.nymag.com/v1/imgs/071/2d3/0a4edbd6d2a2e0ea1d637e3f46c5e3e802-20220614-Tiffany-MasonPoole-02-0126-V7-S.rsquare.w700.jpg"
    },
    {
      name: "Sia",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSozZSqVeRhAqtVd_mXceuaChAp5beaZ61Og&usqp=CAU"
    },
    {
      name: "Foo Fighters",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSif4KNyNTwpFBUq8yYedfW9i18Tat__meypA&usqp=CAU"
    },
    {
      name: "Our Lady Peace",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiudxKm696d7wAfuUSPYuXP7Apkg6xzWzmKQ&usqp=CAU"
    }
  ];

  // QUESTION: When I tried doing just the {artistMap...}, it wouldn't let me

  return (
    <div className="artists">
      {artistMap.map((entry) => (
        <div className="artist">
          <div className="image">
            <img src={entry.src} alt={entry.name} />
          </div>
          <div className="name">{entry.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteArtists;

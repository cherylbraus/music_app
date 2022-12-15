import { useState, useEffect } from "react";
import {
  FavoriteBorder,
  PlayCircleOutline,
  Home,
  Search,
  LibraryMusicOutlined,
  AccountCircleOutlined
} from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import "./styles.css";
import FavoriteArtists from "./components/FavoriteArtist.js";
import MadeForYous from "./components/MadeForYou.js";
import RecentPlayeds from "./components/RecentPlayed.js";

// CSS QUESTIONS:
// 1. FORMATTING OF THE LIST
// 2. WHY DO YOU NEED TO USE useEffect() IN THIS CASE? IF YOU USE onChange FOR InputEvent, ISN'T THAT ENOUGH?

export default function App() {
  return (
    <div className="App">
      <h1 className="maintitle">Hello Cheryl!</h1>
      <h2 className="subtitle">Let's listen to something cool today</h2>
      <div className="verticalscroll">
        <section className="favorites">
          <h3 className="title">Your favorite artist</h3>
          <FavoriteArtists />
        </section>
        <section className="recents">
          <h3 className="title">Recent played</h3>
          <RecentPlayeds />
        </section>
        <section className="personals">
          <h3 className="title">Made for you</h3>
          <MadeForYous />
        </section>
        <section className="personals">
          <h3 className="title">Made for you</h3>
          <MadeForYous />
        </section>
        <section className="personals">
          <h3 className="title">Made for you</h3>
          <MadeForYous />
        </section>
      </div>
      <div className="currentlyplaying">
        <div className="cover">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAYjY0Gglh-1t2E890ptMmWj7vimltHwmoRjcCZC7RUi8du9phVzA2Lm0eNtAZflNlIM&usqp=CAU"
            alt="Morning View"
          />
        </div>
        <div className="songinfo">
          <div className="songtitle">Under My Umbrella</div>
          <div className="songartist">Incubus</div>
        </div>
        <div className="heart">{<FavoriteBorder className="icon" />}</div>
        <div className="progress">{<PlayCircleOutline className="icon" />}</div>
      </div>
      <div className="buttons">
        <div className="home">{<Home className="icon" />}</div>
        <div className="search">{<Search className="icon" />}</div>
        <div className="library">
          {<LibraryMusicOutlined className="icon" />}
        </div>
        {/* <div className="profile"> */}
        {<AccountCircleOutlined className="icon" />}
        {/* </div> */}
      </div>
    </div>
  );
}

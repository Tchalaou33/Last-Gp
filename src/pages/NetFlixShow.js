import React from "react";
import Row from "../components/Row/Row";
import api from "../api/api";


const NetFlixShow = () => {
    return (
        <div>
            {/* {Nav} */}
            {/* {Banner} */}
            <Row title="NETFLIX ORIGINALS" fetchUrl={api.NetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={api.fetchTrending} />
            <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
            <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
        </div>
    );
};

export default NetFlixShow;

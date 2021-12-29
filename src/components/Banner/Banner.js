import React, {useEffect, useState} from 'react';
import axios from "axios";
import api from "../../api/api";
import "./Banner.css";


const Banner = () => {
    const [movie, setMovie] = useSate([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`
            );
            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
        };
    });

    return (
        <div>
            
        </div>
    );
};

export default Banner;

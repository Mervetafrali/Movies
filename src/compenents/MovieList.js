import React from "react";
import { connect } from 'react-redux';
const MovieList = ({ loadingP, moviesP }) => {
    
    if (loadingP === true) {
        return (
            <div>
                <p>loading</p>
            </div>
        );
    }
    return (
        <div>
            {moviesP.map(item => (
                <div key={item.imdbID}>
                    <h5>{item.Title}</h5>
                    <img src={item.Poster}/>
                    <p> {item.Year}</p>
                </div>
            ))
            }

        </div>
    );
};
const mapStatetoProps = state => {
    return {
        //comp ne ilgilendiriyorsa onu bağlamamı gerekiyor 
        loadingP: state.app.loading,
        moviesP: state.app.movies,

    }
}
export default connect(mapStatetoProps)(MovieList);
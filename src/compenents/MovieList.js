import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const MovieList = ({ loadingP, moviesP, history }) => {
    //const History=userHistory(); //hook ile kullanmak istersek
    console.log("");
    const _onClick = id => {
        console.log("test :", id);
        history.push({ pathname: "/detay", state: { movieId: id } });

    };
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
                <div onClick={() => _onClick(item.imdbID)} key={item.imdbID}>
                    <h5>{item.Title}</h5>
                    <img src={item.Poster} />
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
export default withRouter(connect(mapStatetoProps)(MovieList));
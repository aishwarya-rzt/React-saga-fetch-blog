import React, { Component } from 'react';
import {connect} from "react-redux";

let articleCard = {
    width: '100%',
    height:'auto',
    background:'lightgray',
    padding:'20px',
}

let imgCard = {
    width:'100%',
    height:'600px',
    objectFit:'cover',
}

let readMore = {
    textTransform:'uppercase',
    color:'red',
    fontSize:'14px',

}


let NewsItem = ({article}) => ( article ?
    <article style={articleCard}>
    <div>
        <h1>{article.title}</h1>
        <img style={imgCard} src={article.urlToImage} alt="image"/>
        <p>{article.description}</p>
        <div >
            <a href={article.url} style={readMore} target="_blank">Read More</a>
        </div>
    </div>
    </article> : null
);

const mapStateToProps  = (state) =>({
    article:state.news
})

NewsItem = connect(
    mapStateToProps,
    null,
)(NewsItem)


export default NewsItem

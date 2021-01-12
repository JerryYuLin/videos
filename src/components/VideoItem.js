import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ (video) => { onVideoSelect(video) } } className="video-item item" key={ video.id.videoId }>
            <img className="ui image" src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.description }/>
            <div className="content">
                <div className="header">{ video.snippet.title }</div>
            </div>
        </div>
    );
};

export default VideoItem;
import React from 'react';

const SemVideo = ({ url }) => (
    <>
        <p>Видео</p>
        <iframe
            width="80%"
            src={url}
            title="Seminar Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ aspectRatio: '16 / 9' }}
        />
    </>
);

export default SemVideo;

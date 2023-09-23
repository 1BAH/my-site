import React from 'react';

const NotesFrame = ({ url, width = 60, name = 'Записи' }) => (
    <>
        <p>{name}</p>
        <iframe title="Notes" src={url} width={`${width}%`} allow="autoplay" style={{ aspectRatio: '10 / 10' }} />
    </>
);

export default NotesFrame;

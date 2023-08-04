import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
    const {videoId} = useParams();
    return (
        <div>
            Video Detail {videoId}
        </div>
    );
}


interface VideoProps {
    embedCode?: string;
}

const Video: React.FC<VideoProps> = ({ embedCode }) => {
    if (!embedCode) {
        return null;
    }

    return (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    );
};

export default Video;

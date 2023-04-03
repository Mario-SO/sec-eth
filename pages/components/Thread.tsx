import { useEffect } from "react";

interface ThreadProps {
    embedCode?: string;
}

const Thread: React.FC<ThreadProps> = ({ embedCode }) => {
    useEffect(() => {
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
        }
    }, [embedCode]);

    if (!embedCode) {
        return null;
    }

    return (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    );
};

export default Thread;

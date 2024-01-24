import {useEffect} from "react";

function Loading() {
    useEffect(() => {
       return () => {
       }
    }, [])
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loading;
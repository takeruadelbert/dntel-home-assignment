import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
        </div>
    );
}

export default React.memo(Spinner)

import React from "react";

import '../errorpage.css'

function ErrorPage() {
    return (
        <div className="error-container">
            <h1>404</h1>
            <p>
                Whoops, address not defined.
            </p>
        </div>
    );
}

export default ErrorPage;
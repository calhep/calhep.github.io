import React from 'react'

import doggo from "../images/IMG_9120.png"


class Main extends React.Component {
    render() {
        return (
            <div className="header-pad">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="profile-img">
                            <img src={doggo} alt="doggo" style={{ width: "50%", height: "100%" }} />
                            <br />
                            doggu
                        </div>
                    </div>
                    <div className="body">
                        About me.
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
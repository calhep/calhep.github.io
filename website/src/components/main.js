import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

import background from '../images/pexels-michał-osiński-3454270.png'


class Main extends React.Component {
    render () {
        return (
            <div className='Main' style={{ 
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }}>
                <div>
                    <header>
                        About me.
                    </header>
                    <p>
                        This is my personal website!
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faSquareEnvelope}/>
                </div>
            </div>
        )
    }
}

export default Main;
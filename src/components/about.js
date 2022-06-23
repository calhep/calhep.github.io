import React from "react";

import '../main.css'

function About() {
    return (
        <div>
            <h4>
                Hi there!
            </h4>
            <p>
                My name's Callum, and I'm a fourth year engineering physics student at the University of British Columbia with a coursework focus in computer science and machine learning.
            </p>
            <p>
                I'm always eager to expand on my coursework through internships, and am currently looking for opportunities for the Summer of 2023. In the past I've worked as:
            </p>

            <ul>
                <li> A machine learning research intern at the SLAC National Accelerator Laboratory at Stanford University </li>
                <li> A software developer intern at Validus Research Inc. in Waterloo, ON </li>
            </ul>

            <p>
                In my spare time I enjoy practicing guitar and playing badminton, with a little daydreaming sprinkled inbetween.
            </p>

            <p>
                Don't hesitate to reach out to me at <a href="mailto:callumahepworth@gmail.com">callumahepworth@gmail.com</a> if you'd like to chat or grab a coffee!
            </p>
        </div>
    );
}

export default About;
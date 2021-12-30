import {React, Fragment} from 'react';
import './AboutTelurian.scss';
import {Link, useLocation} from 'react-router-dom';


const AboutTelurian = () => {
    const {pathname} = useLocation();
    return(
        <div className='about-telurian'>
            {pathname === '/about-telurian-1' ? <Fragment>
            <h3>About The Project</h3>
            <p>This selection represents the very first official compilation of rominimal music
                ever released on CD and it is a beautiful project whose main purpose is to promote
                the music we love and the kind of work we do in this field as a label. <Link to='about-telurian'>more info</Link></p>
            <p>But in the process of making it, we let ourselves feel inspired by the beauty of Tellurium,
                a very rare natural element that was discovered in Romania in 1782 and is historically and
                economically important for our country. <Link to='about-tellurium'>more info</Link></p>
            <p>The name TELURIAN comes from tellurium, as a tribute to its origin. We are fascinated by its
                history, background, name, etymology, structure, uniqueness, sparkle, properties, utilities,
                scarcity and lack of awareness - this way Telurian was born!</p>
            <p>The tracklist includes all the artists of our agency plus a few special guests who
                we appreciate and with whom we have a long and lucrative colaboration.
                We have tried to cover all the sub-styles and trends in the rominimal scene nowadays and to
                deliver the highest level in music and artwork - we hope you’ll love it!</p>
            <p>Enjoy the music, keep cool, stay safe and be kind to people and nature.</p>
            <p>The producers</p>
            </Fragment>
            : pathname === '/about-telurian-2' ? <Fragment>
            <h3>About Telurian 2</h3>
            <p>Launched on the last week of 2020, TELURIAN was intended as the winning match against an unfriendly year for music and life but it turned out to be more than that. The digipack made it around the world, as most of the sales were made abroad, with copies reaching as far as Australia, Japan and even Africa, showing that the New Romanian Sound is enjoyed everywhere on the planet. The project kept growing and expanding despite the harsh times, slowly building a global network of fans and friends around our rominimal experience.</p>
            <p>After the craze of Telurian Opening Party in February 2021, we introduced to the public the TELURIAN SESSIONS, a premium series of exclusive streamings visually backed by Cote, in a colaboration with Sunrise Hub. Meanwhile, a regulated flow of in-house productions maintained and developed the Zebra Music standards and enhanced the label’s content with almost 50 new releases this year and new artists added to the roster. There was also an increase in the number of the tracks we have received so by mid-summer it became clear that TELURIAN 2 is not an option but a must and is also going to have an international tracklist.</p>
            <p>As part of Zebra Music philosophy, the project TELURIAN was intended from beginning as a super-selection of works that we consider to have a certain impact, something to say in music, regardless of the age, the experience or the awareness of the artists. We bow to the masters of the scene while keep on looking for the most original and interesting minimal music in the underground. That’s how and why we had both newcomers and grands on the first volume, in a beautiful  flow, and we did the same on this second one.</p>
            <p>TELURIAN 2 was born in over 40 studios in Romania and around the world, from Argentina to UK, Austria, Azerbaidjan, Colombia, Ireland, Italy and Spain. We have selected the best 38 tracks out of a few hundred and looked for originality, innovation, experiment, technicality, flow and melody. The final tracklist was carefully curated and it represents the current trends in the minimal scene, being attentive to what the big guys are doing but also checking where the underground is heading. Obviously, such a selection is never complete, even if we have added an extra OPUS available on digital format only, and there is always good music out there that we may never know about. But for now, we have tried hard to deliver the highest level in music and artwork and we hope you’ll appreciate it again! </p>
            <p>Enjoy the music, stay safe and be kind to people and nature!</p>
            <h3>The Producers</h3>
            A new ZEBRA RECORDS production in colaboration with REBEL MUSIC Produced by GRISHU & KEROSEN Production assistant: ALEX HRISCU Mix and mastering: HARITON PĂTRAȘCU / RoSound Mastering Studio Art direction & concept: GIANINY MUNTEANU / ReBelle Arte Logo and graphics: MERAKI ARTS Photo & Ligts: URDĂ PETRE Photo editing: ALEX ȚUȚURESCU Video editing: SEBI FRÂNCU and RAREȘ HRISCU Website: GABRIEL URSACHE Printed in limited edition of 222 units. Released on 1st of December 2021.
            </Fragment>
            : null
            }
        </div>
    )
}


export default AboutTelurian;


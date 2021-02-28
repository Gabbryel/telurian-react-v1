import React from 'react';
import './MoreAboutTelurian.scss';
import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';



const MoreAboutTelurian = () => {
    const {pathname} = useLocation()
    return(
        pathname === '/about-telurian' ? 
            <div id="about-telurian">
                <h3>About Telurian</h3>
                <p>Rominimal comes from “romanian minimal” and if you happen to be active in or around the international
                    club scene, chances are you've attended at least one such party in the past decade and you also probably
                    have your own rominimal playlist by now.
                    That's because this intriguing sub-genre managed to lure the crowds all over the world by its subtle
                    samples
                    and seductive beats packed together with slices of tech and micro-house on a foundation whose roots come
                    from
                    minimalist techno and trance music.</p>
                <p>It is hard to tell exactly where and when it all started. But early 2000, Club Zebra in Bacau - Romania
                    (a city already famous for its vibrant and dynamic urban music scene) hired then 15yo Raresh as their
                    resident DJ
                    and he soon developed a local cult-following for his particular choice of music in the after-party
                    hours, more
                    underground and tech-orientated than the usual mainstream setlist. After several glorious years in Zebra
                    Club,
                    always having full support and leaving behind a new school of young musicians, he was sent to Bucharest
                    and the
                    style later developed after he teamed up with people that shared the same interest in this new approach
                    to techno.
                    Soon after, a bunch of talented Romanian DJ's and producers were spreading these cool vibes to the world
                    and the
                    rest is history in the making. Meanwhile, legendary parties continued in Zebra Club for many years, with
                    more
                    new-commers DJs becoming the brand names today, defining the club as fundamental in the romanian club
                    scene and
                    especially for rominimal music.</p>
                <p>Now and here, TELURIAN represents the musical statement of Zebra Records, the label who evolved from the
                    cultural
                    foundations laid by the eponymous famous club. This fine selection of never before published tracks
                    offers both
                    world-established artists as well as new kings, a carefully chosen tracklist we consider to be highly
                    representative
                    for the scene today, from old school dark underground to the sparkling sound of the new wave.
                    This is what we call rominimal and Telurian is the next level. </p>
                <img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321722/backgrounds/logo_telurium_e0jduk.png" alt="Telurian project logo" />
                <Link to='/about'><FontAwesomeIcon icon={faWindowClose} /> Close</Link>
            </div>
        : <div id="about-tellurium">
            <h3>About Tellurium</h3>
            <p>Tellurium is a chemical element with the symbol Te and the atomic number 54 in Mendeleev's Periodical
                Table -
                being the 26th element discovered in history - is extremely rare (>1µg/kg or ~2 × 10−7%) and implicitly
                very
                precious, found in nature as a metalloid called teluride, mixed together with gold, silver or cooper, it
                has a
                fabulous story and it is the only natural element ever discovered in Romania. Etymologically, the word
                tellurium
                comes from the Latin language, where tellus means earth.</p>
            <p>Tellurium is a non-radioactive yet toxic semi-metal, found in Europe only in Sweden and Romania, with our
                country
                having deposits with the highest concentration (30-40g/ton) but unfortunately the profitable mines were
                shut down
                in 1992 and it seems like the ores were later dubiously leased in the same way as Rosia Montana, to the
                deficit of
                romanian economy. It is sometimes considered the real reason behind the alleged gold mining project
                proposed in
                Apuseni Mountains by others, precisely because of the growing demand of tellurium on the world
                industrial market.</p>
            <p>It was discovered in 1782 at the Fața Băii mine near Zlatna, in the Apuseni Mountains, and first
                researched by Franz
                Joseph Muller, at that time supervisor of the gold mines in Transylvania on behalf of the
                Austro-Hungarian Empire.
                Tellurium created mystery from the very beginning because no one knew what it was for years and the
                emulation around
                it stirred the scientific world with temporary disputes, while its incredible beauty gained a peculiar
                interest from
                mineralogists and collectors. It took 16 years and more scientists to be isolated and identified as such
                in 1798 by
                the famous German chemist Martin Heinrich Kloproth, who also named it, during which time it bore the
                significant names
                of metallum problematicum and aurum paradoxum.</p>
            <p>The history of tellurium is fascinating and difficult to cover in a few lines, starting with the role
                played
                in the creation of Mozart's famous work "The Magic Flute" and ending with the first atomic bomb whose
                shell
                was made of tellurium. It named cities (Telluride in Colorado USA) and the World Car of the Year 2020
                (Kia Telluride),
                there are several festivals in the world who bears the same name, tons of articles, studies and books
                about it and its
                properties, an on-going dispute between Romania, Hungary and Austria regarding the birthplace of its
                discoverer, special
                editions of stamps dedicated to it (including one in Romania, in 2011) and the most recent cultural
                influence is the present album.</p>
            <div class="about-tellurium-photos">
                <img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321723/backgrounds/tellurium_one_gxvptv.png" alt="Tellurium" />
                <img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321724/backgrounds/tellurium_two_fvpqoc.png" alt="Tellurium" />
                <img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609322475/backgrounds/tellurium_sm_n9ybpz.png" alt="Tellurium" />
            </div>
            <img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321722/backgrounds/logo_telurium_e0jduk.png" alt="Telurian project logo" />
            <Link to='/about'><FontAwesomeIcon icon={faWindowClose} /> Close</Link>
        </div>
    )
}

export default MoreAboutTelurian;
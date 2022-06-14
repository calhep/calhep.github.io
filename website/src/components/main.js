import React from 'react'

import '../main.css';

import doggo from "../images/IMG_9120.png"



class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="profile-img">
                            <img src={doggo} alt="doggo" />
                        </div>
                        <div className="profile-content">
                            <h3 className="profile-name">
                                Callum Hepworth
                            </h3>
                            <p className="profile-text">
                                Engineering Physics Student at UBC
                            </p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="sections">
                            <ul>
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Milk</li>
                            </ul>
                            <hr />
                        </div>
                        <div className="projects">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quis nulla nec interdum. Duis porta cursus tempor. Sed sollicitudin dui eget vulputate lobortis. Nullam laoreet suscipit porta. Aenean dapibus efficitur rhoncus. Sed nec ex faucibus, fermentum nisi at, suscipit mi. Etiam eu nibh facilisis purus cursus pretium. Ut in nunc erat. Donec volutpat, purus nec interdum fringilla, ante dui semper mauris, id ultrices elit augue vitae massa. Maecenas ullamcorper lorem in purus rutrum posuere. Morbi posuere eget urna et vestibulum. Sed commodo id sem id ullamcorper. In eleifend venenatis metus sed feugiat. Aenean ac massa venenatis, congue nulla ut, vestibulum nulla.

                            Sed eget mauris elementum massa vestibulum condimentum tempus in justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit congue, consectetur justo at, blandit diam. Ut congue turpis mi, et fringilla sapien tristique eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis convallis id dui ut faucibus. Suspendisse at vulputate nibh, posuere commodo ex. Nam feugiat, nisi sed viverra pretium, turpis erat eleifend lacus, non hendrerit nulla enim ut justo. Nulla nulla enim, convallis id bibendum sed, convallis ut diam. Maecenas suscipit lorem in mi efficitur, ac hendrerit erat sodales. Pellentesque tincidunt lacus non aliquet porta.

                            Fusce in nulla purus. Ut blandit luctus metus, et accumsan ante malesuada et. Maecenas in urna vestibulum, ultrices urna condimentum, euismod nunc. Maecenas quam velit, pulvinar eget nisl id, vulputate ultrices ligula. Etiam nec risus nisi. Phasellus eros elit, aliquet id ipsum at, fermentum euismod odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eleifend libero nec pulvinar pellentesque. Mauris rutrum hendrerit odio, id pretium arcu porta sit amet. Maecenas dapibus justo in tortor egestas dignissim. Nulla placerat sodales posuere. Sed aliquam dictum erat, vel suscipit justo feugiat quis. Nulla tellus velit, dictum vitae massa eget, bibendum posuere lectus.

                            Vivamus pulvinar erat efficitur, blandit justo eget, feugiat nibh. Proin consectetur congue orci, in elementum massa blandit non. Integer egestas faucibus augue id venenatis. Morbi venenatis vel neque blandit efficitur. Suspendisse dapibus neque ut sem pulvinar, at placerat orci ullamcorper. Vestibulum gravida, risus quis pellentesque vehicula, justo arcu finibus lorem, nec blandit justo massa in ante. Sed ultricies tincidunt dolor, vitae tempor eros tincidunt ac. Suspendisse tincidunt orci sed risus tempor lobortis. Vivamus congue libero leo, ac ultricies nunc sodales et. Nullam mattis, quam ac facilisis accumsan, orci neque tempor leo, sed vehicula augue magna a orci. Maecenas sodales ante felis, id feugiat felis auctor ac. Integer accumsan metus eu ante volutpat iaculis nec sit amet nisl. Nunc sed dui sed dui malesuada euismod ac nec ex. Quisque ultricies est et risus interdum rutrum. Curabitur vitae viverra nibh. Mauris blandit sem nec placerat blandit.

                            Quisque at dapibus tortor, id porttitor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam cursus et ligula vel rutrum. Proin dictum vulputate nisl eu sagittis. Aliquam vitae tristique turpis. Sed finibus, sem rhoncus vestibulum molestie, risus leo scelerisque risus, vel iaculis lorem odio sed justo. Mauris quis risus mauris. Morbi sem sem, dapibus at nibh et, vulputate tempus lorem. Proin libero mauris, venenatis nec felis id, facilisis hendrerit lacus. Sed eget lorem faucibus, finibus nibh a, laoreet sem. Mauris non mollis enim. Proin et rhoncus massa, et maximus eros. Curabitur faucibus lacus sed convallis ullamcorper. Aenean commodo eget tortor vitae elementum. Integer nec vehicula erat, sed lacinia libero. Proin rhoncus faucibus dolor sit amet molestie.

                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eget diam in diam feugiat laoreet. Vestibulum finibus vel urna ac dignissim. Donec dictum fringilla nulla. Fusce non ipsum at tellus sollicitudin fermentum non molestie erat. Quisque elementum posuere felis, at sollicitudin elit volutpat id. Sed laoreet efficitur erat porta tempus. Suspendisse accumsan sem eget erat rutrum lobortis. Proin hendrerit, neque in posuere posuere, felis est convallis orci, eget tempor sapien urna eget nisl. Vivamus convallis ornare tortor volutpat placerat. Praesent tincidunt lobortis gravida.

                            Maecenas lobortis, risus at laoreet iaculis, lectus elit viverra lorem, id lacinia dolor est at lorem. Nam diam dui, condimentum non cursus varius, dictum non metus. Sed facilisis commodo nunc, in egestas nisi tempus et. Donec pulvinar tempor lorem, eget sollicitudin eros sollicitudin a. Cras quis pulvinar massa. Aliquam sit amet euismod lorem, in tempor velit. Ut euismod scelerisque metus suscipit tincidunt. Ut porttitor dui a magna vulputate consectetur. Pellentesque malesuada, nisi sed ullamcorper bibendum, urna augue hendrerit orci, vel ullamcorper est enim quis metus. Duis vitae nisi id lorem feugiat finibus. Donec vestibulum et lectus eu gravida. Praesent auctor pulvinar ligula eget sodales. Phasellus in gravida erat. Aenean ex dui, luctus cursus nunc nec, convallis dapibus erat. Nulla sem ligula, ornare ac pharetra nec, euismod eu neque. In mi sapien, hendrerit et ante pharetra, lacinia porttitor enim.

                            Etiam dolor arcu, imperdiet non finibus vitae, venenatis eu turpis. Duis et blandit massa. Pellentesque eu ornare mauris. Proin tempor lorem justo, ut sollicitudin libero tincidunt nec. Nam at urna id mi tristique elementum vel et turpis. Maecenas pharetra turpis id elit accumsan euismod. Quisque sit amet urna mauris. Quisque ac massa pretium, interdum tellus quis, lobortis ante. Duis dolor velit, viverra non tellus sed, commodo consequat nulla.

                            Curabitur elementum lobortis diam, porta ornare risus viverra a. Suspendisse massa lorem, tempor vel congue mollis, rhoncus in risus. Nam suscipit elit id turpis placerat interdum. Aenean aliquet elit elit, non varius odio iaculis vel. Fusce lacinia consectetur orci ac aliquet. Donec auctor pulvinar sem, sed pulvinar nibh lobortis a. Integer consectetur et orci non eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas rhoncus lacus ut blandit.

                            Duis vitae nisl vitae turpis euismod iaculis ac vitae sapien. Duis dictum pretium ipsum in fringilla. Suspendisse potenti. Praesent ultricies ligula a diam congue, at facilisis justo luctus. Praesent maximus nibh nec mauris commodo molestie a eu orci. Vestibulum non tortor pellentesque, varius ante sodales, rhoncus lectus. Duis neque felis, vestibulum ac nibh id, tristique maximus dolor. Vestibulum tincidunt lacus nunc, in iaculis justo ultricies eu. Proin vulputate, odio vitae posuere interdum, nibh mauris fringilla orci, et egestas sapien risus sed metus. Morbi blandit a diam non pellentesque. Etiam eros orci, placerat a massa ac, eleifend pretium massa. Quisque eget semper lacus, sed consequat neque. Sed nunc lacus, vehicula at vestibulum ut, gravida eu nulla. In sit amet tortor varius, mollis lectus vel, aliquet nibh. Vivamus sit amet justo libero. Vestibulum porta efficitur arcu in fringilla.
                            </div>
                    </div>

                    {/* Projects
                        <hr /> */}
                </div>
            </div>
        )
    }
}

export default Main;
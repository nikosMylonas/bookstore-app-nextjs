import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <div className="container-p mt-6">
                <h1>My Books App</h1>
                <section className="main-home">
                    <div className="flex flex-col lg:flex-row lg:gap-x-4">
                        <Image
                            src="/images/home/book-pile-or.webp"
                            alt="book pile"
                            width={480}
                            height={320}
                        />

                        <div>
                            <h3>Lorem ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec tortor orci, dignissim
                                suscipit scelerisque vitae, fringilla id nisi.
                                Maecenas vitae lobortis tellus, ut lobortis
                                dolor. Nunc ultricies, odio ut ultricies tempus,
                                turpis diam ultrices nisi, in faucibus leo diam
                                eleifend tellus. Pellentesque gravida
                                pellentesque faucibus. Nunc tempus massa sed
                                erat aliquam ultricies. Quisque nibh erat,
                                aliquet ornare nulla vitae, sodales laoreet ex.
                                Sed aliquet mi in purus eleifend placerat.
                                Vivamus vel odio lacus. Morbi non facilisis
                                urna. Ut odio nulla, rutrum non magna vel,
                                sodales blandit tortor. Quisque vitae accumsan
                                orci, eget condimentum augue. Integer fringilla
                                felis tincidunt, hendrerit arcu id, finibus
                                turpis.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="main-home">
                    <div className="flex flex-col lg:flex-row lg:gap-x-4">
                        <Image
                            src="/images/home/books-selves-or.webp"
                            alt="books in selves"
                            width={480}
                            height={320}
                        />

                        <div>
                            <h3>Donec eu nulla</h3>
                            <p>
                                Donec eu nulla et arcu convallis suscipit sed
                                vel nisi. Aenean quis arcu vel dolor dictum
                                placerat ut in felis. Praesent lacus purus,
                                mattis at dictum ac, dictum ac odio. Praesent
                                vitae condimentum ipsum, sit amet porttitor
                                felis. Mauris non lacus a enim euismod sagittis
                                volutpat at massa. Nullam et ante euismod,
                                lacinia diam vel, pulvinar nisi. Morbi et tellus
                                vulputate, mattis nibh non, condimentum odio.
                                Class aptent taciti sociosqu ad litora torquent
                                per conubia nostra, per inceptos himenaeos.
                                Suspendisse augue urna, vulputate et feugiat
                                sed, vestibulum ac diam. Curabitur non nisl nec
                                purus posuere suscipit. Duis accumsan mi eget
                                nulla aliquet, ac egestas risus ultricies. Sed
                                vulputate at felis vitae porta. Sed velit est,
                                tempus laoreet ex a, egestas egestas nunc. Etiam
                                pretium volutpat metus. Integer tristique libero
                                tortor, at suscipit enim volutpat ut. Curabitur
                                suscipit aliquet quam ac tempus.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="main-home">
                    <div className="flex flex-col lg:flex-row lg:gap-x-4">
                        <Image
                            src="/images/home/the-story-or.webp"
                            alt="the story"
                            width={480}
                            height={320}
                        />

                        <div>
                            <h3>Maecenas vitae</h3>
                            <p>
                                Maecenas vitae euismod tortor. Pellentesque ut
                                rhoncus ipsum. Nullam faucibus eget nunc ut
                                auctor. Ut ut justo a elit ultrices tempor et
                                quis neque. Ut volutpat nisl lorem, eget
                                tristique lectus venenatis eget. In tincidunt
                                libero quis felis lacinia sagittis. Proin vel
                                aliquet augue, non sollicitudin tellus. Vivamus
                                ac semper erat. Mauris dolor lectus,
                                sollicitudin non diam finibus, euismod fermentum
                                nulla. Aenean vel metus risus.
                            </p>
                            <p>
                                Morbi ultricies eros ornare dolor mollis, sit
                                amet maximus arcu efficitur. Quisque vel rhoncus
                                libero, iaculis venenatis magna. Vestibulum ut
                                nulla ut metus auctor tincidunt. Vestibulum ut
                                magna a tortor fringilla vestibulum ut ut magna.
                                Fusce odio justo, rutrum non tellus at, rhoncus
                                maximus quam. Proin dapibus eros vitae molestie
                                efficitur.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

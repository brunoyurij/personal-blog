import React from 'react';

function Container() {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt=""
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Bruno Yuri</p>
                                        <span className="tag is-dark is-medium">
                                            Javascript Full Stack Developer
                                        </span>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>(48) 34660953</p>
                                    <p>bruno.orle@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-9">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">Sobre mim</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus nec iaculis
                                    mauris. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Phasellus nec
                                    iaculis mauris.
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Experiências
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div className="columns">
                                        <div className="column">
                                            <figure className="image is-128x128">
                                                <img
                                                    className="is-rounded"
                                                    src="https://bulma.io/images/placeholders/128x128.png"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="column is-9">
                                            <p className="title is-5">
                                                Javascript Developer{' '}
                                                <span className="tag is-dark">
                                                    Empresa chamada X
                                                </span>
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Iure ipsa totam nesciunt, iusto,
                                                provident autem non quos ad illo
                                                nam, alias sapiente quaerat
                                                atque cupiditate hic inventore
                                                explicabo repudiandae incidunt.
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Sit, vel cum officiis
                                                consequatur suscipit iure,
                                                tempora aperiam sed velit
                                                distinctio excepturi tempore!
                                                Aspernatur perferendis vero
                                                temporibus aliquid totam beatae
                                                fuga.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="card-content">
                                <div className="content">
                                    <div className="columns">
                                        <div className="column">
                                            <figure className="image is-128x128">
                                                <img
                                                    className="is-rounded"
                                                    src="https://bulma.io/images/placeholders/128x128.png"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="column is-9">
                                            <p className="title is-5">
                                                Javascript Developer{' '}
                                                <span className="tag is-dark">
                                                    Empresa chamada X
                                                </span>
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Iure ipsa totam nesciunt, iusto,
                                                provident autem non quos ad illo
                                                nam, alias sapiente quaerat
                                                atque cupiditate hic inventore
                                                explicabo repudiandae incidunt.
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Sit, vel cum officiis
                                                consequatur suscipit iure,
                                                tempora aperiam sed velit
                                                distinctio excepturi tempore!
                                                Aspernatur perferendis vero
                                                temporibus aliquid totam beatae
                                                fuga.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">Formação</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div>
                                        <p className="title is-5">
                                            Javascript fullstack 8 week
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Phasellus nec iaculis mauris. Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Phasellus nec
                                            iaculis mauris.
                                        </p>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="title is-5">
                                            HTML + CSS + Bulma
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Phasellus nec iaculis mauris. Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Phasellus nec
                                            iaculis mauris.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Container;

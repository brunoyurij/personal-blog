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
                                <p className="card-header-title">Contato</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input "
                                                type="email"
                                                placeholder="Email input"
                                                value=""
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope" />
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-exclamation-triangle" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Message</label>
                                        <div className="control">
                                            <textarea
                                                className="textarea"
                                                placeholder="Textarea"
                                            />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button
                                                type="button"
                                                className="button is-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
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

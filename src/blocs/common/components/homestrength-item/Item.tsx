import React, {FC, ReactElement} from "react";

type Props = {title: string; children: JSX.Element | JSX.Element[]};

const Layout: FC<Props> = (): ReactElement => {
  return (
    <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="https://versions.bulma.io/0.7.0/images/placeholders/128x128.png" alt="Image"/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="reply">
              <span className="icon is-small">
                <i className="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a className="level-item" aria-label="retweet">
              <span className="icon is-small">
                <i className="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a className="level-item" aria-label="like">
              <span className="icon is-small">
                <i className="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
  );
};

export default Layout;

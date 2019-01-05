import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="footer_f">
          <section className="logo">
            <Link to="/" />
          </section>
          <p>
            Create Join and most <br /> importantly enjoy your events
          </p>
          <section className="icons" />
        </section>
        <section className="footer_s">
          <section>
            <ul>
              <li>
                <Link to="/">Languages</Link>
              </li>
            </ul>
          </section>

          <section>
            <ul>
            <li>
                <Link to="/">Languages</Link>
              </li>
            </ul>
          </section>

          <section>
            <ul>
            <li>
                <Link to="/">Languages</Link>
              </li>
            </ul>
          </section>
        </section>
        <section className="footer_t">
          <div className="go_up" />
          <div>
            <p>® 2018 Languages Ltd.</p>
          </div>
        </section>
      </footer>
    );
  }
}

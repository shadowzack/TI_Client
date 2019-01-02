import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../images/spinner.gif";
import { getLanguage } from "../../actions/languageActions";

class Language extends Component {
  componentDidMount() {
    this.props.getLanguage(this.props.match.params.id);
  }
  render() {
    const { language, loading } = this.props.language;
    let languageContent;
    if (language === null || loading || Object.keys(language).length === 0) {
        languageContent = <Spinner />;
    } else {
        languageContent = (
        <div>
          <div className="flex-center">
            <div className="post_item">
              <div className="post_item_name">
                <div>

                </div>
                <section>
                  <h1>{language.Source}</h1>
                </section>
              </div>

              <div className="post_item_des">
                <p> {language.Count}</p>
              </div>
              <div className="post_item_more">
                <div className="flex-center ">
                  <div className="post_item_more_like ">
                    <div />

                    <div>
                      <p>2013 : {language.Years}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{languageContent}</div>;
  }
}

Language.propTypes = {
  getLanguage: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  language: state.language
});

export default connect(
  mapStateToProps,
  { getLanguage }
)(Language);

import React from "react";
import PropTypes from "prop-types";
import config from "../../../content/meta/config";
import headshot from "../../images/jpg/ProcoreHeadshot.jpg";
import Divider from '@material-ui/core/Divider';

const About = (props) => {
    const { theme } = props;

    return(
        <React.Fragment>
            <main>
                <h1> About Me </h1>
                <div className ="flex-container">
                    <div style={{width: 400}}><img
                        src={headshot}
                        alt="Headshot"
                        style={{width:200, height:200}}
                    /></div>
                    <div style={{width: 400}}>I'm a third year computer engineering student at UCLA.
                    I have a passion for software development and the solutions it can develop towards solving modern issues.
                    I am experienced in working with large scale web applications and developing with both front end and back end technologies.<br/><br/>
                    <a target="_blank" id="resumeLink" href="https://drive.google.com/file/d/1aqNYKJkFrGLHn1jneJnlJ4cBqlfg3GUc/view?usp=sharing">Resume</a> </div>
                </div>
                <br/>
                <Divider />
            </main>
            <style jsx>{`
                h1 {
                    padding-top: 50px;
                    text-align: center;
                    font-size: ${theme.hero.h1.size};
                    margin: ${theme.space.stack.l};
                    color: black;
                    line-height: ${theme.hero.h1.lineHeight};
                    text-remove-gap: both 0 "Open Sans";

                    :global(strong) {
                        position: relative;

                        &::after,
                        &::before {
                        content: "›";
                        color: ${theme.text.color.attention};
                        margin: 1000 ${theme.space.xs} 0 0;
                        text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
                        }
                        &::after {
                        content: "‹";
                        margin: 0 0 0 ${theme.space.xs};
                        }
                    }
                }
                .flex-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    height: 200px;
                    align-items: center;
                }
                .main {
                    padding: 0 ${theme.space.inset.default};
                }
                @above tablet {
                    .main {
                        padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
                    }
                    ul {
                        max-width: ${theme.text.maxWidth.tablet};
                    }
                }
                @above desktop {
                    ul {
                        max-width: ${theme.text.maxWidth.desktop};
                    }
                }
                #resumeLink {
                    color: blue;
                    font-size: 24px;
                    justify-content: center;
                }

            `}</style>
        </React.Fragment>
    );
};

About.propTypes = {
    theme: PropTypes.object.isRequired
};

export default About;



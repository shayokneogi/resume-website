import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <main className="main">
        <ul>
          <h1 align="center">Projects</h1>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        h1 {
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

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
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
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;

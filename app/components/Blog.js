import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Footer from './Footer';

const propTypes = {
    pages: PropTypes.object,
};

export default class Blog extends Component {
    genList(arr) {
        return arr.map(i => {
            return (
                <Link key={i.__SDATE__} to={i.__ROUTE__}>
                    <span>{i.__SDATE__}</span>
                    <span>{i.__TITLE__}</span>
                    <span>{i.__TAGS__.join(', ')}</span>
                </Link>
            );
        });
    }
    render() {
        const pages = this.props.pages;
        const pagesArr = Object.keys(pages).map(key => pages[key]).reverse();
        const mostRecent = pagesArr[0];
        const nextPost = pagesArr[1];
        return (
            <div className="blog">
                <Helmet
                    title="cusx.io | Blog"
                />
                <div className="blog__header">
                    <h1>Droplets</h1>
                    <p>thoughts on life, work <span>and</span> tech</p>
                    <hr></hr>
                </div>
                <div className="blog__post">
                    <div className="post--header">
                        <h1>
                            <Link to={mostRecent.__ROUTE__}>{mostRecent.__TITLE__}</Link>
                        </h1>
                        <p>Jonathan Chan &middot; {mostRecent.__DATE__}</p>
                    </div>
                    {/* eslint-disable */}
                    <div className="markdown-body post--content" dangerouslySetInnerHTML={{ __html: mostRecent.__HTML__ }}></div>
                    {/* eslint-enable */}
                    <div className="social">
                        <a data-tooltip="Share on Twitter" data-tooltip-pos="down" href="">
                            <i className="ion-social-twitter"></i>
                        </a>
                        <a data-tooltip="Share on Facebook" data-tooltip-pos="down" href={`https://www.facebook.com/sharer/sharer.php?u=http://cusx.io${mostRecent.__ROUTE__}`} target="share">
                            <i className="ion-social-facebook"></i>
                        </a>
                        <a data-tooltip="Share on Google Plus" data-tooltip-pos="down" href={`https://plus.google.com/share?url=http://cusx.io${mostRecent.__ROUTE__}`} target="share">
                            <i className="ion-social-googleplus"></i>
                        </a>
                    </div>
                </div>
                <Link to={nextPost.__ROUTE__} className="blog__next">
                    <div className="post">
                        <span><i className="ion-waterdrop"></i>Previous Thoughts:</span>
                        <span>{nextPost.__TITLE__}</span>
                        <span>{nextPost.__DESC__}</span>
                        <span>READ</span>
                    </div>
                </Link>
                <div className="blog__more">
                    <div className="more">
                        <h1>Previous Thoughts: </h1>
                        {this.genList(pagesArr)}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

Blog.propTypes = propTypes;

export default Blog;

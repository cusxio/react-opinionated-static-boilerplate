import React, { PropTypes } from 'react';

const propTypes = {
    assets: PropTypes.object,
    markup: PropTypes.string,
    head: PropTypes.object,
};

const HtmlDocument = ({ assets, markup, head }) => (
    <html lang="en" className="no-js">
        <head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href={assets.css} />
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/images/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/images/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/images/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/images/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/images/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="/images/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/images/favicons/favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="cusx.io" />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/images/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/images/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/images/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/images/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/images/favicons/mstile-310x310.png" />
            {/* Social */}
            {head.meta}
            {head.title}
        </head>
        <body>
            {/* eslint-disable */}
            <div id="app" dangerouslySetInnerHTML={{ __html: markup }}></div>
            {/* eslint-enable */}
            <script src={assets.js}></script>
        </body>
    </html>
);

HtmlDocument.propTypes = propTypes;

export default HtmlDocument;

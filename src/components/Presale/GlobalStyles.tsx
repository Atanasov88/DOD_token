import React from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/movies-d4ec4c.webflow.css';

const GlobalStyles: React.FC = () => {
  return (
    <style jsx global>
      {`
        @media (max-width: 991px) and (min-width: 768px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="03dcac74-bd04-60d0-e82e-18dfcc864eca"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="b167f261-ea7f-87ea-fbab-3ea24e909601"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="c76d39e2-a312-4e3c-e031-afccf0e44bbe"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="69da9dd9-8622-6509-9f3f-7829974221c8"] {
            height: 0px;
          }
        }
        @media (max-width: 767px) and (min-width: 480px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="03dcac74-bd04-60d0-e82e-18dfcc864eca"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="b167f261-ea7f-87ea-fbab-3ea24e909601"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="c76d39e2-a312-4e3c-e031-afccf0e44bbe"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="69da9dd9-8622-6509-9f3f-7829974221c8"] {
            height: 0px;
          }
        }
        @media (max-width: 479px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="03dcac74-bd04-60d0-e82e-18dfcc864eca"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="b167f261-ea7f-87ea-fbab-3ea24e909601"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="c76d39e2-a312-4e3c-e031-afccf0e44bbe"] {
            height: 0px;
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="69da9dd9-8622-6509-9f3f-7829974221c8"] {
            height: 0px;
          }
        }
        .bg-clouds {
          background-image: url("/clouds.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          inset: 0;
          z-index: 0;
        }
        html {
          font-size: calc(0.625rem + 0.41666666666666663vw);
        }
        @media screen and (max-width: 1920px) {
          html {
            font-size: calc(0.5rem + 0.4vw);
          }
        }
        @media screen and (max-width: 1440px) {
          html {
            font-size: calc(0.65rem + 0.25vw);
          }
        }
        @media screen and (max-width: 991px) {
          html {
            font-size: 10px;
          }
        }
        .w-richtext > :first-child {
          margin-top: 0;
        }
        .w-richtext > :last-child,
        .w-richtext ol li:last-child,
        .w-richtext ul li:last-child {
          margin-bottom: 0;
        }
        a,
        .w-tab-link,
        .w-nav-link,
        .w-dropdown-btn,
        .w-dropdown-toggle,
        .w-dropdown-link {
          color: inherit;
        }
        .clickable-off {
          pointer-events: none;
        }
        .clickable-on {
          pointer-events: auto;
        }
        .div-square::after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
        main:focus-visible {
          outline: -webkit-focus-ring-color auto 0px;
        }
        .container-medium,
        .container-small,
        .container-large {
          margin-right: auto !important;
          margin-left: auto !important;
        }
        .w-input,
        .w-select,
        a {
          color: inherit;
          text-decoration: inherit;
        }
        .text-style-3lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .text-style-2lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .truncate-width {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .no-scrollbar {
          -ms-overflow-style: none; // IE 10+
          overflow: -moz-scrollbars-none; // Firefox
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; // Safari and Chrome
        }
        .table-list::-webkit-scrollbar {
          width: 10px;
        }
        .table-list::-webkit-scrollbar-track {
          background-color: #e9f1f8;
          -webkit-border-radius: 20px;
          border-radius: 20px;
        }
        .table-list::-webkit-scrollbar-thumb {
          -webkit-border-radius: 20px;
          border-radius: 20px;
          background-image: linear-gradient(
            243deg,
            var(--green),
            var(--secondary)
          );
          height: 50px;
        }
        .event-card:hover img {
          transform: scale(1.1);
        }
        .block-item-list.scroll::-webkit-scrollbar {
          width: 4px;
        }
        .block-item-list.scroll::-webkit-scrollbar-track {
          background-color: #e9f1f8;
          -webkit-border-radius: 20px;
          border-radius: 20px;
        }
        .block-item-list.scroll::-webkit-scrollbar-thumb {
          -webkit-border-radius: 20px;
          border-radius: 20px;
          background: rgba(0, 96, 255, 0.1);
          height: 50px;
        }
      `}
    </style>
  );
};

export default GlobalStyles;
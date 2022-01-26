// @flow
import React from "react";
import type { Node } from "react";

type Props = {
  className?: string,
  color?: string,
  height?: number | string,
  width?: number | string,
};

const PlayStore = (props: Props): Node => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 216 63"
    className={props.className}
    fill={props.color}
    width={props.width}
    height={props.height}
  >
    <defs>
      <filter id="Rectangle_16" x="0" y="0" filterUnits="userSpaceOnUse">
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Google">
      <g id="Group_7" data-name="Group 7" transform="translate(0 0)">
        <g transform="matrix(1, 0, 0, 1, -9, -3)" filter="url(#Rectangle_16)">
          <path
            id="Rectangle_16-2"
            data-name="Rectangle 16"
            d="M16.6,0H198.621a16.6,16.6,0,0,1,16.6,16.6V45.61a16.6,16.6,0,0,1-16.6,16.6H16.6A16.6,16.6,0,0,1,0,45.611V16.6A16.6,16.6,0,0,1,16.6,0Z"
            transform="translate(9 3)"
            fill="#fff"
          />
        </g>
      </g>
      <g id="Group_9" data-name="Group 9" transform="translate(34.402 15.09)">
        <path
          id="Path_8"
          data-name="Path 8"
          d="M960.978,377.941a5.418,5.418,0,1,0,5.439,5.418A5.341,5.341,0,0,0,960.978,377.941Zm0,8.7a3.292,3.292,0,1,1,3.058-3.284A3.135,3.135,0,0,1,960.978,386.643Zm-11.864-8.7a5.418,5.418,0,1,0,5.439,5.418A5.341,5.341,0,0,0,949.113,377.941Zm0,8.7a3.292,3.292,0,1,1,3.058-3.284A3.135,3.135,0,0,1,949.113,386.643ZM935,379.6v2.3h5.5a4.8,4.8,0,0,1-1.252,2.894A5.631,5.631,0,0,1,935,386.478a6.116,6.116,0,0,1,0-12.232,5.862,5.862,0,0,1,4.146,1.642l1.621-1.621A8.017,8.017,0,0,0,935,371.948a8.415,8.415,0,1,0,0,16.829,7.694,7.694,0,0,0,5.87-2.36,7.6,7.6,0,0,0,1.991-5.377,7.466,7.466,0,0,0-.124-1.437Zm57.719,1.786a5.036,5.036,0,0,0-4.639-3.448,5.149,5.149,0,0,0-5.11,5.418,5.3,5.3,0,0,0,5.377,5.418,5.388,5.388,0,0,0,4.515-2.4l-1.847-1.231a3.094,3.094,0,0,1-2.668,1.5A2.757,2.757,0,0,1,985.72,385l7.245-3Zm-7.388,1.806a2.971,2.971,0,0,1,2.832-3.16,2.1,2.1,0,0,1,2.011,1.149Zm-5.891,5.254h2.381V372.523H979.44Zm-3.9-9.3h-.082a3.754,3.754,0,0,0-2.853-1.211,5.423,5.423,0,0,0,0,10.836,3.694,3.694,0,0,0,2.853-1.231h.082v.78c0,2.073-1.108,3.181-2.894,3.181a3,3,0,0,1-2.73-1.929l-2.073.862a5.164,5.164,0,0,0,4.8,3.2c2.791,0,5.151-1.642,5.151-5.644v-9.728h-2.258Zm-2.729,7.491a3.3,3.3,0,0,1,0-6.568,3.31,3.31,0,0,1,0,6.568Zm31.059-14.12h-5.7v15.926h2.377v-6.034h3.319a4.953,4.953,0,1,0,0-9.892Zm.062,7.676h-3.381V374.74h3.381a2.73,2.73,0,1,1,0,5.459Zm14.69-2.287a4.463,4.463,0,0,0-4.241,2.438l2.111.881a2.251,2.251,0,0,1,2.171-1.168,2.289,2.289,0,0,1,2.5,2.049v.164a5.26,5.26,0,0,0-2.479-.615c-2.274,0-4.589,1.25-4.589,3.585a3.679,3.679,0,0,0,3.954,3.5,3.354,3.354,0,0,0,3.032-1.557h.082v1.229h2.295v-6.106C1023.458,379.489,1021.348,377.912,1018.622,377.912Zm-.287,8.728c-.779,0-1.865-.389-1.865-1.352,0-1.229,1.352-1.7,2.52-1.7a4.236,4.236,0,0,1,2.172.533A2.882,2.882,0,0,1,1018.336,386.64Zm13.482-8.38-2.725,6.9h-.082l-2.827-6.9h-2.561l4.241,9.65-2.418,5.368h2.479l6.536-15.018Zm-21.411,10.189h2.376V372.523h-2.376Z"
          transform="translate(-886.883 -359.34)"
          fill="#727272"
        />
        <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
          <path
            id="Path_9"
            data-name="Path 9"
            d="M814.665,337.414a2.546,2.546,0,0,0-.589,1.788v28.15a2.548,2.548,0,0,0,.589,1.789l.094.092,15.769-15.77v-.372l-15.769-15.77Z"
            transform="translate(-814.076 -336.908)"
            fill="#727272"
          />
          <path
            id="Path_10"
            data-name="Path 10"
            d="M866.049,378.06l-5.256-5.259v-.372l5.258-5.258.119.067,6.228,3.539c1.779,1.011,1.779,2.665,0,3.675l-6.228,3.539Z"
            transform="translate(-844.341 -356.246)"
            fill="#727272"
          />
          <path
            id="Path_11"
            data-name="Path 11"
            d="M836.989,388.005l-5.376-5.376-15.863,15.864a2.071,2.071,0,0,0,2.645.078l18.594-10.565"
            transform="translate(-815.16 -366.259)"
            fill="#888"
          />
          <path
            id="Path_12"
            data-name="Path 12"
            d="M836.989,347.141l-18.594-10.565a2.07,2.07,0,0,0-2.645.078l15.863,15.863Z"
            transform="translate(-815.16 -336.147)"
            fill="#888"
          />
        </g>
      </g>
      <g
        id="Group_10"
        data-name="Group 10"
        transform="translate(74.511 14.832)"
      >
        <path
          id="Path_13"
          data-name="Path 13"
          d="M933.557,337.079a2.722,2.722,0,0,0-1.806-.7,2.879,2.879,0,0,0,0,5.754,2.174,2.174,0,0,0,2.393-2.024h-2.132v-.881H935.3c0,2.633-1.4,3.873-3.546,3.873a3.846,3.846,0,0,1,0-7.691,3.7,3.7,0,0,1,2.535.99Z"
          transform="translate(-927.966 -335.415)"
          fill="#727272"
        />
        <path
          id="Path_14"
          data-name="Path 14"
          d="M957.148,335.663v.946h-3.427V339h2.991v.947h-2.991v2.262h3.535v.946H952.71v-7.494Z"
          transform="translate(-943.996 -335.576)"
          fill="#727272"
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M973.692,335.663v.956h-2.273v6.538H970.4v-6.538h-2.274v-.956Z"
          transform="translate(-953.981 -335.576)"
          fill="#727272"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M995.856,335.663v7.494h-1.011v-7.494Z"
          transform="translate(-971.292 -335.576)"
          fill="#727272"
        />
        <path
          id="Path_17"
          data-name="Path 17"
          d="M1007.055,335.663v.956h-2.273v6.538h-1.022v-6.538h-2.274v-.956Z"
          transform="translate(-975.594 -335.576)"
          fill="#727272"
        />
        <path
          id="Path_18"
          data-name="Path 18"
          d="M1030.6,335.415a3.846,3.846,0,1,1-3.786,3.851A3.8,3.8,0,0,1,1030.6,335.415Zm0,6.711a2.868,2.868,0,1,0-2.774-2.86A2.793,2.793,0,0,0,1030.6,342.126Z"
          transform="translate(-992.003 -335.415)"
          fill="#727272"
        />
        <path
          id="Path_19"
          data-name="Path 19"
          d="M1057.223,343.157l-3.415-5.645v5.645H1052.8v-7.494h1l3.383,5.6v-5.6h1.012v7.494Z"
          transform="translate(-1008.834 -335.576)"
          fill="#727272"
        />
      </g>
    </g>
  </svg>
);

export default PlayStore;

import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 400 100"
      width="400"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Logo Group */}
      <g transform="translate(20, 10) scale(0.8)">
        {/* Gray connection line from top to center */}
        <path
          d="M 50 20 L 50 50"
          stroke="#738192"
          strokeWidth="4"
          fill="none"
        />

        {/* Gray diamonds */}
        <rect
          x="44"
          y="14"
          width="12"
          height="12"
          fill="#738192"
          transform="rotate(45 50 20)"
        />
        <rect
          x="14"
          y="44"
          width="12"
          height="12"
          fill="#738192"
          transform="rotate(45 20 50)"
        />
        <rect
          x="74"
          y="44"
          width="12"
          height="12"
          fill="#738192"
          transform="rotate(45 80 50)"
        />
        <rect
          x="44"
          y="74"
          width="12"
          height="12"
          fill="#738192"
          transform="rotate(45 50 80)"
        />
        <rect
          x="44"
          y="44"
          width="12"
          height="12"
          fill="#738192"
          transform="rotate(45 50 50)"
        />

        {/* Blue diamonds */}
        <rect
          x="29"
          y="29"
          width="12"
          height="12"
          fill="#0006CD"
          transform="rotate(45 35 35)"
        />
        <rect
          x="59"
          y="29"
          width="12"
          height="12"
          fill="#0006CD"
          transform="rotate(45 65 35)"
        />
        <rect
          x="29"
          y="59"
          width="12"
          height="12"
          fill="#0006CD"
          transform="rotate(45 35 65)"
        />
        <rect
          x="59"
          y="59"
          width="12"
          height="12"
          fill="#0006CD"
          transform="rotate(45 65 65)"
        />

        {/* Blue connection lines */}
        <path
          d="M 35 35 L 35 65 L 65 65"
          stroke="#0006CD"
          strokeWidth="4"
          fill="none"
        />
      </g>

      {/* IMPERIAL Text */}
      <g transform="translate(110, 25) scale(0.3)">
        <path d="M301.453 0V80H353.346V66H316.622V46H350.152V32.4H316.622V14H353.346V0H301.453Z" fill="#0006CD"/>
        <path d="M238.397 12.9177H227.22V39.8776H238.397C247.142 39.8776 253.566 35.6376 253.566 26.3953C253.566 16.8 247.142 12.9177 238.397 12.9177ZM239.196 52.8H227.22V80H212.052V0H239.196C256.219 0 269.533 7.72706 269.533 26.4C269.533 44.8 256.121 52.8 239.196 52.8Z" fill="#0006CD"/>
        <path d="M485.079 0V14H503.84V66H485.079V80H537.77V66H519.009V14H537.77V0H485.079Z" fill="#0006CD"/>
        <path d="M434.191 24.8C434.191 34.4377 428.602 37.4777 419.022 37.4777H406.248V12.9177H419.022C429.419 12.9224 434.191 16.8 434.191 24.8ZM450.158 24.8C450.158 6.12706 437.384 0 420.619 0H391.08V80H406.248V50.4H419.022C419.722 50.4 420.417 50.3859 421.107 50.3624L436.562 80H453.37L436.224 47.1906C444.565 43.4777 450.158 36.3435 450.158 24.8Z" fill="#0006CD"/>
        <path d="M604.324 14.1929L615.238 49.4777H593.406L604.324 14.1929ZM594.345 0L567.999 80H583.966L589.409 62.4H619.235L624.678 80H640.645L614.299 0H594.345Z" fill="#0006CD"/>
        <path d="M674.889 0V80H726.914V66H690.058V0H674.889Z" fill="#0006CD"/>
        <path d="M151.908 0L132.747 47.04L113.587 0H92.0312V80H106.402V20.1882L124.764 62.4H140.731L159.093 20.1882V80H173.463V0H151.908Z" fill="#0006CD"/>
        <path d="M0 0V14H18.7613V66H0V80H52.6912V66H33.93V14H52.6912V0H0Z" fill="#0006CD"/>
      </g>

      {/* AI GROUP Text */}
      <text
        x="110"
        y="80"
        fill="#738192"
        fontSize="28"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        letterSpacing="0.1em"
        style={{
          textTransform: "uppercase",
          fontStretch: "105%",
        }}
      >
        AI GROUP
      </text>
    </svg>
  );
};

export default Logo;
import React from "react";

let size;
let mq = window.matchMedia("(max-width: 600px)");
if (mq.matches) {
  size = "30px";
} else {
  size = "45px";
}

const SVG = ({
  style = { width: size },
  className = "",
  viewBox = "0 0 27.414 27.414",
  value,
  time,
  selectAll,
}) => (
  <svg
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={time ? "#7FFF00" : "#ffa500"}
      opacity={selectAll ? 1 : value ? 1 : 0}
      d="M24.559,24.314c0,0.996-0.562,1.764-1.686,2.297c-1.121,0.533-2.32,0.803-3.592,0.803c-0.781,0-2.996-0.422-6.646-1.262
		c-0.096-0.023-0.258-0.072-0.486-0.146c-0.229-0.071-0.51-0.133-0.846-0.182c-0.336-0.048-0.738-0.07-1.207-0.07
		c-0.504,0-0.949,0.07-1.332,0.216c-0.385,0.146-1.049,0.407-1.99,0.793c-0.943,0.385-1.582,0.575-1.918,0.575
		c-0.457,0-0.904-0.207-1.342-0.621c-0.439-0.413-0.658-0.956-0.658-1.631c0-0.252,0.078-0.516,0.234-0.791
		c0.156-0.276,0.402-0.592,0.738-0.946c0.336-0.354,0.84-0.818,1.514-1.396c0.611-0.519,1.125-1.24,1.539-2.17
		c0.414-0.933,0.621-1.847,0.621-2.746c0-0.313-0.061-0.842-0.18-1.586H5.808c-0.889,0-1.557-0.106-2.008-0.324
		c-0.449-0.217-0.674-0.647-0.674-1.296c0-1.177,0.762-1.766,2.287-1.766h1.063c-0.59-1.872-0.883-3.35-0.883-4.43
		c0-1.477,0.348-2.792,1.045-3.944c0.695-1.153,1.691-2.056,2.988-2.71C10.922,0.327,12.405,0,14.075,0
		c1.477,0,2.744,0.184,3.798,0.55c1.058,0.366,1.994,0.97,2.812,1.81c1.394,1.453,2.09,3.002,2.09,4.646
		c0,0.589-0.229,1.111-0.687,1.567c-0.455,0.456-1.014,0.685-1.674,0.685c-1.164,0-1.938-0.649-2.324-1.946
		c-0.348-1.248-0.823-2.17-1.432-2.764c-0.604-0.594-1.421-0.892-2.438-0.892c-1.105,0-1.998,0.357-2.676,1.071
		c-0.678,0.715-1.018,1.637-1.018,2.765c0,0.685,0.072,1.324,0.217,1.918c0.145,0.595,0.396,1.479,0.756,2.656h2.684
		c0.983,0,1.748,0.1,2.287,0.298c0.541,0.198,0.812,0.663,0.812,1.396c0,0.506-0.181,0.914-0.539,1.225
		c-0.361,0.313-0.83,0.469-1.404,0.469h-3.188v0.307c0,1.215-0.273,2.328-0.818,3.342c-0.547,1.017-1.498,2.283-2.855,3.81
		c0.396-0.095,0.789-0.187,1.18-0.271c0.391-0.082,0.828-0.158,1.314-0.227c0.486-0.064,1.018-0.1,1.594-0.1
		c0.805,0,1.929,0.094,3.369,0.279c1.438,0.188,2.396,0.278,2.861,0.278c0.686,0,1.422-0.123,2.205-0.369
		c0.787-0.246,1.283-0.369,1.486-0.369c0.541,0,1.021,0.218,1.441,0.648C24.348,23.217,24.559,23.729,24.559,24.314z"
    />
  </svg>
);

export default SVG;

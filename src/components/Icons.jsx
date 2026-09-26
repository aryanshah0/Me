import { useId } from 'react'

export const GithubIcon = ({ className = '', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
)

export const TwitterIcon = ({ className = '', ...rest }) => (
  // <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 209" {...rest} className={`w-full h-auto ${className}`}>
  //   <path fill="none" d="M0 0h256v209H0z" />
  //   <path
  //     fill="#55acee"
  //     d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
  //   />
  // </svg>
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={`w-full h-auto ${className}`}
    height="1.4em"
    width="1.4em"
    viewBox="0 0 512 512"
  >
    <path d="M0 0h512v512H0z" fill="#1B1B1B" />
    <path
      clipRule="evenodd"
      d="M192.034 98H83l129.275 170.757L91.27 412h55.908l91.521-108.34 81.267 107.343H429L295.968 235.284l.236.303L410.746 99.994h-55.908l-85.062 100.694zm-48.849 29.905h33.944l191.686 253.193h-33.944z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
)
// #0A66C2
export const LinkedInIcon = ({ className = '', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
)

// Gradient ids must be unique per instance: the icon renders in several places,
// and a shared id resolving to a copy inside a hidden (display:none) nav breaks the fill.
export const InstagramIcon = ({ className = '', ...rest }) => {
  const id = useId().replace(/:/g, '')
  const a = `ig-a-${id}`
  const b = `ig-b-${id}`
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className={`w-full h-auto ${className}`}
      width="2em"
      height="2em"
      viewBox="0 0 3364.7 3364.7"
    >
      <defs>
        <radialGradient id={a} cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse">
          <stop offset=".09" stopColor="#fa8f21" />
          <stop offset=".78" stopColor="#d82d7e" />
        </radialGradient>
        <radialGradient id={b} cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse">
          <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
          <stop offset="1" stopColor="#8c3aaa" />
        </radialGradient>
      </defs>
      <path
        d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
        fill={`url(#${a})`}
      />
      <path
        d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
        fill={`url(#${b})`}
      />
      <path
        d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57"
        fill="#ffffff"
      />
    </svg>
  )
}

export const SunIcon = ({ className = '', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2" />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
        <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
        <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
      </circle>
    </mask>
    <circle cx="12" cy="12" r="6" fill="currentColor" mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
    </circle>
  </svg>
)

export const MoonIcon = ({ className = '', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g fill="none" stroke="currentColor" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2">
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0" />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="1.2s" values="2;0" />
      </path>
      <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0" />
      </path>
    </g>
    <g fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" />
      </circle>
    </mask>
    <circle cx="12" cy="12" r="10" fill="currentColor" mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)" opacity="0">
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" />
    </circle>
  </svg>
)

export const CircularText = ({ className = '', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    viewBox="0 0 300.000000 300.000000"
    {...rest}
    className={`w-full h-auto ${className}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
      <path d="M1445 2395 c-29 -28 -32 -61 -9 -93 13 -19 23 -23 62 -20 28 2 47 8 50 17 4 11 -3 13 -29 9 -41 -6 -59 -1 -59 18 0 10 14 14 54 14 52 0 53 1 48 25 -10 55 -76 72 -117 30z m75 -20 c7 -8 11 -15 9 -16 -48 -8 -69 -7 -69 4 0 30 39 37 60 12z" />
      <path d="M1599 2398 c-6 -70 -10 -105 -14 -115 -2 -8 4 -13 14 -13 15 0 21 10 26 39 7 41 27 67 44 57 5 -3 12 1 15 10 9 25 8 27 -19 22 -14 -3 -28 -1 -31 3 -8 14 -34 11 -35 -3z" />
      <path d="M1305 2390 c-3 -5 -20 -10 -37 -10 -25 0 -29 -3 -23 -17 9 -25 26 -104 28 -137 1 -14 5 -26 10 -26 4 0 13 0 21 0 11 0 13 7 6 30 -8 29 -7 30 24 30 19 0 40 8 49 18 23 25 22 85 -1 105 -20 19 -67 23 -77 7z m55 -40 c24 -44 -22 -86 -54 -51 -19 21 -20 43 -4 59 18 18 46 14 58 -8z" />
      <path d="M1140 2343 c-32 -12 -50 -37 -50 -70 0 -61 58 -92 108 -57 50 35 51 94 1 119 -30 16 -35 17 -59 8z m44 -39 c22 -21 20 -51 -3 -64 -45 -24 -81 30 -41 62 27 22 25 22 44 2z" />
      <path d="M1912 2266 c-43 -65 -48 -77 -35 -88 12 -10 18 -8 33 12 l18 23 27 -21 c15 -12 36 -22 47 -22 22 0 68 43 68 64 0 20 -42 67 -78 89 l-31 18 -49 -75z m96 8 c31 -21 26 -58 -8 -61 -14 -2 -33 3 -43 11 -18 14 -18 16 -2 40 20 30 23 31 53 10z" />
      <path d="M983 2319 c-15 -15 83 -170 103 -162 8 3 14 9 14 13 0 12 -92 160 -100 160 -3 0 -11 -5 -17 -11z" />
      <path d="M1751 2271 c-19 -12 -6 -43 16 -39 10 2 18 12 18 22 0 22 -14 29 -34 17z" />
      <path d="M906 2194 c-30 -31 -32 -50 -10 -82 23 -33 49 -44 77 -33 26 10 67 49 67 63 0 15 -27 8 -45 -12 -17 -19 -55 -28 -55 -12 0 4 19 20 41 37 l40 30 -21 17 c-31 25 -63 22 -94 -8z m64 -12 c0 -5 -11 -19 -24 -31 -26 -25 -41 -11 -24 22 9 17 48 24 48 9z" />
      <path d="M2050 2139 c-31 -37 -40 -53 -31 -62 8 -8 20 -2 45 22 26 25 38 31 58 26 15 -4 29 -2 33 5 4 7 -1 13 -13 17 -11 2 -22 13 -25 24 -8 29 -20 23 -67 -32z" />
      <path d="M832 2127 c-10 -11 -7 -24 14 -61 28 -51 26 -53 -36 -31 -37 13 -43 13 -57 0 -11 -12 -12 -16 -1 -19 7 -2 39 -11 72 -21 51 -15 60 -15 73 -2 13 13 10 23 -19 82 -28 55 -36 64 -46 52z" />
      <path d="M2122 2070 c-30 -28 -29 -74 3 -105 47 -48 115 -22 115 45 0 67 -71 103 -118 60z m87 -38 c14 -26 -5 -52 -39 -52 -33 0 -50 31 -30 55 17 21 57 19 69 -3z" />
      <path d="M712 1957 c-27 -29 -29 -78 -4 -100 19 -17 57 -22 87 -11 18 7 45 54 45 79 0 27 -19 16 -34 -20 -11 -25 -21 -35 -36 -35 -22 0 -22 1 5 45 14 25 23 50 20 55 -11 18 -61 11 -83 -13z m48 -17 c0 -8 -14 -37 -28 -60 -3 -5 -22 21 -22 32 0 10 30 38 41 38 5 0 9 -5 9 -10z" />
      <path d="M2248 1942 c-74 -36 -94 -57 -64 -68 8 -3 13 -11 10 -18 -8 -22 35 -66 65 -66 65 0 110 82 61 112 -27 17 -25 24 10 36 21 8 28 16 24 26 -8 22 -18 20 -106 -22z m51 -61 c23 -42 -46 -71 -72 -29 -8 12 -7 21 2 32 18 22 58 20 70 -3z" />
      <path d="M617 1820 c-24 -19 -68 -124 -56 -133 2 -2 41 -15 86 -29 l82 -25 16 54 c21 71 12 109 -28 134 -41 24 -68 24 -100 -1z m95 -43 c10 -16 10 -68 0 -85 -7 -9 -19 -9 -61 4 -50 14 -52 17 -46 42 11 44 35 64 69 58 17 -4 34 -12 38 -19z" />
      <path d="M2328 1777 c-71 -24 -88 -33 -88 -49 0 -15 4 -18 18 -13 9 4 49 16 87 27 79 23 91 30 79 50 -8 12 -23 10 -96 -15z" />
      <path d="M2309 1698 c-41 -14 -54 -56 -34 -104 14 -33 18 -36 26 -22 7 12 6 24 -1 38 -8 14 -8 26 0 41 13 23 23 19 27 -14 2 -12 7 -34 11 -49 6 -25 9 -26 32 -15 79 40 23 153 -61 125z m66 -47 c6 -20 -3 -51 -15 -51 -8 0 -20 34 -20 58 0 19 28 14 35 -7z" />
      <path d="M695 1540 c-38 -42 -54 -45 -86 -14 -29 27 -29 27 -29 5 0 -13 13 -33 30 -48 17 -13 30 -29 30 -34 0 -5 -25 -9 -56 -9 -47 0 -55 -3 -52 -17 2 -10 9 -18 16 -17 6 1 48 2 92 3 73 1 80 3 80 21 0 13 -7 20 -19 20 -32 0 -35 21 -6 44 18 15 26 29 23 45 l-3 23 -20 -22z" />
      <path d="M2284 1535 c-9 -23 5 -33 51 -37 35 -3 40 -6 43 -30 3 -28 2 -28 -52 -28 -48 0 -56 -3 -56 -19 0 -15 8 -18 41 -18 46 0 73 -21 63 -47 -5 -14 -16 -17 -58 -14 -41 2 -51 0 -54 -14 -3 -13 8 -18 54 -24 52 -6 59 -5 76 16 21 26 23 51 6 68 -8 8 -8 15 2 27 7 9 15 41 16 71 l3 54 -53 -1 c-30 -1 -59 2 -65 5 -6 4 -14 0 -17 -9z" />
      <path d="M687 1376 c-3 -8 1 -17 9 -20 25 -10 14 -60 -14 -64 -33 -5 -55 16 -47 45 8 32 -3 47 -21 32 -23 -19 -17 -67 12 -96 20 -20 31 -24 57 -19 39 8 57 30 57 72 0 46 -40 84 -53 50z" />
      <path d="M700 1227 c-33 -16 -46 -29 -49 -47 -3 -25 25 -90 40 -90 17 0 18 20 2 49 -14 23 -15 33 -6 42 10 10 14 7 21 -12 6 -13 19 -33 31 -43 20 -18 22 -18 41 -1 25 22 26 49 3 73 -10 9 -18 23 -18 31 0 22 -16 22 -65 -2z m64 -43 c9 -25 7 -34 -9 -34 -12 0 -35 28 -35 44 0 14 38 5 44 -10z" />
      <path d="M2229 1213 c-42 -53 -49 -91 -21 -116 28 -25 48 -21 83 18 18 19 36 35 41 35 19 0 19 -33 0 -59 -28 -38 -13 -66 17 -30 30 36 37 85 16 109 -26 28 -43 25 -81 -16 -21 -24 -38 -34 -48 -31 -22 9 -20 21 10 56 14 17 23 35 19 41 -9 15 -20 12 -36 -7z" />
      <path d="M804 1097 c4 -18 -1 -27 -25 -41 -28 -17 -31 -17 -43 -1 -11 15 -13 15 -25 2 -8 -10 -9 -17 -1 -22 15 -9 12 -25 -5 -25 -13 0 -14 -4 -5 -21 10 -17 14 -18 27 -7 12 10 17 10 20 1 2 -7 10 -10 18 -7 8 3 11 11 9 19 -3 7 10 22 30 35 35 21 43 41 30 74 -10 26 -37 20 -30 -7z" />
      <path d="M2139 1051 c-34 -35 -36 -59 -8 -95 30 -38 80 -36 108 3 33 46 26 83 -20 106 -39 21 -46 19 -80 -14z m76 -51 c0 -28 -4 -36 -22 -38 -29 -4 -56 34 -42 60 7 13 19 18 37 16 24 -3 27 -7 27 -38z" />
      <path d="M826 1004 c-21 -20 -20 -32 5 -78 14 -26 17 -42 10 -49 -15 -15 -40 -1 -54 31 -8 18 -18 26 -29 24 -16 -3 -16 -6 -4 -30 22 -42 51 -64 82 -60 39 4 52 30 35 70 -30 75 -3 104 34 36 21 -39 37 -44 43 -14 5 22 -60 86 -86 86 -11 0 -28 -7 -36 -16z" />
      <path d="M2051 957 c-8 -10 6 -30 59 -82 63 -62 71 -68 85 -54 14 14 9 21 -47 75 -76 73 -83 77 -97 61z" />
      <path d="M1978 886 c-16 -12 -16 -17 5 -84 18 -58 25 -70 37 -62 12 8 12 15 -2 59 -9 28 -14 51 -10 51 3 0 24 -11 48 -25 35 -21 44 -22 54 -10 9 11 7 16 -12 26 -13 6 -41 22 -63 35 -33 19 -43 21 -57 10z" />
      <path d="M976 804 c-43 -61 -53 -81 -44 -91 14 -17 17 -14 82 78 38 56 44 68 32 78 -11 10 -24 -3 -70 -65z" />
      <path d="M1042 758 c-46 -75 -50 -84 -35 -95 14 -11 20 -7 40 30 14 23 35 61 48 83 20 34 22 44 11 53 -10 9 -24 -6 -64 -71z" />
      <path d="M1860 813 c-8 -3 -23 -15 -34 -25 -18 -16 -18 -20 -6 -28 10 -6 20 -3 33 11 19 21 34 24 56 10 10 -7 1 -15 -37 -31 -29 -12 -52 -26 -52 -29 0 -15 47 -51 67 -51 32 0 73 44 73 79 0 47 -54 82 -100 64z m70 -72 c0 -11 -28 -41 -38 -41 -4 0 -13 4 -21 9 -11 7 -7 12 15 25 34 18 44 19 44 7z" />
      <path d="M1125 753 c-10 -27 -23 -54 -28 -61 -8 -10 -7 -16 4 -23 21 -13 32 -6 40 25 10 37 27 56 51 56 27 0 32 -22 14 -65 -20 -48 -20 -55 2 -55 17 0 52 68 52 101 0 24 -33 49 -63 49 -15 0 -27 5 -27 10 0 6 -6 10 -14 10 -7 0 -21 -21 -31 -47z" />
      <path d="M1745 760 c-4 -6 -2 -16 3 -23 20 -25 20 -68 1 -80 -11 -7 -19 -20 -19 -29 0 -22 13 -23 30 -4 6 8 17 13 23 11 31 -12 35 10 15 73 -19 58 -38 76 -53 52z" />
      <path d="M1376 714 c-3 -9 -6 -25 -6 -36 0 -15 -4 -18 -17 -13 -43 16 -70 17 -76 1 -5 -11 4 -16 39 -22 39 -5 45 -9 42 -28 -3 -18 -10 -21 -52 -21 -67 0 -71 -20 -6 -34 86 -19 86 -19 99 57 6 37 14 77 17 90 5 17 2 22 -14 22 -11 0 -23 -7 -26 -16z" />
      <path d="M1581 721 c-12 -8 -12 -12 -2 -25 24 -28 56 -13 44 22 -5 14 -22 15 -42 3z" />
    </g>
  </svg>
)

export const LinkArrow = ({ className = '', ...rest }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
)

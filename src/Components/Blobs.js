export const blob1 = (
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="b">
        <path
          fill="currentColor"
          d="M782 642Q664 784 470 836T201 694q-75-194 9-372.5T497 148q203 5 303 178.5T782 642Z"
        />
      </clipPath>
      <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
        <feFlood flood-color="#fff" result="neutral-gray" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2.5"
          numOctaves="100"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          in="noise"
          type="saturate"
          values="0"
          result="destaturatedNoise"
        />
        <feComponentTransfer in="desaturatedNoise" result="theNoise">
          <feFuncA type="table" tableValues="0 0 0.5 0" />
        </feComponentTransfer>
        <feBlend
          in="SourceGraphic"
          in2="theNoise"
          mode="soft-light"
          result="noisy-image"
        />
      </filter>
    </defs>
    <g filter="url(#a)" clip-path="url(#b)">
      <path
        fill="#cbff8c"
        d="M782 642Q664 784 470 836T201 694q-75-194 9-372.5T497 148q203 5 303 178.5T782 642Z"
      />
    </g>
  </svg>
);

export const blob2 = (
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="b">
        <path
          fill="currentColor"
          d="M782 642Q664 784 470 836T201 694q-75-194 9-372.5T497 148q203 5 303 178.5T782 642Z"
        />
      </clipPath>
      <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
        <feFlood flood-color="#fff" result="neutral-gray" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2.5"
          numOctaves="100"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          in="noise"
          type="saturate"
          values="0"
          result="destaturatedNoise"
        />
        <feComponentTransfer in="desaturatedNoise" result="theNoise">
          <feFuncA type="table" tableValues="0 0 0.5 0" />
        </feComponentTransfer>
        <feBlend
          in="SourceGraphic"
          in2="theNoise"
          mode="soft-light"
          result="noisy-image"
        />
      </filter>
    </defs>
    <g filter="url(#a)" clip-path="url(#b)">
      <path
        fill="#cbff8c"
        d="M782 642Q664 784 470 836T201 694q-75-194 9-372.5T497 148q203 5 303 178.5T782 642Z"
      />
    </g>
  </svg>
);

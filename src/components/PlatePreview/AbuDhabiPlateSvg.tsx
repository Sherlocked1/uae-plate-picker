import glNummernschildFont from '../../assets/fonts/gl/GL-Nummernschild-Mtl.ttf';

type AbuDhabiPlateSvgProps = {
  code: string;
  number: string;
  className?: string;
};

export function AbuDhabiPlateSvg({ code, number, className }: AbuDhabiPlateSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="220"
      viewBox="0 0 1000 220"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <style>
          {`
            @font-face {
              font-family: 'GL Nummernschild';
              src: url('${glNummernschildFont}') format('truetype');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            .abu-dhabi-plate-number {
              font-family: 'GL Nummernschild', Arial, Helvetica, sans-serif;
              font-size: 132px;
              fill: #000;
              dominant-baseline: middle;
            }

            .abu-dhabi-category {
              font-family: 'GL Nummernschild', Arial, Helvetica, sans-serif;
              font-size: 98px;
              fill: #fff;
              dominant-baseline: middle;
            }

            .abu-dhabi-arabic {
              font-family: 'Noto Naskh Arabic', 'Amiri', serif;
              font-size: 36px;
              fill: #000;
            }

            .abu-dhabi-english {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 38px;
              fill: #000;
              letter-spacing: 1px;
            }
          `}
        </style>
      </defs>

      <rect
        x="5"
        y="5"
        width="990"
        height="210"
        rx="18"
        ry="18"
        fill="#fff"
        stroke="#000"
        strokeWidth="6"
      />

      <path
        d="M22 8H193V212H22Q8 212 8 198V22Q8 8 22 8Z"
        fill="#d71920"
      />

      <text
        id="plate-category"
        className="abu-dhabi-category"
        x="100"
        y="115"
        textAnchor="middle"
      >
        {code}
      </text>

      <text
        className="abu-dhabi-arabic"
        x="325"
        y="54"
        textAnchor="middle"
      >
        الإمــارات
      </text>

      <text
        className="abu-dhabi-arabic"
        x="325"
        y="108"
        textAnchor="middle"
      >
        أبوظبــي
      </text>

      <text
        className="abu-dhabi-english"
        x="325"
        y="170"
        textAnchor="middle"
      >
        U.A.E A.D
      </text>

      <text
        id="plate-number"
        className="abu-dhabi-plate-number"
        x="710"
        y="118"
        textAnchor="middle"
      >
        {number}
      </text>
    </svg>
  );
}

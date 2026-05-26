/**
 * SVG logo mark faithful to the official Colegio de Contadores de Chimborazo seal:
 * circular medallion, dark navy ring, gold border, caduceus on open book.
 */
export default function LogoMark({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Outer gold ring */}
      <circle cx="50" cy="50" r="49" fill="#C8A94B" />
      {/* Navy background */}
      <circle cx="50" cy="50" r="45" fill="#0F1520" />
      {/* Inner gold thin ring */}
      <circle cx="50" cy="50" r="37" fill="none" stroke="#C8A94B" strokeWidth="1.5" />
      {/* White inner circle */}
      <circle cx="50" cy="50" r="35" fill="white" />

      {/* Open book */}
      <g transform="translate(50,58) scale(0.9)">
        {/* Left page */}
        <path d="M-18,-8 Q-9,-10 0,-7 L0,10 Q-9,7 -18,9 Z" fill="#F0E8D5" stroke="#8B7355" strokeWidth="0.8"/>
        {/* Right page */}
        <path d="M18,-8 Q9,-10 0,-7 L0,10 Q9,7 18,9 Z" fill="#F0E8D5" stroke="#8B7355" strokeWidth="0.8"/>
        {/* Book spine */}
        <rect x="-1.5" y="-7" width="3" height="17" fill="#8B1A1A" rx="0.5"/>
        {/* Text lines left */}
        <line x1="-14" y1="-3" x2="-3" y2="-4" stroke="#A09070" strokeWidth="0.8"/>
        <line x1="-14" y1="0" x2="-3" y2="-0.5" stroke="#A09070" strokeWidth="0.8"/>
        <line x1="-14" y1="3" x2="-3" y2="2.5" stroke="#A09070" strokeWidth="0.8"/>
        {/* Text lines right */}
        <line x1="3" y1="-4" x2="14" y2="-3" stroke="#A09070" strokeWidth="0.8"/>
        <line x1="3" y1="-0.5" x2="14" y2="0" stroke="#A09070" strokeWidth="0.8"/>
        <line x1="3" y1="2.5" x2="14" y2="3" stroke="#A09070" strokeWidth="0.8"/>
      </g>

      {/* Caduceus staff */}
      <line x1="50" y1="24" x2="50" y2="58" stroke="#C8A94B" strokeWidth="2" strokeLinecap="round"/>

      {/* Left snake body */}
      <path
        d="M50,54 C44,50 44,44 50,40 C56,36 56,30 50,26"
        fill="none" stroke="#C8A94B" strokeWidth="1.8" strokeLinecap="round"
      />
      {/* Right snake body */}
      <path
        d="M50,54 C56,50 56,44 50,40 C44,36 44,30 50,26"
        fill="none" stroke="#C8A94B" strokeWidth="1.8" strokeLinecap="round"
      />

      {/* Wings */}
      <path d="M50,27 C45,24 38,23 34,25 C37,22 44,22 50,27Z" fill="#C8A94B"/>
      <path d="M50,27 C55,24 62,23 66,25 C63,22 56,22 50,27Z" fill="#C8A94B"/>

      {/* Staff top orb */}
      <circle cx="50" cy="24" r="2.5" fill="#C8A94B"/>

      {/* Text arc top: COLEGIO DE CONTADORES */}
      <path id="arcTop" d="M 14,50 A 36,36 0 0,1 86,50" fill="none"/>
      <text fontSize="7.2" fontFamily="Georgia, serif" fontWeight="700" fill="#C8A94B" letterSpacing="0.5">
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
          COLEGIO DE CONTADORES
        </textPath>
      </text>

      {/* Text arc bottom: DE CHIMBORAZO */}
      <path id="arcBot" d="M 17,52 A 33,33 0 0,0 83,52" fill="none"/>
      <text fontSize="7.2" fontFamily="Georgia, serif" fontWeight="700" fill="#C8A94B" letterSpacing="0.5">
        <textPath href="#arcBot" startOffset="50%" textAnchor="middle">
          DE CHIMBORAZO
        </textPath>
      </text>
    </svg>
  )
}

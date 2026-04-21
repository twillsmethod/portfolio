interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  flipped?: boolean;
}

export default function WaveDivider({ fromColor, toColor, flipped = false }: WaveDividerProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ marginBottom: "-2px" }}>
      <div
        className="w-full"
        style={{
          borderTop: "1px solid var(--gold-light)",
        }}
      />
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full"
        style={{
          display: "block",
          height: "60px",
          transform: flipped ? "scaleX(-1)" : undefined,
          backgroundColor: fromColor,
        }}
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

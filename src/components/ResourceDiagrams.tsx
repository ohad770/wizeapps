const ACCENT = "#7F77DD";
const ACCENT_DEEP = "#5b51c9";
const ACCENT_SOFT = "#f1f0fc";
const FOREGROUND = "#111111";
const MUTED = "#888888";

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  fill = ACCENT_SOFT,
  stroke = ACCENT,
  textFill = FOREGROUND,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  fill?: string;
  stroke?: string;
  textFill?: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 6 : y + h / 2 + 5}
        textAnchor="middle"
        fontSize={13}
        fontWeight={600}
        fill={textFill}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fontSize={11}
          fill={MUTED}
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
}) {
  const id = `arrow-${x1}-${y1}-${x2}-${y2}`;
  return (
    <g>
      <defs>
        <marker
          id={id}
          markerWidth={8}
          markerHeight={8}
          refX={6}
          refY={4}
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill={MUTED} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={MUTED}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "4 4" : undefined}
        markerEnd={`url(#${id})`}
      />
    </g>
  );
}

export function BookingFlowDiagram() {
  return (
    <svg viewBox="0 0 720 260" className="w-full h-auto" role="img" aria-label="Booking flow: request comes in, system checks if it fits the rules, then either auto-confirms and reminds, or routes to a person">
      <Box x={20} y={100} w={130} h={60} label="Request" sub="phone, form, chat" />
      <Arrow x1={150} y1={130} x2={210} y2={130} />
      <Box x={210} y={100} w={140} h={60} label="Fits the rules?" fill="#fff" stroke={MUTED} />
      <Arrow x1={350} y1={115} x2={420} y2={40} />
      <Arrow x1={350} y1={145} x2={420} y2={220} dashed />
      <Box x={420} y={10} w={150} h={60} label="Auto-confirm" sub="+ reminder" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Box x={420} y={190} w={150} h={60} label="Route to a person" sub="needs judgment" fill="#fff" stroke={MUTED} />
      <Arrow x1={570} y1={40} x2={630} y2={40} />
      <Box x={630} y={10} w={80} h={60} label="Done" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <Arrow x1={570} y1={220} x2={630} y2={220} />
      <Box x={630} y={190} w={80} h={60} label="Done" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <text x={360} y={95} textAnchor="middle" fontSize={11} fill={MUTED}>~80% of requests</text>
      <text x={430} y={185} textAnchor="middle" fontSize={11} fill={MUTED}>~20% of requests</text>
    </svg>
  );
}

export function MvpLoopDiagram() {
  const steps = [
    { label: "Request", x: 90, y: 30 },
    { label: "Match", x: 300, y: 30 },
    { label: "Respond", x: 510, y: 30 },
  ];
  return (
    <svg viewBox="0 0 620 200" className="w-full h-auto" role="img" aria-label="MVP core loop: request, match, respond, then back to request">
      {steps.map((s) => (
        <Box key={s.label} x={s.x} y={s.y} w={130} h={60} label={s.label} />
      ))}
      <Arrow x1={220} y1={60} x2={300} y2={60} />
      <Arrow x1={430} y1={60} x2={510} y2={60} />
      <path
        d="M 575 90 C 575 150, 155 150, 155 90"
        fill="none"
        stroke={MUTED}
        strokeWidth={1.5}
        markerEnd="url(#loop-back)"
      />
      <defs>
        <marker id="loop-back" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={MUTED} />
        </marker>
      </defs>
      <text x={310} y={175} textAnchor="middle" fontSize={11} fill={MUTED}>
        everything else waits until this loop is proven
      </text>
    </svg>
  );
}

export function ManualVsSystemDiagram() {
  return (
    <svg viewBox="0 0 720 260" className="w-full h-auto" role="img" aria-label="Manual workflow with scattered handoffs between inbox, spreadsheet, and chat, compared to a system with one shared source of truth">
      <text x={170} y={24} textAnchor="middle" fontSize={12} fontWeight={600} fill={MUTED}>MANUAL</text>
      <Box x={40} y={40} w={100} h={50} label="Inbox" fill="#fff" stroke={MUTED} />
      <Box x={200} y={40} w={100} h={50} label="Spreadsheet" fill="#fff" stroke={MUTED} />
      <Box x={120} y={140} w={100} h={50} label="Chat" fill="#fff" stroke={MUTED} />
      <Arrow x1={140} y1={65} x2={200} y2={65} dashed />
      <Arrow x1={170} y1={90} x2={165} y2={140} dashed />
      <Arrow x1={220} y1={90} x2={195} y2={140} dashed />
      <Arrow x1={140} y1={155} x2={40} y2={90} dashed />
      <line x1={370} y1={0} x2={370} y2={260} stroke="#e5e5e5" strokeWidth={1} />
      <text x={540} y={24} textAnchor="middle" fontSize={12} fontWeight={600} fill={ACCENT_DEEP}>SYSTEM</text>
      <Box x={480} y={100} w={140} h={60} label="One source of truth" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Box x={420} y={20} w={100} h={44} label="Request" fill="#fff" stroke={MUTED} />
      <Box x={600} y={20} w={100} h={44} label="Staff view" fill="#fff" stroke={MUTED} />
      <Box x={420} y={196} w={100} h={44} label="Reminder" fill="#fff" stroke={MUTED} />
      <Box x={600} y={196} w={100} h={44} label="Status" fill="#fff" stroke={MUTED} />
      <Arrow x1={470} y1={64} x2={520} y2={100} />
      <Arrow x1={620} y1={64} x2={580} y2={100} />
      <Arrow x1={520} y1={160} x2={470} y2={196} />
      <Arrow x1={580} y1={160} x2={620} y2={196} />
    </svg>
  );
}

export function PrepFlowDiagram() {
  const items = ["Real example", "Screenshots & forms", "Outcome, not feature", "Constraints", "Success measure"];
  return (
    <svg viewBox="0 0 720 220" className="w-full h-auto" role="img" aria-label="Five inputs feeding into a clear brief a developer can start from">
      {items.map((label, i) => (
        <Box key={label} x={20} y={10 + i * 40} w={210} h={30} label={label} fill="#fff" stroke={MUTED} />
      ))}
      {items.map((_, i) => (
        <Arrow key={i} x1={230} y1={25 + i * 40} x2={330} y2={110} />
      ))}
      <Box x={340} y={80} w={170} h={60} label="A clear brief" sub="no spec needed" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Arrow x1={510} y1={110} x2={580} y2={110} />
      <Box x={580} y={80} w={120} h={60} label="Build starts" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
    </svg>
  );
}

export const diagrams: Record<string, () => React.ReactElement> = {
  "booking-flow": BookingFlowDiagram,
  "mvp-loop": MvpLoopDiagram,
  "manual-vs-system": ManualVsSystemDiagram,
  "prep-flow": PrepFlowDiagram,
};

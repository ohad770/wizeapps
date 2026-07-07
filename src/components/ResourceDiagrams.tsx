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
          fill={textFill === FOREGROUND ? MUTED : "rgba(255,255,255,0.75)"}
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

export function WebsiteToolLadderDiagram() {
  return (
    <svg viewBox="0 0 720 250" className="w-full h-auto" role="img" aria-label="Website tool choice ladder from simple brochure site to workflow-heavy custom website">
      <Box x={30} y={95} w={120} h={58} label="Website job" sub="what must happen?" fill="#fff" stroke={MUTED} />
      <Arrow x1={150} y1={124} x2={210} y2={124} />
      <Box x={210} y={20} w={130} h={54} label="Builder" sub="simple site" />
      <Box x={210} y={98} w={130} h={54} label="CMS" sub="publishing" />
      <Box x={210} y={176} w={130} h={54} label="Custom" sub="workflow logic" />
      <Arrow x1={340} y1={47} x2={425} y2={47} />
      <Arrow x1={340} y1={125} x2={425} y2={125} />
      <Arrow x1={340} y1={203} x2={425} y2={203} />
      <Box x={425} y={20} w={250} h={54} label="Launch fast" sub="lowest maintenance" fill="#fff" stroke={MUTED} />
      <Box x={425} y={98} w={250} h={54} label="Publish often" sub="editorial control" fill="#fff" stroke={MUTED} />
      <Box x={425} y={176} w={250} h={54} label="Own the process" sub="integrations, checkout, portals" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
    </svg>
  );
}

export function AppPathDiagram() {
  return (
    <svg viewBox="0 0 720 260" className="w-full h-auto" role="img" aria-label="Choosing between responsive web app, cross-platform app, and native app based on distribution and device requirements">
      <Box x={30} y={100} w={150} h={60} label="App need" sub="who uses it?" fill="#fff" stroke={MUTED} />
      <Arrow x1={180} y1={130} x2={250} y2={45} />
      <Arrow x1={180} y1={130} x2={250} y2={130} />
      <Arrow x1={180} y1={130} x2={250} y2={215} />
      <Box x={250} y={15} w={160} h={60} label="Known users" sub="internal or portal" />
      <Box x={250} y={100} w={160} h={60} label="Both stores" sub="shared product" />
      <Box x={250} y={185} w={160} h={60} label="Deep device" sub="camera, offline, OS" />
      <Arrow x1={410} y1={45} x2={505} y2={45} />
      <Arrow x1={410} y1={130} x2={505} y2={130} />
      <Arrow x1={410} y1={215} x2={505} y2={215} />
      <Box x={505} y={15} w={170} h={60} label="Web app / PWA" fill="#fff" stroke={MUTED} />
      <Box x={505} y={100} w={170} h={60} label="Expo or Flutter" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Box x={505} y={185} w={170} h={60} label="Native build" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
    </svg>
  );
}

export function CostDriversDiagram() {
  const drivers = [
    { label: "Scope", x: 50, y: 25 },
    { label: "Roles", x: 50, y: 95 },
    { label: "Integrations", x: 50, y: 165 },
    { label: "Unknowns", x: 250, y: 95 },
  ];
  return (
    <svg viewBox="0 0 720 240" className="w-full h-auto" role="img" aria-label="Cost drivers such as scope, roles, integrations, and unknowns flow into estimate, buffer, and launch budget">
      {drivers.map((driver) => (
        <Box key={driver.label} x={driver.x} y={driver.y} w={135} h={48} label={driver.label} fill="#fff" stroke={MUTED} />
      ))}
      <Arrow x1={185} y1={49} x2={420} y2={112} />
      <Arrow x1={185} y1={119} x2={420} y2={119} />
      <Arrow x1={185} y1={189} x2={420} y2={126} />
      <Arrow x1={385} y1={119} x2={420} y2={119} />
      <Box x={420} y={82} w={130} h={74} label="Estimate" sub="work + risk" />
      <Arrow x1={550} y1={119} x2={610} y2={119} />
      <Box x={610} y={82} w={90} h={74} label="Budget" sub="+ buffer" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
    </svg>
  );
}

export function MaintenanceCycleDiagram() {
  return (
    <svg viewBox="0 0 620 250" className="w-full h-auto" role="img" aria-label="Maintenance cycle after launch: monitor, update, fix, improve, then feed learning back into the product">
      <Box x={240} y={10} w={140} h={54} label="Monitor" sub="errors, usage" />
      <Box x={430} y={98} w={140} h={54} label="Update" sub="platforms" fill="#fff" stroke={MUTED} />
      <Box x={240} y={186} w={140} h={54} label="Improve" sub="real use" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <Box x={50} y={98} w={140} h={54} label="Fix" sub="bugs, changes" fill="#fff" stroke={MUTED} />
      <path d="M 380 38 C 455 42, 490 62, 500 98" fill="none" stroke={MUTED} strokeWidth={1.5} markerEnd="url(#maintenance-arrow)" />
      <path d="M 500 152 C 485 190, 430 214, 380 214" fill="none" stroke={MUTED} strokeWidth={1.5} markerEnd="url(#maintenance-arrow)" />
      <path d="M 240 214 C 170 210, 110 190, 105 152" fill="none" stroke={MUTED} strokeWidth={1.5} markerEnd="url(#maintenance-arrow)" />
      <path d="M 105 98 C 115 60, 165 38, 240 38" fill="none" stroke={MUTED} strokeWidth={1.5} markerEnd="url(#maintenance-arrow)" />
      <defs>
        <marker id="maintenance-arrow" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={MUTED} />
        </marker>
      </defs>
      <text x={310} y={128} textAnchor="middle" fontSize={12} fill={MUTED}>
        launch starts the loop
      </text>
    </svg>
  );
}

export function NoCodeVsCustomDiagram() {
  return (
    <svg viewBox="0 0 720 230" className="w-full h-auto" role="img" aria-label="Deciding between no-code and custom code based on speed versus control, with a hybrid path in between">
      <Box x={20} y={85} w={150} h={60} label="What's the role?" sub="convenience or core?" fill="#fff" stroke={MUTED} />
      <Arrow x1={170} y1={95} x2={250} y2={35} />
      <Arrow x1={170} y1={135} x2={250} y2={195} />
      <Box x={250} y={5} w={170} h={60} label="Supporting workflow" sub="validating, internal" fill="#fff" stroke={MUTED} />
      <Box x={250} y={165} w={170} h={60} label="Central to the business" sub="scale, unusual logic" fill="#fff" stroke={MUTED} />
      <Arrow x1={420} y1={35} x2={490} y2={35} />
      <Arrow x1={420} y1={195} x2={490} y2={195} />
      <Box x={490} y={5} w={190} h={60} label="No-code" sub="fast, self-serve" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Box x={490} y={165} w={190} h={60} label="Custom code" sub="control, ownership" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <text x={360} y={112} textAnchor="middle" fontSize={11} fill={MUTED}>validate now, rebuild proven parts later</text>
    </svg>
  );
}

export function BuyDefaultDiagram() {
  return (
    <svg viewBox="0 0 700 180" className="w-full h-auto" role="img" aria-label="Default to buying software, only build when buying genuinely fails">
      <Box x={20} y={60} w={130} h={60} label="New need" fill="#fff" stroke={MUTED} />
      <Arrow x1={150} y1={90} x2={220} y2={90} />
      <Box x={220} y={60} w={190} h={60} label="Buy or configure" sub="the default" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Arrow x1={410} y1={90} x2={480} y2={90} dashed />
      <Box x={480} y={60} w={200} h={60} label="Build" sub="only if buying genuinely fails" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <text x={445} y={50} textAnchor="middle" fontSize={11} fill={MUTED}>rare exception</text>
    </svg>
  );
}

export function BuilderTierDiagram() {
  const tiers = [
    { label: "Freelancer", sub: "affordable, personal", risk: "key-person risk" },
    { label: "Small studio", sub: "tight team, more skills", risk: "higher cost" },
    { label: "Agency", sub: "scale, process", risk: "premium, more layers" },
  ];
  return (
    <svg viewBox="0 0 720 210" className="w-full h-auto" role="img" aria-label="Freelancer, small studio, and agency compared by cost, continuity, and risk">
      {tiers.map((tier, i) => (
        <g key={tier.label}>
          <Box x={20 + i * 235} y={20} w={210} h={60} label={tier.label} sub={tier.sub} fill={i === 1 ? ACCENT_SOFT : "#fff"} stroke={i === 1 ? ACCENT : MUTED} />
          <text x={125 + i * 235} y={112} textAnchor="middle" fontSize={11} fill={MUTED}>{tier.risk}</text>
        </g>
      ))}
      <text x={360} y={160} textAnchor="middle" fontSize={12} fill={MUTED}>match the tier to your project&apos;s size and risk, not to price alone</text>
    </svg>
  );
}

export function PilotDecisionDiagram() {
  return (
    <svg viewBox="0 0 700 220" className="w-full h-auto" role="img" aria-label="Pilot decision meeting outcomes: expand, adjust, or stop">
      <Box x={20} y={80} w={150} h={60} label="Pilot ends" sub="criteria met?" fill="#fff" stroke={MUTED} />
      <Arrow x1={170} y1={90} x2={250} y2={30} />
      <Arrow x1={170} y1={110} x2={250} y2={110} />
      <Arrow x1={170} y1={130} x2={250} y2={190} />
      <Box x={250} y={0} w={170} h={60} label="Expand" sub="criteria met" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <Box x={250} y={80} w={170} h={60} label="Adjust" sub="close, fix one thing" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Box x={250} y={160} w={170} h={60} label="Stop" sub="criteria not met" fill="#fff" stroke={MUTED} />
      <text x={550} y={30} textAnchor="middle" fontSize={11} fill={MUTED}>next slice, same discipline</text>
      <text x={550} y={110} textAnchor="middle" fontSize={11} fill={MUTED}>fix, extend briefly</text>
      <text x={550} y={190} textAnchor="middle" fontSize={11} fill={MUTED}>cheap discovery, not failure</text>
    </svg>
  );
}

export function DraftDontDecideDiagram() {
  return (
    <svg viewBox="0 0 700 200" className="w-full h-auto" role="img" aria-label="AI produces a draft, a person reviews and confirms or corrects it, and the correction rate decides whether to automate further">
      <Box x={20} y={70} w={140} h={60} label="Input" sub="message, request" fill="#fff" stroke={MUTED} />
      <Arrow x1={160} y1={100} x2={230} y2={100} />
      <Box x={230} y={70} w={160} h={60} label="AI drafts" sub="extract, summarize" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Arrow x1={390} y1={100} x2={460} y2={100} />
      <Box x={460} y={70} w={160} h={60} label="Person confirms" sub="one glance, one click" fill="#fff" stroke={MUTED} />
      <Arrow x1={540} y1={70} x2={540} y2={20} />
      <Box x={460} y={0} w={220} h={44} label="Rare corrections?" sub="consider automating" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
      <Arrow x1={620} y1={130} x2={620} y2={160} dashed />
      <text x={620} y={180} textAnchor="middle" fontSize={11} fill={MUTED}>frequent corrections: stay a draft tool</text>
    </svg>
  );
}

export function MatchingArchitectureDiagram() {
  return (
    <svg viewBox="0 0 720 280" className="w-full h-auto" role="img" aria-label="Matching architecture: jobs and candidates become structured statements, then embeddings, then pass through score gates, then land in snapshot tables for fast ranked results">
      <Box x={20} y={20} w={150} h={50} label="Job" sub="raw fields" fill="#fff" stroke={MUTED} />
      <Box x={20} y={90} w={150} h={50} label="Candidate" sub="raw fields, CV" fill="#fff" stroke={MUTED} />
      <Arrow x1={170} y1={45} x2={230} y2={80} />
      <Arrow x1={170} y1={115} x2={230} y2={80} />
      <Box x={230} y={55} w={170} h={50} label="Structured statements" sub="not one big blob" fill="#fff" stroke={MUTED} />
      <Arrow x1={400} y1={80} x2={460} y2={80} />
      <Box x={460} y={55} w={150} h={50} label="Embeddings" sub="text-embedding-3-small" fill={ACCENT_SOFT} stroke={ACCENT} />
      <Arrow x1={535} y1={105} x2={535} y2={150} />
      <Box x={380} y={150} w={310} h={54} label="Score gates" sub="title, required, optional, time — pass/fail reasons" fill="#fff" stroke={MUTED} />
      <Arrow x1={535} y1={204} x2={535} y2={230} />
      <Box x={330} y={230} w={360} h={40} label="Snapshot tables" sub="ranked, precomputed, fast to read" fill={ACCENT_DEEP} textFill="#fff" stroke={ACCENT_DEEP} />
    </svg>
  );
}

export const diagrams: Record<string, () => React.ReactElement> = {
  "booking-flow": BookingFlowDiagram,
  "mvp-loop": MvpLoopDiagram,
  "manual-vs-system": ManualVsSystemDiagram,
  "prep-flow": PrepFlowDiagram,
  "website-tool-ladder": WebsiteToolLadderDiagram,
  "app-path": AppPathDiagram,
  "cost-drivers": CostDriversDiagram,
  "maintenance-cycle": MaintenanceCycleDiagram,
  "no-code-vs-custom": NoCodeVsCustomDiagram,
  "buy-default": BuyDefaultDiagram,
  "builder-tiers": BuilderTierDiagram,
  "pilot-decision": PilotDecisionDiagram,
  "draft-dont-decide": DraftDontDecideDiagram,
  "matching-architecture": MatchingArchitectureDiagram,
};

"use client";

import { useMemo, useState, type ReactNode } from "react";

type ToolProps = {
  id: string;
};

const buildBuyQuestions = [
  {
    label: "Existing tools solve most of it",
    buy: true,
    help: "If a mature platform covers the workflow, start there.",
  },
  {
    label: "The workflow is a real competitive edge",
    buy: false,
    help: "If the way you operate is the advantage, custom can be worth it.",
  },
  {
    label: "It needs unusual business logic",
    buy: false,
    help: "Repeated workarounds are a sign the tool is fighting the process.",
  },
  {
    label: "The first version must launch very quickly",
    buy: true,
    help: "Buying or configuring is usually faster than building from scratch.",
  },
  {
    label: "It must connect deeply to internal systems",
    buy: false,
    help: "Deep integrations often justify a custom layer.",
  },
  {
    label: "Maintenance ownership would be a burden",
    buy: true,
    help: "Owning software means owning updates, fixes, and edge cases.",
  },
];

const scopeFeatures = [
  { label: "Authentication", weeks: 0.7, complexity: 1 },
  { label: "Admin dashboard", weeks: 1.2, complexity: 2 },
  { label: "Payments", weeks: 1.4, complexity: 3 },
  { label: "Email or WhatsApp notifications", weeks: 0.8, complexity: 1 },
  { label: "File uploads", weeks: 0.7, complexity: 1 },
  { label: "Roles and permissions", weeks: 1.1, complexity: 2 },
  { label: "Calendar or booking logic", weeks: 1.3, complexity: 3 },
  { label: "External API integration", weeks: 1.5, complexity: 3 },
  { label: "Reports or exports", weeks: 0.9, complexity: 2 },
];

const automationSignals = [
  {
    label: "Repetition",
    help: "How often does the same workflow repeat with only small changes?",
  },
  {
    label: "Handoff mistakes",
    help: "How often do errors happen because details move between people or tools?",
  },
  {
    label: "Status chasing",
    help: "How often do people ask for the same update?",
  },
  {
    label: "One-person dependency",
    help: "How much does the process depend on one person who just knows it?",
  },
];

function Panel({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-7 rounded-2xl border border-accent/20 bg-accent-soft/45 p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
        Interactive tool
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Meter({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="font-semibold text-accent-deep">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

function BuildVsBuyTool() {
  const [answers, setAnswers] = useState<boolean[]>(
    buildBuyQuestions.map(() => false),
  );
  const buildScore = answers.reduce((score, checked, index) => {
    if (!checked) return score;
    return score + (buildBuyQuestions[index].buy ? -1 : 1);
  }, 0);

  const verdict =
    buildScore >= 2
      ? "Build a focused custom layer"
      : buildScore <= -2
        ? "Buy or configure first"
        : "Use a hybrid path";
  const explanation =
    buildScore >= 2
      ? "The workflow looks specific enough that custom code may create real leverage."
      : buildScore <= -2
        ? "The need looks close to a solved category. Try existing tools before commissioning software."
        : "Start with existing tools where they fit, then build only the part they cannot cover.";

  return (
    <Panel
      title="Build vs. buy quick check"
      description="Select what is true for the project. The output is a starting point for a conversation, not a quote."
    >
      <div className="grid gap-3">
        {buildBuyQuestions.map((question, index) => (
          <label
            key={question.label}
            className="flex cursor-pointer gap-3 rounded-xl border border-white/80 bg-white p-4"
          >
            <input
              type="checkbox"
              checked={answers[index]}
              onChange={(event) =>
                setAnswers((current) =>
                  current.map((item, itemIndex) =>
                    itemIndex === index ? event.target.checked : item,
                  ),
                )
              }
              className="mt-1 h-4 w-4 accent-[var(--accent)]"
            />
            <span>
              <span className="block font-medium text-foreground">
                {question.label}
              </span>
              <span className="mt-1 block text-sm text-muted">
                {question.help}
              </span>
            </span>
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-foreground p-5 text-white">
        <p className="text-sm text-gray-300">Recommendation</p>
        <p className="mt-1 text-xl font-semibold">{verdict}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          {explanation}
        </p>
      </div>
    </Panel>
  );
}

function ScopeCalculatorTool() {
  const [selected, setSelected] = useState<string[]>([
    "Authentication",
    "Admin dashboard",
    "Email or WhatsApp notifications",
  ]);

  const result = useMemo(() => {
    const picked = scopeFeatures.filter((feature) =>
      selected.includes(feature.label),
    );
    const weeks = picked.reduce((sum, feature) => sum + feature.weeks, 1.5);
    const complexity = picked.reduce(
      (sum, feature) => sum + feature.complexity,
      1,
    );
    const label =
      complexity <= 5
        ? "Lean MVP"
        : complexity <= 11
          ? "Focused build"
          : "Large first version";
    return {
      weeks: `${Math.max(2, Math.round(weeks))}-${Math.max(3, Math.round(weeks + 2))}`,
      complexity,
      label,
    };
  }, [selected]);

  return (
    <Panel
      title="MVP scope calculator"
      description="Pick the features you are tempted to include in version one. The estimate is deliberately rough."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {scopeFeatures.map((feature) => (
          <label
            key={feature.label}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/80 bg-white p-4"
          >
            <input
              type="checkbox"
              checked={selected.includes(feature.label)}
              onChange={(event) =>
                setSelected((current) =>
                  event.target.checked
                    ? [...current, feature.label]
                    : current.filter((item) => item !== feature.label),
                )
              }
              className="mt-1 h-4 w-4 accent-[var(--accent)]"
            />
            <span className="font-medium text-foreground">{feature.label}</span>
          </label>
        ))}
      </div>
      <div className="mt-5 grid gap-4 rounded-xl bg-white p-5 md:grid-cols-3">
        <div>
          <p className="text-sm text-muted">Shape</p>
          <p className="mt-1 font-semibold text-foreground">{result.label}</p>
        </div>
        <div>
          <p className="text-sm text-muted">Rough timeline</p>
          <p className="mt-1 font-semibold text-foreground">
            {result.weeks} weeks
          </p>
        </div>
        <div>
          <p className="text-sm text-muted">Complexity score</p>
          <p className="mt-1 font-semibold text-foreground">
            {result.complexity}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted leading-relaxed">
        If the first version lands in &quot;large first version&quot;, cut one
        role, one integration, or one reporting feature before you build.
      </p>
    </Panel>
  );
}

function AutomationScoreTool() {
  const [scores, setScores] = useState<number[]>([3, 3, 2, 2]);
  const total = scores.reduce((sum, score) => sum + score, 0);
  const percent = Math.round((total / 20) * 100);
  const verdict =
    total >= 15
      ? "Strong automation candidate"
      : total >= 9
        ? "Map it before building"
        : "Keep it manual for now";
  const explanation =
    total >= 15
      ? "The process shows enough repeated pain that a small system could pay back quickly."
      : total >= 9
        ? "There is signal here, but the next step is workflow mapping, not code."
        : "The pain may not justify software yet. Improve the manual process first.";

  return (
    <Panel
      title="Should you automate this?"
      description="Score the process from 0 to 5 on each signal. Higher means stronger evidence that software will help."
    >
      <div className="grid gap-4">
        {automationSignals.map((signal, index) => (
          <label key={signal.label} className="rounded-xl bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <span>
                <span className="block font-medium text-foreground">
                  {signal.label}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {signal.help}
                </span>
              </span>
              <span className="font-semibold text-accent-deep">
                {scores[index]}/5
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              value={scores[index]}
              onChange={(event) =>
                setScores((current) =>
                  current.map((score, scoreIndex) =>
                    scoreIndex === index ? Number(event.target.value) : score,
                  ),
                )
              }
              className="mt-4 w-full accent-[var(--accent)]"
            />
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-white p-5">
        <Meter value={percent} label={verdict} />
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {explanation}
        </p>
      </div>
    </Panel>
  );
}

export default function InteractiveResourceTool({ id }: ToolProps) {
  if (id === "build-vs-buy") return <BuildVsBuyTool />;
  if (id === "scope-calculator") return <ScopeCalculatorTool />;
  if (id === "automation-score") return <AutomationScoreTool />;

  return null;
}

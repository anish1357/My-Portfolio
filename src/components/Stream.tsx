import { useEffect, useState } from "react";

type Msg = { label: string; dur: number; delay: number };

// Three partitions, each carrying a few events at its own pace.
const lanes: Msg[][] = [
  [
    { label: "order.placed", dur: 9, delay: 0 },
    { label: "payment.settled", dur: 9, delay: 3 },
    { label: "offset.committed", dur: 9, delay: 6 },
  ],
  [
    { label: "document.parsed", dur: 11.5, delay: 1.2 },
    { label: "agent.step.completed", dur: 11.5, delay: 5 },
    { label: "review.task.created", dur: 11.5, delay: 8.8 },
  ],
  [
    { label: "pr.merged", dur: 7.5, delay: 0.6 },
    { label: "deploy.succeeded", dur: 7.5, delay: 3.1 },
    { label: "problem.solved", dur: 7.5, delay: 5.6 },
  ],
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Stream() {
  const reduced = usePrefersReducedMotion();
  const [consumed, setConsumed] = useState(0);

  return (
    <figure className="stream" aria-label="Animated illustration of events flowing through three Kafka partitions to a consumer">
      <div className="stream-lanes">
        {lanes.map((lane, i) => (
          <div className="lane" key={i}>
            <span className="lane-name">partition {i}</span>
            <div className="lane-track" aria-hidden="true">
              {lane.map((m, j) => (
                <span
                  key={m.label}
                  className="msg"
                  style={
                    reduced
                      ? { left: `${12 + j * 28 + i * 4}%` }
                      : {
                          animationDuration: `${m.dur}s`,
                          animationDelay: `${m.delay - m.dur}s`,
                        }
                  }
                  onAnimationIteration={() => setConsumed((c) => c + 1)}
                >
                  {m.label}
                </span>
              ))}
            </div>
            <span className="consumer" aria-hidden="true" />
          </div>
        ))}
      </div>
      <figcaption className="stream-caption">
        {reduced ? (
          "Event flow is paused because your system prefers reduced motion."
        ) : (
          <>
            <span className="count">{consumed.toLocaleString("en-IN")}</span>{" "}
            {consumed === 1 ? "event" : "events"} consumed since you opened this page, with
            zero lag.
          </>
        )}
      </figcaption>
    </figure>
  );
}

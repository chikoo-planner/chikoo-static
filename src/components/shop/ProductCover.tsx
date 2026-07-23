"use client"

/* Animated CSS/SVG covers that replicate each planner's actual cover design.
   Used as the primary product image; real photos shown in the gallery below. */
export default function ProductCover({ productId }: { productId: string }) {
  switch (productId) {
    case "bed-time-journal":
      return <BedTimeJournalCover />
    case "habit-tracker":
      return <HabitTrackerCover />
    case "fitness-tracker":
      return <FitnessTrackerCover />
    case "study-planner":
      return <StudyPlannerCover />
    case "weekly-planner":
      return <WeeklyPlannerCover />
    case "monthly-planner":
      return <MonthlyPlannerCover />
    default:
      return null
  }
}

/* ─────────────────────────────── BED TIME JOURNAL ──────────────────────────── */
function BedTimeJournalCover() {
  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #fde8d8 0%, #f5c8aa 100%)" }}
    >
      {/* Floating stars */}
      {[
        { top: "12%", left: "14%", delay: "0s",   size: 10 },
        { top: "18%", right: "16%", delay: "0.8s", size: 7 },
        { top: "72%", left: "10%", delay: "1.4s", size: 8 },
        { top: "65%", right: "12%", delay: "0.4s", size: 6 },
      ].map((s, i) => (
        <svg
          key={i}
          width={s.size}
          height={s.size}
          viewBox="0 0 10 10"
          className="absolute"
          style={{
            top: s.top,
            left: (s as any).left,
            right: (s as any).right,
            animation: `shimmer 2.4s ease-in-out ${s.delay} infinite`,
          }}
        >
          <polygon points="5,0 6.5,3.5 10,3.5 7.5,6 8.5,10 5,7.5 1.5,10 2.5,6 0,3.5 3.5,3.5" fill="#c47a3a" opacity="0.6" />
        </svg>
      ))}

      {/* Moon */}
      <svg
        width="36" height="36" viewBox="0 0 36 36"
        className="absolute top-4 right-8"
        style={{ animation: "floatSlow 5s ease-in-out infinite" }}
      >
        <path d="M18 4 A14 14 0 1 0 18 32 A10 10 0 1 1 18 4Z" fill="#c47a3a" opacity="0.45" />
      </svg>

      {/* Planner card */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        {/* Spiral binding */}
        <div className="flex gap-1.5 mb-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-[#8a6040] bg-[#c49a70] opacity-80" />
          ))}
        </div>

        {/* Cover body */}
        <div
          className="w-44 px-5 pt-4 pb-6 rounded-sm shadow-md flex flex-col items-center gap-3"
          style={{ background: "#fde2c8", borderTop: "2px solid #d4956a" }}
        >
          {/* Decorative lines */}
          <div className="w-full flex flex-col gap-1">
            <div className="h-px bg-[#c47a3a] opacity-50 w-full" />
            <div className="h-px bg-[#c47a3a] opacity-30 w-3/4 mx-auto" />
          </div>

          {/* Book icon */}
          <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
            <path d="M16 4 C16 4 8 1 2 3 L2 23 C8 21 16 24 16 24 C16 24 24 21 30 23 L30 3 C24 1 16 4 16 4Z" stroke="#8a6040" strokeWidth="1.5" fill="#fdf0e0" />
            <line x1="16" y1="4" x2="16" y2="24" stroke="#8a6040" strokeWidth="1" />
            <line x1="6" y1="7" x2="14" y2="6" stroke="#c47a3a" strokeWidth="0.8" opacity="0.6" />
            <line x1="6" y1="10" x2="14" y2="9" stroke="#c47a3a" strokeWidth="0.8" opacity="0.6" />
            <line x1="18" y1="6" x2="26" y2="7" stroke="#c47a3a" strokeWidth="0.8" opacity="0.6" />
          </svg>

          <p className="font-serif text-center text-[#5a3820] leading-tight" style={{ fontSize: 13, fontStyle: "italic" }}>
            Bed Time<br />Journal
          </p>

          <p className="text-center text-[#9a6844] leading-tight" style={{ fontSize: 7.5 }}>
            "A well spent day brings<br />happy sleep" — da Vinci
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── HABIT TRACKER ─────────────────────────────── */
function HabitTrackerCover() {
  const ROWS = [[1,1,0,1,1],[1,0,1,1,0],[0,1,1,0,1],[1,1,1,0,0]] as const

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#fef5ef]">
      {/* Bubbles via SVG — no inline React background styles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 380" preserveAspectRatio="xMidYMid slice">
        <circle cx="30" cy="40" r="80" fill="#f4a7c0" fillOpacity="0.45" style={{ animation: "bubbleDrift 7s ease-in-out infinite" }} />
        <circle cx="160" cy="120" r="70" fill="#a7c4f4" fillOpacity="0.45" style={{ animation: "bubbleDrift2 8s ease-in-out infinite" }} />
        <circle cx="270" cy="300" r="65" fill="#f4a7c0" fillOpacity="0.4" style={{ animation: "bubbleDrift 6s ease-in-out 1s infinite" }} />
        <circle cx="30" cy="320" r="55" fill="#a7c4f4" fillOpacity="0.35" style={{ animation: "bubbleDrift2 9s ease-in-out 0.5s infinite" }} />
      </svg>

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center" style={{ animation: "float 5.5s ease-in-out 0.3s infinite" }}>
        {/* Spiral binding */}
        <div className="flex gap-1.5 mb-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-[#a07090] bg-[#d4a8c0] opacity-80" />
          ))}
        </div>

        {/* Cover — bg via className not inline style */}
        <div className="w-44 px-5 pt-5 pb-6 rounded-sm shadow-md flex flex-col items-center gap-3 bg-white/90">
          <p className="font-bold text-[#5a3060] text-center tracking-wide" style={{ fontSize: 15 }}>
            Habit Tracker
          </p>

          {/* Hearts */}
          <div className="flex gap-2">
            {[0,1,2,3,4].map((i) => (
              <span key={i} className="text-[#d470a0] text-sm" style={{ animation: `shimmer 2s ease-in-out ${i * 0.3}s infinite` }}>♡</span>
            ))}
          </div>

          {/* Habit grid — SVG so zero inline React style props */}
          <svg width="136" height="68" viewBox="0 0 136 68">
            {ROWS.map((row, ri) => (
              <g key={ri} transform={`translate(0,${ri * 17})`}>
                <line x1="0" y1="8" x2="60" y2="8" stroke="#e0c0d0" strokeWidth="0.8" />
                {row.map((filled, ci) => (
                  <circle
                    key={ci}
                    cx={68 + ci * 16}
                    cy="8"
                    r="5"
                    stroke="#d490b8"
                    strokeWidth="1"
                    fill={filled ? "rgba(212,112,160,0.6)" : "none"}
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── FITNESS TRACKER ───────────────────────────── */
function FitnessTrackerCover() {
  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ background: "#5bc8e2" }}
    >
      {/* Zigzag lightning pattern bottom-right */}
      <svg className="absolute bottom-0 right-0" width="120" height="120" viewBox="0 0 120 120">
        <polygon points="120,120 60,120 120,60" fill="white" opacity="0.18" />
        {[0, 18, 36, 54, 72].map((x, i) => (
          <polyline
            key={i}
            points={`${x},20 ${x + 9},35 ${x + 2},50 ${x + 11},65`}
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
            style={{ animation: `zap 3s ease-in-out ${i * 0.4}s infinite` }}
          />
        ))}
      </svg>

      {/* Card */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: "float 5s ease-in-out 0.6s infinite" }}
      >
        <div className="flex gap-1.5 mb-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-[#3090aa] bg-[#50a8c0] opacity-80" />
          ))}
        </div>
        <div
          className="w-44 px-5 pt-5 pb-6 rounded-sm shadow-md flex flex-col items-center gap-3"
          style={{ background: "#5bc8e2", border: "1.5px solid rgba(255,255,255,0.4)" }}
        >
          {/* Stick figures */}
          <div className="flex gap-4 items-end">
            <svg width="30" height="38" viewBox="0 0 30 38" fill="none">
              <circle cx="15" cy="7" r="6" fill="#e84040" />
              <line x1="15" y1="13" x2="15" y2="26" stroke="#e84040" strokeWidth="2.5" />
              <line x1="15" y1="18" x2="7" y2="13" stroke="#e84040" strokeWidth="2" />
              <line x1="15" y1="18" x2="23" y2="13" stroke="#e84040" strokeWidth="2" />
              <line x1="15" y1="26" x2="9" y2="36" stroke="#e84040" strokeWidth="2" />
              <line x1="15" y1="26" x2="21" y2="36" stroke="#e84040" strokeWidth="2" />
            </svg>
            <svg width="30" height="38" viewBox="0 0 30 38" fill="none">
              <circle cx="15" cy="7" r="6" fill="#3060d0" />
              <line x1="15" y1="13" x2="15" y2="26" stroke="#3060d0" strokeWidth="2.5" />
              <line x1="15" y1="18" x2="7" y2="13" stroke="#3060d0" strokeWidth="2" />
              <line x1="15" y1="18" x2="23" y2="13" stroke="#3060d0" strokeWidth="2" />
              <line x1="15" y1="26" x2="9" y2="36" stroke="#3060d0" strokeWidth="2" />
              <line x1="15" y1="26" x2="21" y2="36" stroke="#3060d0" strokeWidth="2" />
            </svg>
          </div>

          <p className="font-bold text-white text-center tracking-wide drop-shadow" style={{ fontSize: 15 }}>
            Fitness Tracker
          </p>

          {/* Progress bar */}
          <div className="w-full bg-white/30 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: "70%", animation: "shimmer 2.5s ease-in-out infinite" }} />
          </div>
          <p className="text-white/80 text-center" style={{ fontSize: 9 }}>Daily Progress</p>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── STUDY PLANNER ─────────────────────────────── */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const branchAngles = [-70, -42, -18, 0, 18, 42, 70]

function StudyPlannerCover() {
  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ background: "#b8e040" }}
    >
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: "float 6s ease-in-out 0.2s infinite" }}
      >
        <div className="flex gap-1.5 mb-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-[#5a8010] bg-[#80b020] opacity-80" />
          ))}
        </div>

        <div
          className="w-44 px-4 pt-4 pb-5 rounded-sm shadow-md flex flex-col items-center gap-2"
          style={{ background: "#b8e040" }}
        >
          {/* Tree SVG */}
          <svg width="140" height="110" viewBox="0 0 140 110">
            {/* Trunk */}
            <line x1="70" y1="100" x2="70" y2="55" stroke="#3a6010" strokeWidth="3" strokeLinecap="round" />
            {/* Pencil at base */}
            <polygon points="65,100 75,100 70,112" fill="#f5d050" />
            <line x1="65" y1="100" x2="75" y2="100" stroke="#d4a030" strokeWidth="1" />

            {/* Branches + day labels */}
            {DAYS.map((day, i) => {
              const angle = branchAngles[i]
              const rad = (angle * Math.PI) / 180
              const blen = 30 + Math.abs(i - 3) * 2
              const x2 = 70 + Math.sin(rad) * blen
              const y2 = 55 - Math.cos(rad) * blen * 0.6
              return (
                <g key={day}>
                  <line
                    x1="70" y1={55 - i * 5}
                    x2={x2} y2={y2}
                    stroke="#3a6010"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    style={{ animation: `sway 3.5s ease-in-out ${i * 0.2}s infinite`, transformOrigin: `70px ${55 - i * 5}px` }}
                  />
                  <circle cx={x2} cy={y2} r="4" fill="#3a6010" />
                  <text x={x2} y={y2 - 7} textAnchor="middle" fill="#2a4808" fontSize="8" fontWeight="600">{day}</text>
                </g>
              )
            })}

            {/* Book icon */}
            <g transform="translate(6, 85)">
              <rect x="0" y="0" width="16" height="20" rx="1" fill="#1a3800" opacity="0.7" />
              <line x1="8" y1="0" x2="8" y2="20" stroke="#b8e040" strokeWidth="0.8" />
            </g>
          </svg>

          <p className="font-bold text-[#2a4808] text-center tracking-wide leading-tight" style={{ fontSize: 12 }}>
            weekly<br />Study Planner
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── WEEKLY PLANNER ────────────────────────────── */
const stripeColors = ["#f43098", "#f5e020", "#70e030", "#8830e8"]

function WeeklyPlannerCover() {
  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ background: "#eaeaea" }}
    >
      {/* Marble texture lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 260" preserveAspectRatio="none">
        <path d="M20,10 Q80,60 40,120 Q10,170 70,240" stroke="#c8c8c8" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M100,0 Q150,80 120,140 Q90,200 140,260" stroke="#c8c8c8" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M160,20 Q130,90 170,150 Q200,200 150,250" stroke="#c8c8c8" strokeWidth="1.2" fill="none" opacity="0.35" />
      </svg>

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: "float 5.5s ease-in-out 0.4s infinite" }}
      >
        <div className="flex gap-1.5 mb-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-[#888] bg-[#bbb] opacity-80" />
          ))}
        </div>

        <div
          className="w-44 px-5 pt-5 pb-6 rounded-sm shadow-md flex flex-col items-center gap-3"
          style={{ background: "rgba(238,238,238,0.92)" }}
        >
          {/* Colourful diagonal stripes stack */}
          <div className="flex flex-col gap-1.5 w-full">
            {stripeColors.map((color, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{ animation: `stripePulse 2s ease-in-out ${i * 0.3}s infinite` }}
              >
                <div
                  className="h-4 rounded-sm"
                  style={{
                    width: `${80 - i * 8}%`,
                    background: color,
                    transform: "skewX(-12deg)",
                    opacity: 0.9,
                  }}
                />
              </div>
            ))}
          </div>

          <p className="font-bold text-[#333] text-center leading-tight" style={{ fontSize: 12 }}>
            Weekly<br />Schedule Planner
          </p>

          {/* Week grid */}
          <div className="grid grid-cols-7 gap-0.5 w-full">
            {["S","M","T","W","T","F","S"].map((d, i) => (
              <div key={i} className="text-center" style={{ fontSize: 7, color: stripeColors[i % 4], fontWeight: 700 }}>{d}</div>
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="w-full aspect-square border border-gray-300 rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── MONTHLY PLANNER ───────────────────────────── */
function MonthlyPlannerCover() {
  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ background: "#e040a8" }}
    >
      {/* Abstract shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice">
        <rect x="-10" y="30" width="70" height="80" rx="4" fill="#c0208a" opacity="0.6" transform="rotate(-15, 30, 70)" />
        <rect x="140" y="10" width="50" height="60" rx="4" fill="#c0208a" opacity="0.5" transform="rotate(20, 165, 40)" />
        <rect x="20" y="170" width="80" height="100" rx="4" fill="#c0208a" opacity="0.45" transform="rotate(-8, 60, 220)" />
        {/* Scribble / doodle */}
        <path d="M110,180 Q120,170 130,185 Q140,200 125,205 Q110,210 115,195 Q120,180 135,190" stroke="#f070c0" strokeWidth="2" fill="none" opacity="0.7" />
      </svg>

      {/* Orbiting dot */}
      <div
        className="absolute"
        style={{
          top: "50%", left: "50%",
          marginTop: -4, marginLeft: -4,
          width: 8, height: 8,
          animation: "orbit 6s linear infinite",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white opacity-70" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: "float 5.5s ease-in-out 0.8s infinite" }}
      >
        <div className="flex gap-1.5 mb-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-[#801060] bg-[#b03080] opacity-80" />
          ))}
        </div>

        <div
          className="w-44 px-5 pt-5 pb-6 rounded-sm shadow-md flex flex-col items-center gap-3"
          style={{ background: "#e040a8" }}
        >
          {/* Big circle */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "#c0208a",
              animation: "circleSpin 12s linear infinite",
            }}
          >
            <div className="w-14 h-14 rounded-full" style={{ background: "#e040a8" }} />
          </div>

          <p className="font-bold text-white text-center leading-tight drop-shadow" style={{ fontSize: 14 }}>
            Monthly<br />Planner
          </p>

          <p className="text-white/70 text-center font-bold tracking-widest" style={{ fontSize: 8 }}>
            CHIKOO
          </p>
        </div>
      </div>
    </div>
  )
}

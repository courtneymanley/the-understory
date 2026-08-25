/*
  Renders `entries` (from entries.js) into #log, grouped by week.
  You shouldn't need to edit this file — it just draws whatever is in
  entries.js. If you want to change how things look, that's style.css.
*/

(function () {
  const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  function isoToLocalDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function mondayOf(date) {
    const d = new Date(date);
    const day = (d.getDay() + 6) % 7; // 0 = Monday
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function formatDate(date) {
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  function buildDayTracker(weekEntries, weekNumber) {
    // Figure out which of the 7 days in this week's Mon–Sun span have a capture.
    const datesWithCaptures = new Set(weekEntries.map(e => e.date));
    const anyDate = isoToLocalDate(weekEntries[0].date);
    const monday = mondayOf(anyDate);

    const tracker = document.createElement("div");
    tracker.className = "day-tracker";
    tracker.setAttribute("aria-label", "Which days this week have a capture");

    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      const iso = day.toISOString().slice(0, 10);
      const hit = datesWithCaptures.has(iso);

      const dot = document.createElement("span");
      dot.className = "day-dot" + (hit ? " day-dot-filled" : " day-dot-gap");
      dot.title = `${DAY_LABELS[i]} ${formatDate(day)}${hit ? "" : " — no capture (gap)"}`;
      tracker.appendChild(dot);
    }
    return tracker;
  }

  function buildEntryCard(entry) {
    const card = document.createElement("figure");
    card.className = `entry placement-${entry.placement}`;

    const img = document.createElement("img");
    img.src = entry.image;
    img.alt = entry.alt || "";
    img.loading = "lazy";

    const cap = document.createElement("figcaption");
    const tag = document.createElement("span");
    tag.className = `tag tag-${entry.tag}`;
    tag.textContent = entry.tag === "spike" ? "Spike Event" : "Thin Coverage";

    const dateEl = document.createElement("span");
    dateEl.className = "entry-date";
    dateEl.textContent = formatDate(isoToLocalDate(entry.date));

    const text = document.createElement("p");
    text.className = "entry-text";
    text.textContent = entry.caption;

    const meta = document.createElement("div");
    meta.className = "entry-meta";
    meta.appendChild(tag);
    meta.appendChild(dateEl);

    cap.appendChild(meta);
    cap.appendChild(text);

    if (entry.placement === "overlay") {
      const wrap = document.createElement("div");
      wrap.className = "overlay-wrap";
      wrap.appendChild(img);
      wrap.appendChild(cap);
      card.appendChild(wrap);
    } else {
      card.appendChild(img);
      card.appendChild(cap);
    }

    return card;
  }

  function render() {
    const log = document.getElementById("log");
    log.innerHTML = "";

    if (!entries || entries.length === 0) {
      log.innerHTML = "<p class='empty'>No captures yet.</p>";
      return;
    }

    const byWeek = new Map();
    entries.forEach(e => {
      if (!byWeek.has(e.week)) byWeek.set(e.week, []);
      byWeek.get(e.week).push(e);
    });

    const weeks = Array.from(byWeek.keys()).sort((a, b) => b - a); // newest week first

    weeks.forEach(weekNum => {
      const weekEntries = byWeek.get(weekNum).slice().sort((a, b) => a.date.localeCompare(b.date));

      const section = document.createElement("section");
      section.className = "week";

      const heading = document.createElement("div");
      heading.className = "week-heading";
      const h2 = document.createElement("h2");
      h2.textContent = weekNum === 0 ? "Examples" : `Week ${weekNum}`;
      heading.appendChild(h2);
      if (weekNum !== 0) {
        heading.appendChild(buildDayTracker(weekEntries, weekNum));
      }
      section.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "week-grid";
      weekEntries.forEach(e => grid.appendChild(buildEntryCard(e)));
      section.appendChild(grid);

      log.appendChild(section);
    });
  }

  render();
})();

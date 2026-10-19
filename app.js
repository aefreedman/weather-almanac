(() => {
  "use strict";

  function start() {
    const data = window.ALMANAC || {};
    const title = document.getElementById("title");
    const tagline = document.getElementById("tagline");
    const select = document.getElementById("mood-select");
    const button = document.getElementById("generate-btn");
    const card = document.getElementById("today-card");
    const list = document.getElementById("forecast-list");
    const entries = Array.isArray(data.entries)
      ? data.entries.filter(entry => entry && typeof entry.forecast === "string" && entry.forecast.trim())
      : [];
    const moods = Array.isArray(data.moods) ? data.moods : [];
    const instruments = validInstruments(data.instruments);
    const motion = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
    let previous = null;
    let observation = 0;
    const fallingMarks = new Set();

    function element(tag, text, className) {
      const node = document.createElement(tag);
      node.textContent = typeof text === "string" ? text : "";
      if (className) node.className = className;
      return node;
    }

    function validInstruments(source) {
      if (!Array.isArray(source)) return [];
      const seen = new Set();
      const valid = [];
      for (const item of source) {
        if (valid.length >= 8) break;
        if (!item || typeof item !== "object") continue;
        const { id, label } = item;
        if (typeof id !== "string" || !id.trim() || typeof label !== "string" || !label.trim()) continue;
        if (seen.has(id)) continue;
        seen.add(id);
        valid.push({ id, label: label.trim() });
      }
      return valid;
    }

    function buildLedger(entry) {
      const readings = entry && entry.readings;
      if (!readings || typeof readings !== "object" || Array.isArray(readings)) return null;
      const rows = instruments
        .filter(instrument => typeof readings[instrument.id] === "string" && readings[instrument.id].trim())
        .map(instrument => [instrument.label, readings[instrument.id].trim()]);
      if (!rows.length) return null;
      const ledger = document.createElement("dl");
      ledger.className = "readings";
      ledger.setAttribute("aria-label", "Instrument readings");
      rows.forEach(([label, value]) => {
        const row = document.createElement("div");
        row.className = "reading";
        row.append(element("dt", label), element("dd", value));
        ledger.appendChild(row);
      });
      return ledger;
    }

    function choose(pool) {
      return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
    }

    if (title && typeof data.title === "string") title.textContent = data.title;
    if (tagline && typeof data.tagline === "string") tagline.textContent = data.tagline;

    if (select) {
      const options = document.createDocumentFragment();
      const any = element("option", "Any mood");
      any.value = "any";
      options.appendChild(any);
      const seen = new Set(["any"]);
      moods.forEach(mood => {
        if (!mood || typeof mood.id !== "string" || typeof mood.label !== "string" || seen.has(mood.id)) return;
        seen.add(mood.id);
        const option = element("option", mood.label);
        option.value = mood.id;
        options.appendChild(option);
      });
      select.replaceChildren(options);
    }

    if (list) {
      const days = document.createDocumentFragment();
      const today = new Date();
      for (let index = 0; index < 7; index += 1) {
        const entry = choose(entries);
        if (!entry) break;
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + index);
        const item = document.createElement("li");
        const icon = element("span", entry.icon, "icon");
        icon.setAttribute("aria-hidden", "true");
        item.append(
          element("span", date.toLocaleDateString(undefined, { weekday: "short" }), "day"),
          icon,
          element("span", entry.name, "name")
        );
        days.appendChild(item);
      }
      list.replaceChildren(days);
    }

    function clearRain() {
      fallingMarks.forEach(mark => {
        mark.animation.cancel();
        mark.node.remove();
      });
      fallingMarks.clear();
    }

    function rain() {
      clearRain();
      if (!card || (motion && motion.matches) || typeof card.animate !== "function") return;
      const bounds = card.getBoundingClientRect();
      const symbols = [",", ".", ";", "’", ":"];
      for (let index = 0; index < 12; index += 1) {
        const node = element("span", choose(symbols));
        node.setAttribute("aria-hidden", "true");
        // Fixed, non-interactive marks never change the journal's layout.
        Object.assign(node.style, {
          position: "fixed",
          left: `${bounds.left + Math.random() * bounds.width}px`,
          top: `${Math.max(0, bounds.top)}px`,
          pointerEvents: "none",
          fontFamily: "Georgia, serif",
          fontSize: "20px",
          color: "var(--accent)",
          zIndex: "10"
        });
        document.body.appendChild(node);
        const animation = node.animate([
          { transform: "translate(0, -12px)", opacity: 0 },
          { opacity: 0.45, offset: 0.2 },
          { transform: `translate(${Math.random() * 32 - 16}px, ${Math.min(bounds.height, 180)}px)`, opacity: 0 }
        ], { duration: 850 + Math.random() * 500, delay: index * 25, fill: "both" });
        const mark = { node, animation };
        fallingMarks.add(mark);
        animation.onfinish = () => {
          node.remove();
          fallingMarks.delete(mark);
        };
      }
    }

    function render(animate) {
      if (!card) return;
      const mood = select ? select.value : "any";
      const pool = entries.filter(entry => mood === "any" || entry.mood === mood);
      const alternatives = pool.filter(entry => entry !== previous);
      const entry = choose(alternatives.length ? alternatives : pool);
      card.classList.remove("pop");
      clearRain();
      const heading = document.getElementById("observation-heading");
      if (!entry) {
        if (heading) heading.textContent = "Observation pending";
        card.replaceChildren(element("p", "No observations are available for this mood yet.", "forecast"));
        return;
      }
      previous = entry;
      observation += 1;
      if (heading) heading.textContent = `Observation No. ${String(observation).padStart(3, "0")}`;
      const icon = element("span", entry.icon, "icon");
      icon.setAttribute("aria-hidden", "true");
      const children = [
        element("p", new Date().toLocaleDateString(undefined, { day: "numeric", month: "short" }), "day"),
        icon,
        element("h3", entry.name, "name"),
        element("p", entry.forecast, "forecast")
      ];
      const ledger = buildLedger(entry);
      if (ledger) children.push(ledger);
      children.push(element("p", entry.advice, "advice"));
      card.replaceChildren(...children);
      if (animate && !(motion && motion.matches)) {
        // Flush the removed class so consecutive observations animate independently.
        void card.offsetWidth;
        card.classList.add("pop");
        rain();
      }
    }

    if (motion) {
      const onMotionChange = () => {
        if (motion.matches) {
          clearRain();
          if (card) card.classList.remove("pop");
        }
      };
      if (typeof motion.addEventListener === "function") motion.addEventListener("change", onMotionChange);
      else if (typeof motion.addListener === "function") motion.addListener(onMotionChange);
    }
    // Keyboard arrowing fires change per step; render only the mood the reader settles on.
    let moodTimer;
    if (button) button.addEventListener("click", event => {
      event.preventDefault();
      clearTimeout(moodTimer);
      render(true);
    });
    if (select) select.addEventListener("change", () => {
      clearTimeout(moodTimer);
      moodTimer = setTimeout(() => render(true), 350);
    });
    render(false);
    // Announce later observations only; the first render on page load stays quiet.
    if (card) card.setAttribute("aria-live", "polite");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();

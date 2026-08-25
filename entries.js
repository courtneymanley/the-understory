/*
  ENTRIES — this is the only file you'll edit most weeks.

  Every screenshot on the site is one object in this list. To add a new
  capture: copy one of the example objects below, paste it into the list,
  and fill in your own values. Order doesn't matter — the site sorts
  everything by date automatically.

  FIELD GUIDE
  id:        anything unique, e.g. "w1-01" (week 1, capture 1). Never reused.
  week:      the week number of the semester (1, 2, 3...).
  date:      the day you captured it, as "YYYY-MM-DD".
  image:     the filename of your screenshot inside the images/ folder.
  alt:       one plain sentence describing the image, for accessibility.
  tag:       "spike" or "thin" — see your Capture Rule for which is which.
  placement: where the caption sits relative to the screenshot.
             one of: "above", "below", "beside", "overlay"
  caption:   your annotation. This is the writing — take your time with it.

  Delete the four EXAMPLE entries below once you've uploaded your first
  real screenshots and don't need them for reference anymore.
*/

const entries = [
  {
    id: "example-above",
    week: 0,
    date: "2026-08-24",
    image: "images/example-spike.svg",
    alt: "Placeholder graphic standing in for a breaking-news screenshot",
    tag: "spike",
    placement: "above",
    caption: "EXAMPLE — placement: \"above\". Good for when the caption is really the point " +
      "and the screenshot is supporting evidence underneath it."
  },
  {
    id: "example-below",
    week: 0,
    date: "2026-08-24",
    image: "images/example-thin.svg",
    alt: "Placeholder graphic standing in for a quiet or overlooked screenshot",
    tag: "thin",
    placement: "below",
    caption: "EXAMPLE — placement: \"below\". The default, classic caption-under-image " +
      "treatment. Good for straightforward annotation."
  },
  {
    id: "example-beside",
    week: 0,
    date: "2026-08-24",
    image: "images/example-spike.svg",
    alt: "Placeholder graphic standing in for a breaking-news screenshot",
    tag: "spike",
    placement: "beside",
    caption: "EXAMPLE — placement: \"beside\". Good for a longer annotation that needs more " +
      "room to breathe next to the image rather than above or below it."
  },
  {
    id: "example-overlay",
    week: 0,
    date: "2026-08-24",
    image: "images/example-thin.svg",
    alt: "Placeholder graphic standing in for a quiet or overlooked screenshot",
    tag: "thin",
    placement: "overlay",
    caption: "EXAMPLE — placement: \"overlay\". The caption sits directly on top of the " +
      "image with a dark scrim behind it. Good for a short, punchy line."
  }
];

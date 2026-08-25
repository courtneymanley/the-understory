/*
  ENTRIES — this is the only file you'll edit most weeks.

  Every screenshot on the site is one object in this list. To add a new
  capture: copy the object below, paste it into the list, and fill in
  your own values. Order doesn't matter — the site sorts everything by
  date automatically.

  FIELD GUIDE
  id:        anything unique, e.g. "w1-03" (week 1, capture 3). Never reused.
  week:      the week number of the semester (1, 2, 3...).
  date:      the day you captured it, as "YYYY-MM-DD".
  image:     the filename of your screenshot inside the images/ folder.
  alt:       one plain sentence describing the image, for accessibility.
  tag:       "spike" or "thin" — see your Capture Rule for which is which.
  placement: where the caption sits relative to the screenshot.
             one of: "above", "below", "beside", "overlay"
  caption:   your annotation. This is the writing — take your time with it.
*/

const entries = [
  {
    id: "w1-01",
    week: 1,
    date: "2026-08-24",
    image: "images/W01_D01_01_MMH.PNG",
    alt: "NBC News segment on postpartum psychosis, referencing the Commonwealth v. Lindsay Clancy trial.",
    tag: "spike",
    placement: "below",
    caption: "NBC news covers postpartum psychosis and ties it back to the Commonwealth vs. Lindsay Clancy trial."
  },
  {
    id: "w1-02",
    week: 1,
    date: "2026-08-24",
    image: "images/W01_D01_01_PHARM.PNG",
    alt: "Coverage of an unregulated compounded GLP-1 drug sold outside clinical trials, with warnings from doctors about unknown purity and dosing.",
    tag: "thin",
    placement: "overlay",
    caption: "A new type of Ozempic has becoming popular, but doctors are warning that it is unregulated and is currently only available in clinical trials, but people are buying it on the black market with no true idea about efficacy, purity, or dosing."
  }
];

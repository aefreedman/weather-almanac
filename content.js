window.ALMANAC = {
  title: "Almanac of Imaginary Weather",
  tagline: "Forecasts for places you almost remember.",
  moods: [
    { id: "wistful", label: "Wistful" },
    { id: "delighted", label: "Delighted" },
    { id: "dreamy", label: "Dreamy" },
    { id: "restless", label: "Restless" },
    { id: "mischievous", label: "Mischievous" }
  ],
  instruments: [
    { id: "barometer", label: "Barometer" },
    { id: "wind", label: "Wind" },
    { id: "humidity", label: "Humidity" },
    { id: "visibility", label: "Visibility" }
  ],
  entries: [
    {
      mood: "wistful",
      name: "The Unclaimed Platform",
      forecast: "Thin fog will collect inside the station clock, delaying the hour you meant to say goodbye. Visibility improves beyond the empty tea trolley.",
      advice: "Keep your ticket; the return date remains legible.",
      icon: "🚉",
      readings: {
        barometer: "Steady, awaiting the 4.12",
        wind: "Light, along the platform edge",
        humidity: "Considerable near the tea urn",
        visibility: "Beyond the tea trolley, not much further"
      }
    },
    {
      mood: "wistful",
      name: "Back Garden Isobars",
      forecast: "A mild frost will silver the washing pegs, each holding the warmth of a sleeve no longer on the line.",
      advice: "Bring in the towels before the quiet settles.",
      icon: "🧺",
      readings: {
        barometer: "Falling gently past the washing line",
        wind: "Slight, from an empty sleeve",
        humidity: "Two pegs’ worth, lightly frosted",
        visibility: "As far as the back step"
      }
    },
    {
      mood: "wistful",
      name: "Low Pressure at Number Nine",
      forecast: "Rain is expected in the spare key’s teeth, with brief clear spells whenever the old door is mentioned.",
      advice: "Dry the key on a handkerchief, not a calendar.",
      icon: "🔑",
      readings: {
        barometer: "Low, clearing whenever the door is mentioned",
        wind: "Intermittent, through the keyhole",
        humidity: "Persistent in the key’s teeth",
        visibility: "Up to the old front door"
      }
    },
    {
      mood: "wistful",
      name: "The Orchard of Last Cups",
      forecast: "Evening dew will form on the chipped mug, tasting faintly of a conversation that ran out of Sunday.",
      advice: "Leave a little room for the milk.",
      icon: "☕",
      readings: {
        barometer: "Settled since late Sunday",
        wind: "Calm over the chipped rim",
        humidity: "One saucer of evening dew",
        visibility: "Across the table, half a conversation"
      }
    },
    {
      mood: "delighted",
      name: "Toastlight Valley",
      forecast: "Sunrise will arrive through the toaster slots, warming the kitchen with the confidence of a small task completed.",
      advice: "Butter promptly; daylight is absorbent.",
      icon: "🍞",
      readings: {
        barometer: "Rising steadily, lightly browned",
        wind: "Warm, upward from the toaster slots",
        humidity: "Slight; crumbs remain crisp",
        visibility: "The full length of the kitchen"
      }
    },
    {
      mood: "delighted",
      name: "The Button Harvest",
      forecast: "Warm air will swell the coat buttons into apricots. Even the stiffest collar is expected to feel pleased with itself.",
      advice: "Pick only the ripe ones; leave the cuffs intact.",
      icon: "🧥",
      readings: {
        barometer: "High and ripening",
        wind: "Mild, from the coat pocket",
        humidity: "Moderate around the collar",
        visibility: "Clear to the coat hooks"
      }
    },
    {
      mood: "delighted",
      name: "Windowsill High",
      forecast: "A pocket of sunshine will hatch in the eggcup, bringing excellent conditions for being unnecessarily kind to a houseplant.",
      advice: "Rotate the fern so it can admire the view.",
      icon: "🌱",
      readings: {
        barometer: "Rising by one eggcup",
        wind: "Gentle, across the fern",
        humidity: "One watering can, well spent",
        visibility: "Out past the windowsill to the gate"
      }
    },
    {
      mood: "delighted",
      name: "Confetti at the Crossing",
      forecast: "The pedestrian signal will shed yellow petals at noon, in recognition of your entirely ordinary arrival.",
      advice: "Cross at your usual pace; the occasion can wait.",
      icon: "🌼",
      readings: {
        barometer: "Fair until noon, then festive",
        wind: "Light, carrying yellow petals",
        visibility: "Across the road, kerb to kerb"
      }
    },
    {
      mood: "dreamy",
      name: "Duvet Archipelago",
      forecast: "Clouds will anchor along the blanket hem, carrying the distant sound of a spoon stirring a very patient sea.",
      advice: "Mark your pillow’s position before drifting.",
      icon: "☁️",
      readings: {
        barometer: "Drifting lower, very patient",
        wind: "Offshore, from the blanket hem",
        humidity: "One stirred teacup of sea",
        visibility: "To the pillow, occasionally beyond"
      }
    },
    {
      mood: "dreamy",
      name: "The Blue Hour Pantry",
      forecast: "Moonlight will pool in the empty biscuit tin, deep enough to cool a worry without quite drowning it.",
      advice: "Replace the lid loosely to allow for tides.",
      icon: "🌙",
      readings: {
        barometer: "Low, cooling slowly",
        wind: "NNE, towards the biscuit tin",
        humidity: "Moonlight, just under the lid",
        visibility: "To the second pantry shelf"
      }
    },
    {
      mood: "dreamy",
      name: "Curtain Soundings",
      forecast: "A slow breeze will turn the curtains into jellyfish, their hems pulsing with the relief of having nowhere to be.",
      advice: "Keep the window ajar and the lamps on shore.",
      icon: "🪼",
      readings: {
        barometer: "Slack, with nowhere to be",
        wind: "Slow, in through the window gap",
        humidity: "Moderate, pulsing at the hems",
        visibility: "Two lamps’ distance, faintly"
      }
    },
    {
      mood: "dreamy",
      name: "Atlas of the Sink",
      forecast: "By midmorning, the dishwater will reflect a coast you recognise from sleep. A teaspoon offshore appears to be expecting you.",
      advice: "Finish the plates before considering passage.",
      icon: "🥄",
      readings: {
        barometer: "Settling by midmorning",
        wind: "Onshore, from the draining board",
        humidity: "Full basin, slightly soapy",
        visibility: "To a teaspoon offshore"
      }
    },
    {
      mood: "restless",
      name: "Shoelace Front",
      forecast: "Crosswinds will pull the laces towards streets not yet walked, with strongest gusts near the word someday.",
      advice: "Tie a double knot, then choose a direction.",
      icon: "👟",
      readings: {
        barometer: "Falling towards someday",
        wind: "Crosswinds, gusting at both ends",
        humidity: "Trace, damp at the aglets",
        visibility: "To the end of the street"
      }
    },
    {
      mood: "restless",
      name: "The Migrating Desk",
      forecast: "Your desk will edge north under a brisk paper breeze, apparently tired of knowing only one view of your ambition.",
      advice: "Weigh down the invoices; let the blank sheets travel.",
      icon: "📎",
      readings: {
        barometer: "Unsettled, edging north",
        wind: "Brisk, from the paper tray",
        visibility: "The next view along, roughly"
      }
    },
    {
      mood: "restless",
      name: "Kettle Advisory",
      forecast: "Steam will gather into departure boards above the kettle. Every destination reads somewhere else, though the tea still needs three minutes.",
      advice: "Pack after brewing, not during.",
      icon: "🫖",
      readings: {
        barometer: "Rising, nearly at the boil",
        wind: "Upward, from the spout",
        humidity: "Considerable; three minutes remaining",
        visibility: "Departure boards, partly obscured"
      }
    },
    {
      mood: "restless",
      name: "Hallway Trade Winds",
      forecast: "A warm current will carry the doormat several inches towards the road, encouraged by a sudden lack of convincing excuses.",
      advice: "Take the short walk by the long route.",
      icon: "🚪",
      readings: {
        barometer: "Firm, short on excuses",
        wind: "Warm, backing towards the road",
        humidity: "Negligible; the doormat holds dry",
        visibility: "As far as the hall mirror"
      }
    },
    {
      mood: "mischievous",
      name: "Scattered Alibis",
      forecast: "Local showers will wash the numbers off the alarm clock, leaving it with a suspiciously peaceful expression.",
      advice: "Consult the sun; it has no snooze button.",
      icon: "⏰",
      readings: {
        barometer: "Suspiciously steady",
        wind: "Variable, off the bedside table",
        humidity: "Local showers, clock face only",
        visibility: "Numbers unreadable; sun recommended"
      }
    },
    {
      mood: "mischievous",
      name: "Sock Vortex",
      forecast: "A small cyclone in the laundry basket will pair each sock with a secret admirer. Matching stripes are unlikely.",
      advice: "Avoid interrogating the argyle.",
      icon: "🧦",
      readings: {
        barometer: "Falling, then pairing",
        wind: "Cyclonic, within the laundry basket",
        humidity: "Two damp heels, unmatched",
        visibility: "Poor below the airing cupboard"
      }
    },
    {
      mood: "mischievous",
      name: "Overcast in the Cutlery Drawer",
      forecast: "Silver fog will persuade the forks they are tuning forks, and dinner may begin in the key of mild embarrassment.",
      advice: "Ask the soup spoons to maintain decorum.",
      icon: "🍴",
      readings: {
        barometer: "Overcast, holding at middle C",
        wind: "Faint, between the forks",
        humidity: "Silver fog, one drawer deep",
        visibility: "Half a drawer, then fog"
      }
    },
    {
      mood: "mischievous",
      name: "Pencil-Shaving Squall",
      forecast: "An easterly gust will replace the shopping list with compliments for the grocer. The onions are already blushing.",
      advice: "Remember the potatoes without putting it in writing.",
      icon: "✏️",
      readings: {
        barometer: "Unsteady, shedding pencil shavings",
        wind: "Easterly, towards the grocer",
        humidity: "Two onions, slightly flushed",
        visibility: "Clear to the foot of the list"
      }
    }
  ]
};

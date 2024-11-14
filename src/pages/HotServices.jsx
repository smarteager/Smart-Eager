import WM1 from "../../src/assets/all-images/Washing machine/3.jpg"
import WM2 from "../../src/assets/all-images/Washing machine/4.jpg"
import WAC1 from "../../src/assets/all-images/Window ac/18.jpg"
import Refrigerator1 from "../../src/assets/all-images/refrigrator/1.jpg"
import Refrigerator2 from "../../src/assets/all-images/refrigrator/8.jpg"
import Geyser1 from "../../src/assets/all-images/Geyser/geyser2.webp"
import SplitAC1 from "../../src/assets/all-images/Split AC/5.jpg"
import Heater1 from "../../src/assets/all-images/heater/1.jpg"

const services = [
  {
    id: 1,
    name: "Window AC",
    code: 100,
    price: "₹2,000/month",
    image: WAC1 ,
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "1.0 TON": {
        durations: {
          "Rest of Season": "₹8,299",
          "One Year (12 Months)": "₹10,500",
          "Rest of Season (Till Nov/Dec)": "₹4,999",
        },
      },
      "1.5 TON": {
        durations: {
          "Rest of Season": "₹8,099",
          "One Year (12 Months)": "₹11,499",
          "Rest of Season (Till Nov/Dec)": "₹4,999",
        },
      },
      "2.0 TON": {
        durations: {
          "Rest of Season": "₹7,499",
          "One Year (12 Months)": "₹11,999",
          "Rest of Season (Till Nov/Dec)": "₹5,499",
        },
      },
    },
  },

  {
    id: 2,
    name: "Refrigerator",
    code: 104,
    price: "₹1,200/month",
    image:Refrigerator1,
    description: "Double Door Refrigerator, 250L Capacity, Energy Efficient.",
    variants: {
      Small: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,200/month",
          "One Year (12 Months)": "₹1,200/month",
          "Rest of Season (Till Nov/Dec)": "₹1,200/month",
        },
      },
      Medium: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,500/month",
          "One Year (12 Months)": "₹1,500/month",
          "Rest of Season (Till Nov/Dec)": "₹1,500/month",
        },
      },
      Large: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,800/month",
          "One Year (12 Months)": "₹1,800/month",
          "Rest of Season (Till Nov/Dec)": "₹1,800/month",
        },
      },
    },
  },

  {
    id: 3,
    name: "Washing Machine",
    code: 102,
    price: "₹900/month",
    image: WM1 ,
    description: "Fully Automatic Washing Machine, 7 Kg Capacity.",
    variants: {
      "Top Load": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,000/month",
          "One Year (12 Months)": "₹1,000/month",
          "Rest of Season (Till Nov/Dec)": "₹1,000/month",
        },
      },
      "Front Load": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,000/month",
          "One Year (12 Months)": "₹1,000/month",
          "Rest of Season (Till Nov/Dec)": "₹1,000/month",
        },
      },
    },
  },

  {
    id: 4,
    name: "Geyser",
    code: 105,
    price: "₹700/month",
    image: Geyser1,
    description: "Instant Geyser, 3L Capacity, Energy Efficient.",
    variants: {
      Electric: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹800/month",
          "One Year (12 Months)": "₹800/month",
          "Rest of Season (Till Nov/Dec)": "₹800/month",
        },
      },
      Gas: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹800/month",
          "One Year (12 Months)": "₹800/month",
          "Rest of Season (Till Nov/Dec)": "₹800/month",
        },
      },
    },
  },

  {
    id: 6,
    name: "Oil Heater",
    code: 107,
    price: "₹600/month",
    image: Heater1,
    description: "Portable Room Heater, Adjustable Temperature.",
    variants: {
      "11 FIN": {
        durations: {
          Rent: "₹3500, Payment in Advance, Security Deposit ₹1999 extra, Full Season (Till Nov/Dec)",
        },
      },
      "13 FIN": {
        durations: {
          Rent: "₹4000, Payment in Advance, Security Deposit ₹1999 extra, Full Season (Till Nov/Dec)",
        },
      },
    },
  },
  {
    id: 1,
    name: "Split AC",
    code: 100,
    price: "₹2,000/month",
    image:SplitAC1,
    description: "1.5 Ton Split AC, Energy Efficient, Remote Control Included.",
    variants: {
      "1.0 TON": {
        durations: {
          "Rest of Season": "₹8,299",
          "One Year (12 Months)": "₹10,500",
          "Rest of Season (Till Nov/Dec)": "₹4,999",
        },
      },
      "1.5 TON": {
        durations: {
          "Rest of Season": "₹8,099",
          "One Year (12 Months)": "₹11,499",
          "Rest of Season (Till Nov/Dec)": "₹4,999",
        },
      },
      "2.0 TON": {
        durations: {
          "Rest of Season": "₹7,499",
          "One Year (12 Months)": "₹11,999",
          "Rest of Season (Till Nov/Dec)": "₹5,499",
        },
      },
    },
  },
  {
    id: 9,
    name: "Washing Machine",
    code: 102,
    price: "₹900/month",
    image: WM2,
    description: "Fully Automatic Washing Machine, 7 Kg Capacity.",
    variants: {
      "Top Load": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,000/month",
          "One Year (12 Months)": "₹1,000/month",
          "Rest of Season (Till Nov/Dec)": "₹1,000/month",
        },
      },
      "Front Load": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,000/month",
          "One Year (12 Months)": "₹1,000/month",
          "Rest of Season (Till Nov/Dec)": "₹1,000/month",
        },
      },
    },
  },

  {
    id: 12,
    name: "RO Water Purifier",
    code: 103,
    price: "₹900/month",
    image:
      "https://www.pngmart.com/files/6/Water-Purifier-Transparent-Background.png",
    description:
      "Fully Automatic RO Water Purifier, 7L Capacity, High Purification.",
    variants: {
      "Standard Model": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,200/month",
          "One Year (12 Months)": "₹1,100/month",
          "Rest of Season (Till Nov/Dec)": "₹1,100/month",
        },
      },
      "Advanced Model": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,500/month",
          "One Year (12 Months)": "₹1,400/month",
          "Rest of Season (Till Nov/Dec)": "₹1,400/month",
        },
      },
    },
  },
  {
    id: 13,
    name: "Refrigerator",
    code: 104,
    price: "₹900/month",
    image: Refrigerator2,
    description: "Double Door Refrigerator, 250L Capacity, Energy Efficient.",
    variants: {
      Small: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,200/month",
          "One Year (12 Months)": "₹1,200/month",
          "Rest of Season (Till Nov/Dec)": "₹1,200/month",
        },
      },
      Medium: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,500/month",
          "One Year (12 Months)": "₹1,500/month",
          "Rest of Season (Till Nov/Dec)": "₹1,500/month",
        },
      },
      Large: {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,800/month",
          "One Year (12 Months)": "₹1,800/month",
          "Rest of Season (Till Nov/Dec)": "₹1,800/month",
        },
      },
    },
  },

  {
    id: 22,
    name: "Inverter",
    code: 106,
    price: "₹900/month",
    image: "https://www.pngmart.com/files/6/Inverter-PNG-Clipart.png",
    description:
      "High-Efficiency Inverter for Home and Office Use, 1.5kVA Capacity.",
    variants: {
      "Standard Model": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,100/month",
          "One Year (12 Months)": "₹1,000/month",
          "Rest of Season (Till Nov/Dec)": "₹1,000/month",
        },
      },
      "Advanced Model": {
        durations: {
          "Full Season (Till Nov/Dec)": "₹1,500/month",
          "One Year (12 Months)": "₹1,400/month",
          "Rest of Season (Till Nov/Dec)": "₹1,400/month",
        },
      },
    },
  },
];

export default services;

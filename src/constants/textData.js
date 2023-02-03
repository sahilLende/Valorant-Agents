import { sova,people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star,jett,phnix  } from "../assets";

export const roles=["Duelist","Initiator","Controller"]

export const  agentData=[
  {
    // I would use either the native crypot api or a library to generate unique ids for each data
    id:"1",
    // This is not right, use the importad impage path, not a relative path for the images
    img:"../src/assets/jett.jpg",
    name:"jett",
    role:"Duelist",
    bio : "Jett is a fast and agile Duelist who excels in quick engagements and aggressive plays. ",
    abilities:{
      A1:"info updraft",
      A2:"info dash",
      A3:"knives out",
       U:"smoke info"
    }
  },
  {
    id:"2",
    img:"./src/assets/phnix.jpg",
    name:"Fade",
    role:"Initiator",
    bio : "Jett is a fast and agile Duelist who excels in quick engagements and aggressive plays.",
    abilities:{
      A1:"info shockdart",
      A2:"recon",
      A3:"drone",
       U:"hunters fury"
    }
  },
  {
    id:"3",
    img:"./src/assets/jett.jpg",
    name:"BrimStone",
    role:"Controller",
    bio : "random text",
    abilities:{
      A1:"info updraft",
      A2:"info dash",
      A3:"knives out",
       U:"smoke info"
    }
  },
  {
    id:"8",
    img:"./src/assets/sova.jpg",
    name:"BrimStone",
    role:"Controller",
    bio : "random text",
    abilities:{
      A1:"info updraft",
      A2:"info dash",
      A3:"knives out",
       U:"smoke info"
    }
  },
  {
    id:"4",
    img:"./src/assets/jett.jpg",
    name:"BrimStone",
    role:"Controller",
    bio : "random text",
    abilities:{
      A1:"info updraft",
      A2:"info dash",
      A3:"knives out",
       U:"smoke info"
    }
  },
  {
    id:"5",
    img:"./src/assets/jett.jpg",
    name:"BrimStone",
    role:"Controller",
    bio : "random text",
    abilities:{
      A1:"info updraft",
      A2:"info dash",
      A3:"knives out",
       U:"smoke info"
    }
  },
  {
    id:"6",
    img:"./src/assets/phnix.jpg",
    name:"Sova",
    role:"Initiator",
    bio : "Jett is a fast and agile Duelist who excels in quick engagements and aggressive plays.",
    abilities:{
      A1:"info shockdart",
      A2:"recon",
      A3:"drone",
       U:"hunters fury"
    }
  },
  {
    id:"7",
    img:"./src/assets/phnix.jpg",
    name:"Skye",
    role:"Initiator",
    bio : "Jett is a fast and agile Duelist who excels in quick engagements and aggressive plays.",
    abilities:{
      A1:"info shockdart",
      A2:"recon",
      A3:"drone",
       U:"hunters fury"
    }
  },
]
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "Agents",
    title: "Agents",
  },
  {
    id: "Download",
    title: "Download",
  },
  {
    id: "Gameplay",
    title: "Gameplay",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

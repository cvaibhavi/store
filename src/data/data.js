import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";
import homeimg from "../assets/homeimg.png";
import menu from "../assets/menu.svg";

import buns from "../assets/buns.jpg";
import goliBaje from "../assets/Goli-baje.jpg";
import biscuitRotti from "../assets/biscuit-rotti.jpg";
import Dharbe from "../assets/darbha_grass.webp";
import kesuvinYele from "../assets/Halu-kesu.jpg";

import jamanerale from "../assets/jamanerale.jpg";
import jambunerale from "../assets/jambunerale.jpg";
import kaju from "../assets/kaju.jpg";
import pathrode from "../assets/pathrode.jpeg";

import malpuri from "../assets/malpuri.jpg";
import pundi from "../assets/pundi.jpg";
import sanjeera from "../assets/Sanjeera.jpg";
import neerdose from "../assets/neerdose.jpg";

import pejakai from "../assets/pejakai.jpg";
import ondalaga from "../assets/Ondalaga.jpg";
import dishes from "../assets/food.jpg";
import grocery from "../assets/grocery.jpg";

import pathole from "../assets/pathole.jpg";
import shevige from "../assets/shevige.jpg";
import midipickle from "../assets/midi-pickle.jpg";
import kuslakki from "../assets/kuslakki.jpg";

import punarpuli from "../assets/punarpuli.jpg";
import linkedIn from "../assets/linkedIn.png";


const homeapi = {
    title: "Manglore Store",
    subtitle: "Enjoy! the recipes and Get the Manglorean groceries",
    img: homeimg,
    btntext: "Explore Product",
    
    sociallinks: [
      { icon: facebook,
        url:"https://m.facebook.com/100021618545682/", 
      },
      { icon: messenger,
        url:"https://www.linkedin.com/in/vaibhavi-c-93968920a", 
      },
      { icon: instagram,
        url:"https://www.instagram.com/_vaibhavi_prabhu_/",
      },
      { icon: twitter,
        url:"",
      },
      { icon: youtube,
        url:"",
      },
    ],
  };

  const popularsales = {
    title: "Popular Dishes ",
    items: [
      {
        id: "0p0x1",
        title: "Goli Baje",
        text: "4pieces per plate",
        rating: "4.9",
        btn: "Buy Now",
        img: goliBaje,
        price: "20",
        color: "from-blue-600 to-blue-500",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0p0x2",
        title: "Buns",
        text: "2pieces per plate",
        rating: "4.5",
        btn: "Buy Now",
        img: buns,
        price: "40",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0p0x3",
        title: "Pathrode",
        text: "4 pieces per plate",
        rating: "5+",
        btn: "Buy Now",
        img: pathrode,
        price: "60",
        color: "from-violet-500 to-indigo-500",
        shadow: "shadow-lg shadow-violet-500",
      },
      {
        id: "0p0x4",
        title: "Sanjeera",
        text: "1 piece only",
        rating: "5+",
        btn: "Buy Now",
        img: sanjeera,
        price: "20",
        color: "from-sky-600 to-indigo-600",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0p0x5",
        title: "Pundi",
        text: "4pieces per plate",
        rating: "5+",
        btn: "Buy Now",
        img: pundi,
        price: "30",
        color: "from-green-500 to-emerald-500",
        shadow: "shadow-lg shadow-green-500",
      },
      {
        id: "0p0x6",
        title: "Biscuit Rotti",
        text: "1 piece only  ",
        rating: "5+",
        btn: "Buy Now",
        img: biscuitRotti,
        price: "20",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0p0x7",
        title: "Neer Dose",
        text: "2 dosa per plate",
        rating: "5+",
        btn: "Buy Now",
        img: neerdose,
        price: "20",
        color: "from-orange-500 to-amber-500",
        shadow: "shadow-lg shadow-orange-500",
      },
      {
        id: "0p0x8",
        title: "Malpuri",
        text: "2pieces per plate",
        rating: "5+",
        btn: "Buy Now",
        img: malpuri,
        price: "20",
        color: "from-orange-900 to-yellow-500",
        shadow: "shadow-lg shadow-yellow-500",
      },
      {
        id: "0p0x9",
        title: "Shevige",
        text: "2pieces per plate",
        rating: "5+",
        btn: "Buy Now",
        img: shevige,
        price: "30",
        color: "from-green-500 to-emerald-500",
        shadow: "shadow-lg shadow-green-500",
      },
      {
        id: "0p0x10",
        title: "Paje Madipula",
        text: "2pieces per plate",
        rating: "5+",
        btn: "Buy Now",
        img: pathole,
        price: "30",
        color: "from-slate-900 to-blue-900",
        shadow: "shadow-lg shadow-black",
      },
    ],
  };

  const topratesales = {
    title: "Grocery",
    items: [
      
      {
        id: "0M0x1",
        title: "Kaju[seasonal]/kg",
        text: "Fruit",
        rating: "5+",
        btn: "Buy Now",
        img: kaju,
        price: "70",
        color: "from-blue-500 to-cyan-500",
        shadow: "shadow-lg shadow-cyan-500",
      },
      {
        id: "0M0x2",
        title: "Jama Nerale[pink]",
        text: "Fruit[seasonal]/kg",
        rating: "5+",
        btn: "Buy Now",
        img: jamanerale,
        price: "50",
        color: "from-yellow-500 to-yellow-500",
        shadow: "shadow-lg shadow-yellow-500",
      },
      {
        id: "0M0x3",
        title: "Jambu Nerale[white]/kg",
        text: "Fruit[seasonal]",
        rating: "5+",
        btn: "Buy Now",
        img: jambunerale,
        price: "50",
        color: "from-[#936550] to-orange-900",
        shadow: "shadow-lg shadow-orange-800",
      },
      {
        id: "0M0x4",
        title: "Pejakai",
        text: "Fruit[seasonal]/kg",
        rating: "5+",
        btn: "Buy Now",
        img: pejakai,
        price: "100",
        color: "from-indigo-700 to-indigo-700",
        shadow: "shadow-lg shadow-indigo-500",
      },
      {
        id: "0M0x5",
        title: "Punar Puli/kg",
        text: "Fruit[seasonal]",
        rating: "5+",
        btn: "Buy Now",
        img: punarpuli,
        price: "100",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0M0x6",
        title: "Ondelaga[Bhrami leaves",
        text: "Medicinal leaves",
        rating: "5+",
        btn: "Buy Now",
        img: ondalaga,
        price: "25",
        color: "from-green-600 to-lime-500",
        shadow: "shadow-lg shadow-lime-500",
      },
      {
        id: "0M0x7",
        title: "Darbhe[Darbha grass]",
        text: "Used for Pooja",
        rating: "5+",
        btn: "Buy Now",
        img: Dharbe,
        price: "10",
        color: "from-slate-900 to-blue-900",
        shadow: "shadow-lg shadow-black",
      },
      {
        id: "0M0x8",
        title: "Kesuvin Yele[Pathrode Yele]",
        text: "Used to cook pathrode",
        rating: "5+",
        btn: "Buy Now",
        img: kesuvinYele,
        price: "50",
        color: "from-green-700 to-blue-300",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0M0x9",
        title: "Kuslakki",
        text: "Boiled Rice",
        rating: "5+",
        btn: "Buy Now",
        img: kuslakki,
        price: "50",
        color: "from-[#936550] to-orange-900",
        shadow: "shadow-lg shadow-orange-800",
      },
      {
        id: "0M0x10",
        title: "Midi Uppinkai",
        text: "Pickle[200ml]",
        rating: "5+",
        btn: "Buy Now",
        img: midipickle,
        price: "75",
        color: "from-orange-500 to-amber-500",
        shadow: "shadow-lg shadow-orange-500",
      },
    ],
  };

  const fooditems = {
    heading: "Manglore Special",
    title: "Taste the special dishes!!😋",
    text: "Order Some Manglorean cooked dishes.Don't miss these dishes at Banglore, We here to provide it for you😊",
    img: dishes,
  };
  
  const othergrocery = {
    heading: "Grocery",
    title: "Buy raw food items",
    text:"Buy some common grocery of manglore which is rare at Banglore.",
    img: grocery,
  };

  const story = {
    title: "Top Stories",
    news: [
      {
        title: "Ondalaga",
        text: "We all know that Brahmi is a medicinal herb that grows in the fields and is a powerhouse of nutrients.It's known as ondelaga in kannada.It is a herb that grows throughout the year and is very popular in traditional medicine across the world.",
        img: ondalaga,
        like: "5/5",
        url: "https://mangalorestore.in/awesome-benefits-of-brahmi-leaves/",
        time: "11 Mins",
        by: "Vishalakshi",
        btn: "Read More"
      },
      {
        title: "Kesuvina Yele",
        text: "It is called as Patra.Promotes Eye Health : Colocasia leaves are a very good source of vitamin A – an important vitamin which helps in vision. It also prevents macular degeneration associated with age and can also help in delaying the onset of cataract.",
        img: kesuvinYele,
        time: "41 Mins",
        like: "5/5",
        url: "https://www.healthline.com/nutrition/taro-leaves",
        by: "Sharadha",
        btn: "Read More"
      },
      {
        title: "Darbha Grass",
        text: "Darbha (Desmotachya bipinnata) is a tropical grass considered a sacred material in Vedic scriptures and is said to purify the offerings during such rituals. At the time of eclipse, people place that grass in food items that could ferment and once the eclipse ends the grass is removed.",
        img: Dharbe,
        time: "2 Hours",
        url: "https://en.wikipedia.org/wiki/Desmostachya_bipinnata",
        like: "5/5",
        by: "VidyaLakshmi",
        btn: "Read More"
      },
      {
        title: "Kuslakki[Boiled Rice]",
        text: "Boiled rice provides you with manganese and selenium. Both minerals activate enzymes you need for good health. Selenium-dependent enzymes promote thyroid gland and blood vessel function, while manganese-dependent enzymes keep your connective tissues strong and help your cells produce energy.",
        img: kuslakki,
        time: "7 Months",
        url: "https://healthyeating.sfgate.com/there-health-benefits-boiled-rice-9831.html",
        like: "5/5",
        by: "Chandrashekar",
        btn: "Read More"
      },
      {
        title: "Pathrode",
        text: "The recipe is a masterpieces from the Konkan and Mangalorean cuisine, It is prepared using colocasia leaves that are smeared with a spicy, tangy rice and coconut paste. It is then rolled and cut into roundles so you can see the layers of the stuffing.",
        img: pathrode,
        time: "1 Months",
        url: "https://www.archanaskitchen.com/pathravade-recipe-colocasia-leaves-snack",
        like: "5/5",
        by: "Veena",
        btn: "Read More"
      },
      {
        title: "Pajey Madipula",
        text: "Pajey Madipula, a term in the local language Tulu which roughly translates to ‘rolled up carpet’.Pajey Madipula is a simple rice cake rolled up like a mat inside a banana leaf. This tastes great with any veg or non veg curry of your choice",
        img: pathole,
        time: "25 Days",
        url: "https://www.ruchikrandhap.com/pajey-madpela-rice-rolls-steamed-in/",
        like: "3/5",
        by: "Gayathri",
        btn: "Read More"
      },
      {
        title: "Punarpuli",
        text: "Punarpuli in Kannada as well as in Tulu. Botanical name: Garcinia Indica; belongs to the family of Mangosteen (Clusiaceae). Its peel is dried under the sun, stored and used to prepare delicious Kokum juice and Aromatic Punarpuli Saru (Rasam). It is a rich source of Anti oxidants.",
        img: punarpuli,
        url: "https://en.wikipedia.org/wiki/Garcinia_indica",
        time: "6 Days",
        like: "4/5",
        by: "Sandhya",
        btn: "Read More"
      },
      {
        title: "Pejakai",
        text: "Pejakai is also known as Artocarpus hirsutus.Artocarpus hirsutus seeds are nutritionally enriched and prevents food borne pathogens. The seeds reveal excellent anti-diabetic properties. The seeds are not consumed frequently due to the lack of information on its health benefits.",
        img: pejakai,
        url: "https://en.wikipedia.org/wiki/Artocarpus_hirsutus",
        time: "5 Days",
        like: "4/5",
        by: "Sathish",
        btn: "Read More"
      },
    ],
  };

  const footerAPI = {
    titles: [ {title: "About Us"},{title: "Get Help"},{title: "Company"} ],
    links: [
      [
        {link: "News"},
        {link: "Contact Us"},
        {link: "Address"},
      ],
      [
        {link: "Order Status"},
        {link: "Shipping & Delivery"},
        {link: "Payment Options"},
        
      ],
      [
        {link: "Find A Store"},
        {link: "Signup"},
        {link: "Send Us Feeback"},
      ],
    ]
  };
  
   
export {homeapi,popularsales,topratesales,othergrocery,fooditems,story,footerAPI}
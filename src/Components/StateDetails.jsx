import { useParams } from "react-router-dom";
// WEST BENGAL IMAGES
import victoria from "../assets/places/wb/victoriamemorial.jpeg";
import darjeeling from "../assets/places/wb/derjiling.jpg";
import sundarbans from "../assets/places/wb/Sundarbans.jpg";
import kalimpong from "../assets/places/wb/Kalimpong.jpg";
import museum from "../assets/places/wb/Museum.jpg";

// ODISHA IMAGES
import jagannathTemple from "../assets/places/odisha/Jagannath Temple.jpg";
import konarkTemple from "../assets/places/odisha/Konark Sun Temple.jpg";
import hirakudDam from "../assets/places/odisha/Hirakud Dam.jpg";
import similipal from "../assets/places/odisha/Simlipal National Park.jpg";
import udayagiri from "../assets/places/odisha/Udayagiri and Khandagiri Caves.jpg";

// RAJASTHAN IMAGES
import jaipur from "../assets/places/Rajasthan/Jaipur.jpg";
import jodhpur from "../assets/places/Rajasthan/Jodhpur (Blue City).jpg";
import qilaMubarak from "../assets/places/Rajasthan/Qila Mubarak.jpg";
import sheeshMahal from "../assets/places/Rajasthan/Sheesh Mahal.jpg";
import udaipur from "../assets/places/Rajasthan/Udaipur.jpg";

// DELHI IMAGES
import humayunTomb from "../assets/places/delhi/Humayun's Tomb.jpg";
import indiaGate from "../assets/places/delhi/India Gate.jpg";
import lotusTemple from "../assets/places/delhi/Lotus Temple.jpg";
import qutubMinar from "../assets/places/delhi/Qutub Minar.jpg";
import redFort from "../assets/places/delhi/Red Fort (Lal Qila).jpg";

// UTTAR PRADESH IMAGES
import ayodhya from "../assets/places/up/ayodha.jpg";
import baraImambara from "../assets/places/up/Bara Imambara.jpg";
import sarnath from "../assets/places/up/Sarnath.jpg";
import tajMahal from "../assets/places/up/tajmahal.jpg";
import varanasi from "../assets/places/up/Varanasi.jpg";

// TAMIL NADU IMAGES
import hogenakkalFalls from "../assets/places/Tamil Nadu/Hogenakkal Falls.jpg";
import kanyakumari from "../assets/places/Tamil Nadu/Kanyakumari.jpg";
import kodaikanal from "../assets/places/Tamil Nadu/Kodaikanal.jpg";
import mahabalipuram from "../assets/places/Tamil Nadu/Mahabalipuram.jpg";
import meenakshiTemple from "../assets/places/Tamil Nadu/Meenakshi Amman Temple.jpg";

// KERALA IMAGES
import athirappillyWaterfalls from "../assets/places/Kerala/Athirappilly Waterfalls.jpg";
import bekalFort from "../assets/places/Kerala/Bekal Fort.jpg";
import kochi from "../assets/places/Kerala/Kochi.jpg";
import munnar from "../assets/places/Kerala/Munnar.jpg";
import wayanad from "../assets/places/Kerala/Wayanad.jpg";

// GOA IMAGES
import anjunaBeach from "../assets/places/Goa/Anjuna Beach.jpg";
import basilica from "../assets/places/Goa/Basilica of Bom Jesus.jpg";
import calanguteBeach from "../assets/places/Goa/Calangute Beach.jpg";
import chaporaFort from "../assets/places/Goa/Chapora Fort.jpg";
import dudhsagarFalls from "../assets/places/Goa/Dudhsagar Falls.jpg";

// JAMMU AND KASHMIR IMAGES
import betaabValley from "../assets/places/kashmir/Betaab Valley.jpg";
import dalLake from "../assets/places/kashmir/Dal Lake.jpg";
import gulmarg from "../assets/places/kashmir/Gulmarg.jpg";
import pahalgam from "../assets/places/kashmir/Pahalgam.jpg";
import sonamarg from "../assets/places/kashmir/Sonamarg.jpg";

// GUJARAT IMAGES
import dwarkadhishTemple from "../assets/places/gujrat/Dwarkadhish Temple.jpg";
import girNationalPark from "../assets/places/gujrat/Gir National Park.jpg";
import laxmiVilasPalace from "../assets/places/gujrat/Laxmi Vilas Palace.jpg";
import rannOfKutch from "../assets/places/gujrat/Rann of Kutch.jpg";
import saputaraHillStation from "../assets/places/gujrat/Saputara Hill Station.jpg";

// PUNJAB IMAGES
import anandpurSahib from "../assets/places/Punjab/Anandpur Sahib.jpg";
import goldenTemple from "../assets/places/Punjab/Golden Temple.jpg";
import jallianwalaBagh from "../assets/places/Punjab/Jallianwala Bagh.jpg";
import qilaMubarakPunjab from "../assets/places/Punjab/Qila Mubarak.jpg";
import sheeshMahalPunjab from "../assets/places/Punjab/Sheesh Mahal.jpg";

// JHARKHAND IMAGES
import baidyanathDham from "../assets/places/Jharkhand/Baidyanath Dham.jpg";
import dassamFalls from "../assets/places/Jharkhand/Dassam Falls.jpg";
import hundruFalls from "../assets/places/Jharkhand/Hundru Falls.jpg";
import netarhat from "../assets/places/Jharkhand/Netarhat.jpg";
import parasnathHill from "../assets/places/Jharkhand/Parasnath Hill.jpg";

import "./StateDetails.css";

function StateDetails() {
  const { stateName } = useParams();

  const statesData = {
    "west-bengal": {
      name: "West Bengal",

      description:
        "West Bengal, positioned in eastern India, is an immaculate with an affluent variety. Abode to different civilizations and acknowledged for its cultural assortment, this state has a great history as well. West Bengal finds its mention in the epic Mahabharata. A credit to its ecological position extending from the Bay of Bengal to great Himalayas, the state has magnificent panoramas to enchant the souls of the tourists. Our West Bengal tour packages cater you a broad exploration of the different hues of this state. Our tempting deals bring you close to multi-coloured facets of West Bengal's culture and exquisiteness. Our passionate staff always strives for giving a heart-warming feel to your tour. These reasonably priced yet all-inclusive packages accomplish all the tour related needs of the traveller in search of scouting West Bengal in a comprehensive way. No matter what you desire from a perfect West Bengal tour deal, we are liable to deliver!..",

      places: [
        {
          name: "Victoria Memorial",
          image: victoria,
          history:
            "Victoria Memorial is one of the most famous historical monuments in Kolkata. It was built in memory of Queen Victoria and is now a popular museum and tourist destination.",
          visitTime: "10:00 AM-05:00 PM",
        },

        {
          name: "Darjeeling",
          image: darjeeling,
          history:
            "Darjeeling is a famous hill station known for its tea gardens, beautiful Himalayan views and the historic Darjeeling Himalayan Railway.",
          visitTime: "Open All Day",
        },

        {
          name: "Sundarbans",
          image: sundarbans,
          history:
            "The Sundarbans is famous for its vast mangrove forest, rivers and wildlife. It is one of the best-known natural habitats of the Royal Bengal Tiger.",
          visitTime: "08:00 AM-05:00 PM",
        },

        {
          name: "Kalimpong",
          image: kalimpong,
          history:
            "Kalimpong is a beautiful hill town known for its peaceful environment, monasteries, mountain views and natural beauty.",
          visitTime: "Open All Day",
        },

        {
          name: "Indian Museum",
          image: museum,
          history:
            "The Indian Museum in Kolkata is one of the oldest and largest museums in India. It has important collections related to history, art, archaeology and science.",
          visitTime: "10:00 AM-05:00 PM",
        },
      ],
    },


// odisha
   odisha: {
  name: "Odisha",

  description:
    "Odisha is a beautiful state in eastern India known for its ancient temples, rich cultural heritage, wildlife, dams and historical monuments.",

  places: [
    {
      name: "Jagannath Temple",
      image: jagannathTemple,
      history:
        "Jagannath Temple is one of the most famous temples in India. Located in Puri, the temple is dedicated to Lord Jagannath and is famous for its religious importance and annual Rath Yatra festival.",
      visitTime: "05:00 AM - 11:00 PM",
    },

    {
      name: "Konark Sun Temple",
      image: konarkTemple,
      history:
        "Konark Sun Temple is one of the most famous historical monuments in Odisha. Built in the form of a giant stone chariot, it is known for its magnificent architecture and historical importance.",
      visitTime: "06:00 AM - 08:00 PM",
    },

    {
      name: "Hirakud Dam",
      image: hirakudDam,
      history:
        "Hirakud Dam is one of the longest earthen dams in the world. It is built across the Mahanadi River and is a popular tourist destination known for its beautiful scenery.",
      visitTime: "06:00 AM - 06:00 PM",
    },

    {
      name: "Similipal National Park",
      image: similipal,
      history:
        "Similipal National Park is a famous wildlife destination in Odisha. It is known for its forests, waterfalls, rich biodiversity and wildlife.",
      visitTime: "November to June",
    },

    {
      name: "Udayagiri and Khandagiri Caves",
      image: udayagiri,
      history:
        "Udayagiri and Khandagiri are ancient rock-cut caves located near Bhubaneswar. These historical caves are known for their architecture, inscriptions and connection with Jain history.",
      visitTime: "09:00 AM - 05:00 PM",
      },
      ],
    },
// rajasthan 
rajasthan: {
  name: "Rajasthan",

  description:
    "Rajasthan is one of the most popular tourist states in India. It is famous for its magnificent forts, royal palaces, colourful culture, historical monuments and beautiful cities. Rajasthan offers visitors an opportunity to explore India's rich royal heritage, traditional lifestyle and remarkable architecture.",

  places: [
    {
      name: "Jaipur",
      image: jaipur,
      history:
        "Jaipur, also known as the Pink City, is the capital of Rajasthan. It is famous for its royal palaces, historic forts, colourful markets and beautiful Rajasthani architecture.",
      visitTime: "October to March",
    },

    {
      name: "Jodhpur (Blue City)",
      image: jodhpur,
      history:
        "Jodhpur is popularly known as the Blue City of Rajasthan. It is famous for its blue-painted houses, historical monuments, traditional markets and rich Rajasthani culture.",
      visitTime: "October to March",
    },

    {
      name: "Qila Mubarak",
      image: qilaMubarak,
      history:
        "Qila Mubarak is a historic fort known for its impressive architecture and royal heritage. The fort represents the rich history, culture and architectural traditions of Rajasthan.",
      visitTime: "09:00 AM - 05:00 PM",
    },

    {
      name: "Sheesh Mahal",
      image: sheeshMahal,
      history:
        "Sheesh Mahal is famous for its beautiful mirror work and magnificent architecture. The walls and ceilings decorated with mirrors demonstrate the artistic excellence of Rajasthan's royal period.",
      visitTime: "09:00 AM - 05:00 PM",
    },

    {
      name: "Udaipur",
      image: udaipur,
      history:
        "Udaipur is popularly known as the City of Lakes. It is famous for its beautiful lakes, magnificent palaces, historical architecture and rich royal heritage.",
      visitTime: "October to March",
   },
  ],
},

// delhi

delhi: {
  name: "Delhi",

  description:
    "Delhi is the capital city of India and one of the country's most popular tourist destinations. The city is famous for its historical monuments, magnificent architecture, cultural heritage and modern attractions. Delhi offers visitors an opportunity to explore the rich history and diverse culture of India.",

  places: [
    {
      name: "Humayun's Tomb",
      image: humayunTomb,
      history:
        "Humayun's Tomb is a famous historical monument in Delhi. Built in memory of the Mughal Emperor Humayun, it is known for its magnificent Mughal architecture, beautiful gardens and historical importance.",
      visitTime: "06:00 AM - 06:00 PM",
    },

    {
      name: "India Gate",
      image: indiaGate,
      history:
        "India Gate is one of the most famous landmarks in Delhi. It was built as a war memorial to honour Indian soldiers and is now one of the most popular tourist attractions in the city.",
      visitTime: "Open All Day",
    },

    {
      name: "Lotus Temple",
      image: lotusTemple,
      history:
        "Lotus Temple is one of the most beautiful architectural landmarks in Delhi. The building is designed in the shape of a lotus flower and is known for its peaceful environment and unique architecture.",
      visitTime: "09:00 AM - 05:00 PM",
    },

    {
      name: "Qutub Minar",
      image: qutubMinar,
      history:
        "Qutub Minar is one of the most famous historical monuments in Delhi. The magnificent tower is known for its impressive architecture, detailed carvings and historical importance.",
      visitTime: "07:00 AM - 05:00 PM",
    },

    {
      name: "Red Fort (Lal Qila)",
      image: redFort,
      history:
        "The Red Fort is one of the most important historical monuments in India. Built during the Mughal period, it is famous for its magnificent red sandstone architecture and rich historical heritage.",
      visitTime: "09:30 AM - 04:30 PM",
    },
  ],
},
// uttar-pradesh

"uttar-pradesh": {
  name: "Uttar Pradesh",

  description:
    "Uttar Pradesh is one of the most historically and culturally significant states in India. It is famous for ancient cities, religious destinations, magnificent monuments and rich cultural heritage. The state attracts visitors from around the world with destinations such as the Taj Mahal, Varanasi, Ayodhya and Sarnath.",

  places: [
    {
      name: "Ayodhya",
      image: ayodhya,
      history:
        "Ayodhya is one of the most important religious and historical cities in India. Located on the banks of the Sarayu River, the city is known for its ancient heritage, temples and cultural importance.",
      visitTime: "October to March",
    },

    {
      name: "Bara Imambara",
      image: baraImambara,
      history:
        "Bara Imambara is a famous historical monument located in Lucknow. It was built by Nawab Asaf-ud-Daula and is known for its magnificent architecture and the famous Bhul Bhulaiya.",
      visitTime: "06:00 AM - 05:00 PM",
    },

    {
      name: "Sarnath",
      image: sarnath,
      history:
        "Sarnath is an important historical and religious destination near Varanasi. It is known as the place where Gautama Buddha delivered his first sermon after attaining enlightenment.",
      visitTime: "06:00 AM - 06:00 PM",
    },

    {
      name: "Taj Mahal",
      image: tajMahal,
      history:
        "The Taj Mahal is one of the most famous monuments in the world. Located in Agra, it was built by Mughal Emperor Shah Jahan in memory of Mumtaz Mahal and is famous for its magnificent white marble architecture.",
      visitTime: "Sunrise to Sunset",
    },

    {
      name: "Varanasi",
      image: varanasi,
      history:
        "Varanasi is one of the oldest continuously inhabited cities in the world. Located on the banks of the River Ganges, it is famous for its ancient ghats, temples, religious traditions and Ganga Aarti.",
      visitTime: "October to March",
    },
  ],
},

// tamil-nadu

"tamil-nadu": {
  name: "Tamil Nadu",

  description:
    "Tamil Nadu is one of the most popular tourist states in southern India. It is famous for its ancient temples, beautiful hill stations, waterfalls, beaches and rich cultural heritage. The state attracts visitors with its magnificent architecture, natural beauty and traditional culture.",

  places: [
    {
      name: "Hogenakkal Falls",
      image: hogenakkalFalls,
      history:
        "Hogenakkal Falls is a famous waterfall located on the Kaveri River. It is known for its beautiful rocky landscape, flowing waterfalls and traditional coracle boat rides.",
      visitTime: "October to March",
    },

    {
      name: "Kanyakumari",
      image: kanyakumari,
      history:
        "Kanyakumari is located at the southernmost tip of mainland India. It is famous for its beautiful sunrise and sunset views, beaches and important historical and cultural attractions.",
      visitTime: "October to March",
    },

    {
      name: "Kodaikanal",
      image: kodaikanal,
      history:
        "Kodaikanal is one of the most popular hill stations in Tamil Nadu. It is known for its beautiful mountains, forests, waterfalls, pleasant climate and the famous Kodaikanal Lake.",
      visitTime: "October to June",
    },

    {
      name: "Mahabalipuram",
      image: mahabalipuram,
      history:
        "Mahabalipuram is a famous historical destination known for its ancient temples and magnificent rock-cut architecture. It is one of the most important heritage destinations in Tamil Nadu.",
      visitTime: "November to February",
    },

    {
      name: "Meenakshi Amman Temple",
      image: meenakshiTemple,
      history:
        "Meenakshi Amman Temple is a famous historic temple located in Madurai. It is known for its magnificent architecture, colourful towers, sculptures and religious importance.",
      visitTime: "05:00 AM - 10:00 PM",
    },
  ],
},
// kerala
kerala: {
  name: "Kerala",

  description:
    "Kerala is one of the most beautiful tourist states in southern India. It is famous for its green landscapes, waterfalls, hill stations, beaches, backwaters and rich cultural heritage. Known as God's Own Country, Kerala attracts visitors with its natural beauty, peaceful environment and unique traditions.",

  places: [
    {
      name: "Athirappilly Waterfalls",
      image: athirappillyWaterfalls,
      history:
        "Athirappilly Waterfalls is one of the most famous waterfalls in Kerala. Located on the Chalakudy River, it is surrounded by beautiful forests and is known for its magnificent natural scenery.",
      visitTime: "08:00 AM - 06:00 PM",
    },

    {
      name: "Bekal Fort",
      image: bekalFort,
      history:
        "Bekal Fort is one of the largest and most famous historic forts in Kerala. Located near the Arabian Sea, the fort is known for its impressive architecture, historical importance and beautiful coastal views.",
      visitTime: "08:00 AM - 05:30 PM",
    },

    {
      name: "Kochi",
      image: kochi,
      history:
        "Kochi is one of the most popular tourist cities in Kerala. It is famous for its historical heritage, Chinese fishing nets, colonial architecture, beautiful coastline and cultural attractions.",
      visitTime: "October to March",
    },

    {
      name: "Munnar",
      image: munnar,
      history:
        "Munnar is a famous hill station in Kerala known for its beautiful tea plantations, green mountains, waterfalls and pleasant climate. It is one of the most popular natural tourist destinations in South India.",
      visitTime: "September to March",
    },

    {
      name: "Wayanad",
      image: wayanad,
      history:
        "Wayanad is a beautiful tourist destination known for its green forests, mountains, waterfalls, wildlife and natural beauty. It is an ideal destination for nature lovers and adventure travellers.",
      visitTime: "October to May",
    },
  ],
},
// goa
goa: {
  name: "Goa",

  description:
    "Goa is India's smallest state and one of the country's most famous tourist destinations. It is well known for its beautiful beaches, Portuguese heritage, churches, waterfalls, nightlife and relaxing atmosphere.",

  places: [
    {
      name: "Anjuna Beach",
      image: anjunaBeach,
      history:
        "Anjuna Beach is one of the most famous beaches in Goa. It is popular for its golden sand, water sports, flea market and beautiful sunset views.",
      visitTime: "October to March",
    },

    {
      name: "Basilica of Bom Jesus",
      image: basilica,
      history:
        "The Basilica of Bom Jesus is a UNESCO World Heritage Site. It is famous for its Portuguese architecture and the mortal remains of St. Francis Xavier.",
      visitTime: "09:00 AM - 06:30 PM",
    },

    {
      name: "Calangute Beach",
      image: calanguteBeach,
      history:
        "Calangute Beach is known as the Queen of Beaches in Goa. It is famous for water sports, nightlife, seafood and beach activities.",
      visitTime: "Open All Day",
    },

    {
      name: "Chapora Fort",
      image: chaporaFort,
      history:
        "Chapora Fort is a historic Portuguese fort overlooking the Arabian Sea. It became popular after the Bollywood movie Dil Chahta Hai.",
      visitTime: "09:30 AM - 05:30 PM",
    },

    {
      name: "Dudhsagar Falls",
      image: dudhsagarFalls,
      history:
        "Dudhsagar Falls is one of the tallest waterfalls in India. It is famous for its spectacular natural beauty, forests and railway bridge views.",
      visitTime: "October to February",
    },
  ],
},

"jammu-and-kashmir": {
  name: "Jammu and Kashmir",

  description:
    "Jammu and Kashmir is one of the most beautiful tourist destinations in India. It is famous for its snow-covered mountains, beautiful valleys, lakes, rivers and breathtaking natural scenery. The region attracts tourists with destinations such as Gulmarg, Pahalgam, Sonamarg and Dal Lake.",

  places: [
    {
      name: "Betaab Valley",
      image: betaabValley,
      history:
        "Betaab Valley is a beautiful tourist destination surrounded by green mountains and scenic landscapes. The valley became popular after the Bollywood movie Betaab was filmed here.",
      visitTime: "April to October",
    },

    {
      name: "Dal Lake",
      image: dalLake,
      history:
        "Dal Lake is one of the most famous tourist attractions in Kashmir. Located in Srinagar, it is known for its beautiful houseboats, Shikara rides, floating gardens and mountain views.",
      visitTime: "May to November",
    },

    {
      name: "Gulmarg",
      image: gulmarg,
      history:
        "Gulmarg is a famous hill station and winter tourist destination in Kashmir. It is known for its snow-covered mountains, skiing activities, beautiful landscapes and the famous Gulmarg Gondola.",
      visitTime: "December to March",
    },

    {
      name: "Pahalgam",
      image: pahalgam,
      history:
        "Pahalgam is a beautiful hill station located in Kashmir. It is famous for its green valleys, mountains, rivers and peaceful natural environment.",
      visitTime: "March to November",
    },

    {
      name: "Sonamarg",
      image: sonamarg,
      history:
        "Sonamarg is a beautiful mountain destination in Kashmir. Its name means Meadow of Gold, and it is famous for snow-covered mountains, glaciers, rivers and spectacular natural scenery.",
      visitTime: "April to October",
    },
  ],
},
gujarat: {
  name: "Gujarat",

  description:
    "Gujarat is one of the most popular tourist states in western India. It is famous for its ancient temples, wildlife, historical palaces, beautiful landscapes and rich cultural heritage. From the white desert of the Rann of Kutch to the forests of Gir National Park, Gujarat offers many unforgettable travel experiences.",

  places: [
    {
      name: "Dwarkadhish Temple",
      image: dwarkadhishTemple,
      history:
        "Dwarkadhish Temple is one of the most famous Hindu temples in India. Located in Dwarka, the temple is dedicated to Lord Krishna and is an important religious and historical tourist destination.",
      visitTime: "06:30 AM - 09:30 PM",
    },

    {
      name: "Gir National Park",
      image: girNationalPark,
      history:
        "Gir National Park is one of the most famous wildlife destinations in India. It is especially known as the natural habitat of the Asiatic lion and attracts wildlife lovers from around the world.",
      visitTime: "October to June",
    },

    {
      name: "Laxmi Vilas Palace",
      image: laxmiVilasPalace,
      history:
        "Laxmi Vilas Palace is a magnificent historical palace located in Vadodara. It is famous for its beautiful architecture, royal heritage and impressive interiors.",
      visitTime: "09:30 AM - 05:00 PM",
    },

    {
      name: "Rann of Kutch",
      image: rannOfKutch,
      history:
        "The Rann of Kutch is a famous white salt desert in Gujarat. It is known for its beautiful landscape, cultural festivals and spectacular views, especially during the Rann Utsav.",
      visitTime: "November to February",
    },

    {
      name: "Saputara Hill Station",
      image: saputaraHillStation,
      history:
        "Saputara is a beautiful hill station in Gujarat. It is known for its green hills, peaceful atmosphere, waterfalls and scenic natural beauty.",
      visitTime: "October to February",
    },
  ],
},

punjab: {
  name: "Punjab",

  description:
    "Punjab is a beautiful state in northern India known for its rich culture, historical monuments, religious places and traditional lifestyle. The state is famous for its warm hospitality, delicious food and important historical destinations.",

  places: [
    {
      name: "Anandpur Sahib",
      image: anandpurSahib,
      history:
        "Anandpur Sahib is an important historical and religious city in Punjab. It is famous for its connection with Sikh history and is one of the most important pilgrimage destinations in India.",
      visitTime: "Open All Day",
    },

    {
      name: "Golden Temple",
      image: goldenTemple,
      history:
        "The Golden Temple, located in Amritsar, is one of the most famous religious places in India. It is known for its beautiful golden architecture, peaceful atmosphere and religious importance.",
      visitTime: "Open All Day",
    },

    {
      name: "Jallianwala Bagh",
      image: jallianwalaBagh,
      history:
        "Jallianwala Bagh is an important historical memorial located in Amritsar. It commemorates the people who lost their lives in the tragic Jallianwala Bagh massacre of 1919.",
      visitTime: "06:30 AM - 07:30 PM",
    },

    {
      name: "Qila Mubarak",
      image: qilaMubarakPunjab,
      history:
        "Qila Mubarak is a famous historical fort in Punjab. It is known for its ancient architecture, historical importance and connection with the rich cultural heritage of the region.",
      visitTime: "09:00 AM - 05:00 PM",
    },

    {
      name: "Sheesh Mahal",
      image: sheeshMahalPunjab,
      history:
        "Sheesh Mahal is a beautiful historical palace known for its decorative mirror work, traditional architecture and connection with the royal history of Punjab.",
      visitTime: "09:00 AM - 05:00 PM",
    },
  ],
},
jharkhand: {
  name: "Jharkhand",

  description:
    "Jharkhand is a beautiful state in eastern India known for its waterfalls, forests, hills, temples and rich natural beauty. The state offers many attractive destinations for nature lovers, adventure seekers and religious tourists.",

  places: [
    {
      name: "Baidyanath Dham",
      image: baidyanathDham,
      history:
        "Baidyanath Dham is one of the most famous religious destinations in Jharkhand. Located in Deoghar, the temple is dedicated to Lord Shiva and is considered one of the twelve Jyotirlingas in India.",
      visitTime: "04:00 AM - 09:00 PM",
    },

    {
      name: "Dassam Falls",
      image: dassamFalls,
      history:
        "Dassam Falls is a beautiful waterfall located near Ranchi. Surrounded by forests and natural scenery, it is one of the most popular tourist destinations in Jharkhand.",
      visitTime: "06:00 AM - 05:00 PM",
    },

    {
      name: "Hundru Falls",
      image: hundruFalls,
      history:
        "Hundru Falls is one of the most famous waterfalls in Jharkhand. The waterfall is formed by the Subarnarekha River and is known for its beautiful natural surroundings.",
      visitTime: "06:00 AM - 05:00 PM",
    },

    {
      name: "Netarhat",
      image: netarhat,
      history:
        "Netarhat is a beautiful hill station in Jharkhand. It is famous for its forests, peaceful environment, beautiful sunrise and sunset views and pleasant climate.",
      visitTime: "October to March",
    },

    {
      name: "Parasnath Hill",
      image: parasnathHill,
      history:
        "Parasnath Hill is one of the highest hills in Jharkhand and an important pilgrimage destination. It is famous for its natural beauty, peaceful atmosphere and religious importance.",
      visitTime: "October to March",
    },
  ],
},

};

  const state = statesData[stateName];

  if (!state) {
    return (
      <div className="container py-5 text-center">
        <h1>State Not Found</h1>
      </div>
    );
  }

  return (
    <section className="state-details-page">
      <div className="container">
        <div className="state-heading">
          <h1>
            <span>{state.name}</span> Tourist Places
          </h1>

          <p>{state.description}</p>
        </div>

        <div className="row g-4">
          {state.places.map((place, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="tour-card">
                <div className="tour-image">
                  <img src={place.image} alt={place.name} />
                </div>

                <div className="tour-content">
                  <h2>{place.name}</h2>

                  <p className="place-history">{place.history}</p>

                  <div className="visit-time">
                    <span>Visit Time</span>

                    <strong>{place.visitTime}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StateDetails;

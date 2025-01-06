const sampleListings = [
  {
    title: "Mysore Palace",
    description: "This architectural masterpiece reflects the grandeur of the Mysore kingdom, with stunning interiors and beautiful gardens.",
    image: {
      filename: "mysore_palace",
      url: "https://images.pexels.com/photos/17666276/pexels-photo-17666276/free-photo-of-mysore-palace-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Mysore, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        76.6394,12.2958
      ]
    }
  },
  {
    title: "Taj Mahal, Agra",
    description: "A UNESCO World Heritage Site, this stunning marble mausoleum symbolizes love and showcases exquisite Mughal architecture.",
    image: {
      filename: "taj_mahal",
      url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg"
    },
    price: 0,
    location: "Agra, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        78.042068,27.173891
      ]
    }
  },
  {
    title: "Varanasi",
    description: "One of the oldest inhabited cities in the world, Varanasi is known for its ghats along the Ganges River, where spiritual rituals take place.",
    image: {
      filename: "varanasi",
      url: "https://images.pexels.com/photos/18435637/pexels-photo-18435637/free-photo-of-people-swimming-on-a-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Varanasi, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        82.9739,25.3176
      ]
    }
  },
  {
    title: "Jaipur (Pink City)",
    description: "Known for its stunning forts and palaces, Jaipur offers a glimpse into the royal heritage of Rajasthan with vibrant markets and rich culture.",
    image: {
      filename: "jaipur",
      url: "https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Jaipur, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        75.7873,26.9124
      ]
    }
  },
  {
    title: "Kerala Backwaters",
    description: "A unique ecosystem, the backwaters of Kerala offer a serene retreat with houseboats, lush landscapes, and rich local culture.",
    image: {
      filename: "kerala_backwaters",
      url: "https://images.pexels.com/photos/28700142/pexels-photo-28700142/free-photo-of-houseboat-on-kerala-s-serene-backwaters-with-lotus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Kerala, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        76.3574,9.5238
      ]
    }
  },
  {
    title: "Hampi",
    description: "A UNESCO World Heritage Site, Hampi is famous for its ancient temples, ruins, and captivating landscapes from the Vijayanagara Empire.",
    image: {
      filename: "hampi",
      url: "https://images.pexels.com/photos/28739089/pexels-photo-28739089/free-photo-of-sunset-view-of-virupaksha-temple-in-hampi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Hampi, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        76.4600,15.3350
      ]
    }
  },
 
  {
    title: "Khajuraho",
    description: "Known for its stunning temples adorned with intricate erotic sculptures, Khajuraho is a marvel of Indian artistry and culture.",
    image: {
      filename: "khajuraho",
      url: "https://images.pexels.com/photos/20545471/pexels-photo-20545471/free-photo-of-kandariya-mahadeva-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Khajuraho, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        79.9199,24.8318
      ]
    }
  },
  {
    title: "Darjeeling",
    description: "Famous for its tea gardens and stunning views of the Himalayas, Darjeeling offers a blend of natural beauty and cultural diversity.",
    image: {
      filename: "darjeeling",
      url: "https://images.pexels.com/photos/11468524/pexels-photo-11468524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Darjeeling, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        88.2664,27.0416
      ]
    }
  },
  {
    title: "Ajanta Caves",
    description: "These rock-cut Buddhist cave monuments date back to the 2nd century BCE and are known for their beautiful frescoes and sculptures.",
    image: {
      filename: "ajanta_caves",
      url: "https://images.pexels.com/photos/14221921/pexels-photo-14221921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Ajanta, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        75.7033,20.5526
      ]
    }
  },
  {
    title: "Golden Temple, Amritsar",
    description: "The holiest Gurdwara of Sikhism, the Golden Temple is renowned for its stunning architecture and serene atmosphere, attracting millions of visitors.",
    image: {
      filename: "golden_temple",
      url: "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 0,
    location: "Amritsar, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [
        74.8753,31.6200
      ]
    }
  },  



  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        -75.8669,23.6169
      ]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        79.0882,21.1458
      ]
    }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        76.7116,11.4064
      ]
    }
  },
  
  
  
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [
        43.7696, 11.2558
      ]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        45.5051, -122.6750
      ]
    }
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [
        21.1743, -86.8466
      ]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        38.9394, -119.9772
      ]
    }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        34.0522, -118.2437
      ]
    }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [
        46.0920, 7.2329
      ]
    }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [
        -2.3333, 34.8333
      ]
    }
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [
        52.3676, 4.9041
      ]
    }
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [
        -17.7134, 178.0650
      ]
    }
  },
  
  // {
  //   title: "Historic Villa in Tuscany",
  //   description:
  //     "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2500,
  //   location: "Florence",
  //   country: "Italy",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Secluded Treehouse Getaway",
  //   description:
  //     "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 800,
  //   location: "Portland",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Beachfront Paradise",
  //   description:
  //     "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2000,
  //   location: "Cancun",
  //   country: "Mexico",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Rustic Cabin by the Lake",
  //   description:
  //     "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 900,
  //   location: "Lake Tahoe",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Luxury Penthouse with City Views",
  //   description:
  //     "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 3500,
  //   location: "Los Angeles",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Ski-In/Ski-Out Chalet",
  //   description:
  //     "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 3000,
  //   location: "Verbier",
  //   country: "Switzerland",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Safari Lodge in the Serengeti",
  //   description:
  //     "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 4000,
  //   location: "Serengeti National Park",
  //   country: "Tanzania",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Historic Canal House",
  //   description:
  //     "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1800,
  //   location: "Amsterdam",
  //   country: "Netherlands",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Private Island Retreat",
  //   description:
  //     "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 10000,
  //   location: "Fiji",
  //   country: "Fiji",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [
        51.8742,-1.8010
      ]
    }
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        42.3601,-71.0589
      ]
    }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [
        -8.3405,115.0920
      ]
    }
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [
        51.1784,-115.5708
      ]
    }
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        25.7617,-80.1918
      ]
    }
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [
        7.8804,98.3923
      ]
    }
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [
        57.0937,-4.3127
      ]
    }
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [
        25.276987,55.296249
      ]
    }
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [
        46.8797,-110.3626
      ]
    }
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [
        37.4458,25.3694
      ]
    }
  },

  // {
  //   title: "Charming Cottage in the Cotswolds",
  //   description:
  //     "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1200,
  //   location: "Cotswolds",
  //   country: "United Kingdom",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Historic Brownstone in Boston",
  //   description:
  //     "Step back in time in this elegant historic brownstone located in the heart of Boston.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2200,
  //   location: "Boston",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Beachfront Bungalow in Bali",
  //   description:
  //     "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1800,
  //   location: "Bali",
  //   country: "Indonesia",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Mountain View Cabin in Banff",
  //   description:
  //     "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1500,
  //   location: "Banff",
  //   country: "Canada",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Art Deco Apartment in Miami",
  //   description:
  //     "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1600,
  //   location: "Miami",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Tropical Villa in Phuket",
  //   description:
  //     "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 3000,
  //   location: "Phuket",
  //   country: "Thailand",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Historic Castle in Scotland",
  //   description:
  //     "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 4000,
  //   location: "Scottish Highlands",
  //   country: "United Kingdom",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Desert Oasis in Dubai",
  //   description:
  //     "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 5000,
  //   location: "Dubai",
  //   country: "United Arab Emirates",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Rustic Log Cabin in Montana",
  //   description:
  //     "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1100,
  //   location: "Montana",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Beachfront Villa in Greece",
  //   description:
  //     "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2500,
  //   location: "Mykonos",
  //   country: "Greece",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Eco-Friendly Treehouse Retreat",
  //   description:
  //     "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 750,
  //   location: "Costa Rica",
  //   country: "Costa Rica",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Historic Cottage in Charleston",
  //   description:
  //     "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1600,
  //   location: "Charleston",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Modern Apartment in Tokyo",
  //   description:
  //     "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2000,
  //   location: "Tokyo",
  //   country: "Japan",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Lakefront Cabin in New Hampshire",
  //   description:
  //     "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1200,
  //   location: "New Hampshire",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Luxury Villa in the Maldives",
  //   description:
  //     "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 6000,
  //   location: "Maldives",
  //   country: "Maldives",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Ski Chalet in Aspen",
  //   description:
  //     "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 4000,
  //   location: "Aspen",
  //   country: "United States",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  // {
  //   title: "Secluded Beach House in Costa Rica",
  //   description:
  //     "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1800,
  //   location: "Costa Rica",
  //   country: "Costa Rica",
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       76.6394,12.2958
  //     ]
  //   }
  // },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.3744, 9.7489]
    }
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-79.9336, 32.7765]
    }
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.3030, 43.7904]
    }
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.5176, 3.2028]
    }
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8230, 39.1911]
    }
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-85.1792, 9.5656]
    }
  }

  
];

module.exports = { data: sampleListings };
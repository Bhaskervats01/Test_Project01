const restaurants = [
    {
        "image": "fourth",
        "name": "Zesty Bites",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 2186,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "8.7",
        "offers": 6,
        "alcohol": true,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "second",
        "name": "Sizzle & Spice",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 769,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "4.5",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "seventh",
        "name": "Tasty Treats",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1872,
        "location": "India Gate",
        "distance_from_Customer_house": "8.9",
        "offers": 6,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "nine",
        "name": "Gourmet Delight",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 1110,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "1.4",
        "offers": 28,
        "alcohol": true,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "fifth",
        "name": "The Culinary Table",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 1999,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "8.6",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "First",
        "name": "Bistro Bliss",
        "rating": 5,
        "food_type": "Thai",
        "price_for_two": 839,
        "location": "National Museum",
        "distance_from_Customer_house": "1.5",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "fourth",
        "name": "Wholesome Cravings",
        "rating": 4,
        "food_type": "Mexican",
        "price_for_two": 1263,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "1.4",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "nine",
        "name": "Golden Plate",
        "rating": 3,
        "food_type": "Japanese",
        "price_for_two": 2141,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "1.2",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "third",
        "name": "Fusion Feast",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 1255,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "7.6",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "Eigth",
        "name": "The Dining Den",
        "rating": 5,
        "food_type": "Indian",
        "price_for_two": 702,
        "location": "Red Fort",
        "distance_from_Customer_house": "7.1",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "fourth",
        "name": "Epicurean Escape",
        "rating": 1,
        "food_type": "Chinese",
        "price_for_two": 253,
        "location": "National Museum",
        "distance_from_Customer_house": "6.4",
        "offers": 2,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "seventh",
        "name": "The Hungry Fork",
        "rating": 5,
        "food_type": "Mexican",
        "price_for_two": 585,
        "location": "Khan Market",
        "distance_from_Customer_house": "6.9",
        "offers": 10,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "tenth",
        "name": "The Culinary Table",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 734,
        "location": "Purana Qila",
        "distance_from_Customer_house": "3.2",
        "offers": 29,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "seventh",
        "name": "Epicurean Escape",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1776,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "5.3",
        "offers": 19,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "Eigth",
        "name": "Crispy Corner",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 447,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "2.5",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "sixth",
        "name": "Tasty Treats",
        "rating": 2,
        "food_type": "Italian",
        "price_for_two": 1717,
        "location": "Connaught Place",
        "distance_from_Customer_house": "1.0",
        "offers": 13,
        "alcohol": false,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "fifth",
        "name": "Golden Plate",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 118,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "0.5",
        "offers": 30,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "fifth",
        "name": "Gourmet Delight",
        "rating": 4,
        "food_type": "Indian",
        "price_for_two": 140,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "9.1",
        "offers": 6,
        "alcohol": true,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "third",
        "name": "Wholesome Cravings",
        "rating": 2,
        "food_type": "Italian",
        "price_for_two": 1757,
        "location": "Purana Qila",
        "distance_from_Customer_house": "6.0",
        "offers": 18,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "First",
        "name": "Sizzle & Spice",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 2409,
        "location": "National Museum",
        "distance_from_Customer_house": "8.3",
        "offers": 27,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "tenth",
        "name": "Crispy Corner",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1329,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "0.7",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "nine",
        "name": "Taste Haven",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 2373,
        "location": "Connaught Place",
        "distance_from_Customer_house": "3.1",
        "offers": 8,
        "alcohol": false,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "sixth",
        "name": "Spice Symphony",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 1791,
        "location": "India Gate",
        "distance_from_Customer_house": "3.8",
        "offers": 30,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "third",
        "name": "The Hungry Fork",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 140,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "0.8",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 1609,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "2.2",
        "offers": 27,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "sixth",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1052,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "5.8",
        "offers": 6,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "Eigth",
        "name": "The Dining Den",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 773,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "3.0",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "First",
        "name": "Crispy Corner",
        "rating": 3,
        "food_type": "Japanese",
        "price_for_two": 1268,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.3",
        "offers": 16,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "Eigth",
        "name": "The Hungry Fork",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1166,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.1",
        "offers": 20,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "nine",
        "name": "Sizzle & Spice",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 445,
        "location": "Red Fort",
        "distance_from_Customer_house": "9.5",
        "offers": 11,
        "alcohol": false,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "Eigth",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Thai",
        "price_for_two": 955,
        "location": "National Museum",
        "distance_from_Customer_house": "5.1",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "seventh",
        "name": "Savory Spot",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1916,
        "location": "Khan Market",
        "distance_from_Customer_house": "9.8",
        "offers": 29,
        "alcohol": true,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "fifth",
        "name": "The Foodie's Hub",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 925,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "2.5",
        "offers": 14,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "fifth",
        "name": "Crispy Corner",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 628,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "2.8",
        "offers": 10,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "sixth",
        "name": "The Foodie's Hub",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 690,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "1.6",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "third",
        "name": "Golden Plate",
        "rating": 1,
        "food_type": "Chinese",
        "price_for_two": 659,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "5.7",
        "offers": 13,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "tenth",
        "name": "Savory Spot",
        "rating": 5,
        "food_type": "Indian",
        "price_for_two": 1382,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "1.3",
        "offers": 16,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "First",
        "name": "Gourmet Delight",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 1587,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "2.0",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "nine",
        "name": "Savory Spot",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 1437,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "9.1",
        "offers": 18,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "tenth",
        "name": "Wholesome Cravings",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 745,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "8.2",
        "offers": 1,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "second",
        "name": "Epicurean Escape",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 101,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "2.9",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "nine",
        "name": "Zesty Bites",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 2410,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "1.3",
        "offers": 24,
        "alcohol": true,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 500,
        "location": "Lodi Gardens",
        "distance_from_Customer_house": "5.9",
        "offers": 12,
        "alcohol": true,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "third",
        "name": "The Rustic Spoon",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1119,
        "location": "Purana Qila",
        "distance_from_Customer_house": "4.1",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "sixth",
        "name": "Fusion Feast",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 164,
        "location": "National Museum",
        "distance_from_Customer_house": "4.6",
        "offers": 30,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fourth",
        "name": "Fusion Feast",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 2432,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "7.2",
        "offers": 0,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "name": "The Culinary Table",
        "rating": 1,
        "food_type": "Chinese",
        "price_for_two": 2444,
        "location": "Khan Market",
        "distance_from_Customer_house": "1.3",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Urban Eatery",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 830,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "2.5",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "third",
        "name": "The Dining Den",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 909,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "7.8",
        "offers": 15,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "second",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 714,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "8.0",
        "offers": 1,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "tenth",
        "name": "Crispy Corner",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 145,
        "location": "Lodi Gardens",
        "distance_from_Customer_house": "8.9",
        "offers": 4,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "Eigth",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 763,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "6.5",
        "offers": 2,
        "alcohol": false,
        "restaurant_open_time": 0,
        "restaurant_close_time": 12
    },
    {
        "image": "First",
        "name": "Fusion Feast",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": 2453,
        "location": "Connaught Place",
        "distance_from_Customer_house": "6.7",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "tenth",
        "name": "The Rustic Spoon",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 2212,
        "location": "Khan Market",
        "distance_from_Customer_house": "0.1",
        "offers": 25,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "Eigth",
        "name": "The Rustic Spoon",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 1054,
        "location": "India Gate",
        "distance_from_Customer_house": "6.2",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "seventh",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 1043,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "8.3",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "second",
        "name": "Urban Eatery",
        "rating": 2,
        "food_type": "Thai",
        "price_for_two": 1616,
        "location": "Red Fort",
        "distance_from_Customer_house": "3.8",
        "offers": 29,
        "alcohol": true,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "sixth",
        "name": "Zesty Bites",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 2087,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.4",
        "offers": 30,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "fifth",
        "name": "Epicurean Escape",
        "rating": 4,
        "food_type": "Mexican",
        "price_for_two": 714,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "8.9",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "First",
        "name": "Sizzle & Spice",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 1515,
        "location": "Lodi Gardens",
        "distance_from_Customer_house": "2.3",
        "offers": 5,
        "alcohol": true,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "sixth",
        "name": "Golden Plate",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 1128,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "2.1",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "third",
        "name": "Epicurean Escape",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 2089,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "1.9",
        "offers": 11,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "nine",
        "name": "The Hungry Fork",
        "rating": 3,
        "food_type": "Italian",
        "price_for_two": 1891,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "9.5",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "third",
        "name": "Golden Plate",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": 660,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "1.7",
        "offers": 0,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "nine",
        "name": "Flavor Junction",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 2013,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "1.5",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "Eigth",
        "name": "Wholesome Cravings",
        "rating": 5,
        "food_type": "Italian",
        "price_for_two": 1867,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "2.1",
        "offers": 26,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "second",
        "name": "The Culinary Table",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 457,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "5.8",
        "offers": 20,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "nine",
        "name": "Epicurean Escape",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 1617,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "8.8",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "tenth",
        "name": "Urban Eatery",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": 732,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "9.6",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "sixth",
        "name": "Tasty Treats",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 2009,
        "location": "Red Fort",
        "distance_from_Customer_house": "3.2",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "Eigth",
        "name": "Fusion Feast",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 194,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "1.2",
        "offers": 15,
        "alcohol": false,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "tenth",
        "name": "Bistro Bliss",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1173,
        "location": "Red Fort",
        "distance_from_Customer_house": "5.3",
        "offers": 17,
        "alcohol": true,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "nine",
        "name": "Tasty Treats",
        "rating": 3,
        "food_type": "Italian",
        "price_for_two": 589,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "9.0",
        "offers": 27,
        "alcohol": false,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "second",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1398,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "6.6",
        "offers": 15,
        "alcohol": true,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "First",
        "name": "Fusion Feast",
        "rating": 5,
        "food_type": "Italian",
        "price_for_two": 388,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "5.6",
        "offers": 4,
        "alcohol": true,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "nine",
        "name": "The Culinary Table",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 822,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "7.5",
        "offers": 4,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "fourth",
        "name": "Sizzle & Spice",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 719,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "1.2",
        "offers": 7,
        "alcohol": true,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "First",
        "name": "Taste Haven",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 942,
        "location": "India Gate",
        "distance_from_Customer_house": "1.8",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 13,
        "restaurant_close_time": 1
    },
    {
        "image": "nine",
        "name": "Bistro Bliss",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 2399,
        "location": "Khan Market",
        "distance_from_Customer_house": "5.4",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "second",
        "name": "Wholesome Cravings",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 2442,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "2.7",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Fusion Feast",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 2442,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "6.9",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "third",
        "name": "Zesty Bites",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": 288,
        "location": "Lodi Gardens",
        "distance_from_Customer_house": "1.0",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "tenth",
        "name": "The Rustic Spoon",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 2041,
        "location": "Red Fort",
        "distance_from_Customer_house": "3.6",
        "offers": 29,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "sixth",
        "name": "Bistro Bliss",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 1720,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "9.3",
        "offers": 16,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "sixth",
        "name": "The Hungry Fork",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 734,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "7.9",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "First",
        "name": "Taste Haven",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1901,
        "location": "National Museum",
        "distance_from_Customer_house": "7.4",
        "offers": 22,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fourth",
        "name": "Savory Spot",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 1988,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "1.5",
        "offers": 11,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "second",
        "name": "The Hungry Fork",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1711,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "1.5",
        "offers": 30,
        "alcohol": true,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "fourth",
        "name": "Spice Symphony",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 641,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "2.5",
        "offers": 8,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "seventh",
        "name": "Fusion Feast",
        "rating": 5,
        "food_type": "Mexican",
        "price_for_two": 2248,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "8.8",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "First",
        "name": "Urban Eatery",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 1557,
        "location": "National Museum",
        "distance_from_Customer_house": "8.6",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "third",
        "name": "Savory Spot",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 1039,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "4.2",
        "offers": 16,
        "alcohol": true,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "third",
        "name": "The Hungry Fork",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1773,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "7.2",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "First",
        "name": "Flavor Junction",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 1513,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "1.8",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "seventh",
        "name": "Savory Spot",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 1327,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "5.1",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "tenth",
        "name": "The Dining Den",
        "rating": 2,
        "food_type": "Thai",
        "price_for_two": 872,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.5",
        "offers": 10,
        "alcohol": false,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "fifth",
        "name": "Bistro Bliss",
        "rating": 5,
        "food_type": "Indian",
        "price_for_two": 1617,
        "location": "India Gate",
        "distance_from_Customer_house": "2.9",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "First",
        "name": "Bistro Bliss",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 203,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "2.8",
        "offers": 10,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "sixth",
        "name": "Sizzle & Spice",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 1434,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "8.9",
        "offers": 19,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "nine",
        "name": "Sizzle & Spice",
        "rating": 2,
        "food_type": "Thai",
        "price_for_two": 1065,
        "location": "Red Fort",
        "distance_from_Customer_house": "0.6",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    }
]

function getrestaurant(restaurants){

    const root = document.getElementById('root');

    restaurants.forEach(restaurant => {

        //Create a card:
        // 1.Image
        // 2.Card_content
        //       i: Card_header (Name and rating)
        //       ii: Card_footer (Food_type and price)
        //       iii: Card_location(Restaurant location)


        // Create a Card:
        const card = document.createElement('div');
        card.classList.add('card');

        //Create a Images:
        const image =  document.createElement("img");
        image.src = `Images/${restaurant.image}.jpeg`;

        //Create Card Content:
        const Card_content = document.createElement('div');
        Card_content.classList.add('card-content');

        // Card Header:
        const Card_header = document.createElement('div');
        Card_header.classList.add('card-header');

        const h3 = document.createElement('h3');
        h3.textContent = restaurant.name;

        const rate = document.createElement('span');
        rate.textContent = "Rating: "+restaurant.rating;
        rate.classList.add('rating');


        Card_header.appendChild(h3);
        Card_header.appendChild(rate);


        // Card Footer:
        const Card_footer = document.createElement('div');
        Card_footer.classList.add('card-footer');

        const food = document.createElement('span');
        food.textContent = restaurant.food_type;

        const price = document.createElement('span');
        price.textContent ="₹"+restaurant.price_for_two;

        Card_footer.appendChild(food);
        Card_footer.appendChild(price);


        // Card location:
        const card_location = document.createElement('div');
        card_location.classList.add('card-location');

        const location = document.createElement('span');
        location.textContent = restaurant.location;

        const distance = document.createElement('span');
        distance.textContent = restaurant.distance_from_Customer_house+"km";

        card_location.appendChild(location);
        card_location.appendChild(distance);



        Card_content.appendChild(Card_header);
        Card_content.appendChild(Card_footer);
        Card_content.appendChild(card_location);


        card.appendChild(image);
        card.appendChild(Card_content);

        root.appendChild(card);

    });
}

getrestaurant(restaurants);

document.getElementById("Alcohol").addEventListener('click',()=>{
    const result = restaurants.filter((obj)=>obj.alcohol);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
})


document.getElementById("Rating").addEventListener('click',()=>{
    const result = restaurants.filter((obj)=>obj.rating>4.5);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
})

document.getElementById("Filters").addEventListener('click',()=>{

    document.getElementById('filterPopup').classList.remove("hidden");
    })

    document.getElementById('applyFilter').addEventListener('click',()=>{
        const element = document.querySelector('input[name="filterOption"]:checked');
        const answer = element.value;

        if(answer==="rating"){
            restaurants.sort((a,b)=>b.rating-a.rating);
        }

        else if(answer==="highLow"){
            restaurants.sort((a,b)=>b.price_for_two-a.price_for_two);
        }

        else if(answer==="costLowHigh"){
            restaurants.sort((a,b)=>a.price_for_two-b.price_for_two);
        }

        else if(answer==="distance"){
            restaurants.sort((a,b)=>a.distance_from_Customer_house-b.distance_from_Customer_house);
        }
        document.getElementById('root').replaceChildren();
        document.getElementById('filterPopup').classList.add("hidden");
        getrestaurant(restaurants);
})

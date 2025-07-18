require('dotenv').config();
const mongoose = require('mongoose');
const Trainee = require('./models/Trainee');

const trainees = [
    {
        "name": "Abhishek Kumar",
        "mobile": "9631111444"
    },
    {
        "name": "SAURABH KUMAR",
        "mobile": "9155607525"
    },
    {
        "name": "Neha Verma ",
        "mobile": "8210456498"
    },
    {
        "name": "Nivedita sharma",
        "mobile": "7677250028"
    },
    {
        "name": "ABHINAW MONU",
        "mobile": "9122922957"
    },
    {
        "name": "Md Shahid Raza",
        "mobile": "7542023939"
    },
    {
        "name": "LALIT KUMAT TIWARI",
        "mobile": "9123275044"
    },
    {
        "name": "Deepak kumar mandal",
        "mobile": "7542023811"
    },
    {
        "name": "Shilpa Ranjan ",
        "mobile": "8434053584"
    },
    {
        "name": "Rakesh Kumar ",
        "mobile": "8102920080"
    },
    {
        "name": "Mantu Kumar Singh ",
        "mobile": "9801782185"
    },
    {
        "name": "Sanjiv Kumar ",
        "mobile": "9931059003"
    },
    {
        "name": "Raman kumar ",
        "mobile": "9798504843"
    },
    {
        "name": "Kumar Praveen",
        "mobile": "8434047135"
    },
    {
        "name": "Dharambir Kumar ",
        "mobile": "7782033290"
    },
    {
        "name": "Amresh kumar jha",
        "mobile": "9006099930"
    },
    {
        "name": "Soni kumari",
        "mobile": "8102922168"
    },
    {
        "name": "Shashi Kumar ",
        "mobile": "9113109159"
    },
    {
        "name": "Pradip Kumar Sharma ",
        "mobile": "8409803458"
    },
    {
        "name": "Kumar Manish",
        "mobile": "9153987692"
    },
    {
        "name": "Sushma kumari",
        "mobile": "9341515016"
    },
    {
        "name": "AJEET KUMAR SHARMA",
        "mobile": "9955460739"
    },
    {
        "name": "Ravi Ranjan Kumar ",
        "mobile": "9006362413"
    },
    {
        "name": "Santosh Kumar Ram ",
        "mobile": "9661406845"
    },
    {
        "name": "Rakesh Paswan ",
        "mobile": "9631619425"
    },
    {
        "name": "Bhardwaz Gagan",
        "mobile": "0947062272"
    },
    {
        "name": "KISHORE CHANDRA",
        "mobile": "9939464641"
    },
    {
        "name": "Sanjit Kumar",
        "mobile": "7050858083"
    },
    {
        "name": "Vivek Kumar",
        "mobile": "7549385601"
    },
    {
        "name": "Deepak Kumar ",
        "mobile": "7870295569"
    },
    {
        "name": "Harigovind Sahani ",
        "mobile": "9835092143"
    },
    {
        "name": "Sunil Kumar",
        "mobile": "8521252176"
    },
    {
        "name": "Ashutosh Kumar Mishra ",
        "mobile": "9534380281"
    },
    {
        "name": "Raj",
        "mobile": "8102864869"
    },
    {
        "name": "MD ABUBAKAR",
        "mobile": "7870316786"
    },
    {
        "name": "SUMAN KUMAR",
        "mobile": "7369005765"
    },
    {
        "name": "MANISH KUMAR",
        "mobile": "7004486346"
    },
    {
        "name": "Amit Kumar Pandey ",
        "mobile": "9470014156"
    },
    {
        "name": "Brejendra Kumar ",
        "mobile": "9795038757"
    },
    {
        "name": "RITURAJ VERMA",
        "mobile": "8709851046"
    },
    {
        "name": "Anand Kumar Milan",
        "mobile": "7631643600"
    },
    {
        "name": "SATYENDRA KUMAR",
        "mobile": "7484895787"
    },
    {
        "name": "Nitish Kumar ",
        "mobile": "9097534215"
    },
    {
        "name": "Niranjan  Kumar ",
        "mobile": "0797906526"
    },
    {
        "name": "Manoj kumar yuvraj",
        "mobile": "7367883770"
    },
    {
        "name": "Santosh Kumar Singh ",
        "mobile": "7004573131"
    },
    {
        "name": "Ashutosh Anand ",
        "mobile": "9939070619"
    },
    {
        "name": "Chandan Kumar Singh ",
        "mobile": "9304445389"
    },
    {
        "name": "Neetu Kumari",
        "mobile": "7667679137"
    },
    {
        "name": "Training programme for office assistant of jeevika ",
        "mobile": "8210483896"
    },
    {
        "name": "Santosh Kumar Roy ",
        "mobile": "8825135748"
    },
    {
        "name": "NAWNEET KUMAR",
        "mobile": "9334913471"
    },
    {
        "name": "Om Prakash Tiwari ",
        "mobile": "7488285721"
    },
    {
        "name": "SANJEEV KUMAR ",
        "mobile": "7488433285"
    },
    {
        "name": "Rohit Kumar ",
        "mobile": "9304629027"
    },
    {
        "name": "Vikash Kumar",
        "mobile": "9709461986"
    },
    {
        "name": "Anand kumar Anand ",
        "mobile": "7549381538"
    },
    {
        "name": "Ravi Kumar",
        "mobile": "9507162514"
    },
    {
        "name": "Upendra Kumar Das",
        "mobile": "9576182920"
    },
    {
        "name": "MANIK CHANDRA",
        "mobile": "9708059134"
    },
    {
        "name": "Kuldeep Kumar",
        "mobile": "9304650151"
    },
    {
        "name": "VIBHUTI KUMAR BHUSHAN",
        "mobile": "9534313516"
    },
    {
        "name": "Alok kumar singh ",
        "mobile": "9031033292"
    },
    {
        "name": "Anish Kumar Thakur ",
        "mobile": "6202142256"
    },
    {
        "name": "ALOK KUMAR",
        "mobile": "9709530698"
    },
    {
        "name": "PUSHKAR KUMAR",
        "mobile": "6200419120"
    },
    {
        "name": "Mahendra Kumar ",
        "mobile": "8083370528"
    },
    {
        "name": "Rahul Kumar ",
        "mobile": "9304289613"
    },
    {
        "name": "Ranjan kumar",
        "mobile": "8102923102"
    },
    {
        "name": "Ghanshyam Singh",
        "mobile": "8102923105"
    },
    {
        "name": "AJAY KUMAR GUPTA",
        "mobile": "7979013399"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected for seeding...');

        await Trainee.deleteMany({}); // Clear existing trainees
        console.log('Old trainees cleared.');

        await Trainee.insertMany(trainees);
        console.log('Trainee data has been seeded!');

    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
        console.log('MongoDB connection closed.');
    }
};

seedDB();
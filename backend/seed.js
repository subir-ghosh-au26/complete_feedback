require('dotenv').config();
const mongoose = require('mongoose');
const Trainee = require('./models/Trainee');

const trainees = [
    {
        "name": "Satish Kumar",
        "mobile": "9199520662"
    },
    {
        "name": "PINTU KUMAR",
        "mobile": "9504543754"
    },
    {
        "name": "Abhilasha kumari",
        "mobile": "7488280375"
    },
    {
        "name": "Dipak chandra prakash ",
        "mobile": "7903901613"
    },
    {
        "name": "Suman Kumari sinha sinha ",
        "mobile": "8709090299"
    },
    {
        "name": "Shisheer kumar verma",
        "mobile": "9097274004"
    },
    {
        "name": "Shalini Kumari ",
        "mobile": "8271425205"
    },
    {
        "name": "Kamlesh Kumar",
        "mobile": "8789991265"
    },
    {
        "name": "RAJEEV KUMAR SUMAN ",
        "mobile": "8873558527"
    },
    {
        "name": "NANCY ",
        "mobile": "8434053828"
    },
    {
        "name": "Noorul Islam Hasan",
        "mobile": "6207862915"
    },
    {
        "name": "Awadhesh Kumar ",
        "mobile": "8448727502"
    },
    {
        "name": "AMIT KUMAR SRIVASTAVA",
        "mobile": "7991153516"
    },
    {
        "name": "SURAJ KUMAR",
        "mobile": "8083262323"
    },
    {
        "name": "Subodh kumar ",
        "mobile": "8271638682"
    },
    {
        "name": "Gourav Kumar Mishra",
        "mobile": "9570364762"
    },
    {
        "name": "Chandan kumar ",
        "mobile": "9123236811"
    },
    {
        "name": "Ranjeet Kumar",
        "mobile": "0957025463"
    },
    {
        "name": "Manoranjan Kumar ",
        "mobile": "9801458528"
    },
    {
        "name": "Abhishek Kumar Paswan",
        "mobile": "7870518624"
    },
    {
        "name": "Gaurav kumar",
        "mobile": "7488461123"
    },
    {
        "name": "Mamta Kumari ",
        "mobile": "7488141380"
    },
    {
        "name": "ANIL KUMAR",
        "mobile": "9771478637"
    },
    {
        "name": "Santosh Kumar Gupta ",
        "mobile": "9852000960"
    },
    {
        "name": "Amit Shandilya ",
        "mobile": "7808921831"
    },
    {
        "name": "Gourav Kumar Saha ",
        "mobile": "9122827407"
    },
    {
        "name": "Nitish kumar ",
        "mobile": "8210314721"
    },
    {
        "name": "Raghabendra Mishra ",
        "mobile": "8709692385"
    },
    {
        "name": "Butan kumar ",
        "mobile": "9546079410"
    },
    {
        "name": "Subhash Kumar",
        "mobile": "9608095988"
    },
    {
        "name": "Vijay Kumar Singh ",
        "mobile": "9263017356"
    },
    {
        "name": "Mohd Ishtiaq ",
        "mobile": "8294871023"
    },
    {
        "name": "Mukesh Kumar Paswan ",
        "mobile": "9931031201"
    },
    {
        "name": "Amardeep Kumar ",
        "mobile": "9990039557"
    },
    {
        "name": "Sandeep Kumar ",
        "mobile": "8102926143"
    },
    {
        "name": "Ashutosh Kumar Verma",
        "mobile": "7544004860"
    },
    {
        "name": "SANTOSH KUMAR THAKUR ",
        "mobile": "8210926630"
    },
    {
        "name": "Shailesh Kumar Singh ",
        "mobile": "9162492880"
    },
    {
        "name": "Amit Gandhi",
        "mobile": "7004514252"
    },
    {
        "name": "Shailendra Mohan Jha ",
        "mobile": "7982529123"
    },
    {
        "name": "Rupa Kumari ",
        "mobile": "6203779560"
    },
    {
        "name": "MANI SHANKAR RAJAK",
        "mobile": "9631953745"
    },
    {
        "name": "Puneet Kumar ",
        "mobile": "8294307346"
    },
    {
        "name": "Shubhankar Kamati ",
        "mobile": "7549213974"
    },
    {
        "name": "Neeraj kumar ",
        "mobile": "7903896015"
    },
    {
        "name": "Md Shakib",
        "mobile": "7544019641"
    },
    {
        "name": "MANOJ KUMAR ",
        "mobile": "9102538221"
    },
    {
        "name": "Sanjay Kumar ",
        "mobile": "9262299270"
    },
    {
        "name": "Sunil Parit",
        "mobile": "7367935371"
    },
    {
        "name": "Krishna Mohan Singh",
        "mobile": "7808921782"
    },
    {
        "name": "Namita kumari ",
        "mobile": "7808922171"
    },
    {
        "name": "Mukul Kumar Singh ",
        "mobile": "7070973557"
    },
    {
        "name": "Sapan kumar ",
        "mobile": "9334129113"
    },
    {
        "name": "Anshuman",
        "mobile": "9471677640"
    },
    {
        "name": "ARUN KUMAR BHARTI",
        "mobile": "7352928284"
    },
    {
        "name": "Pancham Lal sangam",
        "mobile": "9570687545"
    },
    {
        "name": "Mohit Kumar",
        "mobile": "7717797401"
    },
    {
        "name": "Md Kasim",
        "mobile": "7781008467"
    },
    {
        "name": "Amit Kumar ",
        "mobile": "8409029194"
    },
    {
        "name": "Ritesh Kumar",
        "mobile": "8340318804"
    },
    {
        "name": "AMRIT KUMAR",
        "mobile": "7631863079"
    },
    {
        "name": "Bikash Kumar",
        "mobile": "0953434070"
    },
    {
        "name": "Ashutosh Kumar ",
        "mobile": "9931767209"
    },
    {
        "name": "Suman Jha",
        "mobile": "9472811596"
    },
    {
        "name": "Sujeet Kumar Sinha ",
        "mobile": "7004548344"
    },
    {
        "name": "Vijay Jaiswal",
        "mobile": "9572727772"
    },
    {
        "name": "Ashvani Kumar",
        "mobile": "8651828610"
    },
    {
        "name": "Saurabh Kumar ",
        "mobile": "7667800569"
    },
    {
        "name": "Gaurav Kumar",
        "mobile": "9931023869"
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
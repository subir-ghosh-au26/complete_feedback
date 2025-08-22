require('dotenv').config();
const mongoose = require('mongoose');
const Trainee = require('./models/Trainee');

const trainees = [
    {
        "name": "subir",
        "mobile": "7001034964"
    },
    {
        "name": "Prashant Kumar Giri ",
        "mobile": "9716630314"
    },
    {
        "name": "Sheetal kumari ",
        "mobile": "7488201140"
    },
    {
        "name": "Jay Karan Singh",
        "mobile": "9123776942"
    },
    {
        "name": "Prem Kumar ",
        "mobile": "9934979347"
    },
    {
        "name": "Vijay Kumar Gupta",
        "mobile": "6206177942"
    },
    {
        "name": "Arunjay Kumar",
        "mobile": "6203304248"
    },
    {
        "name": "MD Rehanul Haque",
        "mobile": "7541015923"
    },
    {
        "name": "Rupak Kumar ",
        "mobile": "7677365335"
    },
    {
        "name": "Sanjeet Kumar",
        "mobile": "9060007696"
    },
    {
        "name": "Akash Kumar Jaiswal ",
        "mobile": "8090204241"
    },
    {
        "name": "Shiv Shankar kumar",
        "mobile": "9307069039"
    },
    {
        "name": "Vicky kumar vishwakarma",
        "mobile": "8709060939"
    },
    {
        "name": "Ravi Prakash ",
        "mobile": "0865122742"
    },
    {
        "name": "KUNDAN KUMAR ROUSHAN",
        "mobile": "9570891105"
    },
    {
        "name": "NEERAJ KUMAR ",
        "mobile": "7541819473"
    },
    {
        "name": "Krishan mohan",
        "mobile": "9031237489"
    },
    {
        "name": "Manish Kumar ",
        "mobile": "9229207150"
    },
    {
        "name": "Nisha Kumari ",
        "mobile": "7631970526"
    },
    {
        "name": "Ajit kumar ",
        "mobile": "9199550516"
    },
    {
        "name": "Anand Raman ",
        "mobile": "9661206603"
    },
    {
        "name": "Devashish Thakur ",
        "mobile": "9122826725"
    },
    {
        "name": "Vinay Kumar ",
        "mobile": "9905444140"
    },
    {
        "name": "ANAND GANDHI",
        "mobile": "7903258349"
    },
    {
        "name": "Surendra mohan mishra ",
        "mobile": "9771065167"
    },
    {
        "name": "Sanjeev Kumar Paswan ",
        "mobile": "7488412452"
    },
    {
        "name": "AJIT KUMAR RAY",
        "mobile": "9576197763"
    },
    {
        "name": "Khushboo kumari",
        "mobile": "8709055703"
    },
    {
        "name": "ROHIT KUMAR JHA",
        "mobile": "9852993905"
    },
    {
        "name": "Vinay Kumar ",
        "mobile": "9113380409"
    },
    {
        "name": "Rabindra Kumar ",
        "mobile": "9386553027"
    },
    {
        "name": "Abadh Kishor",
        "mobile": "9546068308"
    },
    {
        "name": "Krishna Prasad",
        "mobile": "8507415193"
    },
    {
        "name": "Sanjeev Kumar ",
        "mobile": "9835407045"
    },
    {
        "name": "Manish Kumar ",
        "mobile": "9973663474"
    },
    {
        "name": "Roshni Kumari",
        "mobile": "9798480795"
    },
    {
        "name": "Uday Shankar ",
        "mobile": "9097283185"
    },
    {
        "name": "Anand Kumar ",
        "mobile": "8102920213"
    },
    {
        "name": "Rakesh Ranjan",
        "mobile": "9798954214"
    },
    {
        "name": "Manindra kimar",
        "mobile": "8210624619"
    },
    {
        "name": "Avinash Kumar ",
        "mobile": "7903438892"
    },
    {
        "name": "Kavita",
        "mobile": "9818875833"
    },
    {
        "name": "Satyam nath arya ",
        "mobile": "6020181912"
    },
    {
        "name": "Manish kumar",
        "mobile": "8757434748"
    },
    {
        "name": "NITISH KUMAR",
        "mobile": "0893608411"
    },
    {
        "name": "Padmawati Kumari",
        "mobile": "0912269879"
    },
    {
        "name": "Bhupendra kumar",
        "mobile": "8083083005"
    },
    {
        "name": "Rajni Kumari ",
        "mobile": "6203329280"
    },
    {
        "name": "Ravi Kant Kumar",
        "mobile": "8709137795"
    },
    {
        "name": "Kushagra Dubey",
        "mobile": "9153967689"
    },
    {
        "name": "Subodh Kumar",
        "mobile": "6204140163"
    },
    {
        "name": "KHUSHBOO KUMARI",
        "mobile": "9507970370"
    },
    {
        "name": "Puja Sharma",
        "mobile": "6299314689"
    },
    {
        "name": "Rajnish Kumar",
        "mobile": "7808123123"
    },
    {
        "name": "KANHAIYA CHOUDHARY ",
        "mobile": "9534337950"
    },
    {
        "name": "Pradeep Kumar Dutta",
        "mobile": "8210059834"
    },
    {
        "name": "VIKAS KUMAR SEN",
        "mobile": "7564005659"
    },
    {
        "name": "Nishidh Kunal",
        "mobile": "9955631032"
    },
    {
        "name": "Anoj kumar ",
        "mobile": "9263011861"
    },
    {
        "name": "RAVISH KUMAR NIGAM ",
        "mobile": "8409338930"
    },
    {
        "name": "Dinesh Kumar ",
        "mobile": "7992421257"
    },
    {
        "name": "Raj kumar",
        "mobile": "7488712866"
    },
    {
        "name": "MD DILSHAD ",
        "mobile": "7903038705"
    },
    {
        "name": "Sanjay Kumar",
        "mobile": "9934282654"
    },
    {
        "name": "Durgesh Kumar Roy",
        "mobile": "9934777384"
    },
    {
        "name": "Nishi Kant Singh",
        "mobile": "7542023921"
    },
    {
        "name": "Umesh Kumar ",
        "mobile": "9153998742"
    },
    {
        "name": "Hira Kumar ",
        "mobile": "8809495862"
    },
    {
        "name": "Vishu Kumar Paswan ",
        "mobile": "9905953315"
    },
    {
        "name": "Sunil Kumar",
        "mobile": "7808920435"
    },
    {
        "name": "MD Nadeem ",
        "mobile": "7065435094"
    },
    {
        "name": "JYOTI PRAKASH",
        "mobile": "6201229526"
    },
    {
        "name": "Pratibha Kumari ",
        "mobile": "9162855328"
    },
    {
        "name": "Shashi Ranjan ",
        "mobile": "8969928393"
    },
    {
        "name": "Aditya Prakash ",
        "mobile": "9570276796"
    },
    {
        "name": "Sudhir Kumar",
        "mobile": "0970834108"
    },
    {
        "name": "Saurabh Kumar ",
        "mobile": "7488189002"
    },
    {
        "name": "Manjeet Kumar ",
        "mobile": "9504255384"
    },
    {
        "name": "Mukesh Kumar",
        "mobile": "7061702689"
    },
    {
        "name": "Ruby kumari ",
        "mobile": "9709794552"
    },
    {
        "name": "Nitish Priy",
        "mobile": "7870933031"
    },
    {
        "name": "Gan Venkat Raghwan",
        "mobile": "9709917340"
    },
    {
        "name": "Suman ranjan Verma",
        "mobile": "9708792917"
    }
]

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
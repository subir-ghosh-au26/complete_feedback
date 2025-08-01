require('dotenv').config();
const mongoose = require('mongoose');
const Trainee = require('./models/Trainee');

const trainees = [
    {
        "name": "Subir",
        "mobile": "1234567890"
    },
    {
        "name": "Priyanka Bharti",
        "mobile": "8084337582"
    },
    {
        "name": "Rakesh kumar singh",
        "mobile": "8936003141"
    },
    {
        "name": "RAHUL KUMAR RAY",
        "mobile": "9155302745"
    },
    {
        "name": "Raj Kumar ",
        "mobile": "7488832804"
    },
    {
        "name": "Manish Kumar ",
        "mobile": "7260832902"
    },
    {
        "name": "Dhrishtduman prasad",
        "mobile": "8789611713"
    },
    {
        "name": "Santosh Kumar ",
        "mobile": "6204130977"
    },
    {
        "name": "HIMANSHU KUMAR",
        "mobile": "8051954383"
    },
    {
        "name": "Rupesh Ranjan ",
        "mobile": "8757576938"
    },
    {
        "name": "Pawan Kumar ",
        "mobile": "9771045287"
    },
    {
        "name": "Ashish kumar ",
        "mobile": "9801666167"
    },
    {
        "name": "ARUN KUMAR",
        "mobile": "7488615987"
    },
    {
        "name": "Rakesh Roushan ",
        "mobile": "8540940068"
    },
    {
        "name": "SUJEET KUMAR ",
        "mobile": "8540023534"
    },
    {
        "name": "Nitish Kumar ",
        "mobile": "6200835510"
    },
    {
        "name": "Suraj kumar",
        "mobile": "7992245192"
    },
    {
        "name": "Raviranjan kumar",
        "mobile": "9608469192"
    },
    {
        "name": "Aaditya Kumar ",
        "mobile": "9473066588"
    },
    {
        "name": "Shilpa kumari ",
        "mobile": "9973910212"
    },
    {
        "name": "Anisha kumari",
        "mobile": "8252386793"
    },
    {
        "name": "Sandeep kumar ",
        "mobile": "8789728300"
    },
    {
        "name": "Vipeen kumar ",
        "mobile": "7319893542"
    },
    {
        "name": "Chandan Kumar",
        "mobile": "7002667586"
    },
    {
        "name": "Raushan kumar",
        "mobile": "8579912046"
    },
    {
        "name": "Mantu Choudhary ",
        "mobile": "8709139797"
    },
    {
        "name": "Himanshu kumar ",
        "mobile": "8405851104"
    },
    {
        "name": "Prakash Kumar",
        "mobile": "9934990709"
    },
    {
        "name": "Rajnandani ",
        "mobile": "7903982359"
    },
    {
        "name": "Vikas kumar das",
        "mobile": "7319757102"
    },
    {
        "name": "Gautam Kumar ",
        "mobile": "9525822502"
    },
    {
        "name": "Omprakash chaurasiya",
        "mobile": "9504955368"
    },
    {
        "name": "Birabhimannu kumar ",
        "mobile": "9431289089"
    },
    {
        "name": "VIJAY KUMAR",
        "mobile": "7352621379"
    },
    {
        "name": "Chanchal Kumar",
        "mobile": "8789189409"
    },
    {
        "name": "RAM MANOHAR KUMAR ",
        "mobile": "7091369944"
    },
    {
        "name": "HIMANSHU SHUBHAM",
        "mobile": "8709721397"
    },
    {
        "name": "MUKESH KUMAR",
        "mobile": "7631285632"
    },
    {
        "name": "Krishan kumar",
        "mobile": "9570849018"
    },
    {
        "name": "Jyoti Kumari",
        "mobile": "9162580971"
    },
    {
        "name": "MD SINDBAZ ALAM",
        "mobile": "9523656914"
    },
    {
        "name": "Bhanu Raman",
        "mobile": "6202176166"
    },
    {
        "name": "ROHIT KUMAR ",
        "mobile": "8677938306"
    },
    {
        "name": "Suraj kumar ",
        "mobile": "7368069668"
    },
    {
        "name": "Chitranjan Singh ",
        "mobile": "9304369462"
    },
    {
        "name": "Ravindra Kumar",
        "mobile": "9709706042"
    },
    {
        "name": "Ravindra kumar bhandari",
        "mobile": "6203550627"
    },
    {
        "name": "Rahul kumar ",
        "mobile": "6299070539"
    },
    {
        "name": "Rajesh Kumar ",
        "mobile": "9065485340"
    },
    {
        "name": "Rakesh kumar rajak ",
        "mobile": "9852192568"
    },
    {
        "name": "Salona prakash",
        "mobile": "9229104905"
    },
    {
        "name": "Aradhana kumari",
        "mobile": "8521265142"
    },
    {
        "name": "jitendra kumar",
        "mobile": "8581982654"
    },
    {
        "name": "Santu Kumar",
        "mobile": "7484802761"
    },
    {
        "name": "SANDEEP KUMAR RAM",
        "mobile": "6205221547"
    },
    {
        "name": "Pankaj kumar ",
        "mobile": "8294370648"
    },
    {
        "name": "Sudhir kumar mahto",
        "mobile": "9608486432"
    },
    {
        "name": "Munna pal ",
        "mobile": "8349975735"
    },
    {
        "name": "Uday Kumar ",
        "mobile": "6200569831"
    },
    {
        "name": "Soni Kumari",
        "mobile": "7488086328"
    },
    {
        "name": "Dheeraj Kumar ",
        "mobile": "8873992997"
    },
    {
        "name": "Md Aslam",
        "mobile": "8271975582"
    },
    {
        "name": "MD TAUSHIF ",
        "mobile": "8298228667"
    },
    {
        "name": "TANVEER HASAN",
        "mobile": "7254039369"
    },
    {
        "name": "RAVI KANT RAM",
        "mobile": "6203065479"
    },
    {
        "name": "PREM PRAKASH RAM ",
        "mobile": "6207906535"
    },
    {
        "name": "MD RIYAJUDDIN ",
        "mobile": "7808567371"
    },
    {
        "name": "BAMBAM KUMAR ",
        "mobile": "9631731900"
    },
    {
        "name": "MANISH KUMAR",
        "mobile": "8936047165"
    },
    {
        "name": "Pooja Kumari ",
        "mobile": "9229439346"
    },
    {
        "name": "Chandan kumari ",
        "mobile": "7763859426"
    },
    {
        "name": "Anu kumari ",
        "mobile": "8084362080"
    },
    {
        "name": "Raju kumar",
        "mobile": "9304053624"
    },
    {
        "name": "Anshu Kumari ",
        "mobile": "8207723168"
    },
    {
        "name": "Md Kalimullah",
        "mobile": "9708793653"
    },
    {
        "name": "Nandani Kumari ",
        "mobile": "7870496437"
    },
    {
        "name": "Suman kumar ",
        "mobile": "7903978375"
    },
    {
        "name": "Saurav kumar ",
        "mobile": "7634089265"
    },
    {
        "name": "Anuradha Kumari ",
        "mobile": "7260988953"
    },
    {
        "name": "DEEPAK KUMAR CHAUDHARY ",
        "mobile": "9973024910"
    },
    {
        "name": "Amarjeet Kumar ",
        "mobile": "8434041852"
    },
    {
        "name": "Anshu priya ",
        "mobile": "9708252577"
    },
    {
        "name": "Achint Kumar ",
        "mobile": "9304452568"
    },
    {
        "name": "Arti kumari ",
        "mobile": "8603633796"
    },
    {
        "name": "MANNU KUMAR",
        "mobile": "6299671421"
    },
    {
        "name": "VIKASH KUMAR BHARTI ",
        "mobile": "8298959707"
    },
    {
        "name": "Shashi Bhushan Kumar ",
        "mobile": "7352494770"
    },
    {
        "name": "PRAVEEN KUMAR ",
        "mobile": "9934460501"
    },
    {
        "name": "RAUSHAN KUMAR ",
        "mobile": "8210688922"
    },
    {
        "name": "Subhash kumar ",
        "mobile": "6201499848"
    },
    {
        "name": "Arvind kumar ",
        "mobile": "9525327070"
    },
    {
        "name": "Krishna Kumar paswan ",
        "mobile": "7257930256"
    },
    {
        "name": "Mithlesh Kumar ",
        "mobile": "6205316531"
    },
    {
        "name": "Neha singh",
        "mobile": "9142796315"
    },
    {
        "name": "Sushma Bharti ",
        "mobile": "9304003551"
    },
    {
        "name": "Devendra Kumar das ",
        "mobile": "7033926206"
    },
    {
        "name": "Rajan Kumar ",
        "mobile": "8809477312"
    },
    {
        "name": "Sujata Kumari ",
        "mobile": "9354391990"
    },
    {
        "name": "Sita kumari",
        "mobile": "6203719982"
    },
    {
        "name": "Tanya raj ",
        "mobile": "7352019746"
    },
    {
        "name": "Pallavi Priya",
        "mobile": "8340712982"
    },
    {
        "name": "Puran Kumar sah ",
        "mobile": "8229833245"
    },
    {
        "name": "CHANDAN RAJAK",
        "mobile": "9507738238"
    },
    {
        "name": "Divya Kumari",
        "mobile": "7631654184"
    },
    {
        "name": "DEEPAK KUMAR ",
        "mobile": "8969193704"
    },
    {
        "name": "NISHA KUMARI ",
        "mobile": "6201240138"
    },
    {
        "name": "Amod Kumar ",
        "mobile": "7654244582"
    },
    {
        "name": "SHASHIKANT KUMAR",
        "mobile": "9576406060"
    },
    {
        "name": "MANISH KUMAR ",
        "mobile": "8851485258"
    },
    {
        "name": "NISHU KUMARI ",
        "mobile": "7632972752"
    },
    {
        "name": "Sonali priya",
        "mobile": "7488707828"
    },
    {
        "name": "Sonam Priyadarshni ",
        "mobile": "7667848565"
    },
    {
        "name": "Satyapal",
        "mobile": "8434477788"
    },
    {
        "name": "SATISH KUMAR RAJAK ",
        "mobile": "8102830988"
    },
    {
        "name": "YASVANT KUMAR",
        "mobile": "9709834759"
    },
    {
        "name": "TANBIR ALAM ",
        "mobile": "9113440267"
    },
    {
        "name": "Raj kumar ",
        "mobile": "8825229232"
    },
    {
        "name": "Pawan Kumar",
        "mobile": "9608696241"
    },
    {
        "name": "Kanchan kumari",
        "mobile": "7667468087"
    },
    {
        "name": "Kumari Rimjhim Rani ",
        "mobile": "9304556454"
    },
    {
        "name": "Rashmi Kumari ",
        "mobile": "7634903222"
    },
    {
        "name": "CHANDAN KUMAR ",
        "mobile": "7257091656"
    },
    {
        "name": "Manjesh kumar ",
        "mobile": "8340763797"
    },
    {
        "name": "Surendra Kumar ",
        "mobile": "8340350385"
    },
    {
        "name": "Balbir Choudhary",
        "mobile": "7870750179"
    },
    {
        "name": "Suraj kumar",
        "mobile": "7764048050"
    },
    {
        "name": "Sudheer Kumar ",
        "mobile": "9110935564"
    },
    {
        "name": "POOJA KUMARI",
        "mobile": "7903598613"
    },
    {
        "name": "Moni kumari",
        "mobile": "9525545997"
    },
    {
        "name": "Deepa Kumari ",
        "mobile": "7004823860"
    },
    {
        "name": "Aman Chaudhary ",
        "mobile": "8210099738"
    },
    {
        "name": "Raj Kumar Gupta ",
        "mobile": "9162589045"
    },
    {
        "name": "Manichandmehta ",
        "mobile": "7282037819"
    },
    {
        "name": "Raja kumar",
        "mobile": "8210345086"
    },
    {
        "name": "NISHANT KUMAR",
        "mobile": "6202634854"
    },
    {
        "name": "Raju Kumar Gupta ",
        "mobile": "8210527179"
    },
    {
        "name": "Raushan kumar",
        "mobile": "8809347964"
    },
    {
        "name": "Ajit kumar",
        "mobile": "8539828227"
    },
    {
        "name": "Imran ali",
        "mobile": "7667133309"
    },
    {
        "name": "Raushan Kumar",
        "mobile": "6207223784"
    },
    {
        "name": "Sujeet kumar",
        "mobile": "7870090136"
    },
    {
        "name": "MANTOSH KUMAR SAHNI ",
        "mobile": "9708363669"
    },
    {
        "name": "PANCHAM KUMAR",
        "mobile": "8340796269"
    },
    {
        "name": "mamta kumari",
        "mobile": "7544862305"
    },
    {
        "name": "Vikas kumar",
        "mobile": "7667815707"
    },
    {
        "name": "Sudhir kumar ",
        "mobile": "9798101008"
    },
    {
        "name": "Ranjan parsad",
        "mobile": "8651771663"
    },
    {
        "name": "CHANDRASHEKHAR KUMAR ",
        "mobile": "6204877147"
    },
    {
        "name": "Amod kumar",
        "mobile": "7004545338"
    },
    {
        "name": "MANTU RAVIDAS ",
        "mobile": "8873980873"
    },
    {
        "name": "Kuldip Kumar",
        "mobile": "8789718245"
    },
    {
        "name": "vinod kumar prasad",
        "mobile": "8340222780"
    },
    {
        "name": "Deepak kumar ",
        "mobile": "7488662836"
    },
    {
        "name": "Raj karan",
        "mobile": "7717789509"
    },
    {
        "name": "Pawan Kumar",
        "mobile": "7484837182"
    },
    {
        "name": "PANCHAM KUMAR ",
        "mobile": "8292669424"
    },
    {
        "name": "Sandeep Kumar",
        "mobile": "8210352410"
    },
    {
        "name": "Vikash kumar",
        "mobile": "6207798188"
    },
    {
        "name": "Govind Kumar pandit ",
        "mobile": "8851089733"
    },
    {
        "name": "NAVIN BHARTI ",
        "mobile": "8210285002"
    },
    {
        "name": "RAVI KUMAR ",
        "mobile": "7250247992"
    },
    {
        "name": "Ravindra Kumar",
        "mobile": "8709790624"
    },
    {
        "name": "Ravi Kumar ",
        "mobile": "9122163999"
    },
    {
        "name": "Manish Kumar ",
        "mobile": "7370088160"
    },
    {
        "name": "Deepesh Ranjan",
        "mobile": "9304288890"
    },
    {
        "name": "Kundan Kumar",
        "mobile": "9973058009"
    },
    {
        "name": "Nidhi kumari",
        "mobile": "9162784249"
    },
    {
        "name": "SHRAVAN KUMAR",
        "mobile": "6204132185"
    },
    {
        "name": "TRIDEV KUMAR",
        "mobile": "9304701918"
    },
    {
        "name": "Anand kumar",
        "mobile": "9470644988"
    },
    {
        "name": "Deepak Kumar ",
        "mobile": "8757504169"
    },
    {
        "name": "Niraj Kumar",
        "mobile": "7563938370"
    },
    {
        "name": "Puja kumari ",
        "mobile": "7762953009"
    },
    {
        "name": "Vivek ranjan yadav ",
        "mobile": "7295096159"
    },
    {
        "name": "Deepak Kumar ",
        "mobile": "7979042318"
    },
    {
        "name": "Amarjeet Kumar ",
        "mobile": "7061325317"
    },
    {
        "name": "Sonu Kumar ",
        "mobile": "7488788056"
    },
    {
        "name": "VIKRAM KUMAR SUDHANSHU",
        "mobile": "7320021900"
    },
    {
        "name": "Smita Kumari ",
        "mobile": "7562016080"
    },
    {
        "name": "Rohit Shankar",
        "mobile": "9128431282"
    },
    {
        "name": "Sumit Kumar Safi ",
        "mobile": "7870777233"
    },
    {
        "name": "Mukesh Kumar",
        "mobile": "8252669684"
    },
    {
        "name": "Aditi Singh ",
        "mobile": "8252291737"
    },
    {
        "name": "Vishal kumar",
        "mobile": "7631758670"
    },
    {
        "name": "Rajan Kumar ",
        "mobile": "8864000441"
    },
    {
        "name": "SHIVAM KUMAR",
        "mobile": "8210085132"
    },
    {
        "name": "MUKESH KUMAR ",
        "mobile": "9576094166"
    },
    {
        "name": "Madhu kumari ",
        "mobile": "9693282351"
    },
    {
        "name": "Deevakar kumar",
        "mobile": "6200067591"
    },
    {
        "name": "SONU KUMAR",
        "mobile": "6204608607"
    },
    {
        "name": "AMARJEET KUMAR",
        "mobile": "8539004422"
    },
    {
        "name": "LAW KUMAR",
        "mobile": "9798639690"
    },
    {
        "name": "Balram kumar Tanti ",
        "mobile": "9504824000"
    },
    {
        "name": "krishna murari prince",
        "mobile": "7549708056"
    },
    {
        "name": "Bablu Kumar singh ",
        "mobile": "7903265004"
    },
    {
        "name": "Kishan Kumar ",
        "mobile": "7654522107"
    },
    {
        "name": "Nitish Kumar ",
        "mobile": "8210231839"
    },
    {
        "name": "Chandrakant kumar ",
        "mobile": "6200325353"
    },
    {
        "name": "Mantu Kumar ",
        "mobile": "9471299176"
    },
    {
        "name": "Ashish raj ",
        "mobile": "9472012453"
    },
    {
        "name": "Ranjeet Ranjan",
        "mobile": "7004521634"
    },
    {
        "name": "PRAKASH KUMAR ",
        "mobile": "8271929230"
    },
    {
        "name": "Mithun kumar",
        "mobile": "7360951703"
    },
    {
        "name": "Suman kumar",
        "mobile": "9852736949"
    },
    {
        "name": "Manishankar kumar ",
        "mobile": "7870490082"
    },
    {
        "name": "Sujeet Kumar",
        "mobile": "9709630315"
    },
    {
        "name": "Shambhu Paswan",
        "mobile": "6204465844"
    },
    {
        "name": "Sudha Kumari",
        "mobile": "9262265693"
    },
    {
        "name": "Hari Shambhu",
        "mobile": "8340368706"
    },
    {
        "name": "Vikas Kumar Singh",
        "mobile": "9798054572"
    },
    {
        "name": "Ranjan Kumar",
        "mobile": "7061090635"
    },
    {
        "name": "Chitranjan Kumar",
        "mobile": "7808927737"
    },
    {
        "name": "Deepak Kumar",
        "mobile": "7903390984"
    },
    {
        "name": "Ankit Kumar Tanti",
        "mobile": "7549606613"
    },
    {
        "name": "Md Shahzad Ansari",
        "mobile": "9304355320"
    },
    {
        "name": "SHAFAHAD ALAM",
        "mobile": "6205534878"
    },
    {
        "name": "Pravajay kumar",
        "mobile": "9263017441"
    },
    {
        "name": "Niraj Kumar",
        "mobile": "6203494458"
    },
    {
        "name": "Mantosh kumar Bhagat",
        "mobile": "7808920924"
    },
    {
        "name": "Vivek kumar singh",
        "mobile": "9113475812"
    },
    {
        "name": "AMIT KUMAR VERMA ",
        "mobile": "8084783939"
    },
    {
        "name": "Amar kumar ",
        "mobile": "9229206429"
    },
    {
        "name": "Pravin Kumar Mishra",
        "mobile": "6202504690"
    },
    {
        "name": "Anand Bharti",
        "mobile": "9334302926"
    },
    {
        "name": "Himanshu Kumar Sinha",
        "mobile": "9155348097"
    },
    {
        "name": "RAM SUSHIL PASWAN",
        "mobile": "9051950587"
    },
    {
        "name": "Krishna Kumar ",
        "mobile": "9341504700"
    },
    {
        "name": "Shankar Baitha ",
        "mobile": "9771199014"
    },
    {
        "name": "Dinesh Kumar Singh ",
        "mobile": "8271023704"
    },
    {
        "name": "JITENDRA KUMAR",
        "mobile": "7277360964"
    },
    {
        "name": "Rambinay Kumar",
        "mobile": "7079090999"
    },
    {
        "name": "NASIRUDDIN ANSARI",
        "mobile": "9973615185"
    },
    {
        "name": "Sharmanand prasad",
        "mobile": "9279025417"
    },
    {
        "name": "UDAY KUMAR",
        "mobile": "0985232866"
    },
    {
        "name": "Pravin Kumar ",
        "mobile": "9973241433"
    },
    {
        "name": "Bharat Kumar",
        "mobile": "8709137893"
    },
    {
        "name": "Rahul Kumar ",
        "mobile": "9905921174"
    },
    {
        "name": "SHIV KUMAR SAH",
        "mobile": "9939038533"
    },
    {
        "name": "Mohan Safi ",
        "mobile": "9304841881"
    },
    {
        "name": "Bibhash Kapri",
        "mobile": "8102920164"
    },
    {
        "name": "Sunny kumar",
        "mobile": "9031461041"
    },
    {
        "name": "Manish kumar ",
        "mobile": "9508863928"
    },
    {
        "name": "Ranjan Kumar Singh ",
        "mobile": "8538945228"
    },
    {
        "name": "Abhishek",
        "mobile": "9534917223"
    },
    {
        "name": "Anamika ",
        "mobile": "6299973699"
    },
    {
        "name": "Naveen Kumar Yadav",
        "mobile": "9572395007"
    },
    {
        "name": "Nitesh Kumar",
        "mobile": "7870744834"
    },
    {
        "name": "Purnima ",
        "mobile": "9153988981"
    },
    {
        "name": "Dharmendra Kumarr ",
        "mobile": "8910826171"
    },
    {
        "name": "VIKASH kumar",
        "mobile": "0878995235"
    },
    {
        "name": "Pankaj Kumar sharma",
        "mobile": "8877551292"
    },
    {
        "name": "Tazeen Perveen",
        "mobile": "9153989610"
    },
    {
        "name": "Chhotelal kumar",
        "mobile": "8789124239"
    },
    {
        "name": "Sujeet Kumar",
        "mobile": "9693917285"
    },
    {
        "name": "SRIRAM KUMAR",
        "mobile": "9523788502"
    },
    {
        "name": "Munna kumar singh",
        "mobile": "9771478831"
    },
    {
        "name": "NIRMAL KUMAR KAPAR",
        "mobile": "8459530195"
    },
    {
        "name": "AMBOD KUMAR YADAV ",
        "mobile": "9801445557"
    },
    {
        "name": "AMARDEEP KUMAR",
        "mobile": "8507475377"
    },
    {
        "name": "ABHISHEK ANAND ",
        "mobile": "7979704593"
    },
    {
        "name": "Sujeet kumar ",
        "mobile": "9263011812"
    },
    {
        "name": "Rabish Kumar Sharma ",
        "mobile": "9162859620"
    },
    {
        "name": "Ankit Pratik ",
        "mobile": "8521137016"
    },
    {
        "name": "Shashi Bhushan ",
        "mobile": "7004661480"
    },
    {
        "name": "Nishi Kant Kumar ",
        "mobile": "9576819975"
    },
    {
        "name": "Avinash Kumar ",
        "mobile": "9525320609"
    },
    {
        "name": "MANAS KUMAR",
        "mobile": "9431668168"
    },
    {
        "name": "Rupesh Kumar ",
        "mobile": "9798752524"
    },
    {
        "name": "Bablu Kumar Vimal",
        "mobile": "9122826757"
    },
    {
        "name": "Shubhankar Kumar Suman",
        "mobile": "8210738010"
    },
    {
        "name": "RAJESH KUMAR RAUT",
        "mobile": "8084332050"
    },
    {
        "name": "Pankaj Kumar ",
        "mobile": "7061510852"
    },
    {
        "name": "Amresh kumar",
        "mobile": "7992364975"
    },
    {
        "name": "Ansuman kumar aman",
        "mobile": "6203324717"
    },
    {
        "name": "MANISH KUMAR AZAD",
        "mobile": "9153992083"
    },
    {
        "name": "Rajiv Kumar Pandey ",
        "mobile": "8789261725"
    },
    {
        "name": "ASHWINI KUMAR",
        "mobile": "8862971488"
    },
    {
        "name": "Roushan kumar",
        "mobile": "8010226316"
    },
    {
        "name": "Dharmendra kumar",
        "mobile": "9835056088"
    },
    {
        "name": "Saket Kumar ",
        "mobile": "0916234803"
    },
    {
        "name": "ABHISHEK ACHARYA",
        "mobile": "9263017380"
    },
    {
        "name": "Vandana kumari",
        "mobile": "8709266252"
    },
    {
        "name": "DEEPAK KUMAR GUPTA",
        "mobile": "9110147929"
    },
    {
        "name": "RAKESH KUMAR",
        "mobile": "9799933942"
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
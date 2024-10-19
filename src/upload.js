// Install axios before running this script by executing: npm install ax
const axios = require('axios');

const Data = [
    {
        "name": "Saurabh Chavan",
        "position": "Finance Head",
        "imageUrl": "/assets/images/members/Heads24/SaurabhChavan.jpg",
        "facebookLink": "https://www.facebook.com/profile.php?id=100087932744081&mibextid=JRoKGi",
        "linkedinLink": "https://www.linkedin.com/in/saurabh-chavan-961819251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "email": "saurabh.chavan@gyws.org"
    },
    {
        "name": "Satvik Jaiswal",
        "position": "Finance Head",
        "imageUrl": "/assets/images/members/Heads24/SatvikJaiswal.jpg",
        "facebookLink": "https://www.facebook.com/profile.php?id=100089660656382&mibextid=rS40aB7S9Ucbxw6v",
        "linkedinLink": "https://www.linkedin.com/in/satvik-j",
        "email": "satvik.jaiswal@gyws.org"
    },
    {
        "name": "Aditya Singh Yadav",
        "position": "Finance Head",
        "imageUrl": "/assets/images/members/Heads24/AdityaYadav.jpg",
        "facebookLink": "https://www.facebook.com/profile.php?id=100087545650107",
        "linkedinLink": "https://www.linkedin.com/in/aditya-yadav-7ab715269/",
        "email": "aditya.yadav@gyws.org"
    }
]


const postData = async (data) => {
    try {
        const requestBody = {
            name: data.name,
            emails: data.email ? [data.email] : [],
            teams: [
                {
                    year: 2024, 
                    teamAndpos: [
                        {
                            team: "finance",
                            pos:'financeH',
                            position: `${data.position}`
                        },
                        
                    ]
                }
            ],
            
            facebookLink: data.facebookLink ,
            linkedinLink: data.linkedinLink,
            imageUrls: data.imageUrl ? [data.imageUrl] : []
        };

        

        const response = await axios.post('http://localhost:8000/admins/addMember', requestBody);
        console.log(`Successfully uploaded data for ${data.name}:`, response.data);
    } catch (error) {
        console.error(`Error uploading data for ${data.name}:`, error.message);
    }
};

// Loop through each member in the Data array and send the POST request
Data.forEach(member => {
    postData(member);
});

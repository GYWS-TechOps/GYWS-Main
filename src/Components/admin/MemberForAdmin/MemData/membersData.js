// import axios from "axios"
export const getMembersData=async ()=>{
    try{
        // const {data}=await axios.get(``);
        let data=[
            {
                srNo: 1,
                name: 'Mrinal Kanti Bhanja',
                position: 'PRESIDENT',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                emails: ["adsfadsfasgasfa@gmail.com","b@gmail.com","c@gmail.com","a@gmail.com","b@gmail.com","c@gmail.com","a@gmail.com","b@gmail.com","c@gmail.com"],
                phnum:[1234567890,1234567890,1324123412, 1238800932,1234567890,1324123412, 1238800932]
            },
            {
                srNo: 2,
                name: 'Mr. Prerit Jain',
                position: 'GENERAL SECRETARY',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",
                phnum:[1234567890,123,1324123412],

            },
            {
                srNo: 4,
                name: 'Mr. Karan Nandankar',
                position: 'ASSISTANT SECRETARY',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 5,
                name: 'Mr. Ankit Raj',
                position: 'TREASURER',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 6,
                name: 'Mr. Ishan',
                position: 'PUBLIC RELATIONS OFFICER',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 7,
                name: 'Mr. Prabhat Ranjan',
                position: 'SCHOOL DEVELOPMENT OFFICER',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 8,
                name: 'Mr. Kumar Aniket',
                position: 'CHIEF FUNDRAISING OFFICER',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 9,
                name: 'Mr. Gursharan Ahir',
                position: 'HUMAN RESOURCE MANAGER',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 10,
                name: 'Mr. Gaurav Singh',
                position: ' EXECUTIVE OFFICER [RS]',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
            {
                srNo: 11,
                name: 'Mr. Manoj Khojaram Maraskolhe',
                position: 'CHIEF EXECUTIVE OFFICER [LiGHT]',
                image: "imgLink",
                linkedIn: "link",
                facebook: "link",
                email: "link",

            },
        ]
        return data;
    }catch(error){
        throw error;
    }
}
import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const BASE_URL =  'https://gyws-backend.onrender.com/admins';

// Function to get a member by ID
async function getMember(memberId) {
  try {
    const response = await axios.get(`${BASE_URL}/member`, {
      params: { _id: memberId },
    });
    console.log('Member:', response.data.member);
    return response.data.member;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Failed to get member:', errorMessage);
    return errorMessage;
  }
}

// Function to get all members
async function getAllMembers() {
  try {
    const response = await axios.get(`${BASE_URL}/members`);
    console.log('All Members:', response.data.members);
    return response.data.members;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Failed to get members:', errorMessage);
    return errorMessage;
  }
}

// Function to get members by position, year, or team
async function getMemberByPosOrYear(options = {}) {
  try {
    const { year, position, team } = options;
    
    let queryParams = [];

    if (year) queryParams.push(`year=${year}`);
    if (position) queryParams.push(`position=${position}`);
    if (team) queryParams.push(`team=${team}`);
 
    const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';
    const response = await axios.get(`${BASE_URL}/memberspy${queryString}`);

    if (response.data.members.length === 0) {
      const noMembersMessage = 'No members found';
      console.log(noMembersMessage);
      return noMembersMessage;
    } else {
      // console.log('Members:', response.data.members);
      return response.data.members;
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Failed to get members:', errorMessage);
    return errorMessage;
  }
}
export {getMemberByPosOrYear, getAllMembers,getMember}
// Usage examples:

// Get a member by ID
// getMember('your-member-id-here').then(data => console.log('Returned:', data));

// // Get all members
// getAllMembers().then(data => console.log('Returned:', data));

// // Get members by position, year, or team
// getMemberByPosOrYear({ year: 2024, position: 'Striker', team: 'Team A' }).then(data => console.log('Returned:', data));

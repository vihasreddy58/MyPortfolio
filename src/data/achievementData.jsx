import mongoImg from '../assets/png/mongo.png';
import rfImg from '../assets/png/rf.png';
import ccImg from '../assets/png/cc.jpeg';
export const achievementData = {
    achievements : [
        {
            id : 1,
            title : 'MongoDB Certified Associate Developer',
            details : 'Validated skills in MongoDB including CRUD operations, aggregation, and schema design.',
            date : '2024',
            field : 'Database & Backend',
            image : mongoImg
        },
        {
            id : 2,
            title : 'Reliance Foundation Undergraduate Scholar 2023',
            details : 'Recognized for academic excellence and innovation potential in Computer Science.',
            date : '2023',
            field : 'Scholarship',
            image : rfImg
        },
        {
            id : 3,
            title : '3-Star Coder on CodeChef',
            details : 'Achieved 3-star rating on CodeChef through consistent problem-solving.',
            date : '2024',
            field : 'Competitive Programming',
            image : ccImg
        }
    ]
}

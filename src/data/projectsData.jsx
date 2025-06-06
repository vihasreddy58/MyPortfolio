import one from '../assets/png/rfid.jpg'
import two from '../assets/png/tt.png'
import three from '../assets/png/rr.png'
import four from '../assets/png/avid_minds.png'
import five from '../assets/png/agri.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Door Locking System using RFID',
        projectDesc: 'A secure door access control system using RFID technology and Arduino. Authenticates entry by verifying RFID tags with stored data.',
        tags: ['Arduino', 'RFID'],
        code: '',
        demo: '',
        image: one
    },
    {
        id: 2,
        projectName: 'TrustTribe – Community Safety Engagement Platform',
        projectDesc: 'A web platform that enables community safety with real-time chat, incident reporting, and event tracking, integrated with law enforcement agencies.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.io'],
        code: 'https://github.com/vihasreddy58/TrustTribe',
        demo: 'https://community-engagement.onrender.com/',
        image: two
    },
    {
        id: 3,
        projectName: 'Lost and Found Application',
        projectDesc: 'A college platform to report, search, and track lost items. Encourages student interaction and improves recovery chances.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
        code: 'https://github.com/vihasreddy58/ReturnRight',
        demo: 'https://returnright-1.onrender.com/',
        image: three
    },
    {
        id: 4,
        projectName: 'AI-Powered Diagnostic and Treatment Support System',
        projectDesc: 'A healthcare platform with an AI chatbot, disease prediction models, video consultations, appointment scheduling, and prescription generation.',
        tags: ['Python', 'HTML', 'CSS', 'Machine Learning', 'AI'],
        code: 'https://github.com/vihasreddy58/AI-Powered-Diagnostic-and-Treatment-Support-System-for-Medical-Professionals-',
        demo: 'https://github.com/vihasreddy58/AI-Powered-Diagnostic-and-Treatment-Support-System-for-Medical-Professionals-',
        image: four
    },
    {
        id: 5,
        projectName: 'Plant Disease Detection and Farming Assistance System',
        projectDesc: 'An intelligent farming system using CNNs for plant disease detection, NLP chatbot for support, pesticide info, expert help, market insights, and weather alerts.',
        tags: ['Python', 'Flask', 'TensorFlow', 'scikit-learn', 'MongoDB', 'React'],
        code: 'https://github.com/vihasreddy58/Plant-Disease-Detection-System-and-Farming-Assistance-System',
        demo: 'https://github.com/vihasreddy58/Plant-Disease-Detection-System-and-Farming-Assistance-System',
        image: five
    }
]

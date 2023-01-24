import img1 from './images/skills/js.webp'
import img2 from './images/skills/ts.webp'
import img3 from './images/skills/java.webp'
import img4 from './images/skills/python.webp'

const programming = [{
        id: 0,
        img: img1,
        level: 'Advanced'
    },
    {
        id: 1,
        img: img2,
        level: 'Intermediate'
    },

    {
        id: 2,
        img: img3,
        level: 'Intermediate'
    },
    {
        id: 3,
        img: img4,
        level: 'Beginner'
    },
]
const frontend = [{
        img: '../images/skills/react.webp',
        level: 'Advanced'
    },
    {
        img: '../images/skills/html.jpg',
        level: 'Advanced'
    },
    {
        img: '../images/skills/css.webp',
        level: 'Advanced'
    },
    {
        img: '../images/skills/angular.webp',
        level: 'Intermediate'
    },
    {
        img: '../images/skills/bs.png',
        level: 'Intermediate'
    },
]

const backend = [{
        img: '../images/skills/mongo.webp',
        level: 'Advanced'
    },
    {
        img: '../images/skills/node.webp',
        level: 'Advanced'
    },
    {
        img: '../images/skills/sql.webp',
        level: 'Intermediate'
    },
]

const skills = [programming, frontend, backend]

export default skills
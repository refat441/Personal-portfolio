import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Refat",
    lastName: "Ahmed",
    initials: "RA", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the BD'
        },
        {
            emoji: "💼",
            text: "Software Developer in Soluty Pvt. Ltd."
        },
        {
            emoji: "📧",
            text: "refatahmed441@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/OSAMA.BIN.REFAT/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/refat_anaf/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/refat441",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/refat-ahmed-2784811b0/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Refat. I'm a Software Engineer for Soluty Pvt. Ltd. I studied Ccomputer Science and Engineering(CSE) at Independent University, Bangladesh (IUB),I'm a MERN stack developer skilled in creating user-friendly web applications using React, Node.js, and Tailwind CSS, with strong knowledge in MySQL and MongoDB. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap','tailwind css', 'html5', 'css3'],
            exposedTo: ['nodejs','express js', 'python','php','java','figma','tinkercad','autodesk fusion 360']
        }
    ,
    hobbies: [
        // {
        //     label: 'traveling ',
        //     emoji: ''
        // },
        {
            label: 'traveling',
            emoji: '🎭'
        },
        {
            label: 'movies & anime',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Inventory Dashboard",
            live: "https://qibla.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/refat441", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Hajj & Umrah Agency",
            live: "https://qibla.netlify.app/",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/refat441",
            image: mock2
        },
        {
            title: "Restaurant Front-End",
            live: "https://refat441.github.io/Indian_Restaurant/",
            source: "https://github.com/refat441",
            image: mock3
        },
        {
            title: "Zan-Web",
            live: "https://refat441.github.io/Zan-Web/",
            source: "https://github.com/refat441",
            image: mock4
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}
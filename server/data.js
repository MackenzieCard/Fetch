const users = [
    {
        id: "1001",
        ownerName: "Maggie",
        dogName: "Bruno", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-MAGGIE.jpg",
        location: "Quebec City",  
        joined:"July 18, 2019", 
        playdates: [{"requested-by":"ahg4@notgamil.com", "status":"pending"}],
        email: "fb2et@notgamil.com",
    }, 
    {
        id: "1002",
        ownerName: "Gina",
        dogName: "Frankie", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-GINA.jpg",
        location: "Laval", 
        joined:"January 21, 2021",
        playdates: [{"requested-by":"fb2et@notgamil.com", "status":"pending"},{"requested-by":"g89@notgamil.com", "status":"pending"}],
        email:"ahg4@notgamil.com",
    }, 
    {
        id: "1003",
        ownerName: "Taylor",
        dogName: "Dixie", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-TAYLOR.jpg",
        location: "Quebec City", 
        joined:"February 26, 2022",
        playdates: [{"requested-by":"m9dh@notgamil.com", "status":"pending"},{"requested-by":"g89@notgamil.com", "status":"pending"}],
        email: "g89@notgamil.com", 
    }, 
    {
        id: "1004",
        ownerName: "Marc",
        dogName: "Oreo", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-MARC.jpg",
        location: "Montréal", 
        joined:"January 20, 2019", 
        playdates: [{"requested-by":"kenziecard@gmail.com", "status":"pending"}],
        email: "mo21@notgamil.com", 
    },
    {
        id: "1005",
        ownerName: "Casey",
        dogName: "Harley", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-CASEY.jpg",
        location: "Dorval", 
        joined:"April 26, 2021",
        playdates: [{"requested-by":"ejue9@notgamil.com", "status":"pending"},{"requested-by":"g89@notgamil.com", "status":"pending"}],
        email: "m9dh@notgamil.com", 
    },
    {
        id: "1006",
        ownerName: "Drew",
        dogName: "Finn", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-DREW.jpg",
        location: "Montréal", 
        joined:"April 26, 2021", 
        playdates: [{"requested-by":"mo21@notgamil.com", "status":"pending"}],
        email: "ejue9@notgamil.com", 
    },
    {
        id: "1007",
        ownerName: "Jason",
        dogName: "Coco", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-JASON.jpg",
        location: "Montréal", 
        joined:"January 27, 2019", 
        playdates: [{"requested-by":"kenziecard@gmail.com", "status":"pending"}, {"requested-by":"57shga@notgamil.com", "status":"pending"}],
        email: "ght89@notgamil.com", 
    },
    {
        id: "1008",
        ownerName: "Derek",
        dogName: "Boston", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-DEREK.jpg",
        location: "Montréal", 
        joined:"July 17, 2021",
        playdates: [{"requested-by":"57shga@notgamil.com", "status":"pending"}], 
        email: "9dhsgf@notgamil.com", 
    },
    {
        id: "1009",
        ownerName: "Nicole",
        dogName: "Zeus", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-NICOLE.jpg",
        location: "Montréal", 
        joined:"October 14, 2018", 
        playdates: [{"requested-by":"kenziecard@gmail.com", "status":"pending"},{"requested-by": "57shga@notgamil.com", "status":"pending"}],
        email: "mab384@notgamil.com", 
    },
    {
        id: "1010",
        ownerName: "Florence",
        dogName: "Minnie", 
        avatarSrc: "/assets/profile-pics/PROJECT-PIC-FLORENCE.jpg",
        location: "Montréal", 
        joined:"January 11, 2022", 
        playdates: [{"requested-by":"kenziecard@gmail.com", "status":"pending"}],
        email: "57shga@notgamil.com", 
    },
]; 

// const statuses = [
//     // Maggie + Bruno 
//     {
//         id: "2001", 
//         authorName: "Maggie", 
//         timestamp: "2020-01-19T09:14:00+00:00", 
//         status: "Too chilly for a play today! Brr!"
//     }, 
//     {
//         id: "2002", 
//         authorName: "Maggie", 
//         timestamp: "2020-01-12T09:14:00+00:00", 
//         status: "Missing our furry friends!"
//     }, 

//     // Gina + Frankie 
//     {
//         id: "2003", 
//         authorName: "Gina", 
//         timestamp: "2021-12-26T14:38:00+00:00",
//         status: "We hope all of our friends had a Merry Christmas yesterday!"
//     }, 

//     // Taylor + Dixie
//     {
//         id: "2004", 
//         authorName: "Taylor", 
//         timestamp: "2022-01-19T09:14:00+00:00", 
//         status: "It's warming up outside! Anyone interested in a play date?"
//     }, 

//     // Marc + Oreo 
//     {
//         id: "2005", 
//         authorName: "Marc", 
//         timestamp: "2020-04-19T09:14:00+00:00",
//         status: "What a beautiful spring day! Anyone want to coordinate a playdate?"
//     }, 
//     {
//         id: "2006", 
//         authorName:"Marc", 
//         timestamp: "2021-05-20T09:16:00+00:00", 
//         status: "It's the perfect day for a play date in the park!"
//     }, 

//     // Casey + Harley 
//     {
//         id: "2007", 
//         authorName: "Casey", 
//         timestamp: "2021-04-26T09:14:00+00:00",
//         status: "This is my first time on Fetch! Can't wait to make some friends!"
//     }, 
    
//     // Drew + Finn 
//     {
//         id: "2008", 
//         authorName: "Drew", 
//         timestamp: "2021-04-27T09:14:00+00:00", 
//         status: "Finn and I are new to the area! Anybody want to be our play date pals?"
//     }, 

//     // Jason + Coco 
//     {
//         id: "2009", 
//         authorName: "Jason", 
//         timestamp: "2020-12-08T09:14:00+00:00", 
//         status: "It's my birthday! So glad I can celebrate it with Coco!"
//     }, 
//     {
//         id: "2010", 
//         authorName: "Jason", 
//         timestamp: "2021-06-10T09:14:00+00:00", 
//         status: "It's a beautiful day to head to the lake!"
//     }, 

//     // Derek + Boston 
//     {
//         id: "2011", 
//         authorName: "Derek", 
//         timestamp: "2021-07-20T09:14:00+00:00", 
//         status: "Loving Fetch so far! What a cool website!"
//     }, 

//     // Nicole + Zeus 
//     {
//         id: "2012", 
//         authorName: "Nicole", 
//         timestamp: "2018-10-31T09:14:00+00:00", 
//         status: "Happy HOWL-o-ween everybody!"
//     }, 

//     // Florence + Minnie
//     {
//         id: "2013", 
//         authorName: "Florence", 
//         timestamp: "2022-01-11T09:14:00+00:00", 
//         status: "Hello Fetch!"
//     }, 
//     {
//         id: "2014", 
//         authorName: "Florence", 
//         timestamp: "2022-02-14T09:14:00+00:00",
//         status: "Happy Valentines Day to every pup out there!"
//     },
// ]; 

module.exports = {users}
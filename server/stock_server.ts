import * as express from 'express';
import * as path from 'path';
import { Server } from 'ws';

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.listen(process.env.PORT || 5000);

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public image: string,
        public categories: Array <string>
    ) {}
}


export class Comment {

    constructor(public id: number,
                public productId: number,
                public timestamp: string,
                public user: string,
                public rating: number,
                public content: string
    ){}
}

const products: Product[] = [
    new Product(1,
        'Tanzania Adventure: Serengeti & Ngorongoro',
        995, 3.5,
        'Goway Travel - Africa. Available Every month.' +
        ' Save your budget per couple on this 7 day Tanzania Safari, including 2 nights in the world renowned Serengeti!' +
        ' Highlights includes Lake Manyara, Ngorongoro Crater, Serengeti National Park.',
        "https://image.ibb.co/buhrBb/1.png",
        ['Adventure']
    ),
    new Product(2,
        'Tokyo & Beyond: Japan 6-night guided tour',
        460, 4.5,
        'The Tour with Charming Travel Destinations visits Osaka, Nara, Kyoto, Magome Juku,' +
        ' Shizuoka, Tokyo. Great Quality Tours and Excellent Service.' +
        ' Japan has diverse four seasons in a beautiful natural environment.' +
        ' Enjoy a Fun in Japan Tour today!',
        "https://image.ibb.co/kFadrb/2.png",
        ['Culture experience']
    ),
    new Product(3,
        'Havana for 4 nights',
        760, 4.0,
        'A city trapped in time, Havana captures the imagination like no other.' +
        ' Faded glamour meets careful colonial-era reconstruction with a backdrop of irresistible color.' +
        ' Walk El Malecón, the walkway bordering the ocean; visit Old Havana and the Catedral de San Cristóbal!' +
        ' Breath the air and experience the unique culture atmosphere in this city.',
        "https://image.ibb.co/hvoWBb/3.png",
        ['Culture experience']
    ),
    new Product(4,
        'Discover India and its marbles',
        260, 4.0,
        'Marble has been one of the most popular choices of material for crafting statues since ancient times.' +
        ' Marble sculptures are sturdy and durable, and sophisticated as well.' +
        ' In India, marble has been quarried in various places.' +
        ' Discover Marble deposits in Rajasthan and Gujarat!',
        "https://image.ibb.co/n0iWBb/4.png",
        ['Culture experience']
    ),

    new Product(5,
        'Riviera Maya 4-star winter getaway',
        440, 3.5,
        'Book an all-inclusive 3-night winter vacation at the beachfront BlueBay Grand Esmeralda resort ' +
        'in Riviera Maya with packages starting at $449 per person, including nonstop flights.',
        "https://image.ibb.co/nhzhHG/5.png",
        ['Relax']
    ),

    new Product(6,
        'Scared Vally, Machu Picchu, Cuzco',
        840, 4.2,
        'Visit Lima for a chance to taste its colonial and cosmopolitan sites and its unique and world renowned peruvian cuisine. '+
        ' Cuzco airport and immediately continue to the Sacred Valley, a magical land where Indian Markets and Incan Constructions mix with Corn Fields...' ,
        "https://image.ibb.co/d6mUxG/6.png",
        ['Culture experience']
    ),


    new Product(7,
        'Journey to the south ',
        195, 3.5,
        'Goway Travel - Africa. Available Every month.' +
        ' Save your budget per couple on this 7 day Tanzania Safari, including 2 nights in the world renowned Serengeti!' +
        ' Highlights includes Lake Manyara, Ngorongoro Crater, Serengeti National Park.',
        "https://image.ibb.co/kt2xjw/7.png",
        ['Adventure']
    ),
    new Product(8,
        'Tokyo and Japanese Culture',
        399, 4.5,
        'Tokyo is often referred to as a city, ' +
        'but is officially known and governed as a "metropolitan prefecture", ' +
        'which differs from and combines elements of a city and a prefecture, ' +
        'a characteristic unique to Tokyo. ',
        "https://image.ibb.co/eGX8rb/8.png",
        ['Culture experience']
    ),
    new Product(9,
        'Dream in Havana like in the old times',
        89, 4.0,
        'A city trapped in time, Havana captures the imagination like no other.' +
        ' Faded glamour meets careful colonial-era reconstruction with a backdrop of irresistible color.' +
        ' Walk El Malecón, the walkway bordering the ocean; visit Old Havana and the Catedral de San Cristóbal!',
        "https://image.ibb.co/jZRCHG/9.png",
        ['Culture experience']
    ),
    new Product(10,
        'India and its cuisine',
        1260, 4.0,
        'Marble has been one of the most popular choices of material for crafting statues since ancient times.' +
        ' Marble sculptures are not only sturdy and durable; they are elegant and sophisticated as well.' +
        ' Marble is naturally occurring limestone. ' +
        ' In India, marble has been quarried in various places.' +
        ' Discover Marble deposits in Rajasthan and Gujarat!',
        "https://image.ibb.co/b1Porb/10.png",
        ['Culture experience']
    ),

    new Product(11,
        'Riviera Maya Resort Relax Paradise',
        672, 3.5,
        'Book an all-inclusive 3-night winter vacation at the beachfront BlueBay Grand Esmeralda resort ' +
        'in Riviera Maya with packages starting at $449 per person, including nonstop flights.',
        "https://image.ibb.co/kSzzxG/11.png",
        ['Relax']
    ),

    new Product(12,
        'Egypt the old essence',
        480, 3.2,
        'Welcome to the ancien relics! We are going to visit Lima for a chance to taste its colonial and cosmopolitan sites and its unique and world renowned peruvian cuisine. '+
        ' Cuzco airport and immediately continue to the Sacred Valley, a magical land where Indian Markets and Incan Constructions mix with Corn Fields...' ,
        "https://image.ibb.co/iNzzxG/12.png",
        ['Culture experience']
    )
];


const comments: Comment[] = [
    new Comment(1,1,"2017-02-02 23:24:14", "Norris Hagen", 3 ,"Great experience, you can come close to the zebras."),
    new Comment(2,1,"2017-01-02 21:24:14", "Misty Willis", 4 ,"Wild life never been so real! Definitely recommended!"),
    new Comment(3,1,"2017-02-04 13:24:14", "Louis Omage", 4 ,"Perfect for family and friends."),
    new Comment(4,2,"2017-05-02 03:24:14", "Natasha Sabre", 3 ,"High level of service onboard, nice food and excellent attractions."),
    new Comment(5,3,"2017-02-02 23:24:14", "Norris Hagen", 3 ,"Great experience, professional guides."),
    new Comment(6,3,"2017-01-02 21:24:14", "Misty Willis", 3.5 ,"My dream place has been so real! Definitely recommended!"),
    new Comment(7,4,"2017-02-04 13:24:14", "Louis Omage", 4 ,"Perfect for family and friends."),
    new Comment(8,5,"2017-05-02 03:24:14", "Natasha Sabre", 3 ,"High level of service onboard, nice food and excellent attractions."),
    new Comment(9,5,"2017-02-02 23:24:14", "Patty Hagen", 3 ,"Great experience, delicious street food."),
    new Comment(10,4,"2017-01-02 21:24:14", "Wilson Johans", 5 ,"Definitely recommended!"),
    new Comment(11,3,"2017-02-04 13:24:14", "Victor Masenbourf", 4 ,"Perfect for lovers."),
    new Comment(12,6,"2017-05-02 03:24:14", "Natasha Sabre", 3.5 ,"High level of service onboard, nice food and excellent attractions.")
];

app.get('/', (req, res) =>{
    res.send("Hello Express");
})

app.get('/api/products', (req, res) =>{
    let result = products;
    let params = req.query;

    if(params.title){
        result = result.filter((p) => p.title.indexOf(params.title) !== -1);
    }

    if(params.price && result.length > 0){
        result = result.filter((p) => p.price <= parseInt(params.price));
    }

    if(params.category && params.category!== "-1" && result.length > 0){
        result = result.filter((p) => p.categories.indexOf(params.category) !== -1);
    }

    res.json(result);
})

app.get('/api/product/:id', (req, res) =>{
    res.json(products.find((product)=> product.id == req.params.id));
})

app.get('/api/product/:id/comments', (req, res) =>{
    res.json(comments.filter((comment: Comment)=> comment.productId == req.params.id));
})

const server = app.listen(8000, "localhost", () =>{
    console.log("Server online, address: http://localhost:8000");
});


const subscriptions = new Map<any, number[]>();

// const wsServer = new Server({port:8085});
const wsServer = new Server({port: 8085});


wsServer.on("connection", websocket => {
    websocket.on('message', (message) => {
        let messageObj = JSON.parse(message);
        let productIds = subscriptions.get(websocket) || [];
        subscriptions.set(websocket, [...productIds, messageObj.productId]);
    })
});

const currentBids = new Map<number, number>();

setInterval(() => {
    products.forEach( p => {
        let currentBid = currentBids.get(p.id) || p.price;
        let newBid = currentBid - 1;
        currentBids.set(p.id, newBid);
    });

    subscriptions.forEach((productIds: number[], ws) => {
        if(ws.readyState === 1) {
            let newBids = productIds.map( pid => ({
                productId: pid,
                productPrice: currentBids.get(pid)
            }));
            ws.send(JSON.stringify(newBids));
        } else {
            subscriptions.delete(ws);
        }

    })
},2000);

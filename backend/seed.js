const Product = require('./src/models/product');

const dummyData = [
    {
        name: "Iphone 12",
        price: 1000,
        desc: "With A14 Bionic, great battery life, Night mode on every camera, Ceramic Shield and Super Retina XDR display",
        img: "https://i1.wp.com/maplestore.in/wp-content/uploads/2020/10/iPhone_12_Lineup_Screen__WWEN.jpg?fit=2048%2C2048&ssl=1"
    },
    {
        name: "Nike AirJordans",
        price: 800,
        desc: "Air Jordan is an American brand of basketball shoes, athletic, casual, and style clothing produced by Nike. Founded in Chicago, Air Jordan was created for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47112d0a-dc23-4b74-876c-b638fecf0af2/air-jordan-1-retro-high-og-shoes-a7Zzxm.png"
    },
    {
        name: "MacBook Pro",
        price: 1500,
        desc: "13-inch MacBook Pro is completely transformed by the M1 chip. Up to 2.8x faster CPU. Up to 5x faster graphics. And up to 20 hours of battery life.",
        img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"
    },
    {
        name: "Oneplus Nord CE2",
        price: 350,
        desc: "The 64MP AI triple camera comes loaded with AI features to help that big f/1.79 aperture capture your life with more light, color, and clarity.",
        img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-20548,resizemode-1,msid-89644797/magazines/panache/oneplus-nord-ce-2-5g-with-64mp-triple-cameras-dimensity-900-soc-65w-fast-charging-launched-in-india.jpg"
    },
    {
        name: "PlayStation 5",
        price: 499,
        desc: "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment.",
        img: "https://assets-prd.ignimgs.com/2020/06/12/playstation-5-button-02-1591933908407.jpg"
    },
    {
        name: "Xbox X",
        price: 399,
        desc:"Discover the fastest, most powerful Xbox ever with the Xbox Series X. Enjoy 4K gaming at up to 120 frames per second on this next generation video game console",
        img:"https://rukminim1.flixcart.com/image/416/416/kfbfr0w0/gamingconsole/h/g/g/rrt-00022-1024-xbox-yes-original-imafvsyhtamawykz.jpeg?q=70"
    }
];

const seedDB = async ()=>{
    await Product.deleteMany({});
    await Product.insertMany(dummyData);
    console.log("DB Seeded");
}

module.exports = seedDB;
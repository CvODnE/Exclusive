document.addEventListener('DOMContentLoaded', function() {
    const product = document.getElementById("product")
    const phone = document.getElementById("phone")
    const computer = document.getElementById("computer")
    const smartwatch = document.getElementById("smartwatch")
    const headphone = document.getElementById("headphone")
    const game = document.getElementById("game")
    const camera = document.getElementById("camera")
    const grid = document.getElementById("grids")



    const phones = [
        {
            src: "./assets/s25ultra.png",
            title: "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 1TB Storage)"
        },
        {
            src: "./assets/iQOO Neo.png",
            title: "iQOO Neo 10R 5G (Raging Blue, 8GB RAM, 256GB Storage) | Snapdragon 8s Gen 3 Processor |"
        },
        {
            src: "./assets/POCO C61 Mystical Green 4GB RAM 64GB ROM.png",
            title: "POCO C61 Mystical Green 4GB RAM 64GB ROM"
        },
        {
            src: "./assets/Samsung Galaxy M05.png",
            title: "Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB Storage) | 50MP Dual Camera | Bigger 6.7 HD+ Display |"
        },
    ]
    const computers = [
        {
            src: "./assets/hp.png",
            title: "HP 15s,12th Gen Intel Core i3-1215U, 8GB DDR4, 512 GB"
        },
        {
            src: "./assets/lenovo.png",
            title: "Lenovo IdeaPad Flex 5 12th Gen Intel Core i5-1235U 14"
        },
        {
            src: "./assets/asus.png",
            title: "ASUS Vivobook Go 15 (2023), AMD Ryzen 5 7520U, 16GB RAM, 512GB SSD, FHD, 15.6"
        },
        {
            src: "./assets/dell.png",
            title: "Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB"
        },
    ]
    const smartwatchs = [
        {
            src: "./assets/watch1.png",
            title: "Noise Twist Go Bluetooth Calling Smart Watch for Women with Sleek Metal Dial"
        },
        {
            src: "./assets/watch2.png",
            title: "Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness"
        },
        {
            src: "./assets/watch3.png",
            title: "HUAMI AMAZFIT AMOLED 1.6 inch Display Bluetooth Smart Watch -Obsidian Black"
        },
        {
            src: "./assets/watch4.png",
            title: "Fastrack Limitless Glide Smart Watch, Advanced UltraVU HD Display, SingleSync BT Calling"
        },
    ]
    const headphones = [
        {
            src: "./assets/headset1.png",
            title: "boAt Rockerz 480 w/RGB LEDs, 6 Light Modes, 40mm Drivers, Beast Mode, 60hrs Playback"
        },
        {
            src: "./assets/headset2.png",
            title: "Sony WH-CH520 Wireless Bluetooth Headphones with Mic, Up to 50Hrs Battery-Blue"
        },
        {
            src: "./assets/headset3.png",
            title: "ZEBRONICS THUNDER Bluetooth 5.3 Wireless Headphones with 60H Backup, Gaming Mod"
        },
        {
            src: "./assets/headset4.png",
            title: "Fastrack Limitless Glide Smart Watch, Advanced UltraVU HD Display, SingleSync BT Calling"
        },
    ]
    const games = [
        {
            src: "./assets/g92-2-500x500 1.png",
            title: "HAVIT HV-G92 Gamepad"
        },
        {
            src: "./assets/ak-900-01-500x500 1.png",
            title: "AK-900 Wired Keyboard"
        },
        {
            src: "./assets/g27cq4-500x500 1.png",
            title: "IPS LCD Gaming Monitor"
        },
        {
            src: "./assets/gammaxx-l240-argb-1-500x500 1.png",
            title: "RGB liquid CPU Cooler"
        },
    ]
    const cameras = [
        {
            src: "./assets/eos-250d-03-500x500 1.png",
            title: "CANON EOS DSLR Camera"
        },
        {
            src: "./assets/camera1.png",
            title: "Sony Alpha ZV-E10L 24.2 Mega Pixel Interchangeable-Lens Mirrorless vlog Camera with 16-50 mm Lens"
        },
        {
            src: "./assets/camera2.png",
            title: "Canon EOS R50 RF-S18-45mm f/4.5-6.3 is STM Mirrorless Camera (Black)- 4K Video Vlogging with 24.2 MP"
        },
        {
            src: "./assets/camera3.png",
            title: "Sony Alpha ILCE-1 Mirrorless Full-Frame Camera | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking - Black"
        },
    ]

    if (phone) {
        phone.addEventListener("click", function() {
            product.innerHTML = ""
            for (let x in phones) {
                let src = phones[x].src;
                let title = phones[x].title;

                product.innerHTML += `<div class="box">
                    <img src="${src}" alt=""/>
                    <h4>${title}</h4>
                </div>`;
            }
        });
    }
    if (computer) {
        computer.addEventListener("click", function() {
            product.innerHTML = ""
            for (let x in computers) {
                let src = computers[x].src;
                let title = computers[x].title;

                product.innerHTML += `<div class="box">
                    <img src="${src}" alt=""/>
                    <h4>${title}</h4>
                </div>`;
            }
        });
    }
    if (smartwatch) {
        smartwatch.addEventListener("click", function() {
            product.innerHTML = ""
            for (let x in smartwatchs) {
                let src = smartwatchs[x].src;
                let title = smartwatchs[x].title;

                product.innerHTML += `<div class="box">
                    <img src="${src}" alt=""/>
                    <h4>${title}</h4>
                </div>`;
            }
        });
    }
    if (headphone) {
        headphone.addEventListener("click", function() {
            product.innerHTML = ""
            for (let x in headphones) {
                let src = headphones[x].src;
                let title = headphones[x].title;

                product.innerHTML += `<div class="box">
                    <img src="${src}" alt=""/>
                    <h4>${title}</h4>
                </div>`;
            }
        });
    }
    if (game) {
        game.addEventListener("click", function() {
            product.innerHTML = ""
            for (let x in games) {
                let src = games[x].src;
                let title = games[x].title;

                product.innerHTML += `<div class="box">
                    <img src="${src}" alt=""/>
                    <h4>${title}</h4>
                </div>`;
            }
        });
    }
    if (camera) {
        camera.addEventListener("click", function() {
            product.innerHTML = ""
            for (let x in cameras) {
                let src = cameras[x].src;
                let title = cameras[x].title;

                product.innerHTML += `<div class="box">
                    <img src="${src}" alt=""/>
                    <h4>${title}</h4>
                </div>`;
            }
        });
    }
    const products = [
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/71RdoeXxtrL 1.png",
            title : "Breed Dry Dog Food",
            price: "$100",
            review: "35",
            color: "violet",
            p : "Breed Dry Dog Food is specially formulated to meet the nutritional needs of dogs of all sizes and breeds. Made with high-quality proteins, essential vitamins, and wholesome grains, it supports strong muscles, healthy digestion, and a shiny coat. With no artificial additives or fillers, it's a balanced, tasty, and trustworthy choice for your furry friend.",
            text: `<div class="text">
                        <h5 class="price">$100</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(35)</h5>
                    </div>`,
        },
        {   
            category: "Camera",
            new: '',
            off: '',
            src: "./assets/eos-250d-03-500x500 1.png",
            title : "CANON EOS DSLR Camera",
            price: "$360",
            review: "95",
            color: "black",
            p: "The CANON EOS DSLR Camera delivers stunning image quality with its powerful sensor and advanced autofocus system. Designed for both beginners and professionals, it offers intuitive controls, fast performance, and versatile shooting modes. Whether you're capturing stills or full HD video, this camera ensures every shot is crisp, clear, and full of detail.",
            text: `<div class="text">
                        <h5 class="price">$360</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(95)</h5>
                    </div>`,
        },
        {
            category: "Computer",
            new: '',
            off: '',
            src: "./assets/ideapad-gaming-3i-01-500x500 1.png",
            title : "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "325",
            color: "black",
            p: "The ASUS FHD Gaming Laptop combines powerful performance with immersive Full HD visuals for an unbeatable gaming experience. Equipped with high-speed processors, advanced graphics, and a smooth refresh rate, it handles even the most demanding games with ease. Sleek and durable, it’s built for gamers who crave speed, style, and precision.",
            text: `<div class="text">
                        <h5 class="price">$700</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(325)</h5>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/curology-j7pKVQrTUsM-unsplash 1.png",
            title : "Curology Product Set",
            price: "$500",
            review: "145",
            color: "blue",
            p: "The Curology Product Set offers personalized skincare solutions tailored to your unique skin needs. Each set includes a custom formula crafted by dermatology providers, along with gentle cleansers and moisturizers to support clear, healthy skin. Simple, effective, and made with dermatologist-approved ingredients, it's skincare that truly works for you.",
            text: `<div class="text">
                        <h5 class="price">$500</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(145)</h5>
                    </div>`,
        },
        {
            category: "Others",
            new: '<button class="new">New</button>',
            off: '',
            src: "./assets/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
            title : "Kids Electric Car",
            price: "$960",
            review: "65",
            color: "red",
            p: "The Kids Electric Car brings fun and excitement to little drivers with its realistic design and easy-to-use controls. Powered by a rechargeable battery, it features working headlights, horn sounds, and smooth steering for a safe and thrilling ride. Perfect for outdoor adventures, it’s a great way to spark imagination and build confidence behind the wheel.",
            text: `<div class="text">
                        <h5 class="price">$960</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(65)</h5>
                    </div>
                    <div class="dots">
                        <div class="color"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/Copa_Sense 1.png",
            title : "Jr. Zoom Soccer Cleats",
            price: "$1160",
            review: "35",
            color: "yellow",
            p: "The Jr. Zoom Soccer Cleats are designed for young athletes who want speed, comfort, and control on the field. Featuring a lightweight build and cushioned Zoom sole, they provide excellent traction and support during quick moves and fast plays. Durable and stylish, they help kids play their best game with confidence.",
            text: `<div class="text">
                        <h5 class="price">$1160</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(35)</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: #EEFF61;"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Game",
            new: '<button class="new">New</button>',
            off: '',
            src: "./assets/GP11_PRD3 1.png",
            title : "GP11 Shooter USB Gamepad",
            price: "$660",
            review: "55",
            color: "black",
            p: "The GP11 Shooter USB Gamepad offers responsive controls and a comfortable grip for an immersive gaming experience. With plug-and-play USB connectivity, it’s compatible with PCs and a variety of gaming platforms for hassle-free setup. Designed for precision and durability, it’s perfect for both casual and competitive gameplay.",
            text: `<div class="text">
                        <h5 class="price">$660</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                        </div>
                        <h5 class="grey">(55)</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: #000;"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
            title : "Quilted Satin Jacket",
            price: "$660",
            review: "55",
            color: "blue",
            p: "",
            text: `<div class="text">
                        <h5 class="price">$660</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                        </div>
                        <h5 class="grey">(55)</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: #184A48;"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '<button class="off">-40%</button>',
            src: "./assets/g92-2-500x500 1.png",
            title : "HAVIT HV-G92 Gamepad",
            price: "$120",
            review: "88",
            color: "red",
            p: "The HAVIT HV-G92 Gamepad offers a reliable 3D ergonomic design with built-in dual vibration motors, delivering immersive feedback during gameplay. Featuring 8-directional buttons, 12 action buttons, and 2 analog sticks, it provides precise control for various gaming genres . Its plug-and-play USB interface ensures seamless compatibility with PCs, making it an excellent choice for both casual and competitive gamers .",
            text: `<div class="text">
                        <h5 class="price">$120</h5>
                        <h5 class="strike">$160</h5>
                    </div>
                    <div class="texts">
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(88)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '<button class="off">-35%</button>',
            src: "./assets/ak-900-01-500x500 1.png",
            title : "AK-900 Wired Keyboard",
            price: "$960",
            review: "75",
            color: "black",
            p: "The AK-900 Wired Keyboard features a full 104-key layout with vibrant RGB backlighting, offering both style and functionality for gamers. Its durable metal panel and waterproof design ensure longevity and resilience during intense gaming sessions. Compatible with Windows XP through Windows 10, this keyboard provides a reliable and immersive experience for all users.",
            text: `<div class="text">
                        <h5 class="price">$960</h5>
                        <h5 class="strike">$1160</h5>
                    </div>
                    <div class="texts">
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(75)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '<button class="off">-30%</button>',
            src: "./assets/g27cq4-500x500 1.png",
            title : "IPS LCD Gaming Monitor",
            price: "$370",
            review: "99",
            color: "black",
            p: "The IPS LCD Gaming Monitor delivers vibrant colors and wide 178° viewing angles, ensuring consistent image quality from any position. With rapid response times and high refresh rates, it offers smooth, lag-free gameplay, making it ideal for fast-paced gaming environments. Designed for both casual and competitive gamers, this monitor combines visual brilliance with performance to enhance your gaming experience.​",
            text: `<div class="text">
                        <h5 class="price">$370</h5>
                        <h5 class="strike">$400</h5>
                    </div>
                    <div class="texts">
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(99)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '',
            src: "./assets/gammaxx-l240-argb-1-500x500 1.png",
            title : "RGB liquid CPU Cooler",
            price: "$160",
            review: "65",
            color: "blue",
            p: "The RGB Liquid CPU Cooler combines high-performance cooling with customizable RGB lighting, enhancing both thermal efficiency and visual appeal in your PC build. Featuring advanced pump technology and optimized cold plates, it ensures efficient heat dissipation, keeping your CPU temperatures in check during intense workloads. With vibrant RGB lighting effects, it adds a dynamic and personalized touch to your system's aesthetics.​",
            text: `<div class="text">
                        <h5 class="price">$160</h5>
                        <h5 class="strike">$170</h5>
                    </div>
                    <div class="texts">
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                        </div>
                        <h5 class="grey">(65)</h5>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/71RdoeXxtrL 1.png",
            title : "Breed Dry Dog Food",
            price: "$100",
            review: "35",
            color: "violet",
            p: "Breed Dry Dog Food is specially formulated to meet the nutritional needs of dogs of all sizes and breeds. Made with high-quality proteins, essential vitamins, and wholesome grains, it supports strong muscles, healthy digestion, and a shiny coat. With no artificial additives or fillers, it's a balanced, tasty, and trustworthy choice for your furry friend.",
            text: `<div class="text">
                        <h5 class="price">$100</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(35)</h5>
                    </div>`,
        },
        {
            category: "Camera",
            new: '',
            off: '',
            src: "./assets/eos-250d-03-500x500 1.png",
            title : "CANON EOS DSLR Camera",
            price: "$360",
            review: "95",
            color: "black",
            p: "The CANON EOS DSLR Camera delivers stunning image quality with its powerful sensor and advanced autofocus system. Designed for both beginners and professionals, it offers intuitive controls, fast performance, and versatile shooting modes. Whether you're capturing stills or full HD video, this camera ensures every shot is crisp, clear, and full of detail.",
            text: `<div class="text">
                        <h5 class="price">$360</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(95)</h5>
                    </div>`,
        },
        {
            category: "Computer",
            new: '',
            off: '',
            src: "./assets/ideapad-gaming-3i-01-500x500 1.png",
            title : "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "325",
            color: "black",
            p: "The ASUS FHD Gaming Laptop combines powerful performance with immersive Full HD visuals for an unbeatable gaming experience. Equipped with high-speed processors, advanced graphics, and a smooth refresh rate, it handles even the most demanding games with ease. Sleek and durable, it’s built for gamers who crave speed, style, and precision.",
            text: `<div class="text">
                        <h5 class="price">$700</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(325)</h5>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/curology-j7pKVQrTUsM-unsplash 1.png",
            title : "Curology Product Set",
            price: "$500",
            review: "145",
            color: "blue",
            p: "The Curology Product Set offers personalized skincare solutions tailored to your unique skin needs. Each set includes a custom formula crafted by dermatology providers, along with gentle cleansers and moisturizers to support clear, healthy skin. Simple, effective, and made with dermatologist-approved ingredients, it's skincare that truly works for you.",
            text: `<div class="text">
                        <h5 class="price">$500</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(145)</h5>
                    </div>`,
        },
        {
            category: "Others",
            new: '<button class="new">New</button>',
            off: '',
            src: "./assets/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
            title : "Kids Electric Car",
            price: "$960",
            review: "65",
            color: "red",
            p: "The Kids Electric Car brings fun and excitement to little drivers with its realistic design and easy-to-use controls. Powered by a rechargeable battery, it features working headlights, horn sounds, and smooth steering for a safe and thrilling ride. Perfect for outdoor adventures, it’s a great way to spark imagination and build confidence behind the wheel.",
            text: `<div class="text">
                        <h5 class="price">$960</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(65)</h5>
                    </div>
                    <div class="dots">
                        <div class="color"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/Copa_Sense 1.png",
            title : "Jr. Zoom Soccer Cleats",
            price: "$1160",
            review: "35",
            color: "yellow",
            p: "The Jr. Zoom Soccer Cleats are designed for young athletes who want speed, comfort, and control on the field. Featuring a lightweight build and cushioned Zoom sole, they provide excellent traction and support during quick moves and fast plays. Durable and stylish, they help kids play their best game with confidence.",
            text: `<div class="text">
                        <h5 class="price">$1160</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(35)</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: #EEFF61;"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Game",
            new: '<button class="new">New</button>',
            off: '',
            src: "./assets/GP11_PRD3 1.png",
            title : "GP11 Shooter USB Gamepad",
            price: "$660",
            review: "55",
            color: "black",
            p: "The GP11 Shooter USB Gamepad offers responsive controls and a comfortable grip for an immersive gaming experience. With plug-and-play USB connectivity, it’s compatible with PCs and a variety of gaming platforms for hassle-free setup. Designed for precision and durability, it’s perfect for both casual and competitive gameplay.",
            text: `<div class="text">
                        <h5 class="price">$660</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                        </div>
                        <h5 class="grey">(55)</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: #000;"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Others",
            new: '',
            off: '',
            src: "./assets/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
            title : "Quilted Satin Jacket",
            price: "$660",
            review: "55",
            color: "#184a48",
            p: "",
            text: `<div class="text">
                        <h5 class="price">$660</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                        </div>
                        <h5 class="grey">(55)</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: #184A48;"></div>
                        <div class="dot"></div>
                    </div>`,
        },
        {
            category: "Phone",
            new: '',
            off: '',
            src: "./assets/s25ultra.png",
            title : "Samsung Galaxy S25 Ultra 5G",
            price: "$4790",
            review: "27",
            color: "grey",
            p: "The Samsung Galaxy S25 Ultra 5G is a premium flagship smartphone featuring a 6.9-inch Dynamic AMOLED 2X display with a 120Hz refresh rate and a peak brightness of 2600 nits. It boasts a quad-camera system, including a 200MP main sensor, and is powered by the Snapdragon 8 Gen 4 processor, coupled with 12GB RAM and up to 1TB storage. With a 5000mAh battery supporting 45W wired and 15W wireless charging, the device runs on Android 15 with One UI 7, offering advanced AI features and seven years of software updates.",
            text: `<div class="text">
                        <h5 class="price">$4790</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(27)</h5>
                    </div>`,
        },
        {
            category: "Phone",
            new: '',
            off: '',
            src: "./assets/iQOO Neo.png",
            title : "iQOO Neo 10R 5G",
            price: "$5130",
            review: "59",
            color: "blue",
            p: "The iQOO Neo 10R 5G features a stunning 6.78-inch AMOLED display with a 144Hz refresh rate and ultra-bright 4500 nits peak brightness. Powered by the Snapdragon 8s Gen 3 processor, it offers smooth performance, a 50MP OIS main camera, and a large 6400mAh battery with 80W fast charging. Sleek and powerful, it’s designed for users who want flagship features at a smart price.",
            text: `<div class="text">
                        <h5 class="price">$5130</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(59)</h5>
                    </div>`,
        },
        {
            category: "Phone",
            new: '',
            off: '',
            src: "./assets/POCO C61 Mystical Green 4GB RAM 64GB ROM.png",
            title : "POCO C61 Mystical Green 4GB RAM",
            price: "$2950",
            review: "123",
            color: "grey",
            p: "The POCO C61 in Mystical Green features a 6.71-inch HD+ display with a 90Hz refresh rate and Corning Gorilla Glass 3 protection, ensuring smooth visuals and durability. Powered by the MediaTek Helio G36 processor and 4GB RAM (expandable up to 8GB with virtual RAM), it delivers efficient performance for everyday tasks. With a 5000mAh battery, 8MP AI dual rear camera, 5MP front camera, and Android 14 OS, it offers a balanced smartphone experience at an affordable price point. ",
            text: `<div class="text">
                        <h5 class="price">$2950</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(123)</h5>
                    </div>`,
        },
        {
            category: "Phone",
            new: '',
            off: '',
            src: "./assets/Samsung Galaxy M05.png",
            title : "Samsung Galaxy M05",
            price: "$5300",
            review: "141",
            color: "blue",
            p: "The Samsung Galaxy M05 features a 6.7-inch HD+ display, powered by the MediaTek Helio G85 processor, and comes with 4GB RAM and 64GB storage. It boasts a 50MP dual rear camera setup, an 8MP front camera, and a 5000mAh battery with 25W fast charging support. Running on Android 14 with One UI Core 6.0, it offers two years of OS updates and four years of security patches, making it a reliable choice for users seeking a budget-friendly smartphone.",
            text: `<div class="text">
                        <h5 class="price">$5300</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(141)</h5>
                    </div>`,
        },
        {
            category: "Computer",
            new: '',
            off: '',
            src: "./assets/hp.png",
            title : "HP 15s,12th Gen Intel Core",
            price: "$6100",
            review: "47",
            color: "white",
            p: "The HP 15s-fq5112TU features a 15.6-inch Full HD micro-edge anti-glare display, powered by a 12th Gen Intel Core i5-1235U processor, 16GB DDR4 RAM, and a 512GB SSD. It includes Intel Iris Xe Graphics, dual speakers, a backlit keyboard, and built-in Alexa support, all running on Windows 11 Home. With a slim 1.69 kg design and fast-charging support, it’s ideal for both productivity and entertainment. ",
            text: `<div class="text">
                        <h5 class="price">$6100</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(47)</h5>
                    </div>`,
        },
        {
            category: "Computer",
            new: '',
            off: '',
            src: "./assets/lenovo.png",
            title : "Lenovo IdeaPad Flex 5",
            price: "$5700",
            review: "63",
            color: "black",
            p: "The Lenovo IdeaPad Flex 5 is a versatile 2-in-1 laptop featuring a 14-inch WUXGA (1920 × 1200) IPS touchscreen display with a 16:10 aspect ratio, offering enhanced vertical screen space. Powered by the 12th Gen Intel Core i5-1235U processor, it comes with 8GB LPDDR4X RAM and a 512GB SSD, providing a balance of performance and storage. Weighing approximately 1.5 kg and measuring 17.9 mm in thickness, it includes a backlit keyboard, fingerprint reader, and supports Wi-Fi 6 connectivity.",
            text: `<div class="text">
                        <h5 class="price">$5700</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(63)</h5>
                    </div>`,
        },
        {
            category: "Computer",
            new: '',
            off: '',
            src: "./assets/asus.png",
            title : "ASUS Vivobook Go 15 (2023)",
            price: "$4900",
            review: "73",
            color: "black",
            p: "The ASUS Vivobook Go 15 (2023) is a lightweight laptop featuring a 15.6-inch Full HD OLED display with 600 nits peak brightness, 100% DCI-P3 color gamut, and PANTONE validation for vibrant visuals. It is powered by up to an AMD Ryzen™ 5 7520U processor, coupled with 16GB LPDDR5 RAM and 512GB PCIe® 3.0 SSD storage, ensuring smooth multitasking and ample storage space. Running on Windows 11 Home, it offers a slim profile at 17.9 mm thickness and supports fast charging to 60% in approximately 49 minutes, making it a reliable choice for everyday productivity.",
            text: `<div class="text">
                        <h5 class="price">$4900</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(73)</h5>
                    </div>`,
        },
        {
            category: "Computer",
            new: '',
            off: '',
            src: "./assets/dell.png",
            title : "Dell 15 Thin & Light Laptop",
            price: "$5900",
            review: "46",
            color: "black",
            p: "The Dell 15 Thin & Light Laptop features a 15.6-inch Full HD display, offering clear and vibrant visuals for everyday tasks. Powered by the Intel Core i5-1235U processor, it delivers efficient performance for multitasking and productivity. With 8GB RAM and a 512GB SSD, it provides ample storage and fast access to your files and applications. Weighing approximately 1.66 kg, it offers portability without compromising on performance. Running on Windows 11 Home, it includes essential features for a seamless computing experience. Priced at ₹44,990, it offers a balance of performance and value.",
            text: `<div class="text">
                        <h5 class="price">$5900</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(46)</h5>
                    </div>`,
        },
        {
            category: "Watch",
            new: '',
            off: '',
            src: "./assets/watch1.png",
            title : "Bluetooth Calling Smart Watch",
            price: "$900",
            review: "67",
            color: "gold",
            p: "This smartwatch features a 1.69-inch HD display and allows you to make and receive calls directly from your wrist. It supports saving up to 10 contacts for quick access and offers fitness tracking features.",
            text: `<div class="text">
                        <h5 class="price">$900</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(67)</h5>
                    </div>`,
        },
        {
            category: "Watch",
            new: '',
            off: '',
            src: "./assets/watch2.png",
            title : "Noise Pulse 2 Max 1.85 Display",
            price: "$1100",
            review: "92",
            color: "black",
            p: "The Noise Pulse 2 Max features a 1.85-inch TFT LCD display with a resolution of 240×284 pixels and a brightness of 550 nits, ensuring clear visibility even under direct sunlight. It supports Bluetooth calling, allowing you to make and receive calls directly from your wrist, and offers a 10-day battery life on a single charge. The smartwatch includes over 100 sports modes, heart rate monitoring, SpO₂ tracking, and integrates with the NoiseFit app for seamless connectivity and data synchronization.​",
            text: `<div class="text">
                        <h5 class="price">$1100</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(92)</h5>
                    </div>`,
        },
        {
            category: "Watch",
            new: '',
            off: '',
            src: "./assets/watch3.png",
            title : "Display Bluetooth Smart Watch",
            price: "$790",
            review: "37",
            color: "black",
            p: "This smartwatch features a 1.69-inch HD display and allows you to make and receive calls directly from your wrist. It supports saving up to 10 contacts for quick access and offers fitness tracking features.",
            text: `<div class="text">
                        <h5 class="price">$790</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(37)</h5>
                    </div>`,
        },
        {
            category: "Watch",
            new: '',
            off: '',
            src: "./assets/watch4.png",
            title : "Fastrack Limitless Glide Smart Watch",
            price: "$1190",
            review: "54",
            color: "black",
            p: "The Fastrack Limitless Glide Smart Watch features a 1.78-inch UltraVU HD touchscreen and supports Bluetooth calling with SingleSync technology. It offers over 85 sports modes, heart rate monitoring, SpO₂ tracking, and a 7-day battery life with standard usage. With AI voice assistant integration and IP68 water resistance, it’s designed for both fitness tracking and everyday use.",
            text: `<div class="text">
                        <h5 class="price">$1190</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(54)</h5>
                    </div>`,
        },
        {
            category: "Headphone",
            new: '',
            off: '',
            src: "./assets/headset1.png",
            title : "boAt Rockerz 480 w/RGB LEDs",
            price: "$590",
            review: "23",
            color: "black",
            p: "The boAt Rockerz 480 is a wireless over-ear headphone featuring RGB LEDs with six light modes, designed to enhance your audio-visual experience. Equipped with 40mm dynamic drivers and BEAST™ Mode, it delivers immersive sound quality, making it suitable for gaming and music enthusiasts. With Bluetooth v5.3 connectivity, ENx technology for clear calls, and a 60-hour battery life, it offers both performance and convenience.​",
            text: `<div class="text">
                        <h5 class="price">$590</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(23)</h5>
                    </div>`,
        },
        {
            category: "Headphone",
            new: '',
            off: '',
            src: "./assets/headset2.png",
            title : "Sony Wireless Bluetooth Headphones",
            price: "$610",
            review: "57",
            color: "teal",
            p: "The Sony Wireless Bluetooth Headphones deliver exceptional sound quality with features like noise cancellation and long battery life. They offer a comfortable fit for long listening sessions and easy connectivity via Bluetooth. With options ranging from premium models like the WH-1000XM5 to more affordable ones like the WH-CH520, there’s a choice for every user.",
            text: `<div class="text">
                        <h5 class="price">$610</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(57)</h5>
                    </div>`,
        },
        {
            category: "Headphone",
            new: '',
            off: '',
            src: "./assets/headset3.png",
            title : "ZEBRONICS THUNDER Bluetooth",
            price: "$530",
            review: "97",
            color: "black",
            p: "The ZEBRONICS THUNDER Bluetooth 5.3 Wireless Over-Ear Headphones offer up to 60 hours of playback time and feature a comfortable design with soft earcups and an adjustable headband. They support dual pairing, ENC (Environmental Noise Cancellation), and come with a built-in microphone for hands-free calls.",
            text: `<div class="text">
                        <h5 class="price">$530</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(97)</h5>
                    </div>`,
        },
        {
            category: "Headphone",
            new: '',
            off: '',
            src: "./assets/headset4.png",
            title : "boAt Rockerz 480 w/RGB LEDs",
            price: "$570",
            review: "177",
            color: "black",
            p: "The boAt Rockerz 480 wireless headphones feature RGB LEDs with six customizable light modes, enhancing your audio experience with vibrant visuals. Equipped with 40mm dynamic drivers and BEAST™ Mode, they deliver immersive sound quality, making them ideal for gaming and music enthusiasts. With a 60-hour battery life, ENx technology for clear calls, and a comfortable over-ear design, they offer both performance and style at an affordable price.",
            text: `<div class="text">
                        <h5 class="price">$570</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(177)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '',
            src: "./assets/g92-2-500x500 1.png",
            title : "HAVIT HV-G92 Gamepad",
            price: "$970",
            review: "21",
            color: "red",
            p: "The HAVIT HV-G92 Gamepad offers a reliable 3D ergonomic design with built-in dual vibration motors, delivering immersive feedback during gameplay. Featuring 8-directional buttons, 12 action buttons, and 2 analog sticks, it provides precise control for various gaming genres . Its plug-and-play USB interface ensures seamless compatibility with PCs, making it an excellent choice for both casual and competitive gamers .",
            text: `<div class="text">
                        <h5 class="price">$970</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(21)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '',
            src: "./assets/ak-900-01-500x500 1.png",
            title : "AK-900 Wired Keyboard",
            price: "$715",
            review: "27",
            color: "black",
            p: "The AK-900 Wired Keyboard features a full 104-key layout with vibrant RGB backlighting, offering both style and functionality for gamers. Its durable metal panel and waterproof design ensure longevity and resilience during intense gaming sessions. Compatible with Windows XP through Windows 10, this keyboard provides a reliable and immersive experience for all users.",
            text: `<div class="text">
                        <h5 class="price">$715</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(27)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '',
            src: "./assets/g27cq4-500x500 1.png",
            title : "IPS LCD Gaming Monitor",
            price: "$990",
            review: "33",
            color: "black",
            p: "The IPS LCD Gaming Monitor delivers vibrant colors and wide 178° viewing angles, ensuring consistent image quality from any position. With rapid response times and high refresh rates, it offers smooth, lag-free gameplay, making it ideal for fast-paced gaming environments. Designed for both casual and competitive gamers, this monitor combines visual brilliance with performance to enhance your gaming experience.​",
            text: `<div class="text">
                        <h5 class="price">$990</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(33)</h5>
                    </div>`,
        },
        {
            category: "Game",
            new: '',
            off: '',
            src: "./assets/gammaxx-l240-argb-1-500x500 1.png",
            title : "RGB liquid CPU Cooler",
            price: "$750",
            review: "16",
            color: "black",
            p: "The RGB Liquid CPU Cooler combines high-performance cooling with customizable RGB lighting, enhancing both thermal efficiency and visual appeal in your PC build. Featuring advanced pump technology and optimized cold plates, it ensures efficient heat dissipation, keeping your CPU temperatures in check during intense workloads. With vibrant RGB lighting effects, it adds a dynamic and personalized touch to your system's aesthetics.​",
            text: `<div class="text">
                        <h5 class="price">$750</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(16)</h5>
                    </div>`,
        },
        {
            category: "Camera",
            new: '',
            off: '',
            src: "./assets/eos-250d-03-500x500 1.png",
            title : "CANON EOS DSLR Camera",
            price: "$423",
            review: "326",
            color: "black",
            p: "The Canon EOS DSLR cameras offer a range of features suitable for both beginners and enthusiasts. Models like the EOS 2000D and EOS 250D provide 24.1MP APS-C sensors, Full HD video recording, and user-friendly interfaces with Wi-Fi connectivity. Prices for these models in India typically range from ₹33,990 to ₹41,999, depending on the retailer and any ongoing promotions.​",
            text: `<div class="text">
                        <h5 class="price">$423</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(326)</h5>
                    </div>`,
        },
        {
            category: "Camera",
            new: '',
            off: '',
            src: "./assets/camera1.png",
            title : "Sony Alpha ZV-E10L 24.2",
            price: "$326",
            review: "423",
            color: "black",
            p: "​The Sony Alpha ZV-E10L is a 24.2MP APS-C mirrorless camera designed for content creators, featuring a vari-angle touchscreen, 4K video recording, and advanced autofocus capabilities. It comes bundled with a 16–50mm power zoom lens and includes features like Background Defocus and Product Showcase modes for enhanced vlogging. In India, the ZV-E10L is priced at ₹61,490, offering a versatile option for aspiring vloggers and creators .",
            text: `<div class="text">
                        <h5 class="price">$326</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(423)</h5>
                    </div>`,
        },
        {
            category: "Camera",
            new: '',
            off: '',
            src: "./assets/camera2.png",
            title : "Canon EOS R50 RF-S18-45mm",
            price: "$534",
            review: "246",
            color: "black",
            p: "The Canon EOS R50 with RF-S18-45mm f/4.5-6.3 IS STM lens is a compact mirrorless camera featuring a 24.2MP APS-C CMOS sensor and 4K 30p video recording, ideal for content creators and vloggers. It offers Dual Pixel CMOS AF II for fast and accurate autofocus, along with a fully articulating touchscreen and built-in flash for versatile shooting. Priced around ₹63,499 in India, it provides a lightweight yet powerful option for both photography and videography enthusiasts",
            text: `<div class="text">
                        <h5 class="price">$534</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(246)</h5>
                    </div>`,
        },
        {
            category: "Camera",
            new: '',
            off: '',
            src: "./assets/camera3.png",
            title : "Sony Alpha ILCE-1 Mirrorless",
            price: "$253",
            review: "333",
            color: "black",
            p: "The Sony Alpha ILCE-1 is a flagship full-frame mirrorless camera featuring a 50.1MP stacked Exmor RS CMOS sensor and dual BIONZ XR processors, delivering high-resolution imaging with exceptional speed. It supports blackout-free continuous shooting at up to 30 fps, 8K video recording at 30 fps, and boasts a 9.44M-dot OLED EVF with a 240Hz refresh rate for a seamless shooting experience.",
            text: `<div class="text">
                        <h5 class="price">$253</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/star-half-filled.svg" style="width: 17px;" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(333)</h5>
                    </div>`,
        },
    ]

    if(products) {
        for(let i in products) {
            let nee = products[i].new
            let off = products[i].off
            let src = products[i].src
            let title = products[i].title
            let text = products[i].text

            if(grid) {
                grid.innerHTML += `<div class="boxa">
                            <div class="cart">
                                <img src="${src}" alt="" class="img"/>
                                ${nee}
                                ${off}
                                <span class="icon">
                                    <img src="./assets/wishlist.svg" alt=""/>
                                </span>
                                <span class="icon1">
                                    <img src="./assets/Quick View.svg" alt=""/>
                                </span>
                                <button class="cart">Add To Cart</button>
                            </div>
                            <h5>${title}</h5>
                            ${text}
                        </div>`
            };
        };
    };

    const input = document.getElementById("input")
    const search = document.getElementById("search")

    input.addEventListener("input", function() {
        search.innerHTML = ""
        console.log("1")
        for(i in products) {
            console.log("2")
            let items = products[i]

            if(input.value === items.title) {
                console.log("3")
                search.innerHTML = `<div class="boxa">
                    <div class="cart">
                        <img src="${items.src}" alt="" class="img"/>
                        ${items.new}
                        ${items.off}
                        <span class="icon">
                            <img src="./assets/wishlist.svg" alt=""/>
                        </span>
                        <span class="icon1">
                            <img src="./assets/Quick View.svg" alt=""/>
                        </span>
                        <button class="cart">Add To Cart</button>
                    </div>
                    <h5>${items.title}</h5>
                    <div class="text">
                        <h5 class="price">${items.price}</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(${items.review})</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: ${items.color};"></div>
                        <div class="dot"></div>
                    </div>
                </div>`
            }
            if(input.value === items.category) {
                console.log("4")
                search.innerHTML += `<div class="boxa">
                    <div class="cart">
                        <img src="${items.src}" alt="" class="img"/>
                        ${items.new}
                        ${items.off}
                        <span class="icon">
                            <img src="./assets/wishlist.svg" alt=""/>
                        </span>
                        <span class="icon1">
                            <img src="./assets/Quick View.svg" alt=""/>
                        </span>
                        <button class="cart">Add To Cart</button>
                    </div>
                    <h5>${items.title}</h5>
                    <div class="text">
                        <h5 class="price">${items.price}</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(${items.review})</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: ${items.color};"></div>
                        <div class="dot"></div>
                    </div>
                </div>`
            }
        }
    })

    const boxes = document.querySelectorAll("div.boxa");
    const home = document.getElementById("home")
    const ite = document.getElementById("ite")
    const rel = document.getElementById("rel")

    if (boxes.length > 0) {
        boxes.forEach((box, index) => {
            box.addEventListener("click", () => {
                const boxTitle = box.querySelector("h4")?.textContent.trim();
                const produc = products[index];

                localStorage.setItem("selectedProductIndex", index);
                localStorage.setItem("selectedProductTitle", produc.title);

                window.location.href = "item.html";
            });
        });
    }

    if (home) {
        const index = localStorage.getItem("selectedProductIndex");
        const title = localStorage.getItem("selectedProductTitle");
        const produc = products[parseInt(index)];

        ite.innerHTML = `<div class="heading">
                <h4 id="home">Home / ${produc.category} / </h4>
                <h4 id="black">${produc.title}</h4>
            </div>
            <div class="flex">
                <div class="left">
                    <img src="${produc.src}" alt=""/>
                </div>
                <div class="right">
                    <h1 id="title">${produc.title}</h1>
                    <div class="text">
                        <div class="stars">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector (1).svg" alt=""/>
                        </div>
                        <h5 class="grey">(${produc.review} Reviews) |</h5>
                        <h5 class="dif">In Stock</h5>
                    </div>
                    <h1 id="price">${produc.price}</h1>
                    <p id="p">${produc.p}</p>
                    <hr/>
                    <div class="dots">
                        <h4>Colours: </h4>
                        <div class="color" style="background: ${produc.color};"></div>
                        <div class="red"></div>
                    </div>
                    <div class="top">
                        <img src="./assets/icon-delivery.svg" alt=""/>
                        <div class="content">
                            <h5>Free Delivery</h5>
                            <h6>Enter your postal code for Delivery Availability</h6>
                        </div>
                    </div>
                    <div class="top">
                        <img src="./assets/Icon-return.svg" alt=""/>
                        <div class="content">
                            <h5>Return Delivery</h5>
                            <h6>Free 30 Days Delivery Returns. Details</h6>
                        </div>
                    </div>
                </div>
            </div>`
        for(i in products) {
            let items = products[i]

            if(items.category == produc.category) {
                rel.innerHTML += `<div class="boxa">
                    <div class="cart">
                        <img src="${items.src}" alt="" class="img"/>
                        ${items.new}
                        ${items.off}
                        <span class="icon">
                            <img src="./assets/wishlist.svg" alt=""/>
                        </span>
                        <span class="icon1">
                            <img src="./assets/Quick View.svg" alt=""/>
                        </span>
                        <button class="cart">Add To Cart</button>
                    </div>
                    <h5>${items.title}</h5>
                    <div class="text">
                        <h5 class="price">${items.price}</h5>
                        <div class="star">
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                            <img src="./assets/Vector.svg" alt=""/>
                        </div>
                        <h5 class="grey">(${items.review})</h5>
                    </div>
                    <div class="dots">
                        <div class="color" style="background: ${items.color};"></div>
                        <div class="dot"></div>
                    </div>
                </div>`
            }
        }
    }
});
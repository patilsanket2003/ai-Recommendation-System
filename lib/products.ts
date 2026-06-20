/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: "Phones" | "Laptops" | "Headphones" | "Smartwatches";
  price: number;
  description: string;
  rating: number;
  image: string; // Tailwinds colors or gradient descriptions
  specs: string[];
}

export const products: Product[] = [
  // ==================== PHONES (25 products) ====================
  {
    id: "phone-1",
    name: "Samsung Galaxy S24 Ultra",
    category: "Phones",
    price: 129999,
    description: "The ultimate AI flagship from Samsung, featuring a premium Titanium body, quad camera setup with 200MP main sensor, S-Pen integration, and Galaxy AI.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400",
    specs: ["6.8\" Dynamic AMOLED 2X", "12GB RAM | 256GB Storage", "200MP + 50MP + 12MP + 10MP", "5000mAh Battery | Snapdragon 8 Gen 3"]
  },
  {
    id: "phone-2",
    name: "OnePlus 12",
    category: "Phones",
    price: 64999,
    description: "A fast and smooth flagship smartphone featuring the Snapdragon 8 Gen 3, a brilliant 2K display, Hasselblad Camera for Mobile, and 100W SUPERVOOC charging.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
    specs: ["6.82\" 2K 120Hz ProXDR", "12GB RAM | 256GB Storage", "50MP + 64MP + 48MP Hasselblad", "5400mAh Battery | 100W Fast Charge"]
  },
  {
    id: "phone-3",
    name: "Apple iPhone 15 Pro",
    category: "Phones",
    price: 127990,
    description: "Apple's professional grade device crafted from aerospace-grade titanium, featuring the groundbreaking A17 Pro chip, custom Action button, and advanced pro camera system.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&q=80&w=400",
    specs: ["6.1\" Super Retina XDR", "A17 Pro Chip", "48MP Main | 3x Telephoto", "USB-C Port | Titanium Design"]
  },
  {
    id: "phone-4",
    name: "Redmi Note 13 Pro 5G",
    category: "Phones",
    price: 25999,
    description: "A highly balance mid-ranger with a stunning 1.5K curved AMOLED display, massive 200MP main camera with OIS, and 67W turbo charging.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    specs: ["6.67\" 1.5K 120Hz AMOLED", "8GB RAM | 128GB Storage", "200MP OIS Camera", "5100mAh Battery | 67W Charger"]
  },
  {
    id: "phone-5",
    name: "Nothing Phone (2a)",
    category: "Phones",
    price: 23999,
    description: "A unique smartphone boasting Nothing's signature transparent design, interactive Glyph Interface, clean Nothing OS, and co-engineered dual 50MP cameras.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=400",
    specs: ["6.7\" Flexible AMOLED", "8GB RAM | 128GB Storage", "Dual 50MP Rear Cameras", "5000mAh Battery | Dimensity 7200 Pro"]
  },
  {
    id: "phone-6",
    name: "Realme GT 6T",
    category: "Phones",
    price: 30999,
    description: "A performance killer powered by the Snapdragon 7+ Gen 3, a record-breaking 6000 nits ultra-bright display, and 120W SUPERVOOC charging.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=400",
    specs: ["6.78\" 8T LTPO 120Hz", "8GB RAM | 128GB Storage", "50MP Sony LYT-600 OIS", "5500mAh Battery | 120W Charge"]
  },
  {
    id: "phone-7",
    name: "Motorola Edge 50 Pro",
    category: "Phones",
    price: 31999,
    description: "A gorgeous smartphone featuring a Pantone-validated curved pOLED display, wireless charging support, and AI-powered pro cameras with 3x optical zoom.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400",
    specs: ["6.7\" 1.5K 144Hz pOLED", "8GB RAM | 256GB Storage", "50MP + 13MP + 10MP (3x Zoom)", "125W Wired & 50W Wireless Charge"]
  },
  {
    id: "phone-8",
    name: "Vivo V30 Pro",
    category: "Phones",
    price: 41999,
    description: "Co-engineered with ZEISS, this phone brings legendary portrait styles, Aura Light technology, and a super slim 3D curved design.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
    specs: ["6.78\" AMOLED 3D Curved", "8GB RAM | 256GB Storage", "50MP + 50MP + 50MP ZEISS Trio", "5000mAh Battery | 80W Charger"]
  },
  {
    id: "phone-9",
    name: "iQOO 12 5G",
    category: "Phones",
    price: 52999,
    description: "A gaming monster equipped with the flagship Snapdragon 8 Gen 3, dedicated Q1 gaming chip, and high-fidelity camera array.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&q=80&w=400",
    specs: ["6.78\" 144Hz LTPO AMOLED", "12GB RAM | 256GB Storage", "50MP + 50MP + 64MP (3x Optical)", "5000mAh Battery | 120W Charge"]
  },
  {
    id: "phone-10",
    name: "Google Pixel 8a",
    category: "Phones",
    price: 49999,
    description: "The AI-first Google phone featuring the Tensor G3 chip, Best Take camera feature, Circle to Search, and guaranteed 7 years of OS updates.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    specs: ["6.1\" Actua 120Hz Display", "8GB RAM | 128GB Storage", "64MP + 13MP Dual Camera", "Google Tensor G3 | 7 Years Updates"]
  },
  {
    id: "phone-11",
    name: "POCO F6 5G",
    category: "Phones",
    price: 29999,
    description: "An absolute powerhouse boasting the Snapdragon 8s Gen 3, premium performance optimizations, and a crystal clear 1.5K display.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=400",
    specs: ["6.67\" 1.5K 120Hz AMOLED", "8GB RAM | 256GB Storage", "50MP Sony IMX882 OIS", "5000mAh Battery | 90W Turbo Charge"]
  },
  {
    id: "phone-12",
    name: "Samsung Galaxy A55 5G",
    category: "Phones",
    price: 39999,
    description: "Samsung's premium mid-ranger with a glass back, metal frame, IP67 dust & water resistance, and secure Samsung Knox Vault protection.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=400",
    specs: ["6.6\" Super AMOLED 120Hz", "8GB RAM | 128GB Storage", "50MP OIS Triple Camera", "IP67 Rating | Exynos 1480"]
  },
  {
    id: "phone-13",
    name: "Redmi 13C 5G",
    category: "Phones",
    price: 10499,
    description: "An incredibly budget-friendly 5G smartphone that delivers high speed connectivity, massive battery capacity, and a smooth display.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400",
    specs: ["6.74\" 90Hz Display", "4GB RAM | 128GB Storage", "50MP AI Dual Camera", "5000mAh Battery | Dimensity 6100+"]
  },
  {
    id: "phone-14",
    name: "Realme Narzo 70 Pro",
    category: "Phones",
    price: 19999,
    description: "A mid-range stunner featuring an Air Gestures interface, Sony IMX890 OIS camera sensor, and premium glass design.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
    specs: ["6.67\" 120Hz AMOLED", "8GB RAM | 128GB Storage", "Sony IMX890 50MP OIS", "5000mAh Battery | 67W Charge"]
  },
  {
    id: "phone-15",
    name: "OnePlus Nord CE4 5G",
    category: "Phones",
    price: 24999,
    description: "A reliable daily companion featuring high speed 100W SUPERVOOC charging, Snapdragon 7 Gen 3, and a sleek modern design.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&q=80&w=400",
    specs: ["6.7\" FHD+ 120Hz AMOLED", "8GB RAM | 128GB Storage", "50MP Sony LYT-600 OIS", "5500mAh Battery | 100W Charge"]
  },
  {
    id: "phone-16",
    name: "Apple iPhone 13 (128GB)",
    category: "Phones",
    price: 49900,
    description: "A classic favorite offering advanced dual-camera system, stunning Super Retina XDR display, A15 Bionic, and exceptional battery life.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    specs: ["6.1\" Super Retina XDR", "128GB Storage", "A15 Bionic Chip", "Dual 12MP Camera with Cinematic Mode"]
  },
  {
    id: "phone-17",
    name: "Moto G85 5G",
    category: "Phones",
    price: 17999,
    description: "Features a beautiful premium 3D curved pOLED display, vegan leather finish, OIS camera, and solid 5G network performance.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=400",
    specs: ["6.67\" 3D Curved pOLED", "8GB RAM | 128GB Storage", "50MP OIS Camera", "5000mAh Battery | Snapdragon 6s Gen 3"]
  },
  {
    id: "phone-18",
    name: "Samsung Galaxy M35 5G",
    category: "Phones",
    price: 19999,
    description: "Equipped with a monstrous 6000mAh battery that guarantees multi-day battery backups, a gorgeous AMOLED screen, and robust processor.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=400",
    specs: ["6.6\" 120Hz FHD+ Super AMOLED", "6GB RAM | 128GB Storage", "50MP Triple Camera", "6000mAh Battery | Exynos 1380"]
  },
  {
    id: "phone-19",
    name: "Infinix GT 20 Pro",
    category: "Phones",
    price: 24999,
    description: "A cyber-mecha themed gaming phone with custom LED lighting, dedicated gaming display processor, and 45W bypass charging.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400",
    specs: ["6.78\" 144Hz LTPS AMOLED", "8GB RAM | 256GB Storage", "Dimensity 8200 Ultimate", "45W Hyper Charge | Mecha Loop LEDs"]
  },
  {
    id: "phone-20",
    name: "Nothing Phone (2)",
    category: "Phones",
    price: 39999,
    description: "The premium Nothing device boasting a custom curved glass chassis, advanced Glyph lights interface, and high speed Snapdragon 8+ Gen 1.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
    specs: ["6.7\" LTPO OLED 120Hz", "12GB RAM | 256GB Storage", "Dual 50MP Cameras", "Snapdragon 8+ Gen 1 | Glyph Lights"]
  },
  {
    id: "phone-21",
    name: "Tecno Pova 6 Pro 5G",
    category: "Phones",
    price: 19999,
    description: "Futuristic design featuring dynamic MiniLED light effects, a massive 6000mAh battery, and super fast 70W Ultra Charge.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&q=80&w=400",
    specs: ["6.78\" FHD+ 120Hz AMOLED", "8GB RAM | 256GB Storage", "108MP Rear Camera", "6000mAh Battery | 70W Charge"]
  },
  {
    id: "phone-22",
    name: "Vivo T3 Lite 5G",
    category: "Phones",
    price: 10499,
    description: "An entry-level 5G offering focusing on elegant design, Sony camera quality, and long-lasting battery lifecycle.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    specs: ["6.56\" 90Hz Display", "4GB RAM | 128GB Storage", "50MP Sony Primary Camera", "5000mAh Battery | Dimensity 6300"]
  },
  {
    id: "phone-23",
    name: "Redmi Note 13 5G",
    category: "Phones",
    price: 16999,
    description: "A super-slim 5G phone packing a premium thin-bezel AMOLED screen, 108MP camera, and lightweight build.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=400",
    specs: ["6.67\" 120Hz AMOLED", "6GB RAM | 128GB Storage", "108MP + 8MP + 2MP Triple", "5000mAh Battery | 33W Fast Charger"]
  },
  {
    id: "phone-24",
    name: "POCO M6 Pro 5G",
    category: "Phones",
    price: 11999,
    description: "Budget-friendly smartphone powered by Snapdragon 4 Gen 2, offering a premium glass back and high performance 5G.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=400",
    specs: ["6.79\" 90Hz FHD+ Display", "6GB RAM | 128GB Storage", "50MP AI Dual Camera", "Snapdragon 4 Gen 2 | 5000mAh"]
  },
  {
    id: "phone-25",
    name: "Realme 12 Pro 5G",
    category: "Phones",
    price: 22999,
    description: "Luxury watch design inspired smartphone, complete with a telephoto portrait lens, curved OLED display, and premium leather casing.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400",
    specs: ["6.7\" 120Hz Curved OLED", "8GB RAM | 128GB Storage", "32MP Telephoto + 50MP Sony OIS", "67W Charge | Vegan Leather"]
  },

  // ==================== LAPTOPS (25 products) ====================
  {
    id: "laptop-1",
    name: "Apple MacBook Air M3 (13-inch)",
    category: "Laptops",
    price: 114900,
    description: "The world's most popular thin-and-light laptop, now powered by the M3 chip. Offers up to 18 hours of battery life and support for up to two external displays.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    specs: ["13.6\" Liquid Retina Display", "Apple M3 Chip (8-Core CPU)", "8GB Unified Memory | 256GB SSD", "Up to 18 Hours Battery | Backlit Magic Keyboard"]
  },
  {
    id: "laptop-2",
    name: "ASUS ROG Strix G16 (2024)",
    category: "Laptops",
    price: 124990,
    description: "A serious gaming powerhouse with a 14th Gen Intel Core i9 processor, NVIDIA GeForce RTX 4060 graphics, and advanced tri-fan cooling.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400",
    specs: ["16\" FHD+ 165Hz ROG Nebula", "Intel Core i9-14900HX", "16GB DDR5 RAM | 1TB NVMe SSD", "RTX 4060 8GB | RGB Keyboard"]
  },
  {
    id: "laptop-3",
    name: "Lenovo Legion Slim 5 Gen 9",
    category: "Laptops",
    price: 112990,
    description: "A stealthy and thin gaming laptop packed with an AMD Ryzen 7 processor, RTX 4060, and highly intelligent AI engine performance tuning.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1496181130204-755241544e35?auto=format&fit=crop&q=80&w=400",
    specs: ["16\" WQXGA 165Hz IPS", "AMD Ryzen 7 7840HS", "16GB RAM | 512GB Gen4 SSD", "NVIDIA RTX 4060 | AI Engine+"]
  },
  {
    id: "laptop-4",
    name: "HP Victus 15 (Ryzen 5)",
    category: "Laptops",
    price: 54990,
    description: "An incredibly popular entry-level gaming laptop delivering high value with a Ryzen 5 chip, RTX 3050, and sleek layout.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD 144Hz Display", "AMD Ryzen 5 5600H", "16GB RAM | 512GB SSD", "NVIDIA RTX 3050 | Win 11"]
  },
  {
    id: "laptop-5",
    name: "Dell Inspiron 15 3520",
    category: "Laptops",
    price: 38990,
    description: "A standard, reliable everyday companion with a smooth 120Hz display, Intel Core i3, and comfortable typing profile.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1484788980464-3436ad8919f5?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD 120Hz Display", "Intel Core i3-1215U", "8GB DDR4 RAM | 512GB SSD", "Win 11 + Office 2021"]
  },
  {
    id: "laptop-6",
    name: "ASUS Vivobook 15 (Core i5)",
    category: "Laptops",
    price: 49990,
    description: "A slim and stylish laptop perfect for students and professionals. Powered by a 12th Gen Intel Core i5 and featuring a 180-degree hinge.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD Anti-Glare", "Intel Core i5-12500H", "16GB RAM | 512GB SSD", "Thin & Light: 1.7kg | Military Grade"]
  },
  {
    id: "laptop-7",
    name: "Lenovo IdeaPad Slim 3",
    category: "Laptops",
    price: 34990,
    description: "A highly affordable and durable workhorse laptop with excellent battery life, physical webcam shutter, and lightweight design.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD IPS Screen", "Intel Core i3-1215U", "8GB RAM | 512GB SSD", "Webcam Shutter | Rapid Charge"]
  },
  {
    id: "laptop-8",
    name: "Acer Nitro V15 Gaming",
    category: "Laptops",
    price: 72990,
    description: "A stellar value gaming laptop, packing a 13th Gen Core i5, RTX 4050, high refresh rate, and customizable cooling.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD 144Hz IPS", "Intel Core i5-13420H", "16GB RAM | 512GB Gen4 SSD", "NVIDIA RTX 4050 6GB GDDR6"]
  },
  {
    id: "laptop-9",
    name: "Apple MacBook Pro M3 Max (16-inch)",
    category: "Laptops",
    price: 349900,
    description: "The absolute pinnacle of portable computing for creative professionals, 3D artists, and developers requiring workstation grade speed.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1496181130204-755241544e35?auto=format&fit=crop&q=80&w=400",
    specs: ["16.2\" Liquid Retina XDR", "Apple M3 Max (14-Core CPU)", "36GB Unified Memory | 1TB SSD", "Up to 22 Hours Battery | Space Black"]
  },
  {
    id: "laptop-10",
    name: "Dell G15 5530 Gaming",
    category: "Laptops",
    price: 79990,
    description: "Alienware-inspired thermal design, featuring high performance Intel HX-series processor and GeForce RTX 3050.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD 120Hz 250nits", "Intel Core i5-13450HX", "16GB DDR5 RAM | 512GB SSD", "RTX 3050 6GB | Orange Backlit"]
  },
  {
    id: "laptop-11",
    name: "Samsung Galaxy Book4 Pro OLED",
    category: "Laptops",
    price: 131990,
    description: "Ultra-premium thin laptop featuring a gorgeous 3K Dynamic AMOLED 2X touchscreen, seamless Galaxy ecosystem connection, and Intel Core Ultra 7.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1484788980464-3436ad8919f5?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" 3K Dynamic AMOLED 2X", "Intel Core Ultra 7 155H", "16GB LPDDR5X | 512GB SSD", "Intel Arc Graphics | Touch Screen"]
  },
  {
    id: "laptop-12",
    name: "ASUS Zenbook 14 OLED (2024)",
    category: "Laptops",
    price: 99990,
    description: "An incredibly elegant, lightweight laptop with a breathtaking 3K 120Hz OLED screen, premium metal chassis, and massive battery life.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" 3K 120Hz OLED", "Intel Core Ultra 5 125H", "16GB RAM | 1TB NVMe SSD", "Weight: 1.2kg | 75Wh Battery"]
  },
  {
    id: "laptop-13",
    name: "HP Omen 16 (Ryzen 7)",
    category: "Laptops",
    price: 114990,
    description: "Premium gaming hardware from HP, with a beautiful clean minimalist aesthetic, Ryzen 7 octa-core processor, and high speed RTX 4060 graphics.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    specs: ["16.1\" QHD 165Hz IPS", "AMD Ryzen 7 7840HS", "16GB DDR5 RAM | 1TB SSD", "RTX 4060 8GB | OMEN Tempest Cooling"]
  },
  {
    id: "laptop-14",
    name: "Lenovo IdeaPad Flex 5 2-in-1",
    category: "Laptops",
    price: 64990,
    description: "Convertible laptop featuring a 360-degree hinge, WUXGA touchscreen display, bundled active stylus pen, and high speed AMD Ryzen 5.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" WUXGA IPS Touchscreen", "AMD Ryzen 5 7530U", "16GB RAM | 512GB SSD", "Lenovo Digital Pen included"]
  },
  {
    id: "laptop-15",
    name: "Acer Swift Go 14 OLED",
    category: "Laptops",
    price: 59990,
    description: "A super portable creator laptop with a color-accurate 2.8K OLED screen, lightweight aluminum body, and fast charging capabilities.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1496181130204-755241544e35?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" 2.8K 90Hz OLED", "Intel Core i5-13500H", "16GB LPDDR5 | 512GB SSD", "Weight: 1.25kg | Intel Evo Platform"]
  },
  {
    id: "laptop-16",
    name: "Dell XPS 13 Plus 9320",
    category: "Laptops",
    price: 199990,
    description: "Dell's most futuristic ultra-premium laptop, featuring a seamless haptic touchpad, zero-lattice keyboard, and high-res touch display.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400",
    specs: ["13.4\" UHD+ AR Touch", "Intel Core i7-1360P", "16GB RAM | 1TB NVMe SSD", "Seamless Glass Touchpad | 1.2kg"]
  },
  {
    id: "laptop-17",
    name: "MSI Katana 17 (Core i7)",
    category: "Laptops",
    price: 94990,
    description: "17-inch gaming laptop that offers immersive real estate, 4-Zone RGB keyboard, RTX 4060, and highly effective Cooler Boost 5.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1484788980464-3436ad8919f5?auto=format&fit=crop&q=80&w=400",
    specs: ["17.3\" FHD 144Hz Display", "Intel Core i7-13620H", "16GB DDR5 RAM | 1TB SSD", "RTX 4060 8GB | Cooler Boost 5"]
  },
  {
    id: "laptop-18",
    name: "ASUS TUF Gaming F15",
    category: "Laptops",
    price: 61990,
    description: "Military-grade toughness, designed to handle daily grinding and heavy gaming loads with a 11th Gen Core i5 and RTX 3050.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400",
    specs: ["15.6\" FHD 144Hz Adaptive-Sync", "Intel Core i5-11400H", "16GB RAM | 512GB SSD", "RTX 3050 4GB | 90Wh Battery"]
  },
  {
    id: "laptop-19",
    name: "HP Chromebook 14",
    category: "Laptops",
    price: 25990,
    description: "An affordable, secure, cloud-based Chromebook built for younger students and online learning, featuring long battery operation.",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" HD Touch Display", "Intel Celeron N4500", "4GB RAM | 64GB eMMC", "Chrome OS | Fast Boot"]
  },
  {
    id: "laptop-20",
    name: "Lenovo ThinkPad E14 Gen 5",
    category: "Laptops",
    price: 68990,
    description: "Legendary business durability, featuring the signature tactile ThinkPad keyboard, trackpoint, advanced security features, and Core i5.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" WUXGA IPS Display", "Intel Core i5-1335U", "16GB DDR4 RAM | 512GB SSD", "Fingerprint Reader | TPM 2.0"]
  },
  {
    id: "laptop-21",
    name: "ASUS ROG Zephyrus G14 (2024)",
    category: "Laptops",
    price: 174990,
    description: "The ultimate compact 14-inch gaming laptop, featuring an exquisite ROG Nebula OLED panel, premium aluminum build, and Ryzen 9 power.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181130204-755241544e35?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" 3K 120Hz OLED Nebula", "AMD Ryzen 9 8945HS", "16GB LPDDR5X | 1TB Gen4 SSD", "RTX 4060 8GB | AniMe Matrix"]
  },
  {
    id: "laptop-22",
    name: "Acer Predator Helios Neo 16",
    category: "Laptops",
    price: 119990,
    description: "High-tier cooling engineering, liquid metal thermal grease, 13th Gen Intel Core i7, and dedicated NVIDIA RTX 4060.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400",
    specs: ["16\" WQXGA 165Hz 500nits", "Intel Core i7-13700HX", "16GB DDR5 | 1TB NVMe SSD", "RTX 4060 8GB | Liquid Metal Cooling"]
  },
  {
    id: "laptop-23",
    name: "HP Pavilion Aero 13",
    category: "Laptops",
    price: 74990,
    description: "An incredibly lightweight laptop weighing less than 1kg, powered by high speed Ryzen 7 processor, and featuring a bright 16:10 screen.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1484788980464-3436ad8919f5?auto=format&fit=crop&q=80&w=400",
    specs: ["13.3\" WUXGA 400nits IPS", "AMD Ryzen 7 7735U", "16GB RAM | 1TB SSD", "Weight: 970g | Backlit Keyboard"]
  },
  {
    id: "laptop-24",
    name: "Lenovo Yoga Slim 7 Carbon OLED",
    category: "Laptops",
    price: 119990,
    description: "Crafted from aerospace-grade carbon fiber and premium aluminum, providing extreme durability at a featherlight weight with 90Hz OLED.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" 2.8K 90Hz OLED Touch", "AMD Ryzen 7 5800U", "16GB RAM | 1TB SSD", "Carbon Fiber Top | 1.1kg"]
  },
  {
    id: "laptop-25",
    name: "MSI Modern 14 (Core i3)",
    category: "Laptops",
    price: 29990,
    description: "A highly affordable and slim notebook built for basic administrative tasks, text processing, and browsing, weighing just 1.4kg.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    specs: ["14\" FHD IPS Display", "Intel Core i3-1115G4", "8GB RAM | 512GB NVMe SSD", "Backlit Keyboard | Win 11"]
  },

  // ==================== HEADPHONES (25 products) ====================
  {
    id: "headphones-1",
    name: "Sony WH-1000XM5 ANC",
    category: "Headphones",
    price: 29990,
    description: "The gold standard of wireless active noise-cancelling headphones, featuring industry leading dual processors, 8 microphones, and ultra comfortable wear.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    specs: ["Industry-Leading ANC", "30-Hour Battery Life", "Speak-to-Chat Technology", "Hi-Res Audio Wireless"]
  },
  {
    id: "headphones-2",
    name: "OnePlus Buds 3",
    category: "Headphones",
    price: 5499,
    description: "True wireless earbuds featuring dual dynamic drivers, high-performance 49dB active noise cancellation, and high-fidelity LHDC 5.0 spatial audio.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    specs: ["49dB Active Noise Cancellation", "Dual Drivers (10.4mm + 6mm)", "44 Hours Total Playback", "LHDC 5.0 Spatial Audio Support"]
  },
  {
    id: "headphones-3",
    name: "boAt Airdopes 131",
    category: "Headphones",
    price: 999,
    description: "India's bestselling budget earbuds featuring boAt Signature Sound, IWP instant pairing, and comfortable secure fit design.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400",
    specs: ["13mm Dynamic Drivers", "Up to 60 Hours Playback", "Insta Wake N' Pair (IWP)", "Type-C Charging Interface"]
  },
  {
    id: "headphones-4",
    name: "Apple AirPods Pro (2nd Generation)",
    category: "Headphones",
    price: 24900,
    description: "Features Apple's advanced H2 chip, delivering double the noise cancellation power, Adaptive Audio mode, and high accuracy Precision Finding case.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400",
    specs: ["Apple H2 Chip | 2x ANC", "Adaptive Audio & Transparency", "Personalized Spatial Audio", "MagSafe Case with Speaker & Loop"]
  },
  {
    id: "headphones-5",
    name: "Realme Buds T300 TWS",
    category: "Headphones",
    price: 1999,
    description: "Best-in-class budget ANC earbuds with 30dB active noise cancellation, deep bass boost drivers, and ultra-low latency gaming mode.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&q=80&w=400",
    specs: ["30dB Active Noise Cancellation", "12.4mm Dynamic Bass Driver", "40 Hours Playback | Fast Charge", "50ms Ultra-low Latency"]
  },
  {
    id: "headphones-6",
    name: "JBL Tune 760NC",
    category: "Headphones",
    price: 5999,
    description: "Over-ear wireless headphones featuring JBL Pure Bass Sound, active noise cancellation, lightweight foldable design, and multi-point connection.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400",
    specs: ["JBL Pure Bass Sound", "Active Noise Cancellation", "35h Battery with ANC (50h Off)", "Hands-Free Calls & Voice Assistants"]
  },
  {
    id: "headphones-7",
    name: "Sennheiser Accentum Wireless",
    category: "Headphones",
    price: 11990,
    description: "Delivers premium Sennheiser acoustic quality, hybrid active noise cancellation, customized sound profiles, and a staggering 50-hour playback.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400",
    specs: ["50-Hour Playtime", "Hybrid Active Noise Cancellation", "Sennheiser Signature Sound", "Fold-flat Ergonomic Design"]
  },
  {
    id: "headphones-8",
    name: "OnePlus Nord Buds 2",
    category: "Headphones",
    price: 2799,
    description: "Features 25dB active noise cancellation, BassWave bass enhancement algorithms, and IP55 water & sweat resistance.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=400",
    specs: ["25dB ANC | BassWave Tech", "12.4mm Titanium Dynamic Drivers", "36 Hours Total Battery Life", "IP55 Water & Sweat Resistant"]
  },
  {
    id: "headphones-9",
    name: "Sony WF-1000XM5 Earbuds",
    category: "Headphones",
    price: 23990,
    description: "The ultimate noise-cancelling earbuds, packing Sony's advanced Integrated Processor V2, high-res audio wireless, and bone conduction voice pick-up.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    specs: ["Astonishing Noise Cancellation", "High-Resolution Audio Wireless", "Dynamic Driver X for rich vocals", "3 Mic Voice Sensor with Bone Conduction"]
  },
  {
    id: "headphones-10",
    name: "Anker Soundcore Space One",
    category: "Headphones",
    price: 9999,
    description: "Over-ear ANC headphones that reduce voice ambient noise by up to 98%, featuring 40mm hi-res drivers and custom EQ settings.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    specs: ["98% Ambient Voice Reduction", "Hi-Res Sound via 40mm Drivers", "40-Hour Battery with ANC (55h Off)", "Easy-to-use Soundcore App EQ"]
  },
  {
    id: "headphones-11",
    name: "boAt Rockerz 450",
    category: "Headphones",
    price: 1499,
    description: "Bestselling wireless on-ear headphones with custom 40mm dynamic drivers, padded earcups, and robust playback performance.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400",
    specs: ["40mm Dynamic Drivers", "Up to 15 Hours Playback", "On-Ear Design with Padded Cups", "Dual Modes: Wireless & Wired"]
  },
  {
    id: "headphones-12",
    name: "JBL Wave Flex TWS",
    category: "Headphones",
    price: 3499,
    description: "Ergonomic open-ear stick earbuds featuring JBL Deep Bass Sound, water/dust resistance, and Smart Ambient controls.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400",
    specs: ["JBL Deep Bass Sound", "IP54 Earbuds & IPX2 Case", "Up to 32 Hours Total Battery", "TalkThru & Ambient Aware modes"]
  },
  {
    id: "headphones-13",
    name: "Sennheiser HD 450SE",
    category: "Headphones",
    price: 8990,
    description: "Over-ear headphones offering high-quality wireless sound, active noise cancellation, Alexa integration, and high speed AAC/aptX Low Latency codec support.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&q=80&w=400",
    specs: ["Active Noise Cancellation", "30-Hour Battery Life", "aptX Low Latency & AAC support", "Built-in Alexa Integration"]
  },
  {
    id: "headphones-14",
    name: "Apple AirPods (3rd Generation)",
    category: "Headphones",
    price: 19900,
    description: "Magical wireless experience with dynamic head tracking spatial audio, adaptive EQ, longer battery life, and sweat resistance.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400",
    specs: ["Spatial Audio with Dynamic Tracking", "Adaptive EQ adjusts music to ears", "Sweat and Water Resistant (IPX4)", "Up to 30 Hours Total Listening"]
  },
  {
    id: "headphones-15",
    name: "Nothing Ear (a)",
    category: "Headphones",
    price: 7999,
    description: "Eye-catching transparent design with high-performance 45dB Smart Active Noise Cancellation, punchy bass, and integration with ChatGPT voice control.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400",
    specs: ["45dB Smart ANC | Hi-Res Audio", "11mm Dynamic Driver (Ceramic)", "Up to 42.5 Hours Playback", "ChatGPT Voice Integration via Nothing App"]
  },
  {
    id: "headphones-16",
    name: "Boult Audio UFO Gaming TWS",
    category: "Headphones",
    price: 1499,
    description: "Low-latency gaming earbuds with futuristic breathing LED lights, 45ms ultra-low latency, and Zen ENC mic for clear team chats.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=400",
    specs: ["45ms Low Latency Gaming Mode", "RGB Breathing LED Lights", "Zen Quad Mic ENC | 13mm Drivers", "48 Hours Total Playtime"]
  },
  {
    id: "headphones-17",
    name: "Noise Buds VS104",
    category: "Headphones",
    price: 1299,
    description: "Highly budget-friendly earbuds with 13mm drivers, Instacharge technology (10 min charge = 150 min play), and colored earbud stems.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    specs: ["13mm Speaker Driver", "Up to 45 Hours Playback", "Instacharge (10 Min = 150 Mins)", "HyperSync Auto-Connection"]
  },
  {
    id: "headphones-18",
    name: "boAt Nirvana Ion",
    category: "Headphones",
    price: 2299,
    description: "Features a monumental 120-hour playback, hi-fidelity Crystal Bionic Sound, and dual EQ modes for balanced or bass-boosted soundscapes.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    specs: ["120 Hours Total Playtime", "Crystal Bionic Sound (Hi-Fi)", "ENx Quad Mic Technology", "60ms Low Latency Beast Mode"]
  },
  {
    id: "headphones-19",
    name: "Sony WH-CH520 Wireless",
    category: "Headphones",
    price: 4490,
    description: "On-ear wireless headphones with up to 50 hours of battery life, DSEE sound upscaling, multi-point connection, and crystal clear call quality.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400",
    specs: ["Staggering 50-Hour Battery Life", "DSEE Sound Upscaling Engine", "Multipoint Bluetooth Connection", "Comfy Adjustable Headband"]
  },
  {
    id: "headphones-20",
    name: "JBL Tune 235NC TWS",
    category: "Headphones",
    price: 3999,
    description: "Features 40dB active noise cancellation, 4-mic technology for crisp calls, and JBL Pure Bass sound with customizable app support.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400",
    specs: ["40dB Smart ANC | Ambient Aware", "Customizable EQ via JBL App", "40 Hours Playback | Speed Charge", "4-Microphone System for Call Clarity"]
  },
  {
    id: "headphones-21",
    name: "OnePlus Buds Pro 2",
    category: "Headphones",
    price: 11999,
    description: "Premium audiophile earbuds co-created with Dynaudio, featuring dual drivers, personalized spatial audio with head tracking, and Smart ANC.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&q=80&w=400",
    specs: ["MelodyBoost Dual Drivers by Dynaudio", "Personalized Spatial Audio with Head Tracking", "48dB Smart ANC | Hi-Res LHDC 5.0", "Wireless Qi Charging Case"]
  },
  {
    id: "headphones-22",
    name: "Marshall Major IV Wireless",
    category: "Headphones",
    price: 12999,
    description: "Iconic retro-styled on-ear headphones with custom-tuned dynamic drivers, a massive 80+ hours of wireless playtime, and convenient wireless charging.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400",
    specs: ["80+ Hours Wireless Playtime", "Iconic Marshall Retro Design", "Custom Tuned 40mm Drivers", "Wireless Charging Supported"]
  },
  {
    id: "headphones-23",
    name: "Sennheiser IE 200",
    category: "Headphones",
    price: 10990,
    description: "Audiophile-grade wired in-ear monitors (IEMs), designed for pure, balanced neutral sound, featuring dual-tuning options and detachable MMCX cable.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400",
    specs: ["TrueResponse Transducers", "Dual-Tuning Ear Tips (Bass/Reference)", "Detachable Braided MMCX Cable", "Ergonomic Comfortable Fit"]
  },
  {
    id: "headphones-24",
    name: "boAt Rockerz 550 Over-Ear",
    category: "Headphones",
    price: 1999,
    description: "Over-ear wireless headphones with physical isolation, 50mm dynamic drivers, and robust ergonomic design for long listening comfort.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=400",
    specs: ["50mm Moving Coil Drivers", "Up to 20 Hours Playback", "Ergonomic Cozy Over-Ear Cushions", "Physical Ambient Noise Isolation"]
  },
  {
    id: "headphones-25",
    name: "Noise Buds VS404",
    category: "Headphones",
    price: 1499,
    description: "TWS earbuds featuring environmental noise cancellation (ENC), three custom equalizer modes, and 50 hours of total playback time.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    specs: ["Quad Mic ENC for Clear Calls", "3 Built-in EQ Modes (Bass/Normal/Vocal)", "50 Hours Playback | Instacharge", "Bluetooth 5.3 Quick Pair"]
  },

  // ==================== SMARTWATCHES (25 products) ====================
  {
    id: "watch-1",
    name: "Samsung Galaxy Watch 6 (LTE)",
    category: "Smartwatches",
    price: 29999,
    description: "Premium Wear OS smartwatch featuring a larger display, specialized sleep coaching, body composition analysis (BIA), and standalone LTE connectivity.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    specs: ["Super AMOLED Always-On Screen", "Wear OS Powered by Samsung", "BIA Body Composition Sensor", "Sleep Coaching & Heart Rate Tracker"]
  },
  {
    id: "watch-2",
    name: "Apple Watch Series 9 (GPS)",
    category: "Smartwatches",
    price: 41900,
    description: "Apple's most powerful watch featuring the S9 SiP chip, a magic double-tap gesture control, brighter display, and health tracking indicators.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    specs: ["Retina Always-On (2000 nits)", "Double Tap Gesture Control", "ECG, Blood Oxygen & Temperature sensors", "Crash Detection & Fall Alerting"]
  },
  {
    id: "watch-3",
    name: "Noise ColorFit Pulse 3",
    category: "Smartwatches",
    price: 1499,
    description: "An incredibly budget-friendly smartwatch featuring a large display, Bluetooth calling functionality, and comprehensive tracking.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=400",
    specs: ["1.96\" TFT LCD Display", "Bluetooth Calling via Phone Link", "Heart Rate & SpO2 Monitoring", "Up to 7 Days Battery Backup"]
  },
  {
    id: "watch-4",
    name: "boAt Wave Sigma",
    category: "Smartwatches",
    price: 1299,
    description: "Stylish budget smart wearable featuring a crisp HD display, customizable watch faces, and interactive active sports tracking modes.",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400",
    specs: ["2.01\" HD Large Screen", "BT Calling | Built-in Dialpad", "700+ Active Activity Modes", "IP67 Dust & Splash Resistant"]
  },
  {
    id: "watch-5",
    name: "Fire-Boltt Gladiator",
    category: "Smartwatches",
    price: 2499,
    description: "Rugged and durable build inspired by premium luxury smartwatches, featuring a large bright screen and high fidelity speaker phone.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1508685096489-eabbc434f3c0?auto=format&fit=crop&q=80&w=400",
    specs: ["1.96\" High Resolution Display", "Bluetooth Dialing & Call Assistant", "NFC Access Controls (Select Devices)", "Water Resistant IP68 Rated"]
  },
  {
    id: "watch-6",
    name: "OnePlus Watch 2",
    category: "Smartwatches",
    price: 24999,
    description: "Revolutionary dual-engine architecture featuring two separate processors to deliver up to 100 hours of battery life on a full Wear OS experience.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
    specs: ["Dual-Engine: Snapdragon W5 + BES2700", "Up to 100-Hour Smart Mode Battery", "Wear OS 4 with full Google Play access", "Precision Dual-Frequency GPS tracking"]
  },
  {
    id: "watch-7",
    name: "Amazfit Active Smartwatch",
    category: "Smartwatches",
    price: 12990,
    description: "Lightweight smartwatch offering offline music, GPS tracking, AI-powered workout coaching, and Zepp Flow voice assistant.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    specs: ["1.75\" AMOLED HD Display", "Offline Music Storage & Playback", "Built-in GPS with Route Importing", "14-Day Long Battery Lifespan"]
  },
  {
    id: "watch-8",
    name: "Redmi Watch 4",
    category: "Smartwatches",
    price: 7999,
    description: "Features a premium aluminum alloy frame, rotating crown, massive AMOLED display, and HyperOS software architecture.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    specs: ["1.97\" AMOLED (600 nits)", "Aluminum Frame with Rotating Crown", "Up to 20 Days Extended Battery", "Bluetooth Phone Calls support"]
  },
  {
    id: "watch-9",
    name: "Apple Watch SE (2nd Gen)",
    category: "Smartwatches",
    price: 29900,
    description: "Essential Apple Watch features like crash detection, workout tracking, heart rate alerts, and water resistance, at a friendly price.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=400",
    specs: ["Retina OLED Display", "S8 Dual-Core SiP Processor", "Fall & Crash Detection sensors", "Swimproof Design (50m WR)"]
  },
  {
    id: "watch-10",
    name: "Samsung Galaxy Watch 4 Classic",
    category: "Smartwatches",
    price: 12999,
    description: "A fan-favorite smartwatch featuring Samsung's tactile rotating bezel, full Wear OS ecosystem access, and robust metal frame.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400",
    specs: ["Physical Rotating Navigation Bezel", "Wear OS Powered by Samsung", "Body Composition Analysis", "Stainless Steel Case Design"]
  },
  {
    id: "watch-11",
    name: "Noise Halo Plus Premium",
    category: "Smartwatches",
    price: 3999,
    description: "A premium circular metallic design with high speed AMOLED display, Bluetooth call support, and multi-day battery capability.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1508685096489-eabbc434f3c0?auto=format&fit=crop&q=80&w=400",
    specs: ["1.43\" AMOLED Circular Screen", "Stainless Steel Premium Straps", "BT Calling & Contact Syncing", "IP68 Water Resistance Protection"]
  },
  {
    id: "watch-12",
    name: "boAt Storm Call 3",
    category: "Smartwatches",
    price: 1599,
    description: "Features a high resolution screen, custom voice assistants, Bluetooth calling dialer, and multiple active sports indicators.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
    specs: ["1.83\" HD Square Display", "Bluetooth Call Dialer Support", "SPO2, Heart Rate & Sleep Tracking", "Up to 7 Days Battery Operations"]
  },
  {
    id: "watch-13",
    name: "Fire-Boltt Ninja Call Pro Plus",
    category: "Smartwatches",
    price: 1399,
    description: "Bestselling entry-level tracker with phone dialer speaker, custom widgets, quick calculators, and multi-sport metrics.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    specs: ["1.83\" HD Curved Display", "Built-in Speaker & Mic (BT Call)", "AI Voice Assistant Integration", "100+ Sports Modes tracking"]
  },
  {
    id: "watch-14",
    name: "Amazfit Pop 3R Circular",
    category: "Smartwatches",
    price: 3499,
    description: "An elegant round smartwatch featuring an AMOLED display, classic metal details, Bluetooth call control, and 12-day battery life.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    specs: ["1.43\" HD AMOLED circular screen", "Classic Metal Finish bezel", "12-Day Battery Life in basic use", "Bluetooth Phone Calls and Alerts"]
  },
  {
    id: "watch-15",
    name: "OnePlus Watch 2R",
    category: "Smartwatches",
    price: 17999,
    description: "A lighter, sporty edition of the OnePlus Watch 2, powered by dual processors, Wear OS 4, and precision fitness tracking.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=400",
    specs: ["Wear OS 4 | Snapdragon W5", "Up to 100 Hours Smart Battery", "Lightweight Aluminum Sport Case", "Dual-Frequency Precision GPS"]
  },
  {
    id: "watch-16",
    name: "CMF by Nothing Watch Pro",
    category: "Smartwatches",
    price: 3499,
    description: "Minimalist industrial design featuring a massive AMOLED display, integrated GPS, and clean custom watch widgets.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400",
    specs: ["1.96\" AMOLED (600+ nits)", "Built-in Multi-system GPS", "Heart, Sleep, Stress & SpO2 monitor", "Bluetooth Calls with AI Noise Reduc."]
  },
  {
    id: "watch-17",
    name: "Realme Watch 3 Pro",
    category: "Smartwatches",
    price: 4999,
    description: "A solid mid-range smartwatch, featuring a standalone multi-system GPS sensor, curved AMOLED screen, and clear BT calling.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1508685096489-eabbc434f3c0?auto=format&fit=crop&q=80&w=400",
    specs: ["1.78\" Curved AMOLED Screen", "Standalone Built-in GPS tracker", "Clear BT Calls | Cybersound speaker", "Up to 10 Days Battery Backup"]
  },
  {
    id: "watch-18",
    name: "Titan Crest Premium BT",
    category: "Smartwatches",
    price: 7999,
    description: "Designed by legendary Indian watchmaker Titan, offering premium mesh bands, circular AMOLED glass, and classical dials.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
    specs: ["1.43\" Circular AMOLED screen", "Premium Steel Mesh Band option", "Built-in Multi-Sport tracking", "Titan Brand Trust warranty"]
  },
  {
    id: "watch-19",
    name: "Pebble Cosmos Prime",
    category: "Smartwatches",
    price: 2999,
    description: "Features a beautiful premium metallic bezels housing, wireless charging pod, and BT voice call capabilities.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    specs: ["1.91\" Always-on HD Display", "Convenient Wireless Charging", "Real-Time Blood Oxygen and Heart rates", "IP67 Splash Resistant Construction"]
  },
  {
    id: "watch-20",
    name: "Fastrack Limitless FS1 Pro",
    category: "Smartwatches",
    price: 1999,
    description: "Youth-centric sporty design featuring a high resolution curved screen, custom dynamic wallpapers, and smart notifications.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    specs: ["1.96\" Super AMOLED Display", "SingleSync BT Calling support", "100+ Sports & Activity logs", "IP68 Dust & Water Protection"]
  },
  {
    id: "watch-21",
    name: "Noise ColorFit Ultra 3",
    category: "Smartwatches",
    price: 4499,
    description: "Large, professional looking rectangular screen, functional crown control, and full Noise Health Suite metrics tracking.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=400",
    specs: ["1.96\" Crisp AMOLED Display", "Functional Crown for Navigation", "BT Call with dialer interface", "Always-on Display support"]
  },
  {
    id: "watch-22",
    name: "boAt Lunar Tigon Circular",
    category: "Smartwatches",
    price: 2999,
    description: "An elegant circular smartwatch featuring leather strap options, customizable activity tracking, and direct voice dialers.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400",
    specs: ["1.45\" HD round AMOLED", "Direct BT Calling support", "Leather/Silicone strap options", "IP67 Dust & Sweat Protection"]
  },
  {
    id: "watch-23",
    name: "Amazfit GTR 4 Smartwatch",
    category: "Smartwatches",
    price: 16999,
    description: "Advanced dual-band circular polarized GPS tracking, direct phone calls, Alexa integration, and 14-day battery life.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1508685096489-eabbc434f3c0?auto=format&fit=crop&q=80&w=400",
    specs: ["Dual-band Polarized GPS antenna", "1.43\" Always-on AMOLED Screen", "150+ Sports modes tracking", "14-Day Battery Life | Zepp OS"]
  },
  {
    id: "watch-24",
    name: "Samsung Galaxy Watch Ultra",
    category: "Smartwatches",
    price: 59999,
    description: "Samsung's most rugged and advanced adventure watch, featuring titanium cushion design, dual-frequency GPS, and extreme battery life.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
    specs: ["47mm Aerospace Titanium Cushion", "100m Water Resistance (10 ATM)", "Dual-Frequency Precision GPS", "Up to 80 Hours Power Battery life"]
  },
  {
    id: "watch-25",
    name: "Apple Watch Ultra 2 (GPS+Cell)",
    category: "Smartwatches",
    price: 89900,
    description: "The ultimate sports and adventure watch from Apple, featuring a lightweight rugged titanium case, up to 72h battery, and bright 3000-nits screen.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    specs: ["49mm Titanium Case (MIL-STD 810H)", "Action Button | 3000-nits Retina", "Precision Dual-frequency GPS", "Up to 72 Hours in Low Power Mode"]
  }
];

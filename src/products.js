const products = [
  {
    id: 1,
    name: "Nike Kobe IX Elite High Protro",
    price: 299.95,
    description:
      "The 'What the Kobe?' Kobe IX Elite High Protro fuses heritage and bold design, showcasing a striking blend of colorways inspired by past Kobe IX drops. This modern take pays tribute to the original’s wild, expressive style. Enhanced with Nike React cushioning, the updated midsole delivers sharper responsiveness for a more connected feel on the court. To match the natural motion of your foot, the outsole now features added grip for quicker stops and sharper cuts. A Flyknit upper rounds it out with breathable support and a snug, lightweight fit.",
  },
  {
    id: 2,
    name: "Nike G.T. Cut 3 'Jewell Loyd' PER",
    price: 249.95,
    description:
      "Jewell Loyd’s game is all about creative energy—deep stepbacks, slick snatchbacks, and big plays. Her Player Edition is just as bold, designed in collaboration with a close friend and wrapped in vibrant, digitally hand-painted kaleidoscopic colors. Inspired by her imaginative play style and strong personal connections, this G.T. Cut 3 celebrates the family and friends who power her drive. The heel message, “Go be great!” is a tribute to those who keep her energized on and off the court.",
  },
  {
    id: 3,
    name: "Nike LeBron XXI 'Prime 96'",
    price: 274.95,
    description:
      "Deion Sanders’ iconic swagger left a lasting impression on a young LeBron, inspiring his pursuit of greatness. Now, as LeBron marks his 21st season, this special-edition LeBron 21 honors both legends. Taking cues from the Nike Air Diamond Turf '96, it features Deion’s signature midfoot strap and claw mark detailing, paired with Air Zoom cushioning built for today’s game. The colorway? A clear tribute to Coach Prime’s team roots.",
  },
  {
    id: 4,
    name: "Nike KD18",
    price: 219.95,
    description:
      "Kevin Durant's true edge lies in his endurance—the Slim Reaper plays with relentless energy and passion, especially when the pressure's on. This design combines Air Zoom and Nike Air for exceptional responsiveness, while a perforated upper keeps things light and breathable, letting KD go hard from tip-off to the final buzzer.",
  },
  {
    id: 5,
    name: "Nike Tatum 3 'Tie Dye'",
    price: 179.95,
    description:
      "Looking to make a statement? This Tatum 3 brings eye-catching style with a bold mix of tie-dye and distressed denim for a laid-back yet vibrant look. Built for performance, it features a sculpted fit, lightweight feel, and Cushlon 3.0 foam for smooth, responsive movement on the court.",
  },
  {
    id: 6,
    name: "Jordan 1 Retro High OG",
    price: 249.95,
    description:
      "The Jordan 1 Retro High OG brings back the legendary silhouette that started it all. With its high-top design, premium leather, and signature wings logo, this iconic sneaker delivers timeless style and a comfortable fit that stands the test of time—on and off the court.",
  },
  {
    id: 7,
    name: "Air Jordan 11 Retro Low",
    price: 249.95,
    description:
      "Step into legacy with the Air Jordan 11 Retro. Crafted with premium leather and a timeless silhouette, this iconic sneaker delivers lasting style and enduring appeal that never goes out of fashion.",
  },
  {
    id: 8,
    name: "Jordan Heir Series 'Be Seen'",
    price: 149.95,
    description:
      "Made to turn heads—just like you—the Jordan Heir Series bursts with bold, energetic color. But it’s more than just eye-catching style: a drop-in midsole boosts mobility, while the external support cage adapts to your foot for a secure, comfortable fit.",
  },
  {
    id: 9,
    name: "Under Armour Curry 4 Flotro",
    price: 224.95,
    description:
      "Precision meets style in the Curry 4 Flotro. Built for sharp cuts and smooth handles, this updated classic blends the lightweight feel of the original Curry 4 with modern tech for next-level control. A flow-inspired outsole delivers grippy traction, while the streamlined upper gives you a locked-in fit without weighing you down. Fast, fluid, and built for playmakers.",
  },
  {
    id: 10,
    name: "Jordan 5 Retro",
    price: 279.95,
    description:
      "Step back into classic style with the Jordan 5 Retro. Featuring iconic design elements like the reflective tongue and shark-tooth detailing, this sneaker blends timeless looks with modern comfort. With a cushioned midsole and durable outsole, it delivers all-day support and traction for both the court and the streets.",
  },
  {
    id: 11,
    name: "Nike JA 2",
    price: 374.95,
    description:
      "The Nike JA 2 combines sleek design with basketball-ready performance. Engineered for quick moves and solid support, it features responsive cushioning and a breathable upper that keeps you comfortable from tip-off to buzzer. Perfect for players who demand both style and substance on the court.",
  },
  {
    id: 12,
    name: "Under Armour Flow FUTR x Elite",
    price: 149.95,
    description:
      "The Under Armour Flow FUTR x Elite is built for speed and agility, with a futuristic design that pushes performance forward. Its ultra-lightweight Flow cushioning delivers smooth, grippy traction without a rubber outsole, while the breathable upper keeps you locked in and ready to move. Sleek, responsive, and made for the next generation of play.",
  },
  {
    id: 13,
    name: "Nike LeBron 22",
    price: 259.95,
    description:
      "Engineered for power and precision, the Nike LeBron 22 brings LeBron’s game-ready performance to every step. With advanced cushioning for impact protection and explosive energy return, it’s built to handle every drive, cut, and slam. A durable yet lightweight upper keeps you secure and comfortable, from tip-off to clutch time.",
  },
  {
    id: 14,
    name: "Nike LeBron TR1",
    price: 199.95,
    description:
      "Built for high-performance training, the Nike LeBron TR1 delivers stability, power, and support for every rep. With a responsive midsole and durable traction, it’s designed to keep up with explosive workouts. The reinforced upper provides a locked-in feel, helping you train like the King—on the court or in the gym.",
  },
  {
    id: 15,
    name: "Reebok Engine A",
    price: 199.95,
    description:
      "The Reebok Engine A blends futuristic design with everyday performance. With lightweight cushioning and a streamlined silhouette, it’s built for all-day comfort and versatile style. Bold lines and modern detailing make it a standout, whether you're training or taking it to the streets.",
  },
  {
    id: 16,
    name: "Reebok Preseason 94 Low",
    price: 179.95,
    description:
      "The Reebok Preseason 94 Low brings retro training vibes with a modern twist. Inspired by classic '90s performance gear, it features a low-cut design for freedom of movement and durable cushioning for all-day comfort. With bold throwback style and everyday versatility, it’s built to perform on and off the field.",
  },
  {
    id: 17,
    name: "Jordan 12 Retro 'Melo'",
    price: 219.95,
    description:
      "The Jordan 12 Retro 'Melo' pays tribute to Carmelo Anthony’s iconic early days with a clean, confident look. Featuring a premium leather upper and the signature stitched design, this classic silhouette offers responsive cushioning and bold style inspired by one of the game’s greats. On court or off, it’s built to make a statement.",
  },
  {
    id: 18,
    name: "Under Armour Curry Splash 24",
    price: 149.95,
    description:
      "The Under Armour Curry Splash 24 is built for smooth shots and quick cuts—just like Steph. Designed with lightweight cushioning and durable traction, it’s perfect for putting up shots all day long. A sleek upper delivers a secure fit, while the clean design keeps your style sharp on and off the court.",
  },
  {
    id: 19,
    name: "Puma MB.04 'Phoenix'",
    price: 219.95,
    description:
      "The Puma MB.04 Phoenix rises with bold energy and futuristic style, just like LaMelo Ball’s game. Featuring ultra-lightweight cushioning and aggressive traction, it’s built for explosive moves and nonstop speed. Fiery details and a sleek silhouette bring heat to every step—on the court or in the streets.",
  },
  {
    id: 20,
    name: "Nike Air Diamond Turf",
    price: 399.95,
    description:
      "The Nike Air Diamond Turf is a true throwback to gridiron greatness. Worn by legends like Deion Sanders, this iconic cross-trainer features the signature midfoot strap, bold overlays, and classic '90s attitude. With durable cushioning and all-purpose traction, it’s built for speed, style, and statement-making moves—on any surface.",
  },
  {
    id: 21,
    name: "Nike Air Flightposite",
    price: 249.95,
    description:
      "The Nike Air Flightposite pushes the boundaries of basketball design with its futuristic look and seamless fit. Featuring a molded Foamposite upper and zip-up shroud, it delivers lockdown support and bold, ahead-of-its-time style. Responsive cushioning and a glove-like feel make it a standout on the court and in the streets.",
  },
  {
    id: 22,
    name: "Nike Air Force 1 High 'Billie Eilish'",
    price: 279.95,
    description:
      "The Nike Air Force 1 High 'Billie Eilish' blends iconic silhouette with edgy, artist-inspired flair. Featuring bold colors and unique design touches that reflect Billie’s distinct style, this sneaker delivers classic Air Force 1 comfort with a fresh, rebellious twist—perfect for making a statement on and off the streets.",
  },
  {
    id: 23,
    name: "Jordan 6 Retro 'Georgetown'",
    price: 349.95,
    description:
      "The Jordan 6 Retro 'Georgetown' pays homage to classic college hoops with a sleek colorway inspired by the Hoyas. Featuring premium materials and iconic design cues, this silhouette combines timeless style with modern comfort and support for every game-day moment.",
  },
  {
    id: 24,
    name: "Nike Dunk Hi Retro University 'Habanero Red'",
    price: 199.95,
    description:
      "The Nike Dunk Hi Retro University 'Habanero Red' brings bold, collegiate vibes with a striking red and white colorway. Featuring premium leather construction and a high-top silhouette, this sneaker delivers classic Dunk style with standout flair—perfect for the streets or the court.",
  },
];

export default products;

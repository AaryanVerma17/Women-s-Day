import { motion } from "framer-motion";
import { Star, Award, Globe, Heart } from "lucide-react";

const inspiringWomen = [
  {
    name: "Marie Curie",
    years: "1867 - 1934",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/440px-Marie_Curie_c1920.jpg",
    role: "Physicist & Chemist",
    bio: "Marie Curie was a Polish-born physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win Nobel Prizes in two different sciences, and the first woman to become a professor at the University of Paris.",
    achievement: "First woman to win a Nobel Prize and only person to win Nobel Prizes in two different sciences",
    icon: Award,
  },
  {
    name: "Kalpana Chawla",
    years: "1962 - 2003",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg/440px-Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg",
    role: "Astronaut & Engineer",
    bio: "Kalpana Chawla was an American astronaut and aerospace engineer who was the first woman of Indian origin to go to space. She first flew on Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator.",
    achievement: "First Indian-born woman to travel to space, inspiring millions to dream beyond the sky",
    icon: Star,
  },
  {
    name: "Malala Yousafzai",
    years: "Born 1997",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Shinzo_Abe_and_Malala_Yousafzai_%281%29.jpg/440px-Shinzo_Abe_and_Malala_Yousafzai_%281%29.jpg",
    role: "Education Activist",
    bio: "Malala Yousafzai is a Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially the education of women and children in her native Swat Valley in northwest Pakistan.",
    achievement: "Youngest Nobel Prize laureate, advocating for girls' education worldwide",
    icon: Globe,
  },
  {
    name: "Rosa Parks",
    years: "1913 - 2005",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosa_Parks_%28detail%29.jpg/440px-Rosa_Parks_%28detail%29.jpg",
    role: "Civil Rights Activist",
    bio: "Rosa Parks was an American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. Her refusal to give up her seat to a white passenger on a Montgomery bus sparked a movement that ended legal segregation in America.",
    achievement: "The mother of the civil rights movement, whose courage sparked change across America",
    icon: Heart,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const InspiringWomen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10" data-testid="inspiring-women-page">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Women Who Inspire
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating historical and modern women leaders who changed the world with their courage, vision, and determination
          </p>
        </motion.div>
      </section>

      {/* Women Profiles */}
      <section className="px-4 pb-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-8"
        >
          {inspiringWomen.map((woman, index) => (
            <motion.div
              key={woman.name}
              variants={fadeInUp}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100 card-hover ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } md:flex`}
              data-testid={`profile-card-${woman.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* Image */}
              <div className="md:w-2/5 relative">
                <img
                  src={woman.image}
                  alt={woman.name}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <woman.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    {woman.role}
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {woman.name}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{woman.years}</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {woman.bio}
                </p>

                <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                  <p className="text-sm font-medium text-foreground">
                    <span className="gold-text font-semibold">Key Achievement:</span>
                    <br />
                    {woman.achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground/80 italic mb-4">
              "There is no limit to what we, as women, can accomplish."
            </p>
            <p className="text-primary font-medium">— Michelle Obama</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InspiringWomen;

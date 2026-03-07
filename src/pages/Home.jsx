import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, GraduationCap, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import FlowerBackground from "../components/FlowerBackground";

const celebratingCards = [
  {
    icon: Heart,
    title: "Mother",
    description: "The first teacher, the strongest supporter, and the heart of every home.",
  },
  {
    icon: GraduationCap,
    title: "Teacher",
    description: "Shaping minds and inspiring futures with patience and dedication.",
  },
  {
    icon: Users,
    title: "Friend",
    description: "Standing by us through every storm, celebrating every joy.",
  },
  {
    icon: Briefcase,
    title: "Leader",
    description: "Breaking barriers and paving the way for generations to come.",
  },
];

const inspiringWomen = [
  {
    name: "Marie Curie",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/440px-Marie_Curie_c1920.jpg",
    description: "The first woman to win a Nobel Prize, pioneering research in radioactivity.",
  },
  {
    name: "Kalpana Chawla",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg/440px-Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg",
    description: "The first Indian-born woman to travel to space, inspiring millions to dream beyond the sky.",
  },
  {
    name: "Malala Yousafzai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Shinzo_Abe_and_Malala_Yousafzai_%281%29.jpg/440px-Shinzo_Abe_and_Malala_Yousafzai_%281%29.jpg",
    description: "The youngest Nobel Prize laureate, advocating for girls' education worldwide.",
  },
  {
    name: "Rosa Parks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosa_Parks_%28detail%29.jpg/440px-Rosa_Parks_%28detail%29.jpg",
    description: "The mother of the civil rights movement, whose courage sparked change.",
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
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    <div className="relative" data-testid="home-page">
      <FlowerBackground />

      {/* Hero Section */}
      <section className="relative hero-bg py-24 md:py-32 lg:py-40 px-4 overflow-hidden" data-testid="hero-section">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="script-font text-3xl md:text-4xl text-primary mb-4 block">
              Celebrating
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
              Happy Women's Day
              <span className="inline-block ml-4 animate-float">💐</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
              Today we celebrate strength, resilience, kindness, and the countless women who inspire us every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 btn-shine bg-primary hover:bg-primary/90"
                data-testid="hero-share-tribute-btn"
              >
                <Link to="/write-tribute">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Share a Tribute
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/30 hover:bg-primary/5"
                data-testid="hero-explore-btn"
              >
                <Link to="/tribute-wall">
                  Explore the Tribute Wall
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 decorative-flower">🌸</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-10 decorative-flower">🌷</div>
      </section>

      {/* Why Women's Day Matters */}
      <section className="py-20 md:py-28 px-4 bg-white" data-testid="why-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Why Women's Day Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Women's Day is not just a celebration, but a moment to reflect on the incredible impact women have on our lives. From mothers and sisters to teachers, leaders, and friends — their strength and compassion shape the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider mx-auto max-w-md" />

      {/* Celebrating Women Everywhere */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-secondary/20" data-testid="celebrating-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Celebrating Women Everywhere
            </h2>
            <p className="text-muted-foreground">
              Every woman plays a unique role in shaping our world
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {celebratingCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 card-hover text-center"
                data-testid={`celebrating-card-${card.title.toLowerCase()}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inspirational Women */}
      <section className="py-20 md:py-28 px-4 bg-white" data-testid="inspirational-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Inspirational Women
            </h2>
            <p className="text-muted-foreground">
              Women who changed the world with their courage and vision
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {inspiringWomen.map((woman) => (
              <motion.div
                key={woman.name}
                variants={fadeInUp}
                className="inspire-card rounded-2xl overflow-hidden shadow-sm border border-purple-100 card-hover group"
                data-testid={`inspiring-card-${woman.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-64">
                  <img
                    src={woman.image}
                    alt={woman.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">
                      {woman.name}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {woman.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6"
              data-testid="view-all-women-btn"
            >
              <Link to="/inspiring-women">
                View All Inspiring Women
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-secondary/20 to-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="script-font text-2xl text-primary mb-4 block">
              Share Your Story
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8">
              Every woman has a story worth celebrating.
            </h2>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 btn-shine bg-primary hover:bg-primary/90"
              data-testid="cta-write-tribute-btn"
            >
              <Link to="/write-tribute">
                <Heart className="w-5 h-5 mr-2" />
                Write a Tribute
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-4 bg-white border-t border-border" data-testid="final-message-section">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground/80 italic">
              "The world shines brighter because of women everywhere."
            </p>
            <p className="mt-4 text-primary font-medium">
              Happy Women's Day 💐
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

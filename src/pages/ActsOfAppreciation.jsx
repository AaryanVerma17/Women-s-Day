import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Heart,
  ShoppingBag,
  BookOpen,
  Sparkles,
  MessageCircle,
  Gift,
  Coffee,
  Flower2,
  HandHeart,
} from "lucide-react";
import { Button } from "../components/ui/button";

const actsOfAppreciation = [
  {
    icon: Phone,
    title: "Call your mother and thank her",
    description: "Take a moment to express gratitude for everything she has done for you.",
    color: "bg-pink/20 text-pink",
  },
  {
    icon: Heart,
    title: "Appreciate a female colleague",
    description: "Acknowledge her contributions and support in the workplace.",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Support a woman-owned business",
    description: "Help empower women entrepreneurs by choosing their products or services.",
    color: "bg-gold/20 text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Share a story that inspired you",
    description: "Tell others about a woman who made a difference in your life.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Sparkles,
    title: "Encourage young girls to dream",
    description: "Mentor or support young girls in pursuing their passions and goals.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "Send a thoughtful message",
    description: "Reach out to women in your life with words of appreciation and love.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Gift,
    title: "Give a meaningful gift",
    description: "Show your appreciation with a thoughtful present that celebrates her.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Coffee,
    title: "Treat her to coffee or lunch",
    description: "Spend quality time together and show you value the relationship.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Flower2,
    title: "Send flowers with a note",
    description: "Brighten her day with beautiful flowers and heartfelt words.",
    color: "bg-pink/20 text-pink",
  },
  {
    icon: HandHeart,
    title: "Volunteer for women's causes",
    description: "Donate your time to organizations supporting women's rights and welfare.",
    color: "bg-teal-100 text-teal-600",
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
      staggerChildren: 0.08,
    },
  },
};

const ActsOfAppreciation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10" data-testid="acts-of-appreciation-page">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HandHeart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ways to Celebrate Women Today
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small acts of kindness and appreciation can make a big difference. Here are meaningful ways to honor the women in your life.
          </p>
        </motion.div>
      </section>

      {/* Acts Grid */}
      <section className="px-4 pb-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {actsOfAppreciation.map((act, index) => (
            <motion.div
              key={act.title}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 card-hover flex items-start gap-4"
              data-testid={`act-card-${index}`}
            >
              <div className={`w-12 h-12 rounded-xl ${act.color} flex items-center justify-center flex-shrink-0`}>
                <act.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {act.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to share your appreciation?
            </h2>
            <p className="text-muted-foreground mb-8">
              Write a heartfelt tribute to celebrate the special women in your life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="rounded-full px-8 bg-primary hover:bg-primary/90"
                data-testid="acts-write-tribute-btn"
              >
                <Link to="/write-tribute">
                  <Heart className="w-4 h-4 mr-2" />
                  Write a Tribute
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8"
                data-testid="acts-card-generator-btn"
              >
                <Link to="/card-generator">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Create a Card
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground/80 italic mb-4">
              "A woman is the full circle. Within her is the power to create, nurture, and transform."
            </p>
            <p className="text-primary font-medium">— Diane Mariechild</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ActsOfAppreciation;

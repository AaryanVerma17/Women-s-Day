import { useState, useRef } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { Download, Sparkles, RefreshCw, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner";

const cardTemplates = [
  {
    id: "classic",
    name: "Classic",
    bgClass: "bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50",
    textClass: "text-purple-900",
    accentClass: "text-purple-600",
  },
  {
    id: "elegant",
    name: "Elegant Gold",
    bgClass: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
    textClass: "text-amber-900",
    accentClass: "text-amber-600",
  },
  {
    id: "rose",
    name: "Rose Garden",
    bgClass: "bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-50",
    textClass: "text-rose-900",
    accentClass: "text-rose-600",
  },
  {
    id: "lavender",
    name: "Lavender Dreams",
    bgClass: "bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-50",
    textClass: "text-violet-900",
    accentClass: "text-violet-600",
  },
];

const presetMessages = [
  "Happy Women's Day to the strongest woman I know.",
  "Thank you for inspiring me every single day.",
  "Your strength and kindness light up the world.",
  "Celebrating you today and always.",
  "To the woman who makes everything possible.",
  "You are powerful, beautiful, and unstoppable.",
];

const CardGenerator = () => {
  const cardRef = useRef(null);
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState(presetMessages[0]);
  const [senderName, setSenderName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(cardTemplates[0]);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleTemplateChange = (templateId) => {
    const template = cardTemplates.find((t) => t.id === templateId);
    if (template) setSelectedTemplate(template);
  };

  const shuffleMessage = () => {
    const currentIndex = presetMessages.indexOf(message);
    const nextIndex = (currentIndex + 1) % presetMessages.length;
    setMessage(presetMessages[nextIndex]);
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `womens-day-card-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      toast.success("Card downloaded successfully!");
    } catch (error) {
      console.error("Error downloading card:", error);
      toast.error("Failed to download card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10" data-testid="card-generator-page">
      {/* Hero */}
      <section className="py-16 md:py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Create Your Card
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Design a beautiful Women's Day card to share with someone special
          </p>
        </motion.div>
      </section>

      {/* Card Generator */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 order-2 lg:order-1"
          >
            <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
              Customize Your Card
            </h2>

            {/* Template Selection */}
            <div className="mb-6">
              <Label className="text-foreground font-medium mb-2 block">
                Choose Template
              </Label>
              <Select
                value={selectedTemplate.id}
                onValueChange={handleTemplateChange}
              >
                <SelectTrigger className="h-12 border-purple-200" data-testid="template-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cardTemplates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Recipient Name */}
            <div className="mb-6">
              <Label htmlFor="recipient" className="text-foreground font-medium mb-2 block">
                To (Recipient's Name)
              </Label>
              <Input
                id="recipient"
                type="text"
                placeholder="e.g., Mom, Sarah, My Friend"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="h-12 border-purple-200"
                data-testid="recipient-input"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                Message
              </Label>
              <div className="flex gap-2">
                <Input
                  id="message"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-12 border-purple-200 flex-1"
                  data-testid="message-input"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 border-purple-200"
                  onClick={shuffleMessage}
                  title="Shuffle message"
                  data-testid="shuffle-message-btn"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Click the refresh icon to cycle through preset messages
              </p>
            </div>

            {/* Sender Name */}
            <div className="mb-8">
              <Label htmlFor="sender" className="text-foreground font-medium mb-2 block">
                From (Your Name)
              </Label>
              <Input
                id="sender"
                type="text"
                placeholder="Your name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="h-12 border-purple-200"
                data-testid="sender-input"
              />
            </div>

            {/* Download Button */}
            <Button
              onClick={downloadCard}
              disabled={isDownloading}
              className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-lg font-medium"
              data-testid="download-card-btn"
            >
              {isDownloading ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download Card
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Download and share on WhatsApp, Instagram, or any social media
            </p>
          </motion.div>

          {/* Card Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-xl font-semibold text-foreground mb-6 text-center lg:text-left">
              Preview
            </h2>

            {/* Card */}
            <div
              ref={cardRef}
              className={`${selectedTemplate.bgClass} rounded-2xl p-8 md:p-12 shadow-lg aspect-[4/5] flex flex-col justify-between relative overflow-hidden`}
              data-testid="card-preview"
            >
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-4xl opacity-30">🌸</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-30">🌷</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10">💐</div>

              {/* Content */}
              <div className="relative z-10">
                <p className="script-font text-2xl md:text-3xl text-primary mb-2">
                  Happy Women's Day
                </p>
                {recipientName && (
                  <h3 className={`font-heading text-3xl md:text-4xl font-bold ${selectedTemplate.textClass}`}>
                    Dear {recipientName}
                  </h3>
                )}
              </div>

              <div className="relative z-10 text-center py-8">
                <p className={`font-heading text-xl md:text-2xl ${selectedTemplate.textClass} leading-relaxed`}>
                  "{message}"
                </p>
              </div>

              <div className="relative z-10 text-right">
                {senderName && (
                  <p className={`font-medium ${selectedTemplate.accentClass}`}>
                    With love,
                    <br />
                    <span className="font-heading text-lg">{senderName}</span>
                  </p>
                )}
                <p className={`text-sm mt-4 ${selectedTemplate.textClass} opacity-60`}>
                  International Women's Day 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-4 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
            Tips for Sharing
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-green-500" /> WhatsApp Status
            </span>
            <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-green-500" /> Instagram Story
            </span>
            <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-green-500" /> Facebook Post
            </span>
            <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-green-500" /> Email Greeting
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardGenerator;

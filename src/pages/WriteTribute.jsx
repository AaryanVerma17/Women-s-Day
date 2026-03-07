import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Upload, X, Check, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const relationships = [
  "Mother",
  "Sister",
  "Friend",
  "Teacher",
  "Colleague",
  "Mentor",
  "Other",
];

const WriteTribute = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    submitter_name: "",
    relationship: "",
    message: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.relationship) {
      toast.error("Please select who you are celebrating");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please write a tribute message");
      return;
    }

    if (formData.message.length > 300) {
      toast.error("Message should be 300 characters or less");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/tributes`, {
        submitter_name: formData.submitter_name || "Anonymous",
        relationship: formData.relationship,
        message: formData.message.trim(),
        image: formData.image,
      });

      setIsSuccess(true);
      toast.success("Thank you for celebrating the amazing women in your life 💜");

      // Navigate after a short delay
      setTimeout(() => {
        navigate("/tribute-wall");
      }, 2000);
    } catch (error) {
      console.error("Error submitting tribute:", error);
      toast.error("Failed to submit tribute. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center px-4" data-testid="success-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-muted-foreground text-lg mb-2">
            Thank you for celebrating the amazing women in your life
          </p>
          <span className="text-3xl">💜</span>
          <p className="text-sm text-muted-foreground mt-4">
            Redirecting to the Tribute Wall...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10" data-testid="write-tribute-page">
      {/* Hero */}
      <section className="py-16 md:py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="w-12 h-12 text-primary mx-auto mb-6 fill-pink/30" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Write a Tribute
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Share your appreciation for the incredible women who inspire you
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
            {/* Name Field */}
            <div className="mb-6">
              <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                Your Name <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Anonymous"
                value={formData.submitter_name}
                onChange={(e) => setFormData((prev) => ({ ...prev, submitter_name: e.target.value }))}
                className="h-12 border-purple-200 focus:border-primary"
                data-testid="name-input"
              />
            </div>

            {/* Relationship Dropdown */}
            <div className="mb-6">
              <Label htmlFor="relationship" className="text-foreground font-medium mb-2 block">
                Who are you celebrating? <span className="text-pink">*</span>
              </Label>
              <Select
                value={formData.relationship}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, relationship: value }))}
              >
                <SelectTrigger className="h-12 border-purple-200 focus:border-primary" data-testid="relationship-select">
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  {relationships.map((rel) => (
                    <SelectItem key={rel} value={rel} data-testid={`relationship-option-${rel.toLowerCase()}`}>
                      {rel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                Tribute Message <span className="text-pink">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Write your heartfelt message here..."
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="min-h-[150px] border-purple-200 focus:border-primary resize-none"
                maxLength={300}
                data-testid="message-textarea"
              />
              <p className="text-sm text-muted-foreground mt-2 text-right">
                {formData.message.length}/300 characters
              </p>
            </div>

            {/* Image Upload */}
            <div className="mb-8">
              <Label className="text-foreground font-medium mb-2 block">
                Photo <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              
              {imagePreview ? (
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    data-testid="remove-image-btn"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-purple-200 rounded-xl cursor-pointer hover:border-primary transition-colors bg-muted/30"
                  data-testid="image-upload-label"
                >
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">Click to upload image</span>
                  <span className="text-xs text-muted-foreground/60 mt-1">Max 5MB</span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    data-testid="image-input"
                  />
                </label>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-lg font-medium"
              data-testid="submit-tribute-btn"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 mr-2" />
                  Add to the Tribute Wall
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default WriteTribute;

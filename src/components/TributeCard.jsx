import { useState } from "react";
import { Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const relationshipEmojis = {
  Mother: "👩",
  Sister: "👭",
  Friend: "🤝",
  Teacher: "📚",
  Colleague: "💼",
  Mentor: "🌟",
  Other: "💜",
};

const TributeCard = ({ tribute, onLikeUpdate }) => {
  const [likes, setLikes] = useState(tribute.likes);
  const [isLiking, setIsLiking] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = async () => {
    if (isLiking) return;
    
    setIsLiking(true);
    setShowHeart(true);
    
    try {
      const response = await axios.post(`${API}/tributes/${tribute.id}/like`);
      setLikes(response.data.likes);
      if (onLikeUpdate) {
        onLikeUpdate(tribute.id, response.data.likes);
      }
    } catch (error) {
      console.error("Error liking tribute:", error);
    } finally {
      setIsLiking(false);
      setTimeout(() => setShowHeart(false), 800);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="masonry-item"
      data-testid={`tribute-card-${tribute.id}`}
    >
      <div className="tribute-card bg-white rounded-xl p-6 shadow-sm border border-purple-100 card-hover relative">
        {/* Relationship Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">{relationshipEmojis[tribute.relationship] || "💜"}</span>
          <span className="text-sm font-medium text-primary">For My {tribute.relationship}</span>
        </div>

        {/* Optional Image */}
        {tribute.image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={tribute.image}
              alt="Tribute"
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        {/* Message */}
        <blockquote className="text-foreground text-base leading-relaxed mb-4 italic">
          "{tribute.message}"
        </blockquote>

        {/* Submitter */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <User className="w-4 h-4" />
          <span>— {tribute.submitter_name}</span>
        </div>

        {/* Like Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleLike}
            disabled={isLiking}
            className="flex items-center gap-2 text-muted-foreground hover:text-pink transition-colors group relative"
            data-testid={`like-btn-${tribute.id}`}
          >
            <Heart
              className={`w-5 h-5 transition-all duration-200 ${
                likes > 0 ? "fill-pink text-pink" : "group-hover:fill-pink/20"
              }`}
            />
            <span className="text-sm font-medium">{likes}</span>
            
            {/* Floating heart animation */}
            {showHeart && (
              <span className="absolute -top-2 left-0 heart-float text-pink">
                <Heart className="w-4 h-4 fill-pink" />
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TributeCard;

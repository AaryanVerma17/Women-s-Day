import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, PenLine, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import TributeCard from "../components/TributeCard";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TributeWall = () => {
  const [tributes, setTributes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTributes();
  }, []);

  const fetchTributes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/tributes`);
      setTributes(response.data);
    } catch (err) {
      console.error("Error fetching tributes:", err);
      setError("Unable to load tributes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLikeUpdate = (tributeId, newLikes) => {
    setTributes((prev) =>
      prev.map((t) => (t.id === tributeId ? { ...t, likes: newLikes } : t))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10" data-testid="tribute-wall-page">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="w-12 h-12 text-primary mx-auto mb-6 fill-pink/30" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tribute Wall
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of heartfelt tributes celebrating the incredible women in our lives
          </p>
          <Button
            asChild
            className="rounded-full px-8 bg-primary hover:bg-primary/90"
            data-testid="wall-write-tribute-btn"
          >
            <Link to="/write-tribute">
              <PenLine className="w-4 h-4 mr-2" />
              Add Your Tribute
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Tributes Grid */}
      <section className="px-4 pb-20 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20" data-testid="loading-state">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading tributes...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20" data-testid="error-state">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchTributes} variant="outline" data-testid="retry-btn">
              Try Again
            </Button>
          </div>
        ) : tributes.length === 0 ? (
          <div className="text-center py-20" data-testid="empty-state">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
              No Tributes Yet
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Be the first to celebrate the amazing women in your life by sharing a heartfelt tribute.
            </p>
            <Button
              asChild
              className="rounded-full px-8 bg-primary hover:bg-primary/90"
              data-testid="empty-write-tribute-btn"
            >
              <Link to="/write-tribute">
                <PenLine className="w-4 h-4 mr-2" />
                Write the First Tribute
              </Link>
            </Button>
          </div>
        ) : (
          <div className="masonry-grid" data-testid="tributes-grid">
            {tributes.map((tribute) => (
              <TributeCard
                key={tribute.id}
                tribute={tribute}
                onLikeUpdate={handleLikeUpdate}
              />
            ))}
          </div>
        )}
      </section>

      {/* Stats */}
      {!loading && tributes.length > 0 && (
        <section className="py-12 px-4 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              <span className="font-heading text-3xl font-bold text-primary">{tributes.length}</span>
              <span className="ml-2">tributes shared with love</span>
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default TributeWall;

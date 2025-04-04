
import { useState } from "react";
import { Star, Send, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { addReview, getReviewsForMovie } from "@/services/userService";
import { getCurrentUser } from "@/services/userService";
import { toast } from "sonner";

interface ReviewSectionProps {
  movieId: string;
}

const ReviewSection = ({ movieId }: ReviewSectionProps) => {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(getReviewsForMovie(movieId));
  const currentUser = getCurrentUser();

  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
  };

  const handleSubmitReview = () => {
    if (userRating === 0) {
      toast.error("Please select a rating");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please write a review");
      return;
    }

    const newReview = addReview(movieId, userRating, comment);
    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setComment("");
    toast.success("Review submitted successfully!");
  };

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>

      <div className="bg-card rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={currentUser.photoUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{currentUser.name}</p>
            <div className="flex mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 cursor-pointer ${
                    star <= (hoverRating || userRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </div>
          </div>
        </div>

        <Textarea
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-24 mb-3"
        />

        <div className="flex justify-end">
          <Button onClick={handleSubmitReview} className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Submit Review
          </Button>
        </div>
      </div>

      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Avatar>
                  <AvatarImage src={review.userPhotoUrl} alt={review.userName} />
                  <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{review.userName}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-foreground/90 ml-12">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-secondary/20 rounded-lg">
          <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;

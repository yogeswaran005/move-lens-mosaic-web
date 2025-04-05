
import { Button } from "@/components/ui/button";
import { useCompareStore } from "@/services/compareService";
import { Link } from "react-router-dom";
import { SplitSquareVertical } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface CompareButtonProps {
  movieId: string;
  mode?: "add" | "remove";
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "ghost";
}

const CompareButton = ({ 
  movieId, 
  mode = "add", 
  size = "default",
  variant = "outline" 
}: CompareButtonProps) => {
  const { addToComparison, removeFromComparison, isInComparison, comparisonList } = useCompareStore();
  const [inList, setInList] = useState(false);
  
  useEffect(() => {
    setInList(isInComparison(movieId));
  }, [movieId, isInComparison, comparisonList]);
  
  const handleToggleComparison = () => {
    if (inList) {
      removeFromComparison(movieId);
      toast.info("Removed from comparison");
    } else {
      if (comparisonList.length >= 4) {
        toast.error("You can compare up to 4 movies at a time");
        return;
      }
      addToComparison(movieId);
      toast.success("Added to comparison");
    }
  };

  if (mode === "remove") {
    return (
      <Button 
        variant={variant}
        size={size}
        onClick={() => removeFromComparison(movieId)}
        className="gap-2"
      >
        <SplitSquareVertical className="h-4 w-4" />
        Remove
      </Button>
    );
  }

  return (
    <Button 
      variant={inList ? "default" : variant}
      size={size}
      onClick={handleToggleComparison}
      className={`gap-2 ${inList ? 'bg-primary text-primary-foreground' : ''}`}
    >
      <SplitSquareVertical className="h-4 w-4" />
      {inList ? "Added to Compare" : "Compare"}
    </Button>
  );
};

export default CompareButton;

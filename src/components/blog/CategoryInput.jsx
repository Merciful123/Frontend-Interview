import { useState } from "react";
import FormField from "./FormField";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import CategoryBadges from "./CategoryBadge";

const CategoryInput = ({ categories, onAdd, onRemove }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() && !categories.includes(input.trim().toUpperCase())) {
      onAdd(input.trim().toUpperCase());
      setInput('');
    }
  };

  return (
    <FormField label="Categories" id="category">
      <div className="flex gap-2 mb-2">
        <Input
          id="category"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., CA FOUNDATION, TAXATION, AUDITING"
        />
        <Button type="button" onClick={handleAdd} variant="secondary">
          Add
        </Button>
      </div>
      <CategoryBadges
        categories={categories} 
        variant="secondary" 
        onRemove={onRemove}
      />
    </FormField>
  );
};

export default CategoryInput;
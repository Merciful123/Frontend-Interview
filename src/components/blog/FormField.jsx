import { Label } from "@/components/ui/label"

const FormField = ({ label, id, children, required }) => (
  <div >
    <Label htmlFor={id} className="mb-2">
      {label} {required && '*'}
    </Label>
    {children}
  </div>
);

export default FormField;
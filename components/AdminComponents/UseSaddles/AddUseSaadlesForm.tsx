import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddUseSaadlesForm = () => {
  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form>
        <h1 className="text-2xl font-extrabold text-primary-text mb-5">
          Add Saddles
        </h1>

        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Title*</Label>
          <Input type="text" className="cmn-input" placeholder="Enter Title" />
        </div>
      </form>
    </div>
  );
};

export default AddUseSaadlesForm;

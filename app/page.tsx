import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TravelInsuranceDialog from "./(main)/travel/_components/TravelDiolog";

export default function Home() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-aeroportRegular w-full md:w-auto">
          Оформить страховку
        </Button>
      </DialogTrigger>
      <TravelInsuranceDialog
        country="string"
        countryId={12}
        startDate={new Date()}
        endDate={new Date()}
        insuranceSumId={12}
      />
    </Dialog>
  );
}

import CardGrid from "@/components/microcredits/CardGrid";
import Faq from "@/components/microcredits/Faq";
import Hero from "@/components/microcredits/Hero";
import LoanForm from "@/components/microcredits/LoanForm";
import DataTable from "@/components/microcredits/Table";

export default function Home() {
  return (
    <div className="p-10 space-y-8">
      <Hero
        title="Получай самые выгодные предложения"
        desc="orem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente nihil ut eaque vero pariatur veritatis. Consectetur aut sed corrupti sint nemo in laudantium, amet, consequatur, excepturi totam quibusdam magni?"
      />
      <LoanForm />
      <CardGrid />
      <Faq />
      <DataTable />
    </div>
  );
}

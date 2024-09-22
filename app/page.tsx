import CardGrid from "@/components/CardGrid";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LoanForm from "@/components/LoanForm";
import DataTable from "@/components/Table";

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

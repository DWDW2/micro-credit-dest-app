import CardGrid from "./_components/CardGrid";
import Faq from "./_components/Faq";
import Hero from "./_components/Hero";
import LoanForm from "./_components/LoanForm";
import DataTable from "./_components/Table";

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

import Navbar from "@/components/Navbar";
import PricingPlans from "@/components/PricingPlans";

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <PricingPlans />
      </main>
    </>
  );
}
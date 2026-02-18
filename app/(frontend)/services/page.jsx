import ServicesHero from "../../components/services/ServicesHero";
 import ServicesList from "../../components/services/ServicesList";
 import ServicesBridge from "../../components/services/ServicesBridge";
export default function ServicesPage() {
  return (
    <>
      
       <div className="bg-[#d8d8d8] text-black">
       <ServicesHero />
       <ServicesList />
      < ServicesBridge/>
       </div>
    </>
  );
}

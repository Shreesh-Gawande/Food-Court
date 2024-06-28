

import Hero from"@/components/layout/Hero"
import HomeMenu from"@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
     
     <Hero/>
     <HomeMenu/>
     <section className="text-center my-16">
      <SectionHeaders
      subHeader="Our Story"
      mainHeader="About Us"/>
      <div className="flex flex-col gap-4 max-w-2xl max-auto mt-4 
      text-gray-500  ">
      <p  >
        Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Recusandae nostrum totam pariatur aliquid! Vero
         blanditiis quas dolore autem amet perferendis fugit 
         officia consectetur 
        aliquid sint commodi architecto, unde illum rerum!
      </p>
       <p >
        Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Recusandae nostrum totam pariatur aliquid! Vero
         blanditiis 
         </p>
         <p>quas dolore autem amet perferendis fugit 
         officia consectetur 
        aliquid sint commodi architecto, unde illum rerum!
      </p>
      </div>
     </section>
     <section className="text-center my-8">
      <SectionHeaders
      subHeader="Don't Hesitate"
      mainHeader="Contact Us"/>
<div className="mt-8">
<a className="text-4xl underline text-gray-500 " href="+91123456789">+91123456789</a>
</div>
     </section>
    
    </>
  );
}

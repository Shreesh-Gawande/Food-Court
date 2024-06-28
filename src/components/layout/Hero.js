import Image from 'next/image';
import Right from '../icons/Right';

export default function Hero() {
  return (
    <section className="hero mt-4">
        <div className="py-12">
      <h1 className="text-4xl font-semibold">Everything<br/>
       is better
       <br/> with a<span className="text-red-500"> Pizza </span></h1>
      <p className="my-6 text-gray-500 text-sm">
        Pizza is the missing piece that makes everyday complete, a simple yet delicious joy of life
      </p>
      <div className="flex gap-4 text-sm">
        <button className="bg-red-500 uppercase flex  items-center gap-2 rounded-full text-white px-4 py-2">
            Order Now
            <Right/>
            </button>
        <button className="flex gap-2 text-gray-600 font-semibold py-2">
            Lern More
            <Right/>
            </button>
      </div>
      </div>
      <div className=" relative">
      <Image src="/pizza.png" alt="pizza" layout={'fill'}
       objectFit={'contain'} />
       </div>
    </section>
  );
}


import Image from 'next/image';
export default function HomeMenu (){
    return(
        <section>
            <div className="absolute h-full left-0 right-0 w-full
            justify-start">
            <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src="/sallad1.png"  alt="sallad" width={109} height={189}/>
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src="/sallad2.png" alt="sallad" width={109} height={189}/>
                </div>
                </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-500 
                font-semibold leading-4">
                    CheckOut
                    </h3>
                <h2 className="text-red-500 text-4xl font-bold 
                italic">Menu
                </h2>
            </div>
            <div className="grid grid-col-3 gap-4">

            </div>
        </section>
    )
}
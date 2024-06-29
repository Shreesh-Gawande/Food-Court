import Image from 'next/image';
export default function RegisterPage (){
    return(
        <div>\
            <section>
                <h1 className="text-center text-red-500 
                mb-6 text-4xl">
                Register
                </h1>
            <form className="block max-w-xs mx-auto ">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
                <div className="text-center my-4 text-gray-500">or login with provider</div>
                <button className="flex gap-4 justify-center">
                    <Image src="/google.png" alt="" width={24} height={24}/>
                    Login with Google</button>
            </form>
            </section>
        </div>
    )
}
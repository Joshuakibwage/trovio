import Image from "next/image";


const Home = () => {
  return (
    <div className="w-[96%] mx-auto py-4 ">

      <section className="w-full min-h-screen">
        <div className="w-full h-full">
          <Image 
            src="/images/hero.jpg"
            alt="Hero image"
            width={1920}
            height={600}
            className=" w-full h-full rounded-md"
          />
        </div>

      </section>
    </div>
  )
}

export default Home;
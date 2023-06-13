import Image from "next/image";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    {/* If we increase the size of the scrolling then we can access the buttons from LeftSide */}
    <Image src="/assets/images/dashboard.png" alt="Guy" width={900} height={900} className="object-cover " />
    <Image src="/assets/images/dashboard.png" alt="Guy" width={900} height={900} className="object-cover " />

  </section>
);

export default Home;

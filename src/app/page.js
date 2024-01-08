import Image from 'next/image'


export default function Home() {
  return (
    <main className='main'>
      <section className='carrusel'>
    <Image className='image-1'
      src="/assets/img/carrusel/carrusel-1.jpg"
      alt=""
      width={1110}
      height={500} />

    
  <Image className='image-2'
      src="/assets/img/carrusel/carrusel-2.jpg"
      alt=""
      width={1110}
      height={500} />

</section>
    </main>
  )
}

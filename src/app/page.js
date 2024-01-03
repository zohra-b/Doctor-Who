import Image from 'next/image'
import './page.module.css'

export default function Home() {
  return (
    <main className='main'>
      <section className='carrusel'>
<div className='slider'>
    <Image className='images'
      src="/assets/img/carrusel/carrusel-1.webp"
      alt=""
      width={1140}
      height={536} />
     
    
  <Image className='images'
      src="/assets/img/carousel/carrusel-2.jpg"
      alt=""
      width={1140}
      height={536}
            
     
    />

</div>





</section>
    </main>
  )
}

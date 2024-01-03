import {Montserrat, Lato} from 'next/font/google'

const montserratSemiBold= Montserrat({
    weight: ['500'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })


const latoBold= Lato({
    weight: ['700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

  export {montserratSemiBold, latoBold};

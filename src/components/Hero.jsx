import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

    const videoRef = useRef();
    const ismobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {

        document.fonts.ready.then(() => {
            const heroSplit = new SplitText('.title', { type: 'chars, words' });
            const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

            heroSplit.chars.forEach((char) => char.classList.add('text-gradient')) // adding our calssname splite words

            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1,
                ease: 'expo.out',
                stagger: 0.06
            });

            gsap.from(paragraphSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.8,
                ease: 'expo.out',
                stagger: 0.06,
                delay: 1,
            })
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        const startValue = ismobile ? "top 50%" : "center 60%";
        const endValue = ismobile ? "120% top" : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        });

        //todo // SEE NOTE
        videoRef.current.onloadedmetadata = () => {
            // console.log(videoRef.current.duration) // 12.992  (0.12s)
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                // onUpdate: () => {
                //     console.log('Current Time:', videoRef.current.currentTime.toFixed(2));
                // },
            });
        }

    }, []); // [] like only run first 

    return (
        <>
            <section id='hero' className='noisy'>

                <h1 className='title'>MOJITO</h1>
                <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

                <div className='body'>
                    <div className='content'>

                        <div className='space-y-5 hidden md:block'>
                            <p>Cool. Crip. Classic</p>
                            <p className='subtitle'>
                                Sip the Spirit <br /> of summer
                            </p>
                        </div>

                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore hic deleniti quia inventore repudiandae odit iure ipsum? Et, animi?
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>

                    </div>
                </div>


            </section>

            <div className='video absolute inset-0'>
                <video src='/videos/test.mp4'
                    ref={videoRef}
                    muted
                    playsInline // The video remains "inline" (in the flow of the page). The video remains "inline" (in the flow of the page).
                    // By default, iPhones would launch video playback in fullscreen.
                    //playsInline keeps the video embedded in the page layout.
                    preload='auto' // Loads video data early (or not)	auto: fast play, none: save data
                />
            </div>
        </>
    )
}

export default Hero

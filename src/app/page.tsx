'use client'

import Image from 'next/image'
import './style.css'
import titleshap from '../asset/title-shap.png'
import aboutbanner from '../asset/about_banner.png'
import work1 from '../asset/work-1.jpg'
import work2 from '../asset/work-2.jpg'
import work3 from '../asset/work-3.jpg'
import work4 from '../asset/work-4.jpg'
import work5 from '../asset/work-5.jpg'
import work6 from '../asset/work-6.jpg'
import testimonial1 from '../asset/testimonial_1.png'
import testimonial2 from '../asset/testimonial_2.png'
import testimonial3 from '../asset/testimonial_3.png'
import brand1 from '../asset/brand_1.png'
import brand2 from '../asset/brand_2.png'
import brand3 from '../asset/brand_3.png'
import brand4 from '../asset/brand_4.png'
import brand5 from '../asset/brand_5.png'
import logo from '../asset/logo.png'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Home() {
  const elem: HTMLSpanElement | null =
    typeof window !== 'undefined'
      ? document?.getElementById('profession_text')
      : null
  const el = useRef<HTMLSpanElement>(elem)

  useEffect(() => {
    if (el && el.current) {
      const typed = new Typed(el.current, {
        strings: ['Web Developer', 'Frontend', 'Backend', 'DevOps'],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <div className="top">
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <Image src={logo} alt="Logo" />
          </a>

          <nav className="nav_menu">
            <ul className="nav_list">
              <li>
                <a href="#home" className="nav_link">
                  Home
                </a>
              </li>
              <li>
                <a href="#service" className="nav_link">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="nav_link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav_link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#work" className="nav_link">
                  Work
                </a>
              </li>
              <li>
                <a href="#team" className="nav_link">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="nav_link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button className="nav_toggle">
            <div className="icon_menu"></div>
          </button>
        </div>
      </header>

      <main>
        <section className="home" id="home">
          <div className="container">
            <div className="home_content">
              <h2 className="home_title">I am web Developer</h2>

              <div className="typing_text">
                <span className="profession_text" ref={el}></span>
              </div>

              <ul className="skills_list">
                <li>
                  <span className="span">Frontend</span>
                </li>
                <li>
                  <span className="span">Backend</span>
                </li>
                <li>
                  <span className="span">DevOps</span>
                </li>
              </ul>

              <div className="social_list">
                <div className="social_link">
                  <i className="bx bxl-instagram"></i>
                </div>
                <div className="social_link">
                  <i className="bx bxl-apple"></i>
                </div>
                <div className="social_link">
                  <i className="bx bxl-tumblr"></i>
                </div>
                <div className="social_link">
                  <i className="bx bxl-skype"></i>
                </div>
                <div className="social_link">
                  <i className="bx bxl-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section service" id="service">
          <div className="container">
            <div className="title_wrapper">
              <h3 className="section_title">Our Porvide Service</h3>
              <Image
                src={titleshap}
                className="title_shape"
                width={100}
                height={100}
                alt=""
              />
            </div>

            <ul className="service_list grid">
              <li className="service_item">
                <div className="service_card">
                  <div className="service_icon">
                    <i className="bx bx-book-open"></i>
                  </div>

                  <div className="service_content">
                    <h3 className="service_title">Photography</h3>

                    <p className="service_desc">
                      It will seem like simplified lish, as a skeptical friend
                      of value into every.
                    </p>
                  </div>
                </div>
              </li>

              <li className="service_item">
                <div className="service_card">
                  <div className="service_icon">
                    <i className="bx bx-palette"></i>
                  </div>

                  <div className="service_content">
                    <h3 className="service_title">Our Branding</h3>

                    <p className="service_desc">
                      It will seem like simplified lish, as a skeptical friend
                      of value into every.
                    </p>
                  </div>
                </div>
              </li>

              <li className="service_item">
                <div className="service_card">
                  <div className="service_icon">
                    <i className="bx bx-desktop"></i>
                  </div>

                  <div className="service_content">
                    <h3 className="service_title">Devlopment</h3>

                    <p className="service_desc">
                      It will seem like simplified lish, as a skeptical friend
                      of value into every.
                    </p>
                  </div>
                </div>
              </li>

              <li className="service_item">
                <div className="service_card">
                  <div className="service_icon">
                    <i className="bx bx-target-lock"></i>
                  </div>

                  <div className="service_content">
                    <h3 className="service_title">Marketing</h3>

                    <p className="service_desc">
                      It will seem like simplified lish, as a skeptical friend
                      of value into every.
                    </p>
                  </div>
                </div>
              </li>

              <li className="service_item">
                <div className="service_card">
                  <div className="service_icon">
                    <i className="bx bx-camera"></i>
                  </div>

                  <div className="service_content">
                    <h3 className="service_title">Copy Writing</h3>

                    <p className="service_desc">
                      It will seem like simplified lish, as a skeptical friend
                      of value into every.
                    </p>
                  </div>
                </div>
              </li>

              <li className="service_item">
                <div className="service_card">
                  <div className="service_icon">
                    <i className="bx bx-mobile"></i>
                  </div>

                  <div className="service_content">
                    <h3 className="service_title">App Devlopment</h3>

                    <p className="service_desc">
                      It will seem like simplified lish, as a skeptical friend
                      of value into every.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="about_container grid">
              <div className="about_banner">
                <Image src={aboutbanner} alt="" className="img_cover" />
              </div>

              <div className="about_content">
                <h3 className="bio">My Biography</h3>

                <h4>A Lead Web Developer based in USA</h4>

                <p className="bio_desc">
                  Im a Freelancer Front-end Developer with 3 years of perience.
                  Im from San Francisco. I code and create web elements for
                  amazing ple around the world. I like work with new people.
                </p>

                <div className="about_info">
                  <div className="info_wrapper">
                    <h3 className="name">Name</h3>
                    <span className="span">Web Monster</span>
                  </div>
                  <div className="info_wrapper">
                    <h3 className="name">Twitter</h3>
                    <span className="span">freelancer 78</span>
                  </div>
                  <div className="info_wrapper">
                    <h3 className="name">Email</h3>
                    <span className="span">info@example.com</span>
                  </div>
                  <div className="info_wrapper">
                    <h3 className="name">Phone</h3>
                    <span className="span">+3 608-736-1802</span>
                  </div>
                </div>
                <div className="about_buttons">
                  <a href="#" className="button hire">
                    Hire Me
                  </a>
                  <a href="#" className="button download">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="container">
            <div className="skills_container">
              <div className="skills_items grid">
                <div className="skills_wrapper">
                  <div className="skills_title">
                    <h3>Web Development</h3>
                  </div>

                  <div className="progress_container">
                    <div
                      className="progress_bar"
                      style={{
                        width: '80%',
                        animationDuration: '1.5s',
                        animationDelay: '.2s',
                        animationName: 'fadeInLeft',
                        visibility: 'visible',
                      }}
                    >
                      <span className="percent">80%</span>
                    </div>
                  </div>
                </div>

                <div className="skills_wrapper">
                  <div className="skills_title">
                    <h3>Ui Designer</h3>
                  </div>

                  <div className="progress_container">
                    <div
                      className="progress_bar"
                      style={{
                        width: '90%',
                        animationDuration: '1.5s',
                        animationDelay: '.2s',
                        animationName: 'fadeInLeft',
                        visibility: 'visible',
                      }}
                    >
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </div>

                <div className="skills_wrapper">
                  <div className="skills_title">
                    <h3>Development</h3>
                  </div>

                  <div className="progress_container">
                    <div
                      className="progress_bar"
                      style={{
                        width: '70%',
                        animationDuration: '1.5s',
                        animationDelay: '.2s',
                        animationName: 'fadeInLeft',
                        visibility: 'visible',
                      }}
                    >
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </div>

                <div className="skills_wrapper">
                  <div className="skills_title">
                    <h3>Photography</h3>
                  </div>

                  <div className="progress_container">
                    <div
                      className="progress_bar"
                      style={{
                        width: '85%',
                        animationDuration: '1.5s',
                        animationDelay: '.2s',
                        animationName: 'fadeInLeft',
                        visibility: 'visible',
                      }}
                    >
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </div>

                <div className="skills_wrapper">
                  <div className="skills_title">
                    <h3>SEO & Marketing</h3>
                  </div>

                  <div className="progress_container">
                    <div
                      className="progress_bar"
                      style={{
                        width: '70%',
                        animationDuration: '1.5s',
                        animationDelay: '.2s',
                        animationName: 'fadeInLeft',
                        visibility: 'visible',
                      }}
                    >
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </div>

                <div className="skills_wrapper">
                  <div className="skills_title">
                    <h3>Design</h3>
                  </div>

                  <div className="progress_container">
                    <div
                      className="progress_bar"
                      style={{
                        width: '90%',
                        animationDuration: '1.5s',
                        animationDelay: '.2s',
                        animationName: 'fadeInLeft',
                        visibility: 'visible',
                      }}
                    >
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="container">
            <div className="title_wrapper">
              <h3 className="section_title">Our Success Work</h3>
              <Image src={titleshap} alt="" className="title_shape" />
            </div>
            <div className="work_list grid">
              <div className="work_item">
                <div className="work_banner img-holder">
                  <Image src={work1} alt="" className="img_cover" />

                  <div className="work_content">
                    <div className="work_wrapper">
                      <div className="card_icon">
                        <i className="bx bx-image"></i>
                      </div>

                      <h3 className="card_title">Mockup Collection</h3>
                      <p className="card_desc">Developer, Graphic</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work_item">
                <div className="work_banner img-holder">
                  <Image src={work2} alt="" className="img_cover" />

                  <div className="work_content">
                    <div className="work_wrapper">
                      <div className="card_icon">
                        <i className="bx bx-image"></i>
                      </div>

                      <h3 className="card_title">Mockup Photgraphy</h3>
                      <p className="card_desc">Graphic, Photography</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work_item">
                <div className="work_banner img-holder">
                  <Image src={work3} alt="" className="img_cover" />

                  <div className="work_content">
                    <div className="work_wrapper">
                      <div className="card_icon">
                        <i className="bx bx-image"></i>
                      </div>

                      <h3 className="card_title">Web Development</h3>
                      <p className="card_desc">Graphic, Web Design</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work_item">
                <div className="work_banner img-holder">
                  <Image src={work4} alt="" className="img_cover" />

                  <div className="work_content">
                    <div className="work_wrapper">
                      <div className="card_icon">
                        <i className="bx bx-image"></i>
                      </div>

                      <h3 className="card_title">Web Design</h3>
                      <p className="card_desc">Graphic, Web Design</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work_item">
                <div className="work_banner img-holder">
                  <Image src={work5} alt="" className="img_cover" />

                  <div className="work_content">
                    <div className="work_wrapper">
                      <div className="card_icon">
                        <i className="bx bx-image"></i>
                      </div>

                      <h3 className="card_title">Web Time Work</h3>
                      <p className="card_desc">Graphic, Photography</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work_item">
                <div className="work_banner img-holder">
                  <Image src={work6} alt="" className="img_cover" />

                  <div className="work_content">
                    <div className="work_wrapper">
                      <div className="card_icon">
                        <i className="bx bx-image"></i>
                      </div>

                      <h3 className="card_title">Our Success Work</h3>
                      <p className="card_desc">Developer, Photography</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="count">
          <div className="container">
            <div className="count_content">
              <div className="count_wrapper">
                <h3>
                  <span className="counter" data-counter="47"></span>+
                </h3>
                <h4 className="count_desc"> Happy Customar</h4>
              </div>
              <div className="count_wrapper">
                <h3>
                  <span className="counter" data-counter="43"></span>+
                </h3>
                <h4 className="count_desc"> Complate Work</h4>
              </div>
              <div className="count_wrapper">
                <h3>
                  <span className="counter" data-counter="56"></span>+
                </h3>
                <h4 className="count_desc">Our Award</h4>
              </div>
              <div className="count_wrapper">
                <h3>
                  <span className="counter" data-counter="97"></span>+
                </h3>
                <h4 className="count_desc">Company Membar</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="section team" id="team">
          <div className="container">
            <div className="title_wrapper">
              <h3 className="section_title">How It All Started</h3>
              <Image src={titleshap} alt="" className="title_shape" />
            </div>

            <div className="team_list grid">
              <div className="team_item">
                <div className="team_banner">
                  <Image src={testimonial1} alt="" className="img_cover" />
                </div>

                <div className="team_content">
                  <h3 className="team_title">fred lambert</h3>
                  <p className="team_desc">Senior Developer</p>

                  <ul className="team_social-list">
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="team_item">
                <div className="team_banner">
                  <Image src={testimonial2} alt="" className="img_cover" />
                </div>

                <div className="team_content">
                  <h3 className="team_title">Roshan Bhula</h3>
                  <p className="team_desc">Seo Marketing</p>

                  <ul className="team_social-list">
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="team_item">
                <div className="team_banner">
                  <Image src={testimonial3} alt="" className="img_cover" />
                </div>

                <div className="team_content">
                  <h3 className="team_title">Rokas Sutkaits</h3>
                  <p className="team_desc">Photgraphy</p>

                  <ul className="team_social-list">
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li className="team_social_item">
                      <a href="#" className="team_social-link">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section brand">
          <div className="container">
            <div className="swiper brand_container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Image src={brand1} className="img_cover" alt="" />
                </div>
                <div className="swiper-slide">
                  <Image src={brand2} className="img_cover" alt="" />
                </div>
                <div className="swiper-slide">
                  <Image src={brand3} className="img_cover" alt="" />
                </div>
                <div className="swiper-slide">
                  <Image src={brand4} className="img_cover" alt="" />
                </div>
                <div className="swiper-slide">
                  <Image src={brand5} className="img_cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="copyright">
            Copyright &copy; Jonata Serpa all rights reserved.
          </p>
        </div>
      </footer>

      <a href="#top" className="btn-top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </div>
  )
}

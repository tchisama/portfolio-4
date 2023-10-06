import React, { useState } from 'react';
import "@/app/projects/demo2.css"
import "@/app/projects/base.css"
// import "@/app/projects/cursor"

const ComponentName = () => {        
    return (
        <>

        <div className="rotate">
          <main data-scroll-container="">
            <div className="content">
              <div className="gallery">
                <div className="gallery__text">
                  <span
                    className="gallery__text-inner"
                    data-scroll=""
                    data-scroll-speed={1}
                  >
                    Projects
                    <span
                      data-scroll=""
                      data-scroll-speed={8}
                      className="gallery__text-inner"
                    >
                      Showcase
                    </span>
                  </span>
                </div>
                <figure className="gallery__item">
                  <div className="gallery__item-img">
                    <div
                      className="gallery__item-imginner"
                      style={{
                        backgroundImage:
                          "url(https://mir-s3-cdn-cf.behance.net/projects/404/49390d153765895.Y3JvcCwxNTM1LDEyMDEsMTMzLDA.jpg)"
                      }}
                      data-scroll=""
                      data-scroll-speed={-1.0}
                    />
                  </div>
                  <figcaption className="gallery__item-caption">
                    <h2
                      className="gallery__item-title"
                      data-scroll=""
                      data-scroll-speed={1}
                    >
                      Uroboros
                    </h2>
                    <span
                      className="gallery__item-number"
                      data-scroll=""
                      data-scroll-speed="1.4"
                    >
                      01
                    </span>
                    <p className="gallery__item-tags">
                      <span>#cloud</span>
                      <span>#lake</span>
                      <span>#frog</span>
                    </p>
                    <a className="gallery__item-link">explore</a>
                  </figcaption>
                </figure>
                <figure className="gallery__item">
                  <div className="gallery__item-img">
                    <div
                      className="gallery__item-imginner"
                      style={{
                        backgroundImage:
                          "url(https://firebasestorage.googleapis.com/v0/b/tchisama-1cc2f.appspot.com/o/projects%20images%2FFrame%205%20(2).png?alt=media&token=3aa2bc49-adcf-4b72-b5e9-094b68498e1c)"
                      }}
                      data-scroll=""
                      data-scroll-speed={-1.0}
                    />
                  </div>
                  <figcaption className="gallery__item-caption">
                    <h2
                      className="gallery__item-title"
                      data-scroll=""
                      data-scroll-speed={1}
                    >
                      Waitron
                    </h2>
                    <span
                      className="gallery__item-number"
                      data-scroll=""
                      data-scroll-speed="1.4"
                    >
                      02
                    </span>
                    <p className="gallery__item-tags">
                      <span>#tent</span>
                      <span>#flower</span>
                      <span>#love</span>
                    </p>
                    <a className="gallery__item-link">explore</a>
                  </figcaption>
                </figure>
                <figure className="gallery__item">
                  <div className="gallery__item-img">
                    <div
                      className="gallery__item-imginner"
                      style={{
                        backgroundImage:
                          "url(https://firebasestorage.googleapis.com/v0/b/tchisama-1cc2f.appspot.com/o/projects%20images%2FFrame%207.png?alt=media&token=1f8bddf2-9ff4-460c-8307-1236b87634a0)"
                      }}
                      data-scroll=""
                      data-scroll-speed={-1.0}
                    />
                  </div>
                  <figcaption className="gallery__item-caption">
                    <h2
                      className="gallery__item-title"
                      data-scroll=""
                      data-scroll-speed={1}
                    >
                      Soucouyant
                    </h2>
                    <span
                      className="gallery__item-number"
                      data-scroll=""
                      data-scroll-speed="1.4"
                    >
                      03
                    </span>
                    <p className="gallery__item-tags">
                      <span>#water</span>
                      <span>#bottle</span>
                      <span>#hand</span>
                    </p>
                    <a className="gallery__item-link">explore</a>
                  </figcaption>
                </figure>
                <div className="gallery__text">
                  <span
                    className="gallery__text-inner"
                    data-scroll=""
                    data-scroll-speed={3}
                  >
                    lets work
                  </span>
                  <span
                    data-scroll=""
                    data-scroll-speed={1}
                    className="gallery__text-inner"
                  >
                    togther
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
        <svg className="cursor" width={20} height={20} viewBox="0 0 20 20">
          <circle className="cursor__inner" cx={10} cy={10} r={5} />
        </svg>
      </>
      

    )
}
export default ComponentName;
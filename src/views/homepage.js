import React from 'react'

import { Helmet } from 'react-helmet'

import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="homepage-homepage">
        <div className="homepage-about-as">
          <img
            alt="Rectangle4189"
            src="/external/rectangle4189-gqa-200h.png"
            className="homepage-rectangle4"
          />
          <img
            alt="Rectangle6190"
            src="/external/rectangle6190-fwu7-200h.png"
            className="homepage-rectangle6"
          />
          <span className="homepage-text">
            <span>Pencil Shop</span>
          </span>
          <span className="homepage-text02">
            <span>Read more</span>
          </span>
        </div>
        <span className="homepage-text04">
          <span> Copyright 2021 All Rights Reserved Company Name.</span>
        </span>
        <span className="homepage-text06">
          <span>
            Copyright 2023 All Rights Reserved.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt="Rectangle161124"
          src="/external/rectangle161124-foa9-1300w.png"
          className="homepage-rectangle16"
        />
        <div className="homepage-frame2">
          <span className="homepage-text08">
            <span>Learn how to enhance your websites</span>
          </span>
          <span className="homepage-text10">
            <span>Design for DEV</span>
          </span>
        </div>
        <div className="homepage-chevronleftsolid2"></div>
        <span className="homepage-text12">
          <span>
            Lorem ipsum dolor sit amet consectetur. A nunc tellus quisque auctor
            molestie quis facilisis ultrices amet. In consectetur volutpat in
            pellentesque a mauris convallis purus. Dui neque eleifend sit tempor
            aliquam id. Leo a vestibulum ut scelerisque. Enim nunc diam dolor ac
            risus sed. Sodales morbi in ornare sit nisi id malesuada.
          </span>
        </span>
        <div className="homepage-home-page">
          <div className="homepage-frame1"></div>
        </div>
        <img
          alt="fontainemechanicalpencilPFOMPremovebgpreview1422"
          src="/external/fontainemechanicalpencilpfompremovebgpreview1422-cc37-400h.png"
          className="homepage-fontainemechanicalpencil-pfom-premovebgpreview1"
        />
        <img
          alt="Rectangle17423"
          src="/external/rectangle17423-4pmk-300h.png"
          className="homepage-rectangle17"
        />
        <div className="homepage-group2">
          <div className="homepage-group1">
            <span className="homepage-text14">
              <span>
                Copyright 2023 All Rights Reserved.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

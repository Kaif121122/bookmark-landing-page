import React, { useState } from 'react'
import firstSliderImg from '../images/illustration-features-tab-1.svg'
import secondSliderImg from '../images/illustration-features-tab-2.svg'
import thirdSliderImg from '../images/illustration-features-tab-3.svg'

import chromeImg from '../images/logo-chrome.svg'
import fireFoxImg from '../images/logo-firefox.svg'
import operaImg from '../images/logo-opera.svg'


const Main = () => {

  const sliderArr = [
    {
      image: firstSliderImg,
      heading: "Bookmark in one click",
      para: " Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",

    },
    {
      image: secondSliderImg,
      heading: "Intelligent search",
      para: " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",

    },
    {
      image: thirdSliderImg,
      heading: "Share your bookmarks",
      para: " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",

    }
  ]

  const extensionArr = [
    {
      image: chromeImg,
      heading: "Add to Chrome",
      para: " Minimum version 62"
    }
    ,
    {
      image: fireFoxImg,
      heading: " Add to Firefox",
      para: "Minimum version 55"
    },
    {
      image: operaImg,
      heading: "Add to Opera",
      para: "Minimum version 46"
    }
  ]

  const questionsArr = [
    {
      question: "What is Bookmark?",
      answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      question: "How can I request a new browser?",
      answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet."
    },
    {
      question: "Is there a mobile app?",
      answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
      question: "What about other Chromium browsers?",
      answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
  ]

  const [cardIndex, setCardIndex] = useState(0);
  const [answer, showAnswer] = useState();

  return (
    <main className="main container">
      <section className="first-section flex flex-col">
        <div className="feature-heading-container flex flex-col">

          <h2 className="common-h2">Features</h2>
          <p className="common-para">
            Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.</p>

        </div>

        <div className="slider-heading-container">
          <p onClick={() => setCardIndex(0)} className={cardIndex === 0 ? "common-para slider-para active-slider" : "common-para slider-para"}>Simple Bookmarking</p>
          <p onClick={() => setCardIndex(1)} className={cardIndex === 1 ? "common-para slider-para active-slider" : "common-para slider-para"}>Speedy Searching</p>
          <p onClick={() => setCardIndex(2)} className={cardIndex === 2 ? "common-para slider-para active-slider" : "common-para slider-para"}>Easy Sharing</p>
        </div>

        <div className="slider-container">
          {
            sliderArr.map((elem, index) => {
              return cardIndex === index && <div key={index} className="slider-card">

                <div className="left-slider-container">
                  <img src={elem.image} alt="" className="slider-img" />
                </div>

                <div className="right-slider-container flex flex-col">
                  <h2 className="common-h2">{elem.heading}</h2>
                  <p className="common-para">{elem.para}</p>
                  <div className="slider-btn-container">
                    <button className="btn slider-btn">More Info</button>
                  </div>

                </div>
              </div>
            })
          }
        </div>


      </section>

      <section className="second-section flex flex-col">
        <div className="extension-heading-container flex flex-col">
          <h2 className="common-h2">Download the extension</h2>
          <p className="common-para">We’ve got more browsers in the pipeline. Please do let us know if you’ve
            got a favourite you’d like us to prioritize.</p>
        </div>

        <div className="extension-card-container flex center">
          {
            extensionArr.map((elem, index) => {
              return <div key={index} className="extension-card flex flex-col">
                <figure><img src={elem.image} alt="" className="card-img" /></figure>
                <div className="extension-card-heading flex flex-col">
                  <h3 className="extension-h3">{elem.heading}</h3>
                  <p className="extension-para">{elem.para}</p>
                </div>
                <div className="extension-card-btn-container">
                  <button className="btn extension-btn">Add & Install Extension</button>
                </div>
              </div>
            })
          }

        </div>
      </section>

      <section className="third-section flex flex-col">
        <div className="questions-heading-container flex flex-col">
          <h2 className="common-h2">Frequently Asked Questions</h2>
          <p className="common-para">Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.</p>
        </div>

        <div className="questions-container">
          {
            questionsArr.map((elem, index) => {
              return <div key={index} onClick={() => showAnswer(index)} className="single-question-container flex flex-col">
                <div className="single-question flex"> <p className="question-para">{elem.question}</p>

                  <div className="arrow-icon-div">
                    <svg className={answer === index && "active-arrow-icon"} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" /></svg>

                  </div>
                </div>

                {answer === index && <div className="answer-container">
                  <p className="answer-para">{elem.answer}</p>
                </div>}
              </div>
            })
          }

        </div><div className="question-btn-container">
          <button className="btn question-info-btn">More Info</button>
        </div>
      </section>
    </main>
  )
}

export default Main
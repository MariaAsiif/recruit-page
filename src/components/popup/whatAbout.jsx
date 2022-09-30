import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Whatabout = ({ permition, Toggle, }) => {

  const handleClose = (e) => {
    Toggle(false)
  }

  return (
    <>

      <div className='form_popup '>
        <Modal open={permition} onClose={handleClose} center  >
          <div className='bscontainer-fluid max-h-[500px] p-0 '>
            <div className='row'>
              <div className='col-lg-12  text-center'>
                <h1 className='font-bold text-[25px]  mb-5'>What is Beta ?</h1>
                <p>"There is no greater service than service to humanity..."</p>
              </div>

              <div className='col-lg-6 mt-4 text-justify '>
                <h2 className='text-red-500 italic font-medium lg:mb-[50px] mb-3 text-left'>
                  About Public Beta
                </h2>
                <span  >
                  Beta is the second letter of the Greek alphabet. Originally, the term alpha test meant the first phase of testing in a software development process. In the HPO Rx React.js and React Native, cross-platform multi browser beta process of the software development applications developed exclusively for the global use of our clients based in 196 countries are members of the United Nations member states, a beta test is the first and second phase in oh validation of all the protocols submitted in our software development specifications (SRS) shared with our institutional stakeholders Bank Sabadell and The Financial Sector Advisory Center (FinSAC), World Bank who are the primary sponsors of the development of this global product for a 374 million global, commercial and individual clients of the Global cynical industry in service to plant base therapeutics. The software testing, in which the ßeta v1.1 sampling provided for your interaction, assessment, commentary and feedback, design for the aforementioned intended audience it's presented to you for your trial and collaborative feedback. You may explore all of its features and functionality, after which we encourage you to use the built-in feedback to reporting your experiences, pro or con, and your suggestions for improvement shared with our development operations (Devops) in Asia who Will use your feedback to improve the product based on your proactive suggestions submissions.

                </span>
              </div>


              <div className='col-lg-6 mt-5 text-justify '>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  About ßeta and General Release Software

                </h2>
                <span >A General Release Candidate (GA) In the software release life cycle, general availability (GA) refers to the marketing phase when all commercialization activities pertaining to the software product have been completed, and it is available for purchase.

                  A Release Candidate (RC) is a pre-release version of the software that is being prepared for its final product release (in the RC phase) to the public. This is sometimes referred to as “Controlled Availability”.

                  Rational Team Concert (RTC) is an open, multi-platform team collaboration tool based on Jazz and Eclipse which provides developers with important functionality for agile application lifecycle management (ALM).

                  Beta “Beta test” The Beta Test, Software testing and Beta testing
                  Beta, named after the second letter of the Greek alphabet, is the software development phase following alpha. Software in the beta stage is also known as beta ware.[7] A beta phase generally begins when the software is feature complete but likely to contain several known or unknown bugs.[8] Software in the beta phase will generally have many more bugs in it than completed software and speed or performance issues, and may still cause crashes or data loss. The focus of beta testing is reducing impacts on users, often incorporating usability testing. The process of delivering a beta version to the users is called beta release and is typically the first time that the software is available outside the organization that developed it. Software beta releases can be either open or closed, depending on whether they are openly available or only available to a limited audience. Beta version software is often useful for demonstrations and previews within an organization and to prospective customers. Some developers refer to this stage as a preview, preview release, prototype, technical preview or technology preview (TP), [9] or early access.

                  Beta testers are people who actively report issues with beta software. They are usually customers or representatives or prospective customers of the organization that develops the software. Beta testers tend to volunteer their services free of charge but often receive versions of the product they test, discounts on the release version, or other incentives.

                  Perpetual beta
                  Some software is kept in so-called perpetual beta, where new features are continually added to the software without establishing a final “stable” release. As the Internet has facilitated rapid and inexpensive distribution of software, companies have begun to take a looser approach to use of the word beta.
                </span>
              </div>

              <div className='col-lg-6 mt-4 text-justify'>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  What part do I play?

                </h2>
                <span >This product is a multi faceted, multidisciplined, multivendor retail, wholesale, distribution online cross-platform mobile app application created to be viewed on multiple screens such as Apple IOS, Apple iPad, Apple TV, and the entire android Legacy of hardware and software screens currently use for millions of individuals and corporations across the world. The product is designed for individuals who temperature, wholesale or retail plant-based and holistic Therapeutic medicines, supplements products proactive to health or the extension of human life. The HPO Rx platform affords any commercial manufacturer or individual vendor of any plant base therapeutics the ability to create an account on the platform and showcase their it's in services or any country audience anywhere on earth. Platform also of Ford's employment for individuals in need of work, with a desire to be self-reliant and self-sufficient and are self-starters who only need access to a mobile device and a local telephone directory to access the potential to make $10-$20,000 a month selling advertising space on the platform to any vendor who has a product in which there is a one to 1% to 0% volume Cannabis sativa cultivars any alternative holistic or therapeutic plant base product goods or services of culåçtivated wellness and any other natural product legally accessible within their market of country with a scientifically tested and validated product designed for human consumption and the extension of human life and a positive benefit to human health outcomes. When you enter the web auto you'll notice that it's deliberately unfinished we want your opinion and assessment of what you Believe should be added or improved to serve the public it was designed to support and deliver a positive outcome?
                </span>
              </div>
              <div className='col-lg-6 mt-5 text-justify'>
                <h2 className='text-red-500 italic font-medium mb-3 text-left'>
                  My reward?

                </h2>
                <span >Your email address may be entered in our Tesla Cybertruck / Cyberlandr raffle, $150,000 value, in exchange for substantial constructive feedback specifically any feedback which augments the UI/UX and is nothing we have not already planned and documented in our Software Requirement Specification Document, if the level of feedback offered is substantially less, we will still send you a useful token of our esteem, one guaranteed to protect your privacy online!
                </span>
              </div>


              <div className='col-lg-12 mt-[30px] mb-[20px] text-center'>
                <p>"There is no one who loves pain itself, who seeks after it and wants to have it,
simply because it is pain."</p>
                <br />
                <span className='mt-[20px] '>"t is our human right to live within pain, help others do the same! "</span>

              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Whatabout
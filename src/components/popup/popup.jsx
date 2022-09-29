import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import logoImage from '../../images/logo.png'
const PopUp = ({ permition, Toggle, }) => {

  const handleChange = (e) => {
    Toggle(false)
  }

  return (
    <>

      <div className='form_popup'>
        <Modal open={permition} center  >
          <div className='bscontainer'>
            <div className='row'>
              <div className='col-lg-12 font-sans text-left max-h-[500px] overflow-y-auto'>
                <div className='mb-5'>
                  <img src={logoImage} className="lg:w-[30%] w-[20%]" alt="logo_image" />
                </div>
                <h1 className='font-sans font-bold text-xl mb-5'>General terms and conditions</h1>
                <div className='flex mb-8'>
                  <span >1.0</span>
                  <span className='pl-8'> The HPO Rx (Hemp Products Online Limited, Dublin, Ireland [HPO Rx] terms and
                    conditions public beta web property, portal and web site located at <a href="http://www.hporx.eu/finsac-public-beta" className='text-blue-500' target="_blank" rel="noreferrer">http://www.hporx.eu/finsac-public-beta </a>(the "Site")</span>
                </div>
                <h1 className='mb-5'>1.1 HPORx Ltd., Ireland. (<span className='font-medium'>HPO Rx</span>) provides a web site at <a href="www.hporx.eu" className='text-blue-500' target="_blank">www.hporx.eu </a>⦁	, ⦁	<a href="www.hporx.com" className='text-blue-500' target="_blank">www.hporx.com </a>and any alternative, over which the company may exercise management and creative
                  control well constructing the e-commerce platform for the soul purposes of refinement and <a href="http://www.hporx.eu/finsac-public-beta" className='text-blue-500' target="_blank" rel="noreferrer">http://www.hporx.eu/finsac-public-beta </a>(the "beta Site").
                  feedback of their public beta</h1>
                <h1 className='pl-12 mb-5'>
                  1.2 The ecommerce ∫eta (the "Site"). The Site is an online portal, which contains
                  information about Spain as a ecommerce and medical cannabisdestination, as well
                  as bulletin boards and other services to which many people, outside the control of
                  Innovation Spain, can contribute opinion and information. The Site includes
                  information about the products and/or services of third parties, and may permit
                  access to information and services provided by third parties ("Third Party Content").
                  Your use of the Site is subject to your compliance with the terms and conditions set
                  forth below.
                </h1>
                <h1 className='pl-12 mb-5'>
                  1.3 Web site terms and conditions of use. This page states the terms and conditions
                  under which you may use this Web Site. Please read this page carefully before
                  accessing or using the Site. By accessing or using the Site, you agree to be bound
                  by the terms and conditions set forth below. If you do not wish to be bound by these
                  terms and conditions, you may not access or use the Site. (<span className='font-medium'>HPO Rx</span>) may modify these
                  terms and conditions at any time at its discretion by updating this posting. You must
                  review this page periodically to review the terms and conditions because they govern
                  your use of this Web Site and are binding upon you.
                </h1>
                <h1 className='pl-12 mb-5'>
                  1.4 You agree to review the agreement periodically to be aware of such modifications
                  and your continued access or use of the site shall be deemed your conclusive
                  acceptance of the modified agreement. You also agree that it is not the responsibility
                  of (<span className='font-medium'>HPO Rx</span>) to make you aware in any other way of any changes we may deem
                  necessary to make to these terms and conditions. Furthermore, that it is entirely your
                  responsibility to ensure that you read these terms and conditions regularly
                </h1>
                <h1 className='font-sans font-bold text-xl mb-5'><span className='font-normal'>2.0 </span>Your use of the Site</h1>
                <h1 className='mb-5'>
                  2.1 You understand that, except for information, products or services clearly identified as
                  being supplied by (<span className='font-medium'>HPO Rx</span>), HPO Rx does not operate, control or endorse any information,
                  products or services on the Internet in any way, whether or not links to them may be
                  provided on the Site.
                </h1>
                <h1 className='mb-5'>
                  2.2 HPO Rx does not warrant that the Site will be uninterrupted or error-free or that defects
                  in the service will be corrected.
                </h1>
                <h1 className='mb-5'>
                  2.3 You accept that HPO Rx cannot and does not guarantee or warrant that files available
                  for downloading through the Site or any other web site that HPO Rx may link to, will be free
                  of infection or viruses, worms, Trojan horses or other code that may have contaminating or
                  destructive properties. You are responsible for implementing sufficient procedures and
                  checkpoints to satisfy your particular requirements for preventing loss of any sort resulting
                  from such infections, viruses etc.
                </h1>
                <h1 className='mb-1 font-medium'>3.0  Copyright, Licenses and Idea Submissions </h1>
                <h1 className='mb-5'>
                  3.1 Copyright © HPO Rx Ltd., Ireland. HPO Rx either owns the intellectual property rights in
                  the underlying HTML, text, audio clips, video clips and other content that is made available
                  to you on this web site, or has the right to use such content. Permission is hereby granted to
                  persons to view the material on this web site and, to the extent necessary in order to lawfully
                  access and use the services available on this web site for personal use, to electronically
                  copy, archive and to print in hard copy, portions of this web site. You may not copy,
                  reproduce, republish, upload, post, transmit, modify, re-sell or distribute in any manner, the
                  material on the Site, including text, graphics, code and/or software without the prior written
                  permission of Innovation Norway.
                </h1>
                <h1 className='mb-5'>
                  3.2 Limited license. HPO Rx grants to you a limited license to display on your computer,
                  print, download and use all publicly available information on this site for any lawful purpose.
                  Other contents such as logos, photographs, charts and the like are made available to you on
                  this web site, for non-commercial, personal purposes only and on condition that: You do not
                  modify any such content, and You include with and display on your copy of such content the
                  IN copyright notice and this limited license. Nothing contained in this Section shall be
                  construed as conferring any right in any copyright, trademarks or other intellectual property
                  of IN or any other person who owns the copyright or other intellectual property in content
                  provided on this web site
                </h1>
                <h1 className='mb-5'>
                  3.3 In no event are you permitted to publish, re-transmit, re-distribute or otherwise reproduce any of the content on the Site in any format to any third party.
                </h1>
                <h1 className='mb-5'>
                  3.4 You may store, submit materials to any public areas of the Site such as bulletin boards
                  and email lists (the "Submitted Materials"). You agree to grant to IN a non-exclusive, royaltyfree, world-wide perpetual license, with the right to sub-license, to reproduce, distribute, transmit, create derivative works of, publicly display and publicly perform any materials and
                  other information by all means and in any media now known or hereafter developed.
                </h1>
                <h1 className='mb-5'>
                  3.5 You also grant to IN the right to use your name in connection with the Submitted
                  Materials and other information as well as in connection with all advertising, marketing and
                  promotional material related thereto. You agree that you shall have no recourse against the
                  Company for any alleged or actual infringement or misappropriation of any proprietary right
                  in your communications to www.hporx.eu, www.hporx.com, or our beta website
                  <a href='http://www.hporx.eu/finsac-public-beta.' target="_blank" rel="noreferrer">http://www.hporx.eu/finsac-public-beta.</a>
                </h1>
                <h1 className='mb-5'>
                  3.6 Users should not share, tag or publish content that violates the rights of others. Alleged
                  illegal and/or offensive content will be removed promptly upon notification to the <span className='font-medium'>General
                    Counsel for HPO Rx (Hemp Products Online Limited, Dublin, Ireland. </span>
                </h1>
                <h1 className='mb-1 font-medium'>4.0 Trade marks</h1>
                <h1 className='mb-5'>
                  4.1 HPO Rx, www.hporx.eu, www.hporx.com, or http://www.hporx.eu/finsac-public-beta or
                  any other product names, company names, trade marks, logos etc. cited herein are the
                  property of their respective owners. All such content is protected by intellectual property and
                  copyright laws of Norway and foreign jurisdictions. Unauthorised use of the content may
                  violate applicable copyright, trademark or other intellectual property laws or other laws.
                  Although we will attempt to keep information on www.hporx.eu, www.hporx.com, or our beta
                  website http://www.hporx.eu/finsac-public-beta . accurate, the accuracy of the information
                  provided cannot be guaranteed. Information on this web site may contain inaccuracies or
                  typographical errors. Information may be changed or updated without notice. This web Site
                  does not constitute an offer or contract. Price and availability of information is subject to
                  change without notice. Any communication or material you post or transmit to HPO Rx over
                  the Internet is, and will be treated as, non-confidential and non-proprietary. Upon the
                  transmission of any personal information to HPO Rx, including but not limited to, name(s),
                  address(es), telephone number(s), email address(es), identification number(s), etc., you
                  expressly grant permission to IN and its affiliates to use such information for any lawful
                  purpose. By transmitting or posting any communication or material to this site you agree that
                  IN and any of its affiliates may use your communication as material for any purpose,
                  including reproduction, transmission, publication, broadcast and posting. IN and any of its
                  affiliates will not have the responsibility to respond to messages posted on this site.
                  Furthermore, posting or transmittal of any unlawful, threatening, libellous, defamatory,
                  obscene, pornographic or profane material or any material that could constitute or
                  encourage conduct that would be considered a criminal offence or violation of any law is
                  strictly prohibited. You agree that HPO Rx and any third party mentioned on this Web Site
                  will not be responsible to you for any loss or damages, including direct, indirect, special or
                  consequential damages or loss of data or loss of profit, even if HPO Rx or any such third
                  party has been advised of the possibility of such damage or loss.
                </h1>
                <h1 className='mb-1 font-medium'>5.0 General Limitation of Liability</h1>
                <h1 className='mb-5'>
                  5.1 HPO Rx provides the Site on an "as is" basis and makes no representations whatsoever
                  about any other web site which you may access through the Site or which may link to this
                  Site. When you access a site outside the Site, please understand that it is independent from
                  the Site and that HPO Rx has no control over the content on that web site. In addition, a link
                  to the Site does not mean that HPO Rx endorses or accepts any responsibility for the
                  content, or the use, of such a web site.
                </h1>
                <h1 className='mb-1 font-medium'>6.0 Indemnification</h1>
                <h1 className='mb-5'>
                  6.1 You agree to indemnify, defend and hold harmless the Site, its officers, directors,
                  employees, agents, licensors, suppliers and any third party information providers to the
                  Service from and against all losses, expenses, damages and costs, including legal costs:- (i)
                  resulting from any violation of these terms and conditions (including negligent or wrongful
                  conduct) by you or any other person accessing the Site and its services; (ii) howsoever
                  arising as a result of you downloading files from the Site or that we include links to; and, (iii)
                  howsoever arising as a result of any action you take as either a direct or indirect result of
                  information, opinions or other materials on the Site, or generated from the Site and its
                  services. It is solely your responsibility to evaluate the accuracy, completeness and
                  usefulness of all opinions, services, merchandise and other information provided through the
                  Site and its services or on the Internet generally.
                </h1>
                <h1 className='mb-1 font-medium'>7.0 DISCLAIMER OF WARRANTY</h1>
                <h1 className='mb-5'>
                  7.1 Goods, products or services, facilities, or third party retailed equipment provided by HPO
                  Rx under this Agreement are provided "as is." HPO Rx makes no express or implied
                  warranty as to the condition of any such goods, products or services, facilities, or third party
                  retailed equipment, or as to the condition of any research or information generated under
                  this Agreement, or as to any products made or developed under or as a result of this
                  Agreement including as a result of the use of information generated hereunder, or as to the
                  merchantability or fitness for a particular purpose of such research, information, or resulting
                  product, or that the goods, products or services, facilities or equipment provided will
                  accomplish the intended results or are safe for any purpose including the intended purpose,
                  or that any of the above will not interfere with privately- owned rights of others. Neither the
                  government nor its contractors shall be liable for special, consequential or incidental
                  damages attributed to such equipment, facilities, technical information, or services provided
                  under this Agreement or such research, information, or resulting products made or
                  developed under or as a result of this Agreement.
                </h1>
                <h1 className='mb-1 font-medium'>8.0 Beta Warranty Disclaimer</h1>
                <h1 className='mb-5'>
                  7.1 EXCEPT AS SET FORTH IN THIS SECTION 7.0. The HPO Rx (Hemp Products Online
                  Limited, Dublin, MAKES NO WARRANTY, EXPRESS OR IMPLIED, INCLUDING,
                  WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, OF NONINFRINGEMENT, OF SCOPE OF PATENT RIGHTS, OR OF FITNESS FOR A
                  PARTICULAR PURPOSE, WITH RESPECT TO ANY PATENT, TRADEMARK,
                  SOFTWARE, NON-PUBLIC OR OTHER INFORMATION, OR TANGIBLE RESEARCH
                  PROPERTY, LICENSED OR OTHERWISE PROVIDED TO LICENSEE HEREUNDER AND
                  HEREBY DISCLAIMS THE SAME.
                </h1>
                <h1 className='mb-1 font-medium'>8.0 Governing law and disputes</h1>
                <h1 className='mb-5'>
                  8.1 This Agreement shall be governed by and constructed exclusively in accordance with the
                  laws of Ireland within the European Union.
                </h1>
                <h1 className='mb-5'>
                  8.2 You agree that any legal action or proceeding between HPO Rx and you for any purpose
                  concerning this Agreement or the parties' obligations hereunder shall be brought exclusively
                  in a court of competent jurisdiction sitting in Ireland, or alternatively with an any European
                  jurisdiction in which HPO Rx (Hemp Products Online Limited, Dublin, Ireland and/or its
                  subsidiaries has a legal operating presents within that jurisdiction.
                </h1>
                <h1 className='mb-5'>
                  8.3 HPO Rx's failure to insist upon or enforce strict performance of any part of this
                  Agreement shall not be construed as a waiver of the whole of this Agreement
                </h1>
                <h1 className='mb-5'>
                  8.4 If any part of our terms and conditions is unenforceable (including any provisions in
                  which we exclude our liability to you) the enforceability of any other part of these conditions
                  will not be affected.
                </h1>

                <div className='mt-[1rem] flex items-center check_term'>
                  <input type="checkbox" className=' w-[20px] h-[18px]' onChange={handleChange} />
                  <span className='text-[16px] ml-2 text-gray-400'>Accept terms and condition</span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default PopUp
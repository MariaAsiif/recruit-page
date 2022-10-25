import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
// import Autocomplete from 'react-autocomplete'
import { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { callPublicApi } from '../../utils/CallApi'
const Lexicon = () => {
    const [lexicon, setLexicon] = useState([])
    const items = []

    lexicon.filter((f) => {
        let obj = {
            name: f.lexiconName
        }
        items.push(obj)
    })

    console.log("ite", items)

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }


    useEffect(() => {
        (async () => {
            try {
                let payload = {
                    sortProperty: 'createdAt',
                    sortOrder: -1,
                    offset: 0,
                    limit: 50,
                    query: {
                        critarion: { active: true },
                        addedBy: '_id email first_name',
                        lastModifiedBy: '_id email first_name',
                    },
                };

                let response = await callPublicApi('/lexiconpublic/getLexiconsWithFullDetailsPublic', 'post', payload);
                setLexicon(response?.data?.lexicons);
                console.log("res", response)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);





    return (
        <Layout>
            <div className='bscontainer  mt-[5rem]'>
                <div className='lg:flex lg:items-center lg:justify-between text-center'>
                    <h2 className='text-[3rem] font-semibold'>Lexicon</h2>
                    <div className='lg:w-[30%]' >
                        <ReactSearchAutocomplete
                            items={items}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                        />
                        {/* <Autocomplete
                            getItemValue={(item) => item.label}
                            items={[
                                { label: 'ART’s' },
                                { label: 'PHYTOMEDICINE' },
                                { label: 'THERAPEAUTICS' },
                                { label: 'HEMP' },
                                { label: 'INDUSTRIAL HEMP' },
                                { label: 'RX' },
                            ]}
                            renderItem={(item, isHighlighted) =>
                                <div style={{ background: isHighlighted ? 'lightgray ' : 'white' , padding:'10px' }}>
                                    {item.label}
                                </div>
                            }
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onSelect={(val) => setValue(val)}
                            className="p-3 h-full w-full border "
                        /> */}
                        {/* <BiSearch className='ml-2' /> */}

                    </div>
                </div>
                <div className='mt-5'>
                    {
                        lexicon.map((lexi, index) => (
                            <div className="mt-4" key={index}>
                                <h2 className='font-bold text-[25px]'>{lexi?.lexiconName}
                                </h2>
                                <span className='text-[16px] text-gray-500 text-justify'>
                                    {lexi?.description}
                                </span>
                            </div>

                        ))
                    }


                </div>

                {/* <div className='mt-5'>
                    <div className="">
                        <h2 className='font-bold text-[25px]'>ART’s</h2>
                        <span className='text-[16px] text-gray-500'>The term Arts, when applied to the medical filed, equals any substance used in treating disease or illness. The art, science, or profession of preserving health and of curing or alleviating disease.
                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className='font-bold text-[25px]'>PHYTOMEDICINE
                        </h2>
                        <span className='text-[16px] text-gray-500'>Phytomedicine can be defined as the science of medicines from plants. History of phytomedicine dates back to 60,000 years ago while written evidence dates back to approximately 5000 years ago.

                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className='font-bold text-[25px]'>THERAPEAUTICS
                        </h2>
                        <span className='text-[16px] text-gray-500'>A therapy or medical treatment is the attempted remediation of a health problem, usually following a medical diagnosis. As a rule, each therapy has indications and contraindications. There are many different types of therapy. Not all therapies are effective. The evidence is clear that therapeutics can be beneficial to a vast majority of human populations around the world and is delivered in their over-the-counter pharmaceuticals descriptions daily. It is equally clear that all medicines should be prescribed by a doctor or attending physician and that’s some medicines and ttherapies can produce unwanted adverse effects.

                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className='font-bold text-[25px]'>HEMP</h2>
                        <span className='text-[16px] text-gray-500'>
                            Hemp, or industrial hemp, is a botanical class of Cannabis sativa cultivars grown specifically for industrial or medicinal use.


                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className='font-bold text-[25px]'>INDUSTRIAL HEMP

                        </h2>
                        <span className='text-[16px] text-gray-500'>
                            Hemp, or industrial hemp, is a botanical class of Cannabis sativa cultivars grown specifically for industrial or medicinal use. It can be used to make a wide range of products. Along with bamboo, hemp is among the fastest growing plants on Earth.

                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className='font-bold text-[25px]'>RX
                        </h2>
                        <span className='text-[16px] text-gray-500'>
                            The term "Rx" medical prescription. The symbol "Rx" is usually said to stand for the Latin word "recipe" meaning "to take." It is customarily part of the superscription (heading) of a prescription. Pharmacists around the world display the Rx symbol in a variation of colors and typefaces. In Europe, Canada, and North America the symbol is displayed in a Green Rx or Red Rx prominently.

                        </span>
                    </div>

                    <div className="mt-4">
                        <h2 className='font-bold text-[25px]'>HPO <span className='text-red-500'> Rx</span>

                        </h2>
                        <span className='text-[16px] text-gray-500'>
                            The term “HPO” is an acronym for HEMP PRODUCTS ONLINE.

                        </span>
                    </div>

                </div> */}

            </div>
            <hr className='mt-3' />
            <Footer />
        </Layout>
    )
}

export default Lexicon
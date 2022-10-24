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

    console.log("ite" , items)

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
                    "dayda fasdfkjasdhf afhaskd fsdjk"

                    </div>
                </div>
                <div className='mt-5'>
                    {
                        lexicon.map((lexi, index) => (
                            <div className="mt-4" key={index}>
                                <h2 className='font-bold text-[25px]'>{lexi?.lexiconName}
                                </h2>
                                <span className='text-[16px] text-gray-500'>
                                    {lexi?.description}
                                </span>
                            </div>

                        ))
                    }


                </div>

            </div>
            <hr className='mt-3' />
            <Footer />
        </Layout>
    )
}

export default Lexicon
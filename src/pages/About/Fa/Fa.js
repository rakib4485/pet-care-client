import { Accordion } from 'keep-react';
import React from 'react';
import { Plus } from "phosphor-react";
import faqMain from '../../../assets/faq-main-image.jpg'
import faqTop from '../../../assets/faq-top-image.jpg'
import faqBottom from '../../../assets/faq-bottom-image.jpg'

const Fa = () => {
    return (
        <div className='mx-[8%] grid grid-cols-2 gap-10 items-center'>
            <div>
            <h2 className="text-primary text-2xl font-bold">// <span className='mx-3'>Faq</span> //</h2>
            <h2 className="text-6xl font-bold text-secondary">Get Every Answer</h2>
            <h2 className="text-6xl font-bold text-secondary">From Here</h2>
            <div className='mt-10'>
                <Accordion openFirstPanel={true}>
                    <Accordion.Panel className='bg-[#F4F2EF] mb-5 rounded-lg'>
                        <Accordion.Container className='bg-[$F4F2EF] text-primary'>
                            <Accordion.Title className='text-secondary font-bold'>What types of foods do you have on hand?</Accordion.Title>
                            <Accordion.Icon>
                                <Plus size={24} color="#444" />
                            </Accordion.Icon>
                        </Accordion.Container>
                        <Accordion.Content className='text-secondary'>
                        Regular formula is fed to the dogs and cats in our care. CarePress is a high-quality food that comes in dry and canned forms, with the option of a ...
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className='bg-[#F4F2EF] mb-5 rounded-lg'>
                        <Accordion.Container className='bg-[$F4F2EF] text-primary'>
                            <Accordion.Title className='text-secondary font-bold'>What should I bring with me for my pet’s boarding stay?</Accordion.Title>
                            <Accordion.Icon>
                                <Plus size={24} color="#444" />
                            </Accordion.Icon>
                        </Accordion.Container>
                        <Accordion.Content className='text-secondary'>
                            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
                            user experience across our products. It simplifies the design and development process by providing
                            ready-to-use components that can be easily customized and integrated into various applications.
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className='bg-[#F4F2EF] mb-5 rounded-lg'>
                        <Accordion.Container className='bg-[$F4F2EF] text-primary'>
                            <Accordion.Title className='text-secondary font-bold'>What Should I Expect Before My Pet Has Surgery?</Accordion.Title>
                            <Accordion.Icon>
                                <Plus size={24} color="#444" />
                            </Accordion.Icon>
                        </Accordion.Container>
                        <Accordion.Content className='text-secondary'>
                            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
                            user experience across our products. It simplifies the design and development process by providing
                            ready-to-use components that can be easily customized and integrated into various applications.
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
            </div>
            <div className='relative'>
                <img src={faqMain} alt=""  className='ml-16'/>
                <img src={faqTop} alt="" className='absolute -top-28'/>
                <img src={faqBottom} alt=""  className='absolute -bottom-20 -right-8 -z-50'/>
                <div className='bg-primary h-10 w-10 absolute -bottom-5 left-10 animate-[faq_5s_ease-in-out_infinite]'></div>
            </div>
        </div>
    );
};

export default Fa;
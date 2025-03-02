import { RightLeftImageSection } from "src/Components/Layouts/ImageSections/RightLeftImageSection";
import { H1h2p } from "src/Components/Layouts/TextSections/H1H2P";
import meditatingImage from '../../assets/images/contact/meditating image.png';
import communityImg from '../../assets/images/contact/community.png';
import { TopSectionSeparator } from "src/Components/Layouts/Separators/SectionSeparator";
import { H3Description } from "src/Components/Layouts/TextSections/H3Description";
import { LineSeparator } from "src/Components/Layouts/Separators/LineSeparator";
import { LayoutMiddleSection } from "src/Components/Layouts/LayoutSections/LayoutMiddleSection";
import { IconTextCard } from "src/Components/Layouts/Cards/IconTextCard";
import { Phone } from "src/Icons/Phone";
import { Email } from "src/Icons/Email";
import { LocationPin } from "src/Icons/LocationPin";
import { Youtube } from "react-feather";
import { ContactUsMaps } from "./ContactUsMaps";
import { Typo } from "src/Components/Typography/Typography";
import { Input } from "src/Components/Input/Input";
import { Form } from "src/Components/Form/Form";
import { FormItem } from "src/Components/Form/FormItem";
import { useMemo, useState } from "react";
import { TextArea } from "src/Components/Input/TextArea";
import { Button } from "src/Components/Buttons/Buttons";

const required = ['required'];
const email = ['required','email'];
const phone = ['phone'];

const ContactUs = function(){

    const [formValue, setFormValue] = useState({});
    const [invalids, setInvalids] = useState({});

    const _buttonDisabled = useMemo(function(){
        return !!Object.keys(invalids).length;
    },[invalids]);

    return <div>
                <RightLeftImageSection
                    leftImage={meditatingImage}
                    rightImage={communityImg}
                >
                    <H1h2p
                        header={'CONNECT WITH US'} 
                        description={<><em>Together,</em> We Embrace Transformation</>} 
                        quote={'We’re here to guide and support you on your journey to wholeness and divine connection'}
                    />
                </RightLeftImageSection>
                <TopSectionSeparator/>
                <H3Description
                    header={'Join Our Transformative Events'}
                    description={'Step into a space of healing, learning, and spiritual growth. Explore our curated events, workshops, and courses designed to empower you on your journey. From meditation immersions to knowledge series, find the perfect opportunity to reconnect with your inner divinity.'}
                    cta={'Discover Upcoming Events'}
                />
                <LineSeparator className="py-33"/>
                <LayoutMiddleSection className="py-30 h2-desc">
                    <div className="contact-us-section pb-20">
                        <div className="cu-ls fc fg-10">
                            <div className="fw fr jc-sb fw fg-10">
                                <IconTextCard
                                    icon={<Phone/>}
                                    heading={'Phone'}
                                    description={'+91 600-5354-940'}
                                />
                                <IconTextCard
                                    icon={<Email/>}
                                    heading={'E-Mail'}
                                    description={'rt.parivaar@gmail.com'}
                                />
                                
                                <IconTextCard
                                    icon={<LocationPin/>}
                                    heading={'Location'}
                                    description={'Ravet, Pune'}
                                />

                                <IconTextCard
                                    icon={<Youtube className="rt-icon"/>}
                                    heading={'YouTube'}
                                    description={'@ritmbharasvasthparivar'}
                                />
                            </div>
                            <ContactUsMaps/>
                        </div>
                        <div className="cu-rs fh fw pl-32">
                            <Typo comp="h2" type="head" size="medium" className="pb-8 cu-rs-hd" accent={true}>Reach Out to Us</Typo>
                            <Typo comp="p" size="small" className="pb-15 cu-rs-hd">We’d love to hear from you! Share your thoughts, questions, or ideas, and our team will get back to you soon.</Typo>

                            <Form
                                value={formValue}
                                onChange={setFormValue}
                                invalids={invalids}
                                onValidationChange={setInvalids}
                            >
                                <FormItem
                                    component={Input}
                                    name="name"
                                    label="Name"
                                    required={true}
                                    placeholder="Your Name..."
                                    validators={required}
                                />

                                <FormItem
                                    component={Input}
                                    name="email"
                                    label="E-Mail"
                                    required={true}
                                    placeholder="example@yourmail.com"
                                    validators={email}
                                />

                                <FormItem
                                    component={Input}
                                    name="phone"
                                    label="Phone"
                                    placeholder="9419100000"
                                    validators={phone}
                                />

                                <FormItem
                                    component={Input}
                                    name="subject"
                                    label="Subject"
                                    required={true}
                                    placeholder="Title..."
                                    validators={required}
                                />

                                <FormItem
                                    component={TextArea}
                                    name="message"
                                    label="Message"
                                    required={true}
                                    placeholder="Type Here..."
                                    validators={required}
                                />
                            </Form>
                            <Button className="fw" disabled={_buttonDisabled}>Submit</Button>
                                                    
                        </div>
                    </div>
                
                </LayoutMiddleSection>

            </div>
}

export default ContactUs
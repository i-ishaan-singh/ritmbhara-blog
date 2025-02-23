
import { LightSquareCardGroup } from "src/Components/Cards/LightSquareCardGroup"
import { StepsCardGroup } from "src/Components/Cards/StepsCardGroup"
import { RightImageCard } from "src/Components/Layouts/Cards/RightImageCard"
import { CenterRightImage } from "src/Components/Layouts/ImageSections/CenterRightImage"
import { LandingPageImage } from "src/Components/Layouts/LandingPageImage"
import { AccentBar } from "src/Components/Layouts/LayoutSections/AccentBar"
import { LineSeparator } from "src/Components/Layouts/Separators/LineSeparator"
import { TopSectionSeparator } from "src/Components/Layouts/Separators/SectionSeparator"
import { H2DescriptionAction } from "src/Components/Layouts/TextSections/H2DescriptionAction"
import { H3Description } from "src/Components/Layouts/TextSections/H3Description"
import { ArrowList } from "src/Components/List/ArrowList"
import { Typo } from "src/Components/Typography/Typography"
import ishaanImage from "src/assets/images/ishaan.jpg"
import meditatingPerson from "src/assets/images/meditatingPerson.png"

const HomePage = function(){

    return <div className="fw">
                <LandingPageImage
                    className='home-page-landing'
                    header="TRANSFORMATIVE HEALING FOR YOUR SOUL"
                    description ={<>Awaken Your <em>True Self</em>: Heal, Grow, <em>Belong</em></>}
                    cta={'Start Your Journey'}
                    imgSrc={ishaanImage}
                />
                <TopSectionSeparator/>
                <H3Description  //
                    header={<>We are here together because we seek <em>more than just healing.</em></>}
                    description={
                    <>
                    At Ritmbhara Svasth Parivar, healing is only the beginning. <em>Together</em>, we rediscover who we truly are—free from trauma, stress, and limitations. Through ancient wisdom, modern techniques, and <em>unwavering care</em>, we guide you toward spiritual bliss, optimal health, and a supportive community where no one walks alone. 
                    <br/><br/>
                    Whether you’re navigating challenges or seeking deeper meaning, this is where <em>your transformation begins</em>.
                    </>
                    }
                />
                <RightImageCard
                    imgSrc={meditatingPerson}
                >
                    <Typo comp="h3" type="head" size="medium" accent={true} >What is Spiritual Bliss?</Typo>
                    <Typo comp="h4" type="body" size="large"  className="pl-3 pb-25">A Journey to Your True Self</Typo>
                    <ArrowList
                        data={
                            [
                                'Experience profound inner peace that stays with you, no matter what happens around you—freeing you from stress, fear, and doubt.',
                                'Rediscover your true self—a state of boundless freedom where you feel connected to everyone and everything, fostering love, compassion, and unity.',
                                'Unlock heightened awareness and intuition, allowing you to navigate life with clarity, purpose, and confidence in every decision you make.',
                                'Heal deeply rooted traumas and energy blockages, transforming pain into strength and opening doors to joy, creativity, and limitless potential.',
                                'Cultivate a lifestyle of holistic well-being—physically vibrant, mentally sharp, emotionally balanced, and spiritually awakened—for sustained happiness and fulfillment.'
                                

                            ]
                        }
                    />
                </RightImageCard>
                <CenterRightImage
                    heading={'Hi, I’m Ishaan Singh. '}
                    imgSrc={ishaanImage}
                    title={'My role is simply to remind you of what you’ve always known deep inside.'}
                    description={<>I believe every one of us is a <em>divine being</em>, temporarily experiencing human life. We’ve chosen this existence — every challenge, relationship, and lesson — to grow and remember our true nature. My role is to guide you back to that realization, helping you see that you’re not limited or powerless; you are the creator of your reality. I aim to empower you to transcend limitations and embrace your limitless potential.</>}
                    subDescription={<>This journey isn’t just for individuals — it’s about creating a world where humanity thrives in harmony with its divine essence. Let’s embark on this transformative path as Svasth Parivar.</>}
                    cta={'Learn More About Me'}
                />
                <AccentBar>
                    <LightSquareCardGroup
                        header={'How Can We Help'}
                            cards={[
                                {
                                    id: '1',
                                    header: 'Seek Inner Guidance',
                                    description: 'Sometimes, all we need is a moment to reconnect with our inner divinity. On the Blessing Page, request personalized blessings for healing, clarity, or strength. This sacred space helps you tap into the divine energy within, creating room for breakthroughs and guidance. Surrender your worries and embrace the power already within you.',
                                    cta: 'Request My Blessing'
                                },
                                {
                                    id: '2',
                                    header: 'Release Your Burdens',
                                    description: 'Trauma often weighs heavily on the soul, but releasing it can set you free. The Solace Box offers a safe, confidential space where you can share your deepest struggles, fears, or traumas. By typing and sending them to us, you let go of these burdens, creating room for healing and transformation. This simple yet powerful act helps cleanse emotional blockages and paves the way for inner peace.',
                                    cta: 'Share & Heal Now'
                                },
                                {
                                    id: '3',
                                    header: 'Healing Bonds Course',
                                    description: 'Close relationships often bring up deep emotions and unresolved traumas, offering a unique opportunity for healing. In this transformative session, discover how understanding your own feelings can lead to profound personal growth. Through guided practices like EFT Tapping, Breathwork, and Meditation, you’ll resolve conflicts, release spiritual blockages, and strengthen your connections. These tools empower you to navigate future challenges with clarity and ease.',
                                    cta: 'Strengthen Relationships'
                                },
                                {
                                    id: '4',
                                    header: 'Tailored Healing Session',
                                    description: 'Embark on a deeply personalized healing journey guided by Ishaan Singh. Depending on your unique needs, experience therapies like Meru Chikitsa, Resonance Therapy, Vermam, CST, SRI, Breathwork, or Meditation. Each session is crafted to address physical, emotional, and spiritual imbalances, leaving you empowered and renewed.',
                                    cta: 'Book My Session'
                                },
                                {
                                    id: '5',
                                    header: 'Breathe Into Wholeness',
                                    description: 'Discover the profound power of Somato Respiratory Integration (SRI), a technique that harmonizes body, mind, and spirit through conscious breathing. Guided by Ishaan Singh, learn practical methods to integrate SRI into your daily life for enhanced vitality, emotional balance, and spiritual awakening.',
                                    cta: 'Experience SRI'
                                },
                                {
                                    id: '6',
                                    header: 'Dive Deep – A Week of Transformation',
                                    description: 'Immerse yourself in a week-long meditation series led by Ishaan Singh. With two guided meditations each day (morning and evening), along with breathwork and wisdom teachings, this program fosters profound self-awareness and spiritual growth. Experience breakthroughs, clarity, and lasting peace as you connect deeply with your true self. Conducted live online.',
                                    cta: 'Join the Immersion'
                                },
                                {
                                    id: '7',
                                    header: 'Unlock Timeless Wisdom',
                                    description: 'Delve into the timeless teachings of Patanjali Yoga Sutras, Bhagavad Gita, Spanda Karika, and more. Led by Ishaan Singh, this knowledge series illuminates the essence of divinity within and equips you with insights to navigate life with purpose and grace. Perfect for seekers eager to deepen their understanding of spirituality and existence.',
                                    cta: 'Experience Wisdom'
                                },
                                {
                                    id: '8',
                                    header: 'Ascension Through Tattvas',
                                    description: 'Embark on an extraordinary two-day meditation retreat based on the ShadTrimshat Sandoha Shastra. Guided by Ishaan Singh, traverse the 36 tattvas—from the earthly elements to the highest state of Shiva consciousness. This immersive experience awakens dormant potentials, aligns your energy, and elevates your spiritual journey.',
                                    cta: 'Ascend Tattvas'
                                }
                            ]}

                        />
                </AccentBar>
                <StepsCardGroup
                    header={'How It Works'}
                    description={<>Your path to wholeness begins here. Let us guide you step by step as you reconnect with your <em>divine essence.</em></>} 
                    cards={[
                        {
                            id: '1',
                            stepName: '1',
                            header: 'Get in Touch.',
                            description: 'Reach out to us and share what calls you to begin this journey. Whether it’s healing, growth, or clarity you seek, we’re here to listen and guide you toward the right path. Taking the first step is easier than you think.'
                        },
                        {
                            id: '2',
                            stepName: '2',
                            header: 'Begin your Journey.',
                            description: 'Immerse yourself in personalized practices tailored just for you. Through meditation, breathwork, and other transformative tools, start unlocking the blocks that hold you back from your true potential.'
                        },
                        {
                            id: '3',
                            stepName: '3',
                            header: 'Rediscover Yourself.',
                            description: 'Awaken to the limitless power within you. Heal old wounds, embrace your divinity, and step into a life of clarity, purpose, and spiritual alignment. This is where transformation becomes your reality.'
                        }
                    ]}
                />
                <LineSeparator className="py-33"/>
                <H2DescriptionAction
                    header={'Does Our Vision Inspire You?'}
                    description={'At Ritambhara Svasth Parivar, we believe that collective awakening is the key to a harmonious world. If our mission of nurturing divinity within every being resonates with you, your contribution can help us expand this ripple of transformation. Whether through sharing knowledge, supporting events, or assisting in outreach, your involvement matters. Together, let’s create a global family rooted in healing, empowerment, and spiritual evolution.'}
                    cta={'Volunteer With Us'}
                    ctaHref={'https://forms.gle/DZV5dNCVZWnDcb5X7'}
                />

            </div>
}

export {HomePage}
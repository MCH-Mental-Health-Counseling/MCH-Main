import React from 'react';
import "./About.scss";

const About = () => {

    const ourPurposeData = [
        {
            content: "Our Purpose",
            info: "Improving mental health, well-being and performance in organisational cultures using science, training and technology",
        },
        {
            content: "Our Vision",
            info: "To create cultures that realise the potential of people’s character where performance and wellbeing can thrive together",
        },
        {
            content: "Our Character",
            info: "To create cultures that realise the potential of people’s character where performance and wellbeing can thrive together",
        },

    ];

    const ourServicesData = [
        {
            content: "SHARETREE FOR CORPORATES",
            info: "We use people science, experience, technology and data to evolve the culture of your organisation to bring about higher levels of engagement, happiness and productivity, as well as providing you insights into your future talent.",
        },
        {
            content: "SHARETREE FOR COMMUNITIES",
            info: "Our Culture Programs for community organisations aim to develop the character of people – employees, volunteers, leaders – through skills-based volunteering days to create a culture of unity and gratitude.",
        },
        {
            content: "SHARETREE FOR SCHOOLS",
            info: "Our school programs aim to empower teachers, staff and parents to create a culture of character discovery and growth in their schools to foster connections, gratitude and well-being. This is a fun and exciting process.",
        },
        {
            content: "SHARETREE FOR INDIVIDUALS",
            info: "Our App is complimentary and enables individuals to track, measure and optimise the way that they are feeling. We offer a gratitude-journal and the opportunity to invite friends, family and co-workers to join in on the fun!",
        }
    ];

    const consultInfo = [
        {
            content: "CONSULTING",
            info: "We believe in human-centred strategies that thrive on face-to-face interactions",
            list: ["Culture Specialist Training", "Team Culture Education Workshops", "Keynote Presentations", "Storytelling Workshops"]
        },
        {
            content: "PHYSICAL",
            info: "Our physical products have been designed to support you in building the character of your people",
            list: ["Character Culture Display", "Character Education Cards", "Co-Branded Brochures", "Charametrics"]
        },
        {
            content: "DIGITAL",
            info: "Our suite of digital products support the revolution of team culture",
            list: ["ShareTree App", "Culture Connect", "Team Engagement Survey", "Charametrics"]
        }
    ];

    return (
        <>
            <div className='about_container'>
                <div className='about_header'>
                    <h2>About Us</h2>
                    <h3>Your about page summarizes your history, values, and mission — all in one place. That’s a tall order for just a few paragraphs. If you’re feeling stuck, turn to these about-page examples for inspiration
                    </h3>
                </div>
                <div className='about_content'>
                <div className="library_sugetions">
                    <h4>Our Purpose</h4>
                    <div className="library_sugetions_block">
                        {ourPurposeData.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <h3>{item.content}</h3>
                                    <p>{item.info}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="library_sugetions">
                    <h4>Our Services</h4>
                    <div className="library_sugetions_block">
                        {ourServicesData.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <h3>{item.content}</h3>
                                    <p>{item.info}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="library_sugetions">
                    <h4>Consult Us</h4>
                    <div className="library_sugetions_block">
                        {consultInfo.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <h3>{item.content}</h3>
                                    <p>{item.info}</p>
                                    <ul>{item.list.map((listItem) =>
                                        <>
                                            <li>{listItem}</li>
                                        </>
                                    )}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// https://sharetree.org/wp-content/uploads/2020/06/Our-Purpose-01.jpg


export default About

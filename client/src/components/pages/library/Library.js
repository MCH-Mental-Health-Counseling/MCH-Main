import React from 'react';
import "./Library.scss";

const Library = () => {

    const librarySugestions = [
        {
            image: "https://jiyofullest.com/wp-content/uploads/2020/07/happy-to-be-image.jpg",
            name: "How to Be Happy: 27 Habits to Add to Your Routine",
            url: "https://www.healthline.com/health/how-to-be-happy",
        },
        {
            image: "https://www.spiritofchange.org/content/uploads/2022/05/q/x/reduceanxietynaturally.jpg",
            name: "10 Ways to Naturally Reduce Anxiety",
            url: "https://www.healthline.com/health/natural-ways-to-reduce-anxiety",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboxXMDpB3L3iRa07VcbYDT3nwsYXXtZzbKA&usqp=CAU",
            name: "What’s the Difference Between a Panic Attack and an Anxiety Attack?",
            url: "https://www.healthline.com/health/panic-attack-vs-anxiety-attack",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP4Wb1i45Qsh3nbwnkzLKqso2_spJCOV2TQ&usqp=CAU",
            name: "9 CBT Techniques for Better Mental Health ",
            url: "https://www.healthline.com/health/cbt-techniques",
        },
    ];

    const NavigateLife = [
        {
            image: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/14c/69c/d49e12532e8273d3cf435e2641.jpg",
            name: "How to Stop Loving Someone and Start Moving On",
            url: "https://www.healthline.com/health/how-to-stop-loving-someone",
        },
        {
            image: "https://cdn.mind-diagnostics.org/uploads/mind-diagnostics/images/image/url/how-to-stop-loving-someone-5-steps-that-might-help-2_.jpg.jpg",
            name: "How to Keep Work Stress from Taking Over Your Life",
            url: "https://www.healthline.com/health/work-stress",
        },
        {
            image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2RlbW9jcmFjeS1yZXB1YmxpYy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==",
            name: "The Psychology Behind Why Politics Can Get So Heated — and How to Show Up Differently",
            url: "https://www.healthline.com/health/mental-health/psychology-behind-politics",
        },
        {
            image: "https://hooshout.com/wp-content/uploads/2022/08/9-Tips-to-Turn-a-Midlife-Crisis-into-a-Fresh-Restart..-1024x699.jpeg",
            name: "10 Tips to Turn a Midlife Crisis into a Fresh Re(start)",
            url: "https://www.healthline.com/health/mental-health/how-to-turn-a-midlife-crisis-into-a-fresh-start",
        },
    ];

    const MindBody = [
        {
            image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/tired_man_at_work-732x549-thumbnail-732x549.jpg?w=756&h=567",
            name: "How to Release ‘Emotional Baggage’ and the Tension That Goes with It",
            url: "https://www.healthline.com/health/mind-body/how-to-release-emotional-baggage-and-the-tension-that-goes-with-it",
        },
        {
            image: "https://www.thesouthafrican.com/wp-content/uploads/2020/04/7efed5f6-breathing-exercise-800x529.jpeg",
            name: "What Is the 4-7-8 Breathing Technique?",
            url: "https://www.healthline.com/health/4-7-8-breathing",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBtkpvLpv74bnIM2EWtmvZbBIL0lyigm54A&usqp=CAU",
            name: "Practicing the 8 Limbs of Yoga Will Help You Understand Yoga as It Was Meant to Be",
            url: "https://www.healthline.com/health/fitness/the-8-limbs-of-yoga",
        },
        {
            image: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/unity2/blog_image/1.1_3.jpg?itok=dzhPL1Y-",
            name: "7 Tips for Building a Daily Meditation Practice",
            url: "https://www.healthline.com/health/daily-meditation",
        },
    ];

    const SelfCare = [
        {
            image: "https://www.newportacademy.com/wp-content/uploads/press-page-hero-wellandgood-03.jpg",
            name: "How to Make a Self-Care Checklist That Actually Works for You",
            url: "https://www.healthline.com/health/self-care-checklist",
        },
        {
            image:
                "https://media.healthyfood.com/wp-content/uploads/2016/10/guilt_1000X1000.jpg",
            name: "I Won’t Feel Shame for Relying on Takeout Anymore — Here’s Why",
            url: "hhttps://www.healthline.com/health/mental-health/takeout-form-of-self-care",
        },
        {
            image:
                "https://static.wixstatic.com/media/769e42_e37f6b5b00694fcabfa60881d190095e~mv2.jpg/v1/fit/w_320%2Ch_358%2Cal_c%2Cq_80,enc_auto/file.jpg",
            name: "How to Shift from ‘Body Positivity’ to ‘Body Neutrality’ — and Why You Should",
            url: "https://www.healthline.com/health/body-neutrality",
        },
    ];

    const Conditions = [
        {
            image:
                "https://spokesman-recorder.com/wp-content/uploads/2019/03/rsz_keegan-houser-672530-unsplash-1.jpg",
            name: "Post-Traumatic Growth: How to Start Healing",
            url: "https://www.healthline.com/health/what-is-post-traumatic-growth",
        },
        {
            image:
                "https://post.healthline.com/wp-content/uploads/2019/07/man_playing_chess-732x549-thumbnail.jpg",
            name: "ADHD Quick Tips: 11 Focus Boosts When Your Brain Won’t Cooperate",
            url: "https://www.healthline.com/health/mental-health/adhd-quick-focus-boosts",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfshnIHqlLFEFDogkHSeuhL3IHYFhHk3F-QA&usqp=CAU",
            name: "How to Craft and Use Affirmations for Anxiety",
            url: "https://www.healthline.com/health/mental-health/affirmations-for-anxiety",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwTZyivAIik4C58qQc5d_wj7V9YC0VBQg_W_qdZhILf7rF5r00QOQ265hBPiByx1ER6s&usqp=CAU",
            name: "I Was Afraid of a Bipolar Disorder Diagnosis, but It Was My First Step Toward Feeling Better",
            url: "https://www.healthline.com/health/bipolar/getting-a-bipolar-disorder-diagnosis",
        },
        {
            image:
                "https://www.sandstonecare.com/wp-content/uploads/2022/07/bpd-in-teenagers-7things-you-need-to-know-about-borderline-personality-disorder-and-your-teen.jpeg",
            name: "What You Need to Know About Borderline Personality Disorder and Relationships",
            url: "https://www.healthline.com/health/mental-health/borderline-personality-disorder-relationships",
        },
    ];

    const Therapy = [
        {
            image: "https://hbr.org/resources/images/article_assets/2021/10/Oct21_04_491575832.jpg",
            name: "You Don’t Need a “Big” Reason to Start Therapy — Here’s Why",
            url: "https://www.healthline.com/health/mental-health/reasons-for-therapy",
        },
        {
            image:
                "https://post.healthline.com/wp-content/uploads/2021/04/indoor-talk-therapy-session-732x549-thumbnail.jpg",
            name: "How to Find Mental Health Services When You Need More Than Therapy",
            url: "https://www.healthline.com/health/mental-health/resource-guide-to-mental-health-services",
        },
        {
            image:
                "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/Female_Therapy_1296x728-header-1296x729.jpg?w=1155&h=2268",
            name: "9 Tips for Finding the Right Therapist",
            url: "https://www.healthline.com/health/how-to-find-a-therapist",
        },
        {
            image:
                "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/10/OnlineTherapy.png?w=315&h=840",
            name: "Therapy for Every Budget: How to Access It",
            url: "https://www.healthline.com/health/therapy-for-every-budget",
        },
    ];

    const Parenting = [
        {
            image:
                "https://image.cnbcfm.com/api/v1/image/103940016-GettyImages-554992095.jpg?v=1529472685&w=1600&h=900",
            name: "Get Stuff Done: A Realistic Guide to Working From Home with Kids",
            url: "https://www.healthline.com/health/parenting/working-from-home-with-kids",
        },
        {
            image:
                "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2022/09/mom-mental-health.jpeg.jpg",
            name: "Moms with Mental Health Conditions Share What Helps Them Manage",
            url: "https://www.healthline.com/health/parenting/moms-with-mental-health-conditions-share-what-helps-them-manage",
        },
        {
            image:
                "https://static01.nyt.com/images/2017/10/24/well/postpartum-dad-photo/postpartum-dad-photo-superJumbo.jpg",
            name: "To the New Dad with Postpartum Depression, You’re Not Alone",
            url: "https://www.healthline.com/health/why-we-need-to-talk-about-postpartum-depression-in-men",
        },
        {
            image: "https://static.toiimg.com/photo/96963000.cms",
            name: "Why Mom (or Dad) Guilt Is a Thing — and What You Can Do to Stop Beating Yourself Up",
            url: "https://www.healthline.com/health/parenting/mom-guilt",
        },
    ];
    return (
        <div className='library_container'>
            <div className='library_header'>
                <h2>Mental Health Resources for Libraries</h2>
                <h3>A holistic guide to care of Mental Health</h3>
            </div>
            <div className='library_content'>
                <div className="library_sugetions">
                    <h4>Featured Sugestions </h4>
                    <div className="library_sugetions_block">
                        {librarySugestions.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="library_sugetions">
                    <h4>NavigateLife </h4>
                    <div className="library_sugetions_block">
                        {NavigateLife.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="library_sugetions">
                    <h4>MindBody </h4>
                    <div className="library_sugetions_block">
                        {MindBody.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="library_sugetions">
                    <h4>SelfCare </h4>
                    <div className="library_sugetions_block">
                        {SelfCare.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="library_sugetions">
                    <h4>Conditions</h4>
                    <div className="library_sugetions_block">
                        {Conditions.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="library_sugetions">
                    <h4>Therapy</h4>
                    <div className="library_sugetions_block">
                        {Therapy.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="library_sugetions">
                    <h4>Parenting</h4>
                    <div className="library_sugetions_block">
                        {Parenting.map((item) => {
                            return (
                                <div className="library_sugetions_card">
                                    <img src={item.image} alt="" />
                                    <a href={item.url} target="_blank">
                                        {" "}
                                        {item.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Library;
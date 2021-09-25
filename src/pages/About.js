import aboutclass from './About.module.css';

function AboutPage() {
    return (
        <div>
            <h1 className={aboutclass.h1}>About Us</h1>

            <p className={aboutclass.p}>Welcome to MusicalArts! We are a company solely focused on selling Christian artwork and music of all types. Here we believe that both the combination of great art and music go well together and serve as great works for glorifying God’s work through us. </p>

            <p className={aboutclass.p}>We wanted to create a platform where artists and musicians of faith can sell their works to believers. We also believe that this will benefit the non-believer as well and would be a blessing that would help them understand who God is.
            </p> 

            <p className={aboutclass.p}>In a world where dark art and music are promoted and have become the norm in our world’s cultures, we want to disrupt that by providing a specialized e-commerce platform that promotes the opposite. We believe that this will help promote creative believers and would help shift culture to seek and promote God’s Kingdom on Earth as it is in Heaven.
            </p>

            <p className={aboutclass.p}>If you want to start selling your artwork and music on our platform, go ahead and click the SignUp link to get started. If you are looking to purchase art and music from us, go ahead and click the Home link, where the View Listings button will be to direct you to our gallery of works. What are you waiting for, check out our platform!
            </p>
        </div>

    );
}

export default AboutPage;
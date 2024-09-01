import { useLocation } from 'react-router-dom';
import '../../webtemplate/css/bootstrap.css';
import '../../webtemplate/css/font-awesome.min.css';
import '../../webtemplate/css/responsive.css';
import '../../webtemplate/css/style.css'; // Assuming you have a CSS file for custom styles

const PreviewPage: React.FC = () => {
    const location = useLocation();
    const {
        nameOfPremises,
        logoPreview,
        heroImage,
        aboutImage,
        aboutText,
        openingTime,
        closingTime,
        footerContent,
        offers
    } = location.state as {
        nameOfPremises: string;
        logoPreview: string;
        heroImage: string;
        aboutImage: string;
        aboutText: string;
        openingTime: string;
        closingTime: string;
        footerContent: string;
        offers: Array<{
            image: string;
            title: string;
            discount: string;
            link: string;
        }>;
    };

    return (
        <div>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <img src={logoPreview} className="navbar-brand" alt="Logo" width="80" height="80" />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item"><a className="nav-link" href="#welcome">Welcome</a></li>
                                <li className="nav-item"><a className="nav-link" href="#offers">Offers</a></li>
                                <li className="nav-item"><a className="nav-link" href="#events">Events</a></li>
                                <li className="nav-item"><a className="nav-link" href="#visit">Visit Us</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="hero_area">
                <div className="bg-box">
                    <img src={heroImage} alt="Hero" />
                </div>
            </div>

            <section id="welcome" className="welcome_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={aboutImage} alt="About Us" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>About Us</h2>
                                    <p>{aboutText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offer_section layout_padding-bottom">
                <div className="offer_container">
                    <div className="container">
                        <div className="row">
                            {offers.map((offer, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={offer.image} alt={offer.title} />
                                        </div>
                                        <div className="detail-box">
                                            <h5>{offer.title}</h5>
                                            <h6><span>{offer.discount}</span> Off</h6>
                                            <a href={offer.link}>
                                                Order Now
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 456.029 456.029">
                                                    <g>
                                                        <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"/>
                                                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4C457.728,97.71,450.56,86.958,439.296,84.91z"/>
                                                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"/>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div id="visit" className="contact_area">
                <div className="offer_container">
                    <div className="container">
                        <h2>Find Us</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <iframe width="550" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=15+Trevor+Close,+Northampton,+NN5+5PQ`}></iframe>
                            </div>
                            <div className="col-md-6">
                                <h2>Opening Hours</h2>
                                <p>Opening Time: {openingTime}</p>
                                <p>Closing Time: {closingTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>{footerContent}</footer>
        </div>
    );
};

export default PreviewPage;

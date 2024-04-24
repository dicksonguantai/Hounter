import { Button, Footer, Label, TextInput } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import './footer.css';

function Footerall() {
  return (
    <>
      <ScrollToTop/>
      <div className="footer-container">
        <Footer className="w-full bg-blue-900 text-white p-4">
          {" "}
          {/* Add background and text color */}
          <div className="w-full mx-auto py-2 px-2">
            {" "}
            {/* Add padding to the container */}
            <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-8 md:flex md:flex-wrap md:justify-between">
              {" "}
              {/* Adjust grid layout */}
              <div className="mb-2 md:w-auto">
                <Footer.Title
                  className="text-white"
                  title="Hounter"
                />
              </div>
              <div className="mb-8 md:w-auto">
                <div>
                  <Footer.Title className="text-white" title="Quick Links" />
                  <Footer.LinkGroup className="block text-white">
                    <Footer.Link href="/">Home</Footer.Link>
                    <Footer.Link href="/about-us">About Us</Footer.Link>
                    <Footer.Link href="/departments">Our Departments</Footer.Link>
                    <Footer.Link href="/blogs">Blogs</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
              <div className="mb-8 md:w-auto">
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email3 "
                      className="block text-white"
                      value="Subscribe To Our Newsletter"
                    />
                    <Label
                      htmlFor="email3"
                      className="text-white"
                      value="Your email"
                    />
                  </div>
                  <div></div>
                  <TextInput
                    id="email"
                    type="email"
                    placeholder="name@gmail.com"
                    required
                    
                    helperText={
                      < >
                        <span className="text-white">We’ll never share your details. Read our </span>
                        <a
                          href="/"
                          className="text-blue-200"
                        >
                           Privacy Policy
                        </a>
                        .
                      </>
                    }
                  />
                  <Button className="color-red">
                    Submit
                  </Button>
                </div>
              </div>
              <div className="mb-8 md:w-auto px-4 ">
                <div>
                  <Footer.Title className="text-white" title="Contact Us" />
                  <Footer.LinkGroup className="block text-white">
                    <Footer.Link href="tel:+254 7...........">
                      +2547............
                    </Footer.Link>
                    <Footer.Link href="">Juja Estate</Footer.Link>
                    <Footer.Link href="mailto:contactus@gmail.com">
                      contactus@gmail.com
                    </Footer.Link>
                    {/* <Footer.Link href="#">Terms &amp; Conditions</Footer.Link> */}
                  </Footer.LinkGroup>
                </div>
              </div>
              {/* <div className="mb-2 md:w-auto px-4" id="paybill">
                <div>
                  <img
                    src="/Images/give.webp"
                    alt="give details"
                    width="300"
                    height="200"
                  ></img>
                </div>
              </div> */}
            </div>
            <Footer.Divider className="" /> {/* Add margin to the divider */}
            <div className="flex justify-between items-center">
              {" "}
              {/* Adjust alignment */}
              <Footer.Copyright
                href="/"
                className="text-white"
                by="Hounter™"
                year={2024}
              />
              <div className="flex space-x-4">
                {" "}
                {/* Adjust spacing */}
                <Footer.Icon href="#" className="text-white" icon={BsFacebook} />
                <Footer.Icon href="#" className="text-white" icon={BsInstagram} />
                <Footer.Icon href="#" className="text-white" icon={BsTwitter} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
}

export default Footerall;

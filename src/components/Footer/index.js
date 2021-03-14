import React from "react";

function Footer() {

    return (
        <footer>
            <section className="container py-2">
                <div className=" row my-5 align-items-center footer-a-max-width">
                    <div className="col-md-3 my-2 text-center"><a href="/">Home</a></div>
                    <div className="col-md-3 my-2 text-center"><a href="/work">Portfolio</a></div>
                    <div className="col-md-3 my-2 text-center"><a href="/about">About</a></div>
                    <div className="col-md-3 my-2 text-center"><a href="/contact">Contact</a></div>
                </div>
            </section>
            <section className="container-fluid copyright">
                <p>Copyright &copy;
                <script>document.write(new Date().getFullYear())</script>. All Rights Reserved
            </p>
            </section>
        </footer>
    );
}


export default Footer;
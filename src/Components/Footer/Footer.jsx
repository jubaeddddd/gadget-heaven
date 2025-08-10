const Footer = () => {
    return (
        <div className="mt-10 bg-gray-100 py-10">
            <div className="flex flex-col items-center gap-3">
                 <h1 className="text-5xl">Gadget Heaven</h1>
                 <p>Leading the way in cutting-edge technology and innovation</p>
            </div>
            <div className="">
                <footer class="footer sm:footer-horizontal mt-4 flex justify-center gap-32">
                    <nav>
                        <h6 class="footer-title">Services</h6>
                        <a class="link link-hover">Product Support</a>
                        <a class="link link-hover">Order Tracking</a>
                        <a class="link link-hover">Shopping & Delivery</a>
                        <a class="link link-hover">Returns</a>
                    </nav>
                    <nav>
                        <h6 class="footer-title">Company</h6>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Careers</a>
                        <a class="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 class="footer-title">Legal</h6>
                        <a class="link link-hover">Terms of Service</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
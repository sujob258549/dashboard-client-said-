
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo/track.png'

const Footer = () => {
    return (
        <div className="bg-violet-500 pt-9">
            <div className="mx-auto w-full container px-4 xl:px-0">
                <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
                    <div className="md:w-[316px]">
                        <p className="text-[18px] font-medium text-white">
                            <img  className='w-40' src={logo} alt="" />
                        </p>
                        <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
                            Online shopping has revolutionized the way we purchase goods and services, offering unparalleled convenience and a wide array of options right at our fingertips
                        </p>
                        <div className="flex justify-center space-x-5 py-5 text-black">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/30/000000/facebook-circled--v4.png" alt="Facebook" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/30/000000/linkedin-circled.png" alt="LinkedIn" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/30/000000/instagram-new--v2.png" alt="Instagram" />
                            </a>
                            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/30/000000/snapchat-circled-logo.png" alt="Snapchat" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/30/000000/twitter-circled.png" alt="Twitter" />
                            </a>
                        </div>

                    </div>
                    <div className="md:w-[316px]">
                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="ml-[18px]">
                                <Link to="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">+91 1800123444</Link>
                                <p className="font-Inter text-[12px] font-medium text-white">Support Number</p>
                            </div>
                        </div>
                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V14.25C0.25 14.4489 0.329018 14.6397 0.46967 14.7803C0.610322 14.921 0.801088 15 1 15H19C19.1989 15 19.3897 14.921 19.5303 14.7803C19.671 14.6397 19.75 14.4489 19.75 14.25V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM18.3125 0.9375L10.5 8.32812L2.6875 0.9375H18.3125ZM1.375 13.5V1.67188L6.88125 6.7325L1.375 13.5ZM2.0625 14.0625L7.56875 7.875L9.99063 10.1312C10.122 10.251 10.3092 10.3124 10.5 10.3124C10.6908 10.3124 10.878 10.251 11.0094 10.1312L13.4312 7.875L18.9375 14.0625H2.0625ZM18.625 13.5L13.1188 6.7325L18.625 1.67188V13.5Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="ml-[18px]">
                                <Link to="mailto:hello@YOURSITE.com" className="font-Inter text-[14px] font-medium text-white">hello@YOURSITE.com</Link>
                                <p className="font-Inter text-[12px] font-medium text-white">Support Email</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[316px]">
                        <form>
                            <label className="font-Inter text-[14px] font-medium text-white">Subscribe to our newsletter</label>
                            <div className="mt-[10px] flex h-[38px] items-center rounded-lg bg-white pr-[10px]">
                                <input type="text" placeholder="Enter your email" className="h-full w-full rounded-l-lg border-0 pl-2.5 font-Inter text-[12px] font-normal text-violet-900 outline-none placeholder:text-violet-900" />
                                <button className="flex h-[26px] w-[74px] items-center justify-center rounded-lg bg-violet-900">
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6582 0.666016L5.9982 5.33302L1.3382 0.666016H10.6582ZM11.3322 1.33202V8.66602C11.3322 8.82469 11.2698 8.97634 11.1586 9.08755C11.0474 9.19876 10.8957 9.26102 10.7382 9.26102H1.2582C1.10053 9.26102 0.948884 9.19876 0.837672 9.08755C0.72646 8.97634 0.664204 8.82469 0.664204 8.66602V1.33202L5.3982 6.06535C5.53319 6.19989 5.76266 6.33252 5.9982 6.33252C6.23374 6.33252 6.4632 6.19989 6.5982 6.06535L11.3322 1.33202Z" fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div className="flex mt-4 text-white">
                            <input type="checkbox" className="mr-2" />
                            <p>I agree to receive promotional emails and updates from YOURSITE.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1166px] pt-[70px] pb-10 px-4 xl:px-0">
                <p className="text-center text-[12px] font-normal text-white/[80%]">© YOURSITE {new Date().getFullYear()} | All Rights Reserved | Powered by <span className="font-bold text-rose-600">HERO</span>.</p>
            </div>
        </div>
    );
};

export default Footer;

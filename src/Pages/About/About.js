import FirstNinja from '../../assets/download (4).png';
import SecondNinja from '../../assets/download (5).png';
import ThirdNinja from '../../assets/download (6).png';
import ForthNinja from '../../assets/Mask Ai.png';
import FifthNinja from '../../assets/download (7).png';
import SixthNinja from '../../assets/download (8).png';
import SeventhNinja from '../../assets/download (5-1).png';
import EighthNinja from '../../assets/Mr You.png';
import deverseLabs from '../../assets/deverse.png';
import Ottochain from '../../assets/ottochain-logo.svg';
import MobileCaro from './Mobile-Carosel-Effect/MobileCaro';

const About = () => {
	return (
		<div>
			<div>
				<div className="md:mt-8 mt-[5rem]">
					<h1 className="__shuriken_labs _irish text-5xl md:text-6xl">SHURIKEN LABS?</h1>
					<p className="text-white _montserrat">What we are all about</p>
				</div>
				<div>
					<div className="md:flex items-center justify-center gap-7 md:m-0 mt-[6rem] hidden">
						<div className="__ninja_border_design w-[17rem] md:w-[9.3rem] md:mx-0 mx-auto">
							<img src={SecondNinja} alt="" className=" mx-[3rem] md:mx-0 md:h-[17rem] md:w-[9rem]" />
						</div>
						<div className="__ninja_border_design mt-[12rem]">
							<img src={ForthNinja} alt="" className="h-[17rem] w-[9rem] " />
						</div>
						<div className="__ninja_border_design">
							<img src={FirstNinja} alt="" className="h-[17rem] w-[9rem]" />
						</div>
						<div className="__ninja_border_design mt-[12rem]  ">
							<img src={ThirdNinja} alt="" className="h-[17rem] w-[9rem]" />
						</div>
					</div>
					<div className='md:hidden'>
						<MobileCaro/>
					</div>
				</div>
			</div>
			<div className="mt-[7rem]">
				<h2 className="_irish p-4 md:p-0 text-3xl __shuriken_labs">
					We’re building a transparent Web3 Academy
				</h2>
				<p className="text-white _montserrat px-7 md:px-[17rem] mt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dolor sed nulla fringilla
					sodales. Sed dapibus molestie faucibus. Ut sodales dolor non erat accumsan, at aliquam urna
					consectetur. Donec ullamcorper, erat non efficitur pellentesque, lectus magna imperdiet ante, ut
					facilisis justo odio nec nisi. Vestibulum orci sapien, auctor id tincidunt id, maximus eu lectus.
					Quisque vitae vehicula sapien. Aenean ex dolor, auctor quis nisl vitae, pellentesque lobortis ipsum.
				</p>
			</div>
			<div className="mt-[7rem] grid grid-cols-3 gap-4 md:flex items-center justify-center">
				<div className="md:mx-8">
					<h2 className="_irish text-white text-2xl">2023</h2>
					<p className="text-white _montserrat text-sm uppercase">founded</p>
				</div>
				<div className="md:mx-8">
					<h2 className="_irish text-white text-2xl">20+</h2>
					<p className="text-white _montserrat text-sm">INSTRUCTORS</p>
				</div>
				<div className="md:mx-8">
					<h2 className="_irish __shuriken_labs text-2xl">300+</h2>
					<p className="text-white _montserrat text-sm">STUDENTS</p>
				</div>
				<div className="md:mx-8">
					<h2 className="_irish text-white text-2xl">$4B+</h2>
					<p className="text-white _montserrat text-sm">VOLUME</p>
				</div>
				<div className="md:mx-8">
					<h2 className="_irish text-white text-2xl">$500K</h2>
					<p className="text-white _montserrat text-sm">PAYOUTS</p>
				</div>
				<div className="md:mx-8">
					<h2 className="_irish text-white text-2xl">300+</h2>
					<p className="text-white _montserrat text-sm">RESOURCES</p>
				</div>
			</div>
			<div className="mt-[7rem]">
				<h1 className="__shuriken_labs _irish text-4xl md:text-5xl">Getting Started</h1>
				<div className="mt-[5rem] grid grid-cols-2 md:flex items-center justify-center gap-[4rem] md:gap-0">
					<div className="mx-14">
						<h2 className="_irish __shuriken_labs text-6xl mb-3">1</h2>
						<p className="text-white _montserrat text-sm md:text-2xl">Connect Wallet</p>
					</div>
					<div className="mx-14">
						<h2 className="_irish __shuriken_labs text-6xl mb-3">2</h2>
						<p className="text-white _montserrat text-sm md:text-2xl">Pick your Training</p>
					</div>
					<div className="mx-14">
						<h2 className="_irish __shuriken_labs text-6xl mb-3">3</h2>
						<p className="text-white _montserrat text-sm md:text-2xl">Shuriken Start</p>
					</div>
					<div className="mx-14">
						<h2 className="_irish __shuriken_labs text-6xl mb-3">4</h2>
						<p className="text-white _montserrat text-sm md:text-2xl">You Rock 🤘⚡️</p>
					</div>
				</div>
			</div>
			<div className="mt-[7rem]">
				<div>
					<h1 className="__shuriken_labs _irish text-4xl md:text-5xl">Meet the Ninjas</h1>
				</div>
				<div className="md:flex items-center justify-center gap-7 mt-[2rem]">
					<div className="__ninja_background_design p-4 md:h-[17rem] h-[23rem] w-[17rem] md:w-[12rem] md:mx-0 mx-auto my-7 md:my-0">
						<img src={FifthNinja} alt="" className="h-[16.9rem] w-[14rem] md:h-[11rem] md:w-[11rem]" />
						<div className="mt-3">
							<h2 className="_irish __shuriken_labs md:text-2xl text-3xl">Inspiration</h2>
							<p className="text-white _montserrat">@inspira_tion001</p>
						</div>
					</div>
					<div className="__ninja_background_design p-4 md:h-[17rem] h-[23rem] w-[17rem] md:w-[12rem] md:mx-0 mx-auto my-7 md:my-0">
						<img src={SixthNinja} alt="" className="h-[16.9rem] w-[17rem] md:h-[11rem] md:w-[11rem]" />
						<div className="mt-3">
							<h2 className="_irish __shuriken_labs md:text-2xl text-3xl">cyberZeus</h2>
							<p className="text-white _montserrat">@cyberZeus</p>
						</div>
					</div>
					<div className="__ninja_background_design p-4 md:h-[17rem] h-[23rem] w-[17rem] md:w-[12rem] md:mx-0 mx-auto my-7 md:my-0">
						<img src={SeventhNinja} alt="" className="h-[16.9rem] w-[14rem] md:h-[11rem] md:w-[11rem]" />
						<div className="mt-3">
							<h2 className="_irish __shuriken_labs md:text-2xl text-3xl">Obiwale</h2>
							<p className="text-white _montserrat">@obiwale</p>
						</div>
					</div>
					<div className="__ninja_background_design p-4 md:h-[17rem] h-[23rem] w-[17rem] md:w-[12rem] md:mx-0 mx-auto">
						<img src={EighthNinja} alt="" className="h-[16.9rem] w-[14rem] md:h-[11rem] md:w-[11rem]" />
						<div className="mt-3">
							<h2 className="_irish __shuriken_labs  md:text-2xl text-3xl">U_Sammy</h2>
							<p className="text-white _montserrat">@sammy_fstack</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[7rem]">
				<div>
					<h1 className="__shuriken_labs _irish md:text-5xl text-4xl">Partners</h1>
				</div>
				<div className="grid grid-cols-5 items-center justify-center gap-3 mt-[2rem] px-8 md:px-[13rem]">
					<div className="">
						<img src={Ottochain} alt="ottochain_logo" className="h-[3rem]  md:h-[5rem]" />
					</div>
					<div className="deverse_labs">
						<img src={deverseLabs} alt="" className="w-[4rem]  md:w-[7rem]" />
					</div>
					<div className="ottochain_logo">
						<img src={Ottochain} alt="" className="h-[3rem]  md:h-[5rem]" />
					</div>
					<div className="deverse_labs">
						<img src={deverseLabs} alt="" className="w-[4rem]  md:w-[7rem]" />
					</div>
					<div className="ottochain_logo">
						<img src={Ottochain} alt="" className="h-[3rem]  md:h-[5rem]" />
					</div>
				</div>
			</div>
			<div className="md:mt-[7rem] mt-[4rem] __about_footer ">
				<div className="pt-[13rem] items-center justify-center">
					<h1 className="_irish md:text-5xl text-3xl mb-2 text-white">Subscribe to Newsletter</h1>
					<p className="text-white _montserrat md:mb-2 mb-9">& get updates on new courses</p>
					<div className="flex items-center justify-center relative">
						<input
							type="email"
							placeholder="Subscribe"
							className="md:h-[2.6rem] md:w-[37rem] h-[3rem] w-[20rem] rounded-full mdrounded-lg hover:outline-none _montserrat"
						/>
						<div className="absolute -top-0 right-[1.4rem] md:right-[24rem]">
							<button className="__about_send_btn h-[3rem] md:h-[2.6rem] w-[3rem]">
								<svg
									width="19"
									height="16"
									viewBox="0 0 19 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="ml-4"
								>
									<path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13Z" fill="white" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

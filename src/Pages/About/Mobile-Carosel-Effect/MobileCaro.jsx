import React from 'react';
import FirstNinja from '../../../assets/download (4).png';
import SecondNinja from '../../../assets/download (5).png';
import ThirdNinja from '../../../assets/download (6).png';
import ForthNinja from '../../../assets/Mask Ai.png';
import './Mobile.css';

const MobileCaro = () => {
	return (
		<div>
			<div className="slider">
				<div className="slider-track gap-4">
					{/* first card */}
					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={SecondNinja} alt="" className=" h-[25rem]   " />
						</div>
					</div>

					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={ForthNinja} alt="" className="  h-[25rem]   " />
						</div>
					</div>

					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={FirstNinja} alt="" className="  h-[25rem]  " />
						</div>
					</div>

					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={ThirdNinja} alt="" className="h-[25rem] " />
						</div>
					</div>
					{/* second card */}
					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={SecondNinja} alt="" className=" h-[25rem]   " />
						</div>
					</div>

					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={ForthNinja} alt="" className="  h-[25rem]   " />
						</div>
					</div>

					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={FirstNinja} alt="" className="  h-[25rem]  " />
						</div>
					</div>

					<div className="slide">
						<div className="__ninja_border_design w-[17rem] mx-auto">
							<img src={ThirdNinja} alt="" className="h-[25rem] " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileCaro;

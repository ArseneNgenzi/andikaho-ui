"use client";

import Link from "next/link";
import { useState } from "react";
// import { ColorPicker, useColor } from "react-color-palette";
import { HexColorPicker } from "react-colorful";
// import "react-color-palette/lib/css/styles.css";
import {
	AlignCenter,
	AlignLeft,
	AlignRight,
	ChevronDown,
	ChevronUp,
	Image,
	Save,
	Search,
	ToggleLeft,
	ToggleRight,
	Trash2,
	Type,
	UploadCloud,
} from "react-feather";

const Create = () => {
	const [color, setColor] = useState("#ffffff");
	const [bgColor, setBgColor] = useState("#fff");
	const [rangeValue, setRangeValue] = useState(0);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [accordionImageOpen, setAccordionImageOpen] = useState(true);
	const [accordionTextOpen, setAccordionTextOpen] = useState(false);

	const showConfirmationModal = (state: boolean) => {
		if (state === true) {
			setShowConfirmModal(true);
			console.log(showConfirmModal);
		} else {
			setShowConfirmModal(false);
			console.log(showConfirmModal);
		}
	};

	const setOpenConfirmationModal = () => {
		setShowConfirmModal(true);
	};
	const setCloseConfirmationModal = () => {
		setShowConfirmModal(false);
	};

	const changeColor = (newColor: any) => {
		const elementss = document.getElementById("clotheBg");
		elementss?.style.setProperty("--my-bg-color", newColor);
	};
	// console.log(color.hex);
	// let color1

	// const newColor = () => {
	//   setColor
	//   console.log(color);
	// }

	const changeBg = (newColor: any) => {
		const elementss = document.getElementById("clotheBg");
		elementss?.style.setProperty("--my-bg-color", newColor);
	};

	return (
		<div className=" bg-[#f6f6f9] ">
			<div className=" flex justify-between px-4 py-2 border-b shadow-md items-center bg-white">
				<div>
					<Link href={"/"}>
						<button className="btn">Cancel</button>
					</Link>
				</div>
				<div className=" flex flex-1 justify-center ">
					<div className=" flex items-center border pl-3 rounded-md mr-6">
						<Search className=" text-grayMain" />
						<select className="select select-bordered w-full max-w-xs border-0 selection:ring-transparent text-grayMain selection:outline-none focus:outline-none ">
							<option value={"100%"}>100%</option>
							<option>90%</option>
							<option>80%</option>
							<option>70%</option>
							<option>60%</option>
							<option>50%</option>
						</select>
					</div>
					<div className=" flex items-center justify-between border w-32 rounded-md px-3 mr-6">
						<div>
							<Type className="cursor-pointer text-grayMain" />
						</div>
						<div>
							<Image className="cursor-pointer text-grayMain" />
						</div>
						<div className=" ">
							<UploadCloud className=" text-main cursor-pointer" />
						</div>
					</div>
					<div className=" flex items-center justify-between rounded-md border px-3 mr-6">
						<div className=" mr-2 cursor-pointer">
							{/* <CornerUpLeft /> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_40_1677)">
									<path
										d="M12.5 8C9.85 8 7.45 8.99 5.6 10.6L2 7V16H11L7.38 12.38C8.77 11.22 10.54 10.5 12.5 10.5C16.04 10.5 19.05 12.81 20.1 16L22.47 15.22C21.08 11.03 17.15 8 12.5 8Z"
										fill="#6E6D7A"
									/>
								</g>
								<defs>
									<clipPath id="clip0_40_1677">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>
						<div>
							{/* <CornerUpRight /> */}
							<div className=" ml-2 cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<g clipPath="url(#clip0_40_1680)">
										<path
											d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C6.85 8 2.92 11.03 1.54 15.22L3.9 16C4.95 12.81 7.95 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L13 16H22V7L18.4 10.6Z"
											fill="#6E6D7A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_40_1680">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
					<div className=" flex items-center justify-between border rounded-md px-3 mr-6">
						<p className=" text-xs font-semibold mr-6 text-grayMain">Colors</p>
						<div
							className=" w-6 h-6 rounded bg-white mr-2 border-2 border-main cursor-pointer"
							onClick={() => {
								changeColor("#ebebeb");
							}}
						></div>
						<div
							className=" w-6 h-6 rounded bg-gray-500 mr-2 cursor-pointer"
							onClick={() => {
								changeColor("#cacaca");
							}}
						></div>
						<div
							className=" w-6 h-6 rounded bg-black mr-2 cursor-pointer"
							onClick={() => {
								changeColor("#2d2d2d");
							}}
						></div>
						<div
							className=" w-6 h-6 rounded bg-pink-400 mr-2 cursor-pointer"
							onClick={() => {
								changeColor("#e09aba");
							}}
						></div>
						<div className="dropdown  dropdown-bottom dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn m-1 bg-transparent p-0 border-0 shadow-none hover:bg-transparent"
							>
								<ChevronDown className=" text-grayMain w-4 h-4" />
							</div>
							<div
								tabIndex={0}
								className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
							>
								<div>
									<HexColorPicker color={color} onChange={setColor} />
									<p className=" p-4 text-center"> HEX: {color}</p>
									<button
										className="btn bg-grayMain text-white w-full hover:bg-grayMain/90"
										onClick={() => changeBg(color)}
									>
										Set color
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className=" flex justify-center items-center border rounded-md px-4">
						<Save className=" cursor-pointer text-grayMain" />
					</div>
				</div>
				<div>
					<button className="btn mr-2">Preview</button>
					<button className="btn bg-main hover:bg-main text-white">
						Publish
					</button>
				</div>
			</div>

			<div className=" lg:flex p-10 items-center justify-between">
				<div>
					<div className="w-[400px]  p-4">
						<div className=" flex justify-between items-center py-6  ">
							<p className="text-sm text-main font-semibold">Image Editor</p>
							<p
								onClick={() => setAccordionImageOpen(!accordionImageOpen)}
								className=" cursor-pointer transition-all duration-1000 ease-in-out"
							>
								{accordionImageOpen ? <ChevronUp /> :  <ChevronDown />}
							</p>
						</div>
						<div
							className={`  transition-all duration-1000 ease-in-out ${
								accordionImageOpen ? " block" : " hidden"
							}`}
						>
							<div className=" bg-white  p-6 rounded-lg">
								<div className=" flex justify-between">
									<div className=" w-20 h-20 bg-grayMain/10 relative rounded-md">
										<Trash2 className="text-main absolute -top-3 -right-3" />
									</div>
									<div className=" w-20 h-20 bg-grayMain/10 relative rounded-md">
										<Trash2 className="text-main absolute -top-3 -right-3" />
									</div>
									<div className=" w-20 h-20 bg-grayMain/10 relative rounded-md flex justify-center items-center">
										<UploadCloud className=" text-grayMain/80" />
									</div>
								</div>
								<div className=" flex items-center my-8">
									<div className="flex-1">
										<p className=" text-[13px] font-semibold">Upload size</p>
										<p className=" text-[10px] text-grayMain/70">In pixels</p>
									</div>
									<div className=" flex items-center">
										<input
											type="text"
											placeholder="Width"
											className="w-14 placeholder:text-[9px] border border-grayMain/5 rounded-md focus:ring-transparent focus:border-0 text-[12px] text-center"
										/>
										<p className=" mx-2 text-xs text-grayMain/50">x</p>
										<input
											type="text"
											placeholder="Height"
											className="w-14 placeholder:text-[9px] border border-grayMain/5 rounded-md focus:ring-transparent focus:border-0 text-[12px] text-center"
										/>
									</div>
								</div>
								<div>
									<div className=" flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
										>
											<path
												d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z"
												fill="#6E6D7A"
											/>
										</svg>
										<input
											type="range"
											min={0}
											max="100"
											value="50"
											className="range  range-error range-xs mx-4"
											onChange={() => setRangeValue(80)}
										/>
										<input
											type="text"
											placeholder="0"
											className="w-14 placeholder:text-[12px] border border-grayMain/5 rounded-md focus:ring-transparent focus:border-0 text-[12px] text-center"
										/>
									</div>

									<div className=" flex items-center mt-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
										>
											<path
												d="M6.48 5.65L0 12.14L6.49 18.62L12.98 12.14L6.48 5.65ZM2.83 12.14L6.49 8.48L10.14 12.14L6.48 15.8L2.83 12.14ZM18.5 5.88C16.75 4.12 14.44 3.24 12.14 3.24V0L7.9 4.24L12.14 8.48V5.24C13.93 5.24 15.72 5.92 17.09 7.29C19.82 10.02 19.82 14.46 17.09 17.19C15.72 18.56 13.93 19.24 12.14 19.24C11.17 19.24 10.2 19.03 9.3 18.63L7.81 20.12C9.16 20.86 10.65 21.24 12.14 21.24C14.44 21.24 16.75 20.36 18.5 18.6C22.02 15.09 22.02 9.39 18.5 5.88Z"
												fill="#6E6D7A"
											/>
										</svg>
										<input
											type="range"
											min={0}
											max="100"
											value={rangeValue}
											className="range  range-error range-xs mx-4"
											onChange={() => setRangeValue(50)}
										/>
										<input
											type="text"
											placeholder="0"
											className="w-14 placeholder:text-[12px] border border-grayMain/5 rounded-md focus:ring-transparent focus:border-0 text-[12px] text-center"
										/>
									</div>
								</div>
								<div>
									<div className=" flex justify-between items-center mt-8">
										<p className="text-[13px]">Gray scale</p>
										<ToggleRight className=" text-main" />
									</div>
									<div className=" flex justify-between items-center mt-8 mb-4">
										<p className="text-[13px]">Remove white</p>
										<ToggleLeft className=" text-grayMain" />
									</div>
									<div className=" flex items-center justify-between border-0 rounded-md">
										<p className="  mr-10 text-[13px]">Edit colors</p>
										<div
											className=" w-6 h-6 rounded bg-white mr-2 border-2 border-main cursor-pointer"
											onClick={() => changeColor("#f1f1f1")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-gray-500 mr-2 cursor-pointer"
											onClick={() => changeColor("#cacaca")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-black mr-2 cursor-pointer"
											onClick={() => changeColor("#181818")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-pink-400 mr-2 cursor-pointer"
											onClick={() => changeColor("#e09aba")}
										></div>
										<div className="dropdown  dropdown-bottom dropdown-end">
											<div
												tabIndex={0}
												role="button"
												className="btn m-1 bg-transparent p-0 border-0 shadow-none hover:bg-transparent"
											>
												<ChevronDown className=" text-grayMain w-4 h-4" />
											</div>
											<div
												tabIndex={0}
												className="dropdown-content z-[1] menu p-2 shadow bg-base-100"
											>
												<div>
													<HexColorPicker color={color} onChange={setColor} />
													<p className=" p-4 text-center"> HEX: {color}</p>
													<button
														className="btn bg-grayMain text-white w-full hover:bg-grayMain/90"
														onClick={() => changeBg(color)}
													>
														Set color
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>






					<div className="w-[400px]  p-4">
						<div className=" flex justify-between items-center py-6  ">
							<p className="text-sm text-main font-semibold">Text Editor</p>
							<p
								onClick={() => setAccordionTextOpen(!accordionTextOpen)}
								className=" cursor-pointer transition-all duration-1000 ease-in-out"
							>
								{accordionTextOpen ? <ChevronUp /> :  <ChevronDown />}
							</p>
						</div>
						<div
							className={`  transition-all duration-1000 ease-in-out ${
								accordionTextOpen ? " block" : " hidden"
							}`}
						>
							<div className=" bg-white  p-6 rounded-lg">
								<div className=" flex justify-between">
									<div className=" w-20 h-20 bg-grayMain/10 relative rounded-md">
										<Trash2 className="text-main absolute -top-3 -right-3" />
									</div>
									<div className=" w-20 h-20 bg-grayMain/10 relative rounded-md">
										<Trash2 className="text-main absolute -top-3 -right-3" />
									</div>
									<div className=" w-20 h-20 bg-grayMain/10 relative rounded-md flex justify-center items-center">
										<Type className=" text-grayMain/80" />
									</div>
								</div>
								<div className=" flex items-center my-8">
									<div className="flex-1">
										<p className=" text-[13px] font-semibold">Font size</p>
										<p className=" text-[10px] text-grayMain/70">In pixels</p>
									</div>
									<div className=" flex items-center">
										<input
											type="text"
											placeholder="Size"
											className="w-14 placeholder:text-[9px] border border-grayMain/5 rounded-md focus:ring-transparent focus:border-0 text-[12px] text-center"
										/>
									</div>
								</div>


								<div className=" flex justify-between items-center">
									<p className=" font-semibold text-sm">Font</p>
									<select className=" text-grayMain/90 focus:ring-transparent focus:border-grayMain/10 cursor-pointer text-xs border-grayMain/10 rounded-md border  ">
										<option defaultValue="Aria Black Sans" className=" ">
										Aria Black Sans
										</option>
										<option>Sans-serif</option>
										<option>Monospace</option>
										<option>Times New Roman</option>
										<option>Helvetica</option>
										<option>Calibri</option>
										<option>Cambria</option>
									</select>
								</div>


								<div>
									<div className=" flex items-center mt-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
										>
											<path
												d="M6.48 5.65L0 12.14L6.49 18.62L12.98 12.14L6.48 5.65ZM2.83 12.14L6.49 8.48L10.14 12.14L6.48 15.8L2.83 12.14ZM18.5 5.88C16.75 4.12 14.44 3.24 12.14 3.24V0L7.9 4.24L12.14 8.48V5.24C13.93 5.24 15.72 5.92 17.09 7.29C19.82 10.02 19.82 14.46 17.09 17.19C15.72 18.56 13.93 19.24 12.14 19.24C11.17 19.24 10.2 19.03 9.3 18.63L7.81 20.12C9.16 20.86 10.65 21.24 12.14 21.24C14.44 21.24 16.75 20.36 18.5 18.6C22.02 15.09 22.02 9.39 18.5 5.88Z"
												fill="#6E6D7A"
											/>
										</svg>
										<input
											type="range"
											min={0}
											max="100"
											value={rangeValue}
											className="range  range-error range-xs mx-4"
											onChange={() => setRangeValue(50)}
										/>
										<input
											type="text"
											placeholder="0"
											className="w-14 placeholder:text-[12px] border border-grayMain/5 rounded-md focus:ring-transparent focus:border-0 text-[12px] text-center"
										/>
									</div>
								</div>
								<div>
									<div className=" flex justify-between items-center mt-8">
										<p className="text-[13px]">Outline </p>
										<ToggleRight className=" text-main" />
									</div>
									<div className=" flex justify-between items-center mt-8 mb-4">
										<p className="text-[13px]">Alignment</p>
										<div className=" flex">
											<span className=" cursor-pointer"> <AlignLeft/> </span>
											<span className=" mx-2 cursor-pointer"> <AlignCenter/> </span>
											<span className=" cursor-pointer"> <AlignRight/> </span>
										</div>
									</div>
									<div className=" flex items-center justify-between border-0 rounded-md">
										<p className="  mr-10 text-[13px]">Text color</p>
										<div
											className=" w-6 h-6 rounded bg-white mr-2 border-2 border-main cursor-pointer"
											onClick={() => changeColor("#f1f1f1")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-gray-500 mr-2 cursor-pointer"
											onClick={() => changeColor("#cacaca")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-black mr-2 cursor-pointer"
											onClick={() => changeColor("#181818")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-pink-400 mr-2 cursor-pointer"
											onClick={() => changeColor("#e09aba")}
										></div>
										<div className="dropdown  dropdown-bottom dropdown-end">
											<div
												tabIndex={0}
												role="button"
												className="btn m-1 bg-transparent p-0 border-0 shadow-none hover:bg-transparent"
											>
												<ChevronDown className=" text-grayMain w-4 h-4" />
											</div>
											<div
												tabIndex={0}
												className="dropdown-content z-[1] menu p-2 shadow bg-base-100"
											>
												<div>
													<HexColorPicker color={color} onChange={setColor} />
													<p className=" p-4 text-center"> HEX: {color}</p>
													<button
														className="btn bg-grayMain text-white w-full hover:bg-grayMain/90"
														onClick={() => changeBg(color)}
													>
														Set color
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* right */}
				<div className="   w-4/5 lg:flex justify-around ">
					{/* actual t-shirt */}
					<div className={`bg-[${color}] w-fit h-[528px] `} id="clotheBg">
						<img
							src="/assets/images/longSleeves.png"
							alt=""
							className=" h-full"
						/>
					</div>
					{/* settings on the right */}
					<div className="w-1/5 ">
						<div className=" flex items-center justify-center py-4 bg-white w- rounded-md">
							<div className=" w-32 text-center  cursor-pointer hover:bg-grayMain/20 p-4 rounded-md">
								<img
									src="/assets/images/shortSleeves.png"
									alt=""
									className=" w-full rounded-md"
								/>
								<p className=" text-xs font-semibold text-grayMain pt-2">
									Front
								</p>
							</div>
							<div className=" w-32 text-center cursor-pointer hover:bg-grayMain/20 p-4 rounded-md">
								<img
									src="/assets/images/shortSleeves.png"
									alt=""
									className=" w-full rounded-md"
								/>
								<p className=" text-xs font-semibold text-grayMain pt-2">
									Back
								</p>
							</div>
						</div>
						<div className=" bg-white p-4 my-8 rounded-md">
							<div className=" flex">
								<div>
									<img
										src="/assets/images/shortSleeves.png"
										alt=""
										className=" bg-main"
									/>
								</div>
								<div className=" pl-4">
									<p className=" font-semibold">Blank T-shirt</p>
									<select className=" text-grayMain/90 focus:ring-transparent focus:border-grayMain/10 cursor-pointer text-xs border-grayMain/10 rounded-md border  ">
										<option defaultValue="High quality" className=" ">
											High quality
										</option>
										<option>Medium Quality</option>
										<option>Low quality</option>
									</select>
									<div className=" flex items-center justify-between border-0 rounded-md">
										<div
											className=" w-6 h-6 rounded bg-white mr-2 border-2 border-main cursor-pointer"
											onClick={() => changeColor("#ebebeb")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-gray-500 mr-2 cursor-pointer"
											onClick={() => changeColor("#cacaca")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-black mr-2 cursor-pointer"
											onClick={() => changeColor("#2d2d2d")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-pink-400 mr-2 cursor-pointer"
											onClick={() => changeColor("#e09aba")}
										></div>
										<div className="dropdown  dropdown-bottom dropdown-end">
											<div
												tabIndex={0}
												role="button"
												className="btn m-1 bg-transparent p-0 border-0 shadow-none hover:bg-transparent"
											>
												<ChevronDown className=" text-grayMain w-4 h-4" />
											</div>
											<div
												tabIndex={0}
												className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
											>
												<div>
													<HexColorPicker color={color} onChange={setColor} />
													<p className=" p-4 text-center"> HEX: {color}</p>
													<button
														className="btn bg-grayMain text-white w-full hover:bg-grayMain/90"
														onClick={() => changeBg(color)}
													>
														Set color
													</button>
												</div>
											</div>
										</div>
									</div>
									<p className="text-[10px] text-grayMain">Rwf 6,000</p>
								</div>
							</div>

							<div className=" flex my-4">
								<div>
									<img
										src="/assets/images/longSleeves.png"
										alt=""
										className=" bg-main"
									/>
								</div>
								<div className=" pl-4">
									<p className=" font-semibold">Blank T-shirt</p>
									<select className=" text-grayMain/90 text-xs focus:ring-transparent focus:border-grayMain/10 cursor-pointer border-grayMain/10 rounded-md border ">
										<option defaultValue="High quality" className=" ">
											High quality
										</option>
										<option>Medium Quality</option>
										<option>Low quality</option>
									</select>
									<div className=" flex items-center justify-between border-0 rounded-md">
										<div
											className=" w-6 h-6 rounded bg-white mr-2 border-2 border-main cursor-pointer"
											onClick={() => changeColor("#ebebeb")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-gray-500 mr-2 cursor-pointer"
											onClick={() => changeColor("#cacaca")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-black mr-2 cursor-pointer"
											onClick={() => changeColor("#2d2d2d")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-pink-400 mr-2 cursor-pointer"
											onClick={() => changeColor("#e09aba")}
										></div>
										<div className="dropdown  dropdown-bottom dropdown-end">
											<div
												tabIndex={0}
												role="button"
												className="btn m-1 bg-transparent p-0 border-0 shadow-none hover:bg-transparent"
											>
												<ChevronDown className=" text-grayMain w-4 h-4" />
											</div>
											<div
												tabIndex={0}
												className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
											>
												<div>
													<HexColorPicker color={color} onChange={setColor} />
													<p className=" p-4 text-center"> HEX: {color}</p>
													<button
														className="btn bg-grayMain text-white w-full hover:bg-grayMain/90"
														onClick={() => changeBg(color)}
													>
														Set color
													</button>
												</div>
											</div>
										</div>
									</div>
									<p className="text-[10px] text-grayMain">Rwf 6,000</p>
								</div>
							</div>

							<div className=" flex">
								<div>
									<img
										src="/assets/images/hoodie.png"
										alt=""
										className=" bg-main "
									/>
								</div>
								<div className=" pl-4">
									<p className=" font-semibold">Blank Hoodie</p>
									<select className=" text-grayMain/90 focus:ring-transparent focus:border-grayMain/10 cursor-pointer  text-xs border-grayMain/10 rounded-md border ">
										<option defaultValue="High quality" className=" ">
											High quality
										</option>
										<option>Medium Quality</option>
										<option>Low quality</option>
									</select>
									<div className=" flex items-center justify-between border-0 rounded-md">
										<div
											className=" w-6 h-6 rounded bg-white mr-2 border-2 border-main cursor-pointer"
											onClick={() => changeColor("#ebebeb")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-gray-500 mr-2 cursor-pointer"
											onClick={() => changeColor("#cacaca")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-black mr-2 cursor-pointer"
											onClick={() => changeColor("#2d2d2d")}
										></div>
										<div
											className=" w-6 h-6 rounded bg-pink-400 mr-2 cursor-pointer"
											onClick={() => changeColor("#e09aba")}
										></div>
										<div className="dropdown  dropdown-bottom dropdown-end">
											<div
												tabIndex={0}
												role="button"
												className="btn m-1 bg-transparent p-0 border-0 shadow-none hover:bg-transparent"
											>
												<ChevronDown className=" text-grayMain w-4 h-4" />
											</div>
											<div
												tabIndex={0}
												className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
											>
												<div>
													<HexColorPicker color={color} onChange={setColor} />
													<p className=" p-4 text-center"> HEX: {color}</p>
													<button
														className="btn bg-grayMain text-white w-full hover:bg-grayMain/90"
														onClick={() => changeBg(color)}
													>
														Set color
													</button>
												</div>
											</div>
										</div>
									</div>
									<p className="text-[10px] text-grayMain">Rwf 6,000</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Create;

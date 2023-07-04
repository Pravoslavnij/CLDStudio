'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
	const [anim, setAnim] = useState(false)

	useEffect(() => {
		setAnim(Boolean(Math.round(Math.random())))
	}, [])

	return (
		<div className="relative h-[52px] w-[52px]">
			<Image className="absolute top-0 z-[-2]" fill src={"/images/logo.png"} alt="" />
			{
				!!anim &&
				<>
					<div className='w-[2px] h-[2px] bg-black rounded-full absolute left-[21px] top-[38px] rainPoint2' />
					<div className='w-[2px] h-[2px] bg-black rounded-full absolute left-[24px] top-[38px] rainPoint1' />
					<div className='w-[2px] h-[2px] bg-black rounded-full absolute left-[28px] top-[38px] rainPoint3' />
				</>
			}
		</div>
	)
}
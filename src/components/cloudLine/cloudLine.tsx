'use client'

import { useState } from "react"
import Cloud from "../cloud/cloud";

export default function CloudLine({ top }: { top?: boolean }) {

	const [clouds, setClouds] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

	return (
		<div className={`flex gap-[73px] z-0 flex-col bg-white min-w-fit ${top ? "toTop" : "toBottom"}`}>
			{
				clouds.map((element: any, index: number) => <Cloud key={index} />)
			}
		</div>
	)
}
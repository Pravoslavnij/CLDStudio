import Image from "next/image";

export default function Cloud({ top }: { top?: boolean }) {

	return (
		<div>
			<Image width={32} height={27} alt="cloud" priority={true} className={`${top ? "toTop" : "toBottom"} small-cloud z-0`} src={"/images/small-sky-bg.png"} />
		</div>
	)
}
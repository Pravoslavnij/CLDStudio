import Image from "next/image";

export default function Cloud() {

	return (
		<div>
			<Image width={32} height={27} alt="cloud" priority={true} className={'small-cloud z-0 '} src={"/images/small-sky-bg.png"} />
		</div>
	)
}
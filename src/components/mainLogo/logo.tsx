import Image from "next/image";

export default function Logo() {

	const anim = Boolean(Math.round(Math.random()))

	return (
		<div className="relative h-[52px] w-[52px]">
			<Image className="absolute top-0 z-[-2]" width={52} height={52} src={"/images/logo.png"} alt="" />
			<div className={`w-[2px] h-[2px] bg-black rounded-full absolute left-[21px] top-[37px] ${anim && 'rainPoint2'}`} />
			<div className={`w-[2px] h-[2px] bg-black rounded-full absolute left-[24px] top-[37px] ${anim && 'rainPoint1'}`} />
			<div className={`w-[2px] h-[2px] bg-black rounded-full absolute left-[28px] top-[37px] ${anim && 'rainPoint3'}`} />
		</div>
	)
}
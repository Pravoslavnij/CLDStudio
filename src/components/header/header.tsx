import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-gradient-to-b from-white from-0% to-100% via-white via-80% to-transparent h-[80px] z-10 w-full flex flex-row justify-center items-center">
			<div className="max-w-[1280px] w-full flex flex-row justify-between items-center">
				<div className="w-full h-fit">
					<Link href={'/'} className="text-black text-xl font-bold">Cloud Studio</Link>
				</div>
				<div className="w-[52px] min-w-[52px]">
					<Image width={52} height={52} src={"/images/logo.png"} alt="" />
				</div>
				<div className="h-fit w-full gap-[16px] flex flex-row justify-end">
					<Link href={"/"}>VK</Link>
					<Link href={"/"}>TELEGRAM</Link>
					<Link href={"/"}>INSTAGRAM</Link>
				</div>
			</div>
		</header>
	)
}
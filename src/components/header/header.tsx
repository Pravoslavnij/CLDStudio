import Image from "next/image";
import Link from "next/link";
import Logo from "../mainLogo/logo";

export default function Header() {
	return (
		<header className="bg-gradient-to-b from-white from-0% to-100% via-white via-80% to-transparent h-[80px] z-10 w-full flex flex-row justify-center items-center">
			<div className="max-w-[1280px] px-4 w-full flex flex-row justify-between items-center">
				<div className="w-full h-fit">
					<Link href={'/'} className="text-black text-base font-bold">Cloud Studio</Link>
				</div>
				<div className="w-[52px] min-w-[52px]">
					<Logo />
				</div>
				<div className="h-fit w-full gap-[16px] flex flex-row justify-end">
					<Link href={"https://vk.com"} className="text-xs">VK</Link>
					<Link href={"https://vk.com"} className="text-xs">TELEGRAM</Link>
					<Link href={"https://vk.com"} className="text-xs">INSTAGRAM</Link>
				</div>
			</div>
		</header>
	)
}
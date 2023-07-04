import Image from "next/image";
import Link from "next/link";
import Logo from "../mainLogo/logo";

export default function Header() {
	return (
		<header className="bg-gradient-to-b from-white from-0% to-100% via-white via-80% to-transparent h-[80px] z-10 w-full flex flex-row justify-center items-center">
			<div className="max-w-[1280px] px-4 w-full flex flex-row justify-between items-center">
				<div className="flex md:hidden w-full h-fit">
					<div className="h-[32px] aspect-square relative">
						<Image src={'/images/interface-essential-heart.svg'} alt="heart" fill style={{ objectFit: 'contain' }} />
					</div>
				</div>
				<div className="w-full h-fit hidden md:block">
					<Link href={'/'} className="text-black text-base font-bold">Cloud Studio</Link>
				</div>
				<div className="w-[52px] min-w-[52px]">
					<Logo />
				</div>
				<div className="h-fit w-full gap-[16px] flex-row justify-end hidden md:flex">
					<Link href={"https://vk.com"} className="text-xs relative before:h-[1px] hover:before:w-full before:bg-black before:content-[''] before:absolute before:-bottom-1">VK</Link>
					<Link href={"https://vk.com"} className="text-xs relative before:h-[1px] hover:before:w-full before:bg-black before:content-[''] before:absolute before:-bottom-1">TELEGRAM</Link>
					<Link href={"https://vk.com"} className="text-xs relative before:h-[1px] hover:before:w-full before:bg-black before:content-[''] before:absolute before:-bottom-1">INSTAGRAM</Link>
				</div>
				<div className="w-full flex md:hidden justify-end">
					<button className="">
						click!
					</button>
				</div>
			</div>
		</header>
	)
}
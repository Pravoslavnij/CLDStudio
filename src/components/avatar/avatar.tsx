import Image from "next/image"

export default function Avatar({ src, alt } = { src: '', alt: '' }) {

	return (
		<div className={`h-[200px] w-[200px] relative rounded-full flex justify-center items-center overflow-hidden`}>
			<Image src={src} fill alt={alt} sizes="200px" style={{
				objectFit: 'cover',
			}} />
		</div>
	)

}
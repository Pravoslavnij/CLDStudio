import classnames from "classnames"
import Image from "next/image"

export default function Avatar({ src, alt } = { src: '', alt: '' }) {

	return (
		<div className={classnames(`h-[200px] w-[200px] relative rounded-full flex justify-center items-center overflow-hidden`)}>
			<Image src={src} fill alt={alt} style={{
				objectFit: 'cover',
			}} />
		</div>
	)

}
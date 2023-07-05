import CloudLine from "../cloudLine/cloudLine";

export default function BG({ className }: { className?: string }) {
	return (
		<div className={`overflow-hidden w-full z-[-2] absolute top-0 bg-white flex justify-center h-full ${className}`}>
			<div className="bg-white flex blur-sm justify-center gap-[73px] translate-y-[-100px] left-0">
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />
				<CloudLine top />
				<CloudLine />

			</div>
		</div>
	)
}

import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="self-stretch h-[70px] bg-white justify-between items-center gap-2.5 inline-flex">
        <div className="justify-start items-center flex">
          <div className="text-black text-[12px] font-bold">Cloud Studio</div>
        </div>
        <div className="w-[70px] h-[70px] justify-center items-center flex">
          <img className="w-[52px] h-[52px]" src="/images/cloud-studio-logo.png" />
        </div>
        <div className="w-52 py-4 justify-center items-center gap-4 flex">
          <div className="text-black text-[12px] font-bold">VK</div>
          <div className="text-black text-[12px] font-bold">TELEGRAM</div>
          <div className="text-black text-[12px] font-bold">INSTAGRAM</div>
        </div>
      </div>
    </div>
  )
}

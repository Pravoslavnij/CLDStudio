import BG from '@/components/bg/bg';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <BG className='' />
      <Header />
      <div className='h-[800px] flex flex-row max-w-[1280px] w-full'>
        <div className='flex flex-row justify-between w-full'>
          <div>
            hello
          </div>

          <div>
            hey
          </div>

        </div>
      </div>
      <div className='bg-white h-[100px] w-full'>

      </div>
    </>
  )
}

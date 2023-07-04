import Avatar from '@/components/avatar/avatar';
import BG from '@/components/bg/bg';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <BG />
      <Header />
      <div className='h-fit flex max-w-[1280px] px-4 py-8 w-full '>
        <div className='flex flex-col justify-between w-full gap-8 lg:gap-[80px] 2xl:flex-row items-center'>
          <div className='flex flex-col gap-4 w-[70%]'>
            <h2 className='font-bold text-2xl'>
              Title
            </h2>
            <p className='text-xs'>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div>

          <div className={'flex justify-start gap-8 lg:gap-[80px]'}>
            <Avatar src={'/images/avatar1.jpg'} alt={'avatar'} />
            <Avatar src={'/images/avatar2.jpg'} alt={'avatar'} />
            <Avatar src={'/images/avatar3.jpg'} alt={'avatar'} />
          </div>

        </div>
      </div>
      <div className='h-[1000px] backdrop-invert w-full '>


      </div>

    </>
  )
}

import fullChair from '../assets/icons/fullChair.svg';
import freeChair from '../assets/icons/freeChair.svg';
import table from '../assets/icons/table.png';
const Table = ({ doubleChair = false, c1 = false, c2 = false, c3 = false, c4 = false, turn = false, className }) => {

  return (
    <>
      {!doubleChair ? <div className={'flex justify-center items-center p-1 ' + (turn ? ' rotate-90 ' : ' ') + className}>
        <div className='relative'>
          <img className='absolute -right-[45%]' src={c2 ? fullChair : freeChair} alt="Top left chair" />
          <img className='absolute top-[40%]  -right-[45%]' src={c1 ? fullChair : freeChair} alt="Top right chair" />
          <img className='opacity-0' src={freeChair} alt="container chair" />
        </div>
        <div className='mt-5 z-10'>
          <img width={40} src={table} alt="Table" />
        </div>
        <div className='relative'>
          <img className='absolute  -left-[45%]' src={c3 ? fullChair : freeChair} alt="Bottom left chair" style={{ transform: 'rotateY(180deg)' }} />
          <img className='absolute top-[40%] -left-[45%]' src={c4 ? fullChair : freeChair} alt="Bottom right chair" style={{ transform: 'rotateY(180deg)' }} />
          <img className='opacity-0' src={freeChair} alt="container chair" />
        </div>
      </div> :
        <div className={'flex justify-center items-center p-1 ' + (turn ? ' rotate-90 ' : ' ') + className}>
          <div>
            <img src={c1 ? fullChair : freeChair} alt="Top right chair" />
          </div>
          <div className='px-2'>
            <img className='h-14 mt-2' src={table} alt="Table" />
          </div>
          <div>
            <img src={c2 ? fullChair : freeChair} alt="Top left chair" style={{ transform: 'rotateY(180deg)' }} />
          </div>
        </div>
      }
    </>
  )
}

export default Table;
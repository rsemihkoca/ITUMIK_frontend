import fullChair from '../assets/icons/fullChair.png';
import freeChair from '../assets/icons/freeChair.svg';
import table from '../assets/icons/table.png';
import tableSmall from '../assets/icons/tableSmall.png';
const Table = ({ doubleChair = false, c1 = false, c2 = true, c3 = false, c4 = false, turn = false, className }) => {

  return (
    <>
      {!doubleChair ? <div className={'flex justify-center items-center p-1 ' + (turn ? ' rotate-90 ' : ' ') + className}>
        <div className='relative'>
          <img className='absolute -right-[25%]' src={c2 ? fullChair : freeChair} alt="Top left chair" />
          <img className='absolute top-[35%] -right-[25%]' src={c1 ? fullChair : freeChair} alt="Top right chair" />
          <img className='opacity-0' src={freeChair} alt="container chair" />
        </div>
        <div className='mt-5 z-10'>
          <img width={40} src={table} alt="Table" />
        </div>
        <div className='relative'>
          <img className='absolute  -left-[25%]' src={c3 ? fullChair : freeChair} alt="Bottom left chair" style={{ transform: 'rotateY(180deg)' }} />
          <img className='absolute top-[35%] -left-[25%]' src={c4 ? fullChair : freeChair} alt="Bottom right chair" style={{ transform: 'rotateY(180deg)' }} />
          <img className='opacity-0' src={freeChair} alt="container chair" />
        </div>
      </div> :
        <div className={'flex justify-center items-center p-1 ' + (turn ? ' rotate-90 ' : ' ') + className}>
          <div className='relative'>
            <img className='absolute  -right-[85%]' src={c1 ? fullChair : freeChair} alt="Top right chair" />
            <img className='opacity-0' src={freeChair} alt="container chair" />
          </div>
          <div className='px-2 z-20'>
            <img className='mt-2' src={tableSmall} alt="Table" />
          </div>
          <div className='relative'>
            <img className='absolute  -left-[45%]' src={c2 ? fullChair : freeChair} alt="Top left chair" style={{ transform: 'rotateY(180deg)' }} />
            <img className='opacity-0' src={freeChair} alt="container chair" />
          </div>
        </div>
      }
    </>
  )
}

export default Table;
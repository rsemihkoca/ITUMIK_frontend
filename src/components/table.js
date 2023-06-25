import fullChair from '../assets/icons/fullChair.svg';
import freeChair from '../assets/icons/freeChair.svg';
import table from '../assets/icons/table.svg';
const Table = ({ doubleChair = false, c1 = false, c2 = false, c3 = false, c4 = false, turn = false, className }) => {

  return (
    <>
      {!doubleChair ? <div className={'flex justify-center items-center p-1 ' + (turn ? ' rotate-90 ' : ' ') + className}>
        <div>
          <img src={c2 ? fullChair : freeChair} alt="Top left chair" className='rotate-180' />
          <img src={c1 ? fullChair : freeChair} alt="Top right chair" className='rotate-180' />
        </div>
        <div>
          <img width={35} src={table} alt="Table" />
        </div>
        <div>
          <img src={c3 ? fullChair : freeChair} alt="Bottom left chair" />
          <img src={c4 ? fullChair : freeChair} alt="Bottom right chair" />
        </div>
      </div> :
        <div className={'flex justify-center items-center p-1 ' + (turn ? ' rotate-90 ' : ' ') + className}>
          <div>
            <img src={c1 ? fullChair : freeChair} alt="Top right chair" className='rotate-180' />
          </div>
          <div className='px-2'>
            <img className='rotate-90' width={22} src={table} alt="Table" />
          </div>
          <div>
            <img src={c2 ? fullChair : freeChair} alt="Top left chair" className='' />
          </div>
        </div>
      }
    </>
  )
}

export default Table;
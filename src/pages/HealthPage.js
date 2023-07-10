import { useParams } from "react-router-dom"
import FloorHealth from "../components/FloorHealth"
import { useEffect, useState } from "react"

export const HealthPage = () => {

  const params = useParams()
  const [health, setHealth] = useState()
  useEffect(() => {
    setHealth(Number(params.id));
  }, [params.id]);
  const [working, setWorking] = useState(true);

  let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



  return (
    <FloorHealth>
      {health != null &&
        <div className="h-full px-4 flex flex-col py-4 mx-auto max-w-[500px]">
          <div class="py-2 px-2 text-white font-bold text-xl sm:text-2xl max-w-[500px]">
            <div className="h-full px-4 flex py-4">
              <span className="flex-1">Camera ID</span>
              <span className="flex-1">Status</span>
            </div>
          </div>
          {data.map((data, index) => {
            return (<div class="py-2 px-2 text-white font-semibold">
              <div className="h-full px-4 flex max-w-[700px] py-4 sm:bg-white/[0.2] rounded-2xl">
                <span className="flex-1">Camera {data}</span>
                <div className="flex-1">
                  <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                </div>
              </div>
            </div>)
          })}
        </div>
      }
    </FloorHealth>
  )

}


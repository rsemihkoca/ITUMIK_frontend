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

  return(
      <FloorHealth>
          {health != null &&
            <div className="h-full px-4 grid grid-rows-6 grid-flow-col py-4 max-w-[500px]">
                <ul>
                    <li class="py-2 px-2 text-white font-bold text-xl sm:text-2xl max-w-[500px]">
                        <div className="h-full px-4 flex py-4">
                            <span className="flex-1">Camera ID</span>
                            <span className="flex-1">Status</span>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 1</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 2</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 3</span>
                            <div className="flex-1">
                                <span style={{ color: !working ? 'green' : 'red' }}>{!working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 4</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 5</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 6</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 7</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 8</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 9</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 10</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 11</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 12</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 13</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 14</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 15</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                    <li class="py-2 px-2 text-white font-semibold">
                        <div className="h-full px-4 flex max-w-[500px] py-4 sm:bg-white/[0.2] rounded-2xl">
                            <span className="flex-1">Camera 16</span>
                            <div className="flex-1">
                                <span style={{ color: working ? 'green' : 'red' }}>{working ? 'Working' : 'Not Working'}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          }
      </FloorHealth>
  )

}


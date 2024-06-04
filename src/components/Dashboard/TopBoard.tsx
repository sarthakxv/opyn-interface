import Image from "next/image";
import Card from "./Card";
import Stats from "./Stats";
import { groups, onlineUsers, people, tournament } from "./utils/data";

const TopBoard = () => {
  return (
    <div className="flex flex-col gap-6 px-12 py-[45px]">
      <ul
        role="list"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {/* Fox Image */}
        <div className="col-span-1">
          <Image
            className="profile fox"
            src="/images/profile-fox.svg"
            alt="fox"
            width={377}
            height={390}
          />
        </div>
        {/* Claim dragon and XP Stats */}
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-none grid-cols-none lg:grid-cols-3 gap-4 min-h-full">
            <div className="col-span-1 relative lg:col-span-2 bg-cover bg-dragon-stats rounded-3xl">
              <div className="absolute mx-auto left-0 right-0 bottom-6 w-full px-2 max-w-[497px]">
                <div className="w-full inline-flex justify-between items-center rounded-full p-[2px] bg-[#1C2433D9]/85 border border-[#1C243303]/[0.01]">
                  <button className="bg-claim-btn hover:scale-105 hover:shadow-xl active:scale-100 transition-transform text-white px-10 py-[19px] rounded-full font-semibold text-2xl leading-7">
                    Claim
                  </button>
                  <span className="font-semibold hidden leading-6 text-sm text-[#6B7197]">
                    Don&apos;t Miss
                  </span>
                  <div className="flex flex-row items-center gap-2 font-bold text-xl leading-6">
                    <div className="relative">
                      <Image
                        src="/images/Progress-circular.svg"
                        alt="progress"
                        height={64}
                        width={64}
                      />
                      <span className="absolute inset-0 top-1 flex text-base items-center justify-center">
                        15
                      </span>
                    </div>
                    <span>:</span>
                    <div className="relative">
                      <Image
                        src="/images/Progress-circular.svg"
                        alt="progress"
                        height={64}
                        width={64}
                      />
                      <span className="absolute inset-0 top-1 flex text-base items-center justify-center">
                        24
                      </span>
                    </div>
                    <span>:</span>
                    <div className="relative">
                      <Image
                        src="/images/Progress-circular.svg"
                        alt="progress"
                        height={64}
                        width={64}
                      />
                      <span className="absolute inset-0 top-1 flex text-base items-center justify-center">
                        55
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="col-span-1 flex flex-col items-center gap-6">
              <Stats
                title="Community XP"
                xp="2500"
                image="/images/CommunityXP.svg"
              />
              <Stats title="DeFi XP" xp="2500" image="/images/DefiXP.svg" />
              <Stats title="Social XP" xp="2500" image="/images/SocialXP.svg" />
            </div>
          </div>
        </div>
        {/* Your Progress */}
        <div className="col-span-1">
          <Card className="flex flex-col justify-between pt-4 pb-9 px-8">
            <header>
              <h5 className="text-xs leading-5 uppercase">Your Progress</h5>
              <h2 className="font-bold text-2xl leading-[46px]">
                In the <span className="">Game</span>
              </h2>
            </header>
            <div className="flex flex-col">
              <p className="inline-flex items-center justify-between w-full">
                <span className="font-semibold text-base leading-[17.63px]">
                  Total XP
                </span>
                <span className="font-normal text-sm leading-4">
                  120 out of 500
                </span>
              </p>
              <div className="-ml-2">
                <Image
                  src="/images/Progress.svg"
                  width={350}
                  height={12}
                  alt="progress bar"
                />
              </div>
              <div className="inline-flex items-center mt-1 justify-between w-full">
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/70 rounded-full" />
                <div className="w-1 h-1 bg-white/70 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="inline-flex items-center justify-between w-full">
                <span className="font-semibold text-base leading-[17.63px]">
                  Task Completed
                </span>
                <span className="font-normal text-sm leading-4">
                  10 out of 26
                </span>
              </p>
              <div className="-ml-2">
                <Image
                  src="/images/Progress.svg"
                  width={350}
                  height={12}
                  alt="progress bar"
                />
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/70 rounded-full" />
                <div className="w-1 h-1 bg-white/70 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="inline-flex items-center justify-between w-full">
                <span className="font-semibold text-base leading-[17.63px]">
                  Task Completed
                </span>
                <span className="font-normal text-sm leading-4">
                  30 out of 54
                </span>
              </p>
              <div className="-ml-2">
                <Image
                  src="/images/Progress.svg"
                  width={350}
                  height={12}
                  alt="progress bar"
                />
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/100 rounded-full" />
                <div className="w-1 h-1 bg-white/70 rounded-full" />
                <div className="w-1 h-1 bg-white/70 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </Card>
        </div>
      </ul>
      <ul
        role="list"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Fox Image */}
        <div className="col-span-1 max-w-[377px]">
          <Card className="flex flex-col justify-between px-9 py-10">
            <div aria-label="online-section" className="mb-6">
              <h3 className="inline-flex mb-9 gap-[6px] items-center text-left">
                <span className="text-[#62646C] uppercase">Online</span>
                <span className="h-2 w-2 bg-[#6BCB47] rounded-full" />
                <span className="ml-[1px]">3</span>
              </h3>
              <div className="flex flex-col gap-5 w-full">
                {onlineUsers.map((user, index) => (
                  <div
                    key={user.name}
                    className="inline-flex items-center justify-between gap-7"
                  >
                    <Image
                      alt={user.name}
                      height={52}
                      width={52}
                      src={user.profile}
                    />
                    <span className="w-full font-medium text-base leading-[18px]">
                      {user.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div aria-label="group-section">
              <h3 className="inline-flex mb-9 gap-[6px] items-center text-left">
                <span className="text-[#62646C] uppercase">Group</span>
                <span className="h-2 w-2 bg-[#6BCB47] rounded-full" />
                <span className="ml-[1px]">3</span>
              </h3>
              <div className="flex flex-col gap-11 w-full">
                {groups.map((group, index) => (
                  <div
                    key={group.name}
                    className="inline-flex items-center gap-6 overflow-hidden"
                  >
                    <div className="flex -space-x-[10px]">
                      {group.users.map((user, index) => (
                        <Image
                          key={index}
                          width={24}
                          height={24}
                          className="inline-block rounded-full"
                          src={user}
                          alt=""
                        />
                      ))}
                      <span className="h-6 flex justify-center w-6 bg-gray-500 rounded-full text-[8px] font-medium">
                        +{group.more}
                      </span>
                    </div>
                    <span className="font-medium text-base leading-[18px]">
                      {group.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        {/* Level and Last Winners */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Level */}
          <Card className="inline-flex items-start sm:items-end gap-6 py-7 px-6">
            <div className="ring-1 hidden sm:block ring-white rounded-full overflow-hidden">
              <Image
                src="/images/profile-fox.svg"
                alt="profile-fox"
                className="ring-1"
                width={96}
                height={96}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-2xl leading-7">Devon Lane</h4>
              <div className="relative mt-5 sm:mt-0">
                <Image
                  src="images/progress_bar_longer.svg"
                  width={660}
                  height={80}
                  alt="level progress bar"
                />
                <p className="absolute -top-3 sm:top-3 px-2 w-full inline-flex justify-between font-normal text-xl leading-5 text-[#D9D9D9]">
                  <span>0</span>
                  <span>100</span>
                </p>
                <div className="inline-flex justify-between w-full bottom-3 text-sm leading-4 font-normal">
                  <p>
                    <span className="text-[#454C60] mr-1">Current:</span>
                    Level 1
                  </p>
                  <p>
                    <span className="text-[#454C60] mr-1">Next:</span>
                    1500 XP more
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col items-center pl-7 pr-9 py-9">
            <header className="text-left w-full">Last Winner</header>
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="sr-only">
                      Serial Number
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left sm:pl-0 font-light text-xs leading-3 text-[#75777B]"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sr-only sm:not-sr-only px-3 py-3.5 text-left font-light text-xs leading-3 text-[#75777B]"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-light text-xs leading-3 text-[#75777B]"
                    >
                      Players
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 font-medium text-sm leading-[15px] text-[#CACCCE]">
                  {people.map((person, index) => (
                    <tr key={person.name}>
                      <td className="sr-only sm:not-sr-only whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                        {index + 1}.
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                        {person.name}
                      </td>
                      <td className="sr-only sm:not-sr-only whitespace-nowrap px-3 py-4 text-sm text-[#75777B]">
                        {person.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#75777B]">
                        {person.players}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        {/* Tournaments Table */}
        <div className="col-span-1 flex flex-col gap-6">
          <Card className="flex flex-col items-center p-9">
            <header className="inline-flex text-left w-full justify-between pr-2">
              <span className="font-semibold text-[#DADADA] text-base leading-[18px]">
                Tournaments
              </span>
              <span className="font-light text-[13px] text-[#75777B]">
                Points
              </span>
            </header>
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-700">
                <tbody className="divide-y divide-gray-800 font-medium text-sm leading-[15px] text-[#CACCCE]">
                  {tournament.map((person, index) => (
                    <tr key={person.name}>
                      <td className="whitespace-nowrap py-3 pl-2 pr-2 text-sm font-medium sm:pl-0">
                        {index + 1}.
                      </td>
                      <td className="whitespace-nowrap py-3 pl-2 pr-2 text-sm font-medium sm:pl-0">
                        <Image
                          src={person.profile}
                          alt="profile"
                          height={23}
                          width={23}
                        />
                      </td>
                      <td className="whitespace-nowrap py-3 pl-2 pr-2 text-sm font-medium sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 text-right py-2 text-sm text-[#75777B]">
                        {person.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </ul>
    </div>
  );
};

export default TopBoard;

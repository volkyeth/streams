'use client'

import Link from 'next/link'
import { useContractReads, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { streamABI } from '../const/streamAbi'
import { Log } from '../const/types'
import useGetName from '../hooks/useGetName'

function formatDate(d: Date): string {
   return d.toLocaleDateString(undefined, {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
   })
}

export default function StreamRow({ user, log }: { user: boolean; log: Log }) {
   const {
      stream,
      recipient,
      token,
      tokenAmount,
      propID,
      propdateCount,
      propdateCompleted,
   } = log
   const { data } = useContractReads({
      contracts: [
         {
            abi: streamABI,
            address: stream,
            functionName: 'remainingBalance',
         },
         {
            abi: streamABI,
            address: stream,
            functionName: 'recipientActiveBalance',
         },
      ],
   })
   const { name, guarantee, isLoading } = useGetName(recipient)
   const withdrawable = data ? data[1].result : undefined
   const { config } = usePrepareContractWrite({
      address: log.stream,
      abi: streamABI,
      functionName: 'withdrawFromActiveBalance',
      args: [withdrawable!],
   })

   const { write, data: writeData, isSuccess } = useContractWrite(config)

   const streamAmount = tokenAmount / 10 ** (token == 'USDC' ? 6 : 18)
   const withdrawableFormatted = !withdrawable
      ? 0
      : (Number(withdrawable) / 10 ** (token == 'USDC' ? 6 : 18)).toFixed(2)
   let timePct = log.cancellationTime
      ? (log.cancellationTime - log.startTime) / (log.stopTime - log.startTime)
      : (new Date().getTime() / 1000 - log.startTime) / (log.stopTime - log.startTime)
   let otherPString =
      timePct < 0
         ? `0% \xa0`
         : timePct >= 0.994
         ? `100%`
         : Number((timePct * 100).toFixed(0)) < 10
         ? `${(timePct * 100).toFixed(0)}% \xa0`
         : `${(timePct * 100).toFixed(0)}% `

   if (log.propID === 711) {
      console.log(timePct)
   }

   otherPString += `\xa0`
   for (let i = 0; i < 10; i++) {
      otherPString += i < timePct * 10 - 1 ? '▓' : '░'
   }
   const months = Math.floor((log.stopTime - log.startTime) / (60 * 60 * 24 * 30))

   return (
      <div className='flex flex-row gap-x-2 items-center text-sm'>
         <Link
            className='w-12 hover:underline'
            href={`https://www.nouns.camp/proposals/${propID}`}
            target='_blank'
         >
            {propID}
         </Link>
         {!user && (
            <Link
               className='w-48 hover:underline text-gray-500'
               href={`https://etherscan.io/address/${recipient}`}
               target='_blank'
            >
               {isLoading ? guarantee : name}
            </Link>
         )}
         <Link
            className='w-64 hover:underline text-gray-500'
            href={`https://etherscan.io/address/${stream}`}
            target='_blank'
         >
            {`${streamAmount.toLocaleString('en-US')} ${token} (${Math.min(
               Math.floor(streamAmount / months),
               streamAmount
            ).toLocaleString('en-US')}/mo)`}
         </Link>
         <div className='w-64'>
            {formatDate(new Date(log.startTime * 1000))}-
            {formatDate(new Date(log.stopTime * 1000))} ({months} mo)
         </div>
         <div
            className='w-44 hidden lg:block data-[cancelled=true]:text-red-500'
            data-cancelled={log.cancellationTime !== undefined}
         >
            {otherPString}
         </div>
         <div className='w-24 flex flex-row gap-x-1'>
            <Link
               href={`https://updates.wtf/prop/${propID}`}
               target='_blank'
               className='hover:underline text-gray-500'
            >
               {`${propdateCount || 0}`}
            </Link>
            <div> {propdateCompleted ? '✅' : '⏳'}</div>
         </div>
         {user && (
            <button
               className={`text-sm text-gray-800 rounded border border-gray-300 px-3 py-1 shadow-sm hover:shadow hover:bg-gray-50 bg-white
                           ease-in-out transition-all active:mt-[2px] active:mb-[-2px]`}
               onClick={write}
               type='button'
            >
               {`Withdraw  Available (${withdrawableFormatted} ${token})`}
            </button>
         )}
         {isSuccess && (
            <div className='rounded py-1 px-2 border border-green-400 bg-green-200 text-green-700'>
               Withdrawn!{' '}
               <Link
                  className='underline'
                  target='_blank'
                  href={`https://etherscan.io/tx/${writeData?.hash}`}
               >
                  Receipt
               </Link>
            </div>
         )}
      </div>
   )
}

/*
1. You just need to pass the amount oSQTH user wants to mint
2. For _vaultId and `_uniNftId` parameter you can pass 0.
 */

import { ChangeEvent, useState } from "react";
import { Button, Checkbox, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { HiCheck } from "react-icons/hi2";
import {
  BaseError,
  useAccount,
  usePublicClient,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Account, Address } from "viem";
import Connect from "@components/Header/Connect";
import { shortHelperABI } from "@utils/abis/shortHelper";
import {
  THIRTY_MINUTES_IN_MS,
  wethAddress,
  wPowerPerpAddress,
} from "@utils/constants";
import BigNumber from "bignumber.js";

enum Position {
  Open = "Open",
  Close = "Close",
}

const ShortTrade = () => {
  const [positionType, setPositionType] = useState(Position.Open); // immutable for now
  const [amount, setAmount] = useState<string>("0"); // amount in input
  const [amountNum, setAmountNum] = useState<number>(0); // amount in number
  const [collateral, setCollateral] = useState<string>("225");

  // Hooks
  const { isConnected, address } = useAccount();
  const client = usePublicClient();
  const {
    data: hash,
    error,
    isPending,
    writeContract: openShortAsync,
  } = useWriteContract();
  const { isLoading: isTxnLoading, isSuccess: isTxnSuccess } =
    useWaitForTransactionReceipt({
      hash,
    });

  // default values
  const shortHelperContractAddress = process.env
    .NEXT_PUBLIC_SHORT_HELPER_CONTRACT_ADDRESS as Address;
  const vaultId = 0;
  const uniNftId = 0;

  const amountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const _amount = event.target.value;
    const amountNum = isNaN(parseFloat(_amount)) ? 0 : parseFloat(_amount);
    setAmount(event.target.value);
    setAmountNum(amountNum);
  };

  const handleExecution = async () => {
    // Fetch latest block's timestamp
    const block = await client?.getBlock();
    const blocktimestamp =
      Number(block?.timestamp.toString() + "000") + THIRTY_MINUTES_IN_MS;

    console.log("blocktimestamp", blocktimestamp);

    const exactInputParams = {
      tokenIn: wPowerPerpAddress as `0x${string}`, // wPowerPerp address
      tokenOut: wethAddress as `0x${string}`, // WETH address
      fee: 3000,
      recipient: address as `0x${string}`, // Receiver
      deadline: BigInt(blocktimestamp), // Deadline timestamp
      amountIn: BigInt(1000), // amount of wPowerPerp to sell
      amountOutMinimum: BigInt(0), // minimum wETH to receive
      sqrtPriceLimitX96: BigInt(0),
    };

    console.log("exactInputParams", exactInputParams);

    openShortAsync({
      address: shortHelperContractAddress,
      abi: shortHelperABI,
      functionName: "openShort",
      args: [
        BigInt(vaultId),
        BigInt(amount),
        BigInt(uniNftId),
        exactInputParams,
      ],
    });
  };

  return (
    <div className="flex flex-col gap-5 bg-white p-6 rounded-lg border max-w-sm mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-base/6 font-medium">Position</h2>
        <div className="border gap-2 p-1 flex flex-row w-full rounded">
          <Button
            disabled={false}
            className={clsx(
              "px-6 w-1/2 py-2 rounded",
              positionType == Position.Open && "bg-green-200"
            )}
          >
            {Position.Open}
          </Button>
          <Button
            disabled={true}
            className={clsx(
              "px-6 w-1/2 py-2 rounded",
              positionType == Position.Close && "bg-red-200"
            )}
          >
            {Position.Close}
          </Button>
        </div>
      </div>
      <Field className="flex flex-col gap-2">
        <Label className="text-base/6 font-medium">
          Use ETH collateral to mint & sell oSQTH
        </Label>
        <Input
          type="number"
          value={amount}
          onChange={amountHandler}
          className={clsx(
            "block w-full rounded-lg border py-1.5 px-3 text-base/6",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-500/25"
          )}
        />
      </Field>
      <Field className="flex flex-col gap-2">
        <Label className="text-base/6 font-medium">Collateral Ratio</Label>
        <div className="w-full inline-flex items-center justify-between">
          <div className="inline-flex gap-1">
            <span>Default</span>
            <Checkbox
              checked={true}
              onChange={() => {}}
              className="group size-6 border rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
            >
              <HiCheck className="hidden size-4 fill-black group-data-[checked]:block" />
            </Checkbox>
          </div>
          <Input
            type="number"
            placeholder="Enter collateral"
            value={collateral}
            disabled={true}
            className={clsx(
              "block w-1/2 rounded-lg border py-1.5 px-3 text-base/6",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-500/25"
            )}
          />
        </div>
      </Field>
      <div className="inline-flex justify-center">
        {/* Showing Connect Button if disconnected */}
        {isConnected ? (
          <Button
            type="submit"
            className="border rounded px-2 min-w-full py-2 font-semibold bg-blue-500 text-white hover:shadow-md hover:scale-[1.02] active:scale-100 transition-transform"
            disabled={isTxnLoading || isPending}
            onClick={handleExecution}
          >
            Deposit and Sell
          </Button>
        ) : (
          <Connect />
        )}
      </div>
      {isTxnSuccess && (
        <p className="px-4 py-2 rounded-full text-white bg-green-500">
          Transaction Succeed!
        </p>
      )}
      {isPending ? (
        <p>Waiting for confirmation...</p>
      ) : isTxnLoading ? (
        <p>Transaction loading...</p>
      ) : (
        isTxnSuccess && (
          <p className="px-4 py-2 rounded-full text-white bg-green-500">
            Transaction Succeed!
          </p>
        )
      )}
      {hash && (
        <div className="rounded-md border border-green-600 p-4">
          <p className="pb-1 text-base font-medium leading-none">Executing</p>
          <p className="text-sm text-muted-foreground">
            Transaction Hash: {hash}
          </p>
        </div>
      )}
      {error && (
        <div className="rounded-md border border-red-600 p-4">
          <p className="pb-1 text-base font-medium leading-none">Error</p>
          <p className="truncate text-wrap text-sm text-muted-foreground hover:text-clip">
            Error: {(error as BaseError).shortMessage || error.message}
          </p>
        </div>
      )}
      {error && <p>Error: Transaction Failed</p>}
    </div>
  );
};

export default ShortTrade;

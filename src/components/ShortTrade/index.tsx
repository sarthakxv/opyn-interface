"use client";
/*
1. You just need to pass the amount oSQTH user wants to mint
2. For _vaultId and `_uniNftId` parameter you can pass 0.
 */

import { ChangeEvent, useMemo, useState } from "react";
import { Button, Checkbox, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { HiCheck } from "react-icons/hi2";
import {
  BaseError,
  useAccount,
  usePublicClient,
  useWaitForTransactionReceipt,
  useWriteContract,
  useSimulateContract,
} from "wagmi";
import { Account, Address, parseUnits } from "viem";
import Connect from "@components/Header/Connect";
import { shortHelperABI } from "@utils/abis/shortHelper";
import {
  NORMALIZATION_FACTOR,
  OSQUEETH_DECIMALS,
  shortHelperContractAddress,
  THIRTY_MINUTES_IN_MS,
  UNI_POOL_FEES,
  wethAddress,
  wPowerPerpAddress,
} from "@utils/constants";
import BigNumber from "bignumber.js";
import { fromTokenAmount } from "@utils/helpers";

enum TradeChoice {
  Long = "Long",
  Short = "Short",
}

enum Position {
  Open = "Open",
  Close = "Close",
}

const ShortTrade = () => {
  const [positionType, setPositionType] = useState(Position.Open); // immutable for now
  const [tradeChoice, setTradeChoice] = useState(TradeChoice.Short); // immutable for now
  const [sqthTradeAmount, setSqthTradeAmount] = useState<string>("0"); // amount in input
  const [ethTradeAmount, setEthTradeAmount] = useState("0"); // ETH Trade Amount
  const [collateralRatio, setCollateralRatio] = useState<string>("225");

  // SQTH
  const amount = useMemo(
    () => parseUnits(sqthTradeAmount, 18),
    [sqthTradeAmount]
  );
  // ETH
  const collateral = useMemo(
    () => parseUnits(ethTradeAmount, 18),
    [ethTradeAmount]
  );

  // default values
  // const shortHelperContractAddress = process.env
  //   .NEXT_PUBLIC_SHORT_HELPER_CONTRACT_ADDRESS as Address;
  const vaultId = 0;
  const uniNftId = 0;

  const collatHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEthTradeAmount(event.target.value);
  };

  // Hooks
  const { isConnected, address } = useAccount();

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

  const handleOpenShort = async () => {
    if (!address) return;

    // OSQUEETH Amount
    const _amount = amount;
    // wETH Collateral Amount
    const ethAmt = collateral;

    // const exactInputParams = {
    //   tokenIn: wPowerPerpAddress as `0x${string}`, // wPowerPerp address
    //   tokenOut: wethAddress as `0x${string}`, // wETH address
    //   fee: UNI_POOL_FEES,
    //   recipient: address as `0x${string}`, // Receiver
    //   // deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20), // Deadline timestamp
    //   deadline: Math.floor(Date.now() / 1000 + 86400), // uint256
    //   amountIn: parseUnits(amount, 18), // amount of wPowerPerp to sell
    //   amountOutMinimum: parseUnits("0", 18), // minimum wETH to receive
    //   sqrtPriceLimitX96: BigInt(0),
    // };

    const exactInputParams = {
      tokenIn: wPowerPerpAddress as `0x${string}`,
      tokenOut: wethAddress as `0x${string}`,
      fee: UNI_POOL_FEES,
      recipient: address,
      deadline: BigInt(Math.floor(Date.now() / 1000 + 86400)), // uint256
      amountIn: amount,
      amountOutMinimum: BigInt(0),
      sqrtPriceLimitX96: BigInt(0),
    };

    console.log("params", [
      BigInt(vaultId), // default 0
      _amount, // Input Amount of wPowerPerp
      BigInt(uniNftId), // default 0
      exactInputParams,
    ]);

    try {
      await openShortAsync?.({
        abi: shortHelperABI,
        address: shortHelperContractAddress,
        functionName: "openShort",
        args: [
          BigInt(vaultId), // _vaultId
          amount, // _powerPerpAmount
          0 as any, // _uniNftId
          exactInputParams,
        ],
        value: ethAmt,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full max-w-sm mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-base/6 font-medium">Trade</h2>
        <div className="border gap-2 p-1 flex flex-row w-full rounded">
          <Button
            disabled={true}
            className={clsx(
              "px-6 w-1/2 py-2 rounded",
              tradeChoice == TradeChoice.Long && "bg-green-200"
            )}
          >
            {TradeChoice.Long}
          </Button>
          <Button
            disabled={false}
            className={clsx(
              "px-6 w-1/2 py-2 rounded",
              tradeChoice == TradeChoice.Short && "bg-red-200"
            )}
          >
            {TradeChoice.Short}
          </Button>
        </div>
      </div>
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
          value={ethTradeAmount}
          onChange={collatHandler}
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
            value={collateralRatio}
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
            onClick={handleOpenShort}
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
        <p className="p-2 bg-red-50">
          {(error as BaseError).shortMessage || error.message}
        </p>
      )}
    </div>
  );
};

export default ShortTrade;
